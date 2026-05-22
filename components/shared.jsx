/* global React */
// Shared bits: mascot SVGs, mockup helpers, sparkline, ticker

const MASCOTS = {
  arthur: {
    name: 'Arthur',
    role: 'Chief Data Officer',
    color: 'var(--c-arthur)',
    img: 'assets/arthur.png',
    one: 'Finds the money in your data before competitors are awake.',
    verbs: ['ingesting', 'parsing', 'extracting', 'scoring'],
  },
  fiona: {
    name: 'Fiona',
    role: 'Chief Content Officer',
    color: 'var(--c-fiona)',
    img: 'assets/fiona.png',
    one: 'Designs, writes & schedules viral content. Bi-diurnal. Tireless.',
    verbs: ['drafting', 'rendering', 'scheduling', 'syndicating'],
  },
  oliver: {
    name: 'Oliver',
    role: 'Head of Sales & Triage',
    color: 'var(--c-oliver)',
    img: 'assets/oliver.png',
    one: 'Replies in under 30 seconds. Closes while you sleep.',
    verbs: ['replying', 'quoting', 'booking', 'qualifying'],
  },
  sarah: {
    name: 'Sarah',
    role: 'Reputation Defender',
    color: 'var(--c-sarah)',
    img: 'assets/sarah.png',
    one: 'Harvests 5-stars. Intercepts complaints before they hit Google.',
    verbs: ['monitoring', 'requesting', 'flagging', 'routing'],
  },
};

function Mascot({ id, size = 96, hover = true, style = {} }) {
  const m = MASCOTS[id];
  return (
    <span
      className={`mascot ${hover ? 'hover' : ''}`}
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        backgroundImage: `url(${m.img})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        ...style,
      }}
      aria-label={m.name}
    />
  );
}

// Tiny animated sparkline
function Sparkline({ color = 'var(--ink)', values, height = 28, width = 110 }) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const step = width / (values.length - 1);
  const pts = values
    .map((v, i) => `${i * step},${height - ((v - min) / range) * height}`)
    .join(' ');
  return (
    <svg width={width} height={height} style={{ display: 'block' }}>
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Status row used in many cards
function StatusRow({ dotColor = '#18a957', children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.05em' }}>
      <span style={{ width: 6, height: 6, borderRadius: 999, background: dotColor }} />
      {children}
    </div>
  );
}

// Generic phone frame (original — not branded)
function Phone({ children, label = 'inbox', tilt = 0, w = 240, h = 460 }) {
  return (
    <div style={{
      width: w, height: h,
      transform: `rotate(${tilt}deg)`,
      background: '#0e0d0c',
      borderRadius: 28,
      padding: 8,
      boxShadow: '8px 8px 0 var(--line)',
      border: '2px solid var(--line)',
      position: 'relative',
    }}>
      <div style={{
        width: '100%', height: '100%',
        background: '#fafafa',
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{
          padding: '10px 14px 8px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 10,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#666',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <span>{label}</span>
          <span>●●●</span>
        </div>
        <div style={{ flex: 1, padding: '0 12px 12px', overflow: 'hidden' }}>{children}</div>
      </div>
    </div>
  );
}

// Chat bubble
function Bubble({ from = 'them', children, time, color }) {
  const isMe = from === 'me';
  return (
    <div style={{ display: 'flex', justifyContent: isMe ? 'flex-end' : 'flex-start', marginBottom: 8 }}>
      <div style={{ maxWidth: '85%' }}>
        <div style={{
          background: isMe ? (color || 'var(--c-oliver)') : '#eee',
          color: isMe ? '#fff' : '#111',
          padding: '8px 12px',
          borderRadius: isMe ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
          fontSize: 12,
          lineHeight: 1.35,
        }}>{children}</div>
        {time && <div style={{ fontSize: 9, color: '#888', marginTop: 2, textAlign: isMe ? 'right' : 'left', fontFamily: 'JetBrains Mono, monospace' }}>{time}</div>}
      </div>
    </div>
  );
}

Object.assign(window, { MASCOTS, Mascot, Sparkline, StatusRow, Phone, Bubble });
