export type TokenKind = 'keyword' | 'type' | 'string' | 'comment' | 'annotation' | 'number' | 'plain';

export function tokenizeJava(line: string): { text: string; kind: TokenKind }[] {
  const tokens: { text: string; kind: TokenKind }[] = [];
  const re = /("(?:[^"\\]|\\.)*")|(\b(?:public|private|protected|class|interface|enum|void|return|new|while|this|true|false|null|static|final|import|package|for|if|else|try|catch|throws|extends|implements|byte|short|int|long|float|double|boolean|char)\b)|(\/\/.*$)|(@\w+)|(\b[A-Z][a-zA-Z0-9]*\b)|(\b\d+\b)/g;
  let last = 0, m;
  
  while ((m = re.exec(line)) !== null) {
    if (m.index > last) {
      tokens.push({ text: line.slice(last, m.index), kind: 'plain' });
    }
    const kind: TokenKind =
      m[1] ? 'string' : 
      m[2] ? 'keyword' : 
      m[3] ? 'comment' : 
      m[4] ? 'annotation' : 
      m[5] ? 'type' : 
      'number';
    tokens.push({ text: m[0], kind });
    last = m.index + m[0].length;
  }
  
  if (last < line.length) {
    tokens.push({ text: line.slice(last), kind: 'plain' });
  }
  return tokens;
}

export function colorForKind(kind: TokenKind): string {
  switch (kind) {
    case 'keyword':    return '#00f5ff';               // hacker.cyan
    case 'type':       return 'rgba(0,245,255,0.6)';   // cyan dimmed
    case 'string':     return '#ffaa00';               // hacker.amber
    case 'annotation': return 'rgba(255,170,0,0.55)';  // amber dimmed
    case 'number':     return 'rgba(255,170,0,0.8)';   // amber numbers
    case 'comment':    return 'rgba(106,122,138,0.65)'; // hacker.text-dim
    default:           return 'rgba(200,216,232,0.75)'; // hacker.text
  }
}
