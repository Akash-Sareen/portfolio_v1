import { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import emailjs from '@emailjs/browser';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './Contact.module.css';

// Replace these with your EmailJS credentials
const SERVICE_ID = 'service_70r1j2r';
const TEMPLATE_ID = 'template_dkl8lfb';
const AUTO_REPLY_TEMPLATE_ID = 'template_dd5yuie';
const PUBLIC_KEY = 'oFNooVt0grxZcLN8b';

/*
 * EmailJS Setup:
 * 1. Create account at https://emailjs.com
 * 2. Add an Email Service (Gmail recommended) → copy Service ID
 * 3. Create a Template with variables: {{from_name}}, {{from_email}}, {{company}}, {{message}}
 * 4. Copy Template ID and your Public Key from Account > API Keys
 * 5. Replace the constants above
 */

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef(0);
  const isVisible = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState<Status>('idle');
  const [typedMsg, setTypedMsg] = useState('');
  const [fields, setFields] = useState({ from_name: '', from_email: '', company: '', message: '' });

  const handleVisibility = useCallback((v: boolean) => { isVisible.current = v; }, []);
  const obsRef = useIntersectionObserver(handleVisibility);

  // Three.js Radar
  useEffect(() => {
    const canvas = canvasRef.current!;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    // Radar rings
    for (let i = 1; i <= 4; i++) {
      const geo = new THREE.RingGeometry(i * 0.22, i * 0.22 + 0.004, 64);
      const mat = new THREE.MeshBasicMaterial({ color: 0x00f5ff, side: THREE.DoubleSide, opacity: 0.12, transparent: true });
      scene.add(new THREE.Mesh(geo, mat));
    }

    // Sweep line as a thin plane
    const sweepGeo = new THREE.PlaneGeometry(0.004, 0.88);
    const sweepMat = new THREE.MeshBasicMaterial({ color: 0x00f5ff, opacity: 0.8, transparent: true });
    const sweep = new THREE.Mesh(sweepGeo, sweepMat);
    sweep.position.y = 0.44;
    const pivot = new THREE.Object3D();
    pivot.add(sweep);
    scene.add(pivot);

    // Blip sprites
    const blips: { mesh: THREE.Mesh; life: number; maxLife: number }[] = [];
    const blipGeo = new THREE.CircleGeometry(0.015, 8);

    const addBlip = () => {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 0.8;
      const mat = new THREE.MeshBasicMaterial({ color: 0x00f5ff, transparent: true });
      const mesh = new THREE.Mesh(blipGeo, mat);
      mesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
      scene.add(mesh);
      blips.push({ mesh, life: 0, maxLife: 80 });
    };

    let frame = 0;
    const loop = () => {
      if (isVisible.current) {
        frame++;
        pivot.rotation.z += 0.03;
        if (frame % 40 === 0) addBlip();

        for (let i = blips.length - 1; i >= 0; i--) {
          blips[i].life++;
          const t = blips[i].life / blips[i].maxLife;
          (blips[i].mesh.material as THREE.MeshBasicMaterial).opacity = 1 - t;
          if (t >= 1) { scene.remove(blips[i].mesh); blips.splice(i, 1); }
        }
        renderer.render(scene, camera);
      }
      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);

    const onResize = () => renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  // Type-out effect for success/error messages
  const typeOut = (msg: string) => {
    let i = 0;
    setTypedMsg('');
    const iv = setInterval(() => {
      setTypedMsg(msg.slice(0, ++i));
      if (i >= msg.length) clearInterval(iv);
    }, 35);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Prepare params to include aliases expected by some EmailJS templates
    const templateParams = {
      ...fields,
      name: fields.from_name,
      email: fields.from_email
    };

    try {
      // Send notification to you
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      // Send auto-reply to the visitor
      await emailjs.send(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      setStatus('success');
      typeOut('> MESSAGE DELIVERED SUCCESSFULLY_');
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      typeOut('> TRANSMISSION FAILED. RETRY.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      ref={(el) => {
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = el;
        (obsRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      className={styles.section}
    >
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.overlay} />

      <div className={`section-content ${styles.content}`}>
        <p className={`section-label reveal ${styles.label}`}>// 005 CONTACT //</p>
        <h2 className={`${styles.heading} reveal`}>Send a Signal</h2>

        <div className={styles.grid}>
          {/* Info side */}
          <div className={`reveal ${styles.info}`}>
            <p className={styles.infoText}>
              Have a project in mind or want to connect? Drop me a message and I'll get back to you.
            </p>
            <div className={styles.contactLinks}>
              <a href="https://github.com/Akash-Sareen" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <span className={styles.linkLabel}>GITHUB</span>
                <span className={styles.linkArrow}>↗</span>
              </a>
              <a href="https://www.linkedin.com/in/akashsareen7/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <span className={styles.linkLabel}>LINKEDIN</span>
                <span className={styles.linkArrow}>↗</span>
              </a>
            </div>
          </div>

          {/* Form side */}
          <div className={`reveal ${styles.formWrap}`}>
            {status === 'success' || status === 'error' ? (
              <p className={`${styles.result} ${status === 'error' ? styles.error : ''}`}>
                {typedMsg}
                <span className={styles.typeCursor}>|</span>
              </p>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className={styles.form} noValidate>
                {(['from_name', 'from_email', 'company'] as const).map((field) => (
                  <div className={styles.fieldWrap} key={field}>
                    <label className={styles.fieldLabel} htmlFor={field}>
                      {field === 'from_name' ? 'NAME' : field === 'from_email' ? 'EMAIL' : 'COMPANY'}
                    </label>
                    <input
                      id={field}
                      name={field}
                      type={field === 'from_email' ? 'email' : 'text'}
                      value={fields[field]}
                      onChange={handleChange}
                      required={field !== 'company'}
                      className={styles.input}
                      autoComplete="off"
                    />
                  </div>
                ))}
                <div className={styles.fieldWrap}>
                  <label className={styles.fieldLabel} htmlFor="message">MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={fields.message}
                    onChange={handleChange}
                    required
                    className={styles.textarea}
                  />
                </div>
                <button type="submit" className={`btn-terminal ${styles.submitBtn}`} disabled={status === 'sending'}>
                  {status === 'sending' ? '[ TRANSMITTING... ]' : '[ SEND SIGNAL ]'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
