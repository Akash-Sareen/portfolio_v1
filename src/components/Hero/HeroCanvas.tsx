import { useEffect, useRef, useCallback } from 'react';
import { prepareWithSegments, layoutNextLine } from '@chenglou/pretext';
import type { PreparedTextWithSegments, LayoutCursor } from '@chenglou/pretext';
import { javaContent } from './javaContent';
import { tokenizeJava, colorForKind } from './syntaxTokens';

const FONT = '14px "DM Mono", monospace';
const LINE_H = 32;
const PAD_H = 48;

// type Orb = { 
//   x: number; 
//   y: number; 
//   r: number; 
//   vx: number; 
//   vy: number;
//   color: 'cyan' | 'amber';
// };

export function HeroCanvas() {
  const cvRef = useRef<HTMLCanvasElement>(null);
  const preparedRef = useRef<PreparedTextWithSegments | null>(null);
  const typedCountRef = useRef(0);
  const waitFramesRef = useRef(0); // For pause at end
  const rafRef = useRef<number>(0);
  // const nameZoneRef = useRef({ left: 0, top: 0, right: 0, bottom: 0 });

  const setup = useCallback(() => {
    const cv = cvRef.current;
    if (!cv) return;
    const W = cv.clientWidth;
    const H = cv.clientHeight;
    cv.width = W;
    cv.height = H;

    // Prepare once - expensive canvas measurement, cached
    if (!preparedRef.current) {
      preparedRef.current = prepareWithSegments(javaContent, FONT);
    }
  }, []);

  useEffect(() => {
    setup();
    window.addEventListener('resize', setup);

    const cv = cvRef.current!;
    const ctx = cv.getContext('2d', { alpha: false })!;

    function carveSlots(lineLeft: number, lineRight: number, blocked: { left: number, right: number }[]) {
      let slots = [{ left: lineLeft, right: lineRight }];
      for (const b of blocked) {
        slots = slots.flatMap(seg => {
          if (b.right <= seg.left || b.left >= seg.right) return [seg];
          const out: typeof slots = [];
          if (b.left > seg.left) out.push({ left: seg.left, right: b.left });
          if (b.right < seg.right) out.push({ left: b.right, right: seg.right });
          return out;
        });
      }
      return slots.filter(s => s.right - s.left > 15); // Tighter for mobile
    }

    // Split content into lines to preserve IDE-like formatting
    const sourceLines = javaContent.split('\n');
    const preparedLines = sourceLines.map(l => prepareWithSegments(l || ' ', FONT));
    const totalContentLength = javaContent.length;

    function frame() {
      const W = cv.width, H = cv.height;
      const midX = W / 2;
      const midY = H / 2;

      // Typing increment logic
      if (typedCountRef.current < totalContentLength) {
        typedCountRef.current += 5.5; // Fast typing
      } else {
        // Pause at the end
        waitFramesRef.current++;
        if (waitFramesRef.current > 180) { // ~3 seconds pause
          typedCountRef.current = 0;
          waitFramesRef.current = 0;
        }
      }

      // Background
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, W, H);

      ctx.font = FONT;
      ctx.textBaseline = 'alphabetic';

      // Make code look background (subtle)
      ctx.globalAlpha = 0.35;

      let y = 32; // Start right from the top (behind navbar)
      let totalCharsTyped = 0;
      let lineIdx = 0;

      // Calculate font-based sizes for precise line-by-line exclusion
      const baseFontSize = Math.min(Math.max(W * 0.14, 48), 160);

      // Precise dimensions for each part of the centered text
      // On small screens, we use a larger percentage of width for exclusion
      const tagW = W < 768 ? W * 0.95 : 420;
      const nameLineW = W < 768 ? W * 0.9 : baseFontSize * 3.6;
      const tagH = W < 768 ? 24 : 32;
      const nameLineH = baseFontSize * 0.78;
      const gap = W < 768 ? 16 : 24;

      const totalContentH = tagH + gap + (nameLineH * 2);
      const startContentY = midY - totalContentH / 2;

      while (y < H - 20 && totalCharsTyped < typedCountRef.current) {
        const lineTop = y - LINE_H, lineBot = y + 8;
        const blocked: { left: number, right: number }[] = [];

        // 1. Tagline exclusion zone
        const tTop = startContentY;
        const tBot = tTop + tagH;
        if (lineBot > tTop && lineTop < tBot) {
          blocked.push({ left: midX - tagW / 2, right: midX + tagW / 2 });
        }

        // 2. Name Line 1 exclusion (AKASH)
        const n1Top = tBot + gap;
        const n1Bot = n1Top + nameLineH;
        if (lineBot > n1Top && lineTop < n1Bot) {
          blocked.push({ left: midX - nameLineW / 2, right: midX + nameLineW / 2 });
        }

        // 3. Name Line 2 exclusion (SAREEN)
        const n2Top = n1Bot;
        const n2Bot = n2Top + nameLineH;
        if (lineBot > n2Top && lineTop < n2Bot) {
          blocked.push({ left: midX - nameLineW / 2, right: midX + nameLineW / 2 });
        }

        const currentPad = W < 768 ? 16 : PAD_H;
        const slots = carveSlots(currentPad, W - currentPad, blocked);
        const prepared = preparedLines[lineIdx];

        // Process each line through pretext's layout system
        let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 };

        for (const slot of slots) {
          const slotW = slot.right - slot.left;
          const layout = layoutNextLine(prepared, cursor, slotW);

          if (!layout || layout.text.trim() === '') continue;

          const globalTypedAtStartOfSlot = totalCharsTyped;
          const charsAvailableToType = Math.max(0, Math.floor(typedCountRef.current - globalTypedAtStartOfSlot));

          if (charsAvailableToType > 0) {
            const textToDraw = layout.text.slice(0, charsAvailableToType);
            const tokens = tokenizeJava(textToDraw);
            let tx = slot.left;

            for (const tok of tokens) {
              ctx.fillStyle = colorForKind(tok.kind);
              ctx.fillText(tok.text, tx, y + LINE_H * 0.3);
              tx += ctx.measureText(tok.text).width;
            }
          }

          totalCharsTyped += layout.text.length;
          cursor = layout.end;

          if (totalCharsTyped >= typedCountRef.current) break;
        }

        totalCharsTyped += 1; // Newline
        y += LINE_H;
        lineIdx++;

        if (lineIdx >= preparedLines.length && y < H - 20) {
          lineIdx = 0;
        }
      }

      ctx.globalAlpha = 1.0; // Reset for other elements if any

      // Bottom Fade
      const fade = ctx.createLinearGradient(0, H - 120, 0, H);
      fade.addColorStop(0, 'rgba(5,5,8,0)');
      fade.addColorStop(1, 'rgba(5,5,8,0.98)');
      ctx.fillStyle = fade;
      ctx.fillRect(0, H - 120, W, 120);

      rafRef.current = requestAnimationFrame(frame);
    }

    rafRef.current = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', setup);
    };
  }, [setup]);

  return (
    <canvas
      ref={cvRef}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  );
}
