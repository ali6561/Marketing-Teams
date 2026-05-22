/* global React, MASCOTS, Bubble, Phone */

function Workforce() {
  const ids = ['arthur', 'fiona', 'oliver', 'sarah'];
  const [active, setActive] = React.useState('oliver');
  const m = MASCOTS[active];

  // Per-mascot demo content
  const demo = {
    arthur: {
      kicker: 'Strategist · backend engine',
      headline: 'Arthur finds the money before competitors are awake.',
      body: 'He ingests anything — wholesale PDFs, CRM listings, takeaway menus, MOT records — and surfaces the highest-margin promotional angles. He doesn\'t guess. He scores.',
      bullets: [
        ['Ingest', 'Booker · Nisa · NetSuite · Rightmove CRM · raw PDFs'],
        ['Extract', 'Margin, expiry, seasonality, local search volume'],
        ['Score', 'Rank every angle by £ potential, route to Fiona'],
      ],
      panel: 'pdf',
    },
    fiona: {
      kicker: 'In-house viral content machine',
      headline: 'Fiona never runs out of things to post.',
      body: 'She takes Arthur\'s scored angles and renders them as high-energy reels, carousels and stories — across Facebook, Instagram and TikTok on a bi-diurnal cadence. No agency back-and-forth. No content drought.',
      bullets: [
        ['Brief', 'Pulls from Arthur\'s margin queue · auto-priority'],
        ['Render', '9:16 video · auto-captions · branded lower-thirds'],
        ['Schedule', '2× daily · per-channel · 7-day rolling buffer'],
      ],
      panel: 'feed',
    },
    oliver: {
      kicker: '24/7 closer · sub-30s reply',
      headline: 'Oliver closes the deal while you\'re asleep.',
      body: 'He guards every inbox — Meta DMs, Instagram, your website chat. When a hot lead messages at 2:00am asking about stock, dimensions or emergency services, he replies instantly with the exact answer.',
      bullets: [
        ['Detect', 'New DM → intent classified in <2s'],
        ['Reply', 'Stock · price · ETA · dimensions — pulled live from CRM'],
        ['Close', 'Booking link · discount code · routed to your calendar'],
      ],
      panel: 'chat',
    },
    sarah: {
      kicker: 'Reputation defender · review optimiser',
      headline: 'Sarah turns happy customers into 5-stars.',
      body: 'Post-sale, she requests reviews from the customers most likely to leave one. Pre-publish, she intercepts anything below 4 stars and routes it to a human before it ever hits your Google profile.',
      bullets: [
        ['Trigger', 'Job marked complete → 2hr smart-delay → request'],
        ['Harvest', '5★ → Google Maps · Trustpilot · Facebook'],
        ['Intercept', '1–3★ → routes to ops · never published'],
      ],
      panel: 'reviews',
    },
  }[active];

  return (
    <section id="workforce" style={{ background: 'var(--paper-2)' }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-tag">
              <span className="dot" />
              02 · YOUR NEW WORKFORCE
            </div>
            <h2>
              Four employees.<br/>
              <span style={{ color: 'var(--c-oliver)' }}>One licence fee.</span>
            </h2>
          </div>
          <p className="lede">
            Each one a specialist. None of them needing holiday cover, training, or a
            laptop. Tap a face to brief them.
          </p>
        </div>

        {/* Tab strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
          border: 'var(--rail-heavy)',
          borderBottom: 0,
          background: 'var(--paper)',
        }}>
          {ids.map((id, idx) => {
            const mm = MASCOTS[id];
            const isActive = id === active;
            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                style={{
                  appearance: 'none',
                  border: 0,
                  borderRight: idx < 3 ? 'var(--rail-heavy)' : 0,
                  background: isActive ? mm.color : 'var(--paper)',
                  padding: '20px 20px 16px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'background 120ms',
                  fontFamily: 'inherit',
                  display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8,
                  position: 'relative',
                }}
              >
                <div style={{
                  width: 64, height: 64,
                  backgroundImage: `url(${mm.img})`,
                  backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
                  transform: isActive ? 'rotate(-4deg) scale(1.08)' : 'none',
                  transition: 'transform 200ms cubic-bezier(.5,1.5,.5,1)',
                }} />
                <div>
                  <div style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em' }}>
                    {mm.name} AI
                  </div>
                  <div style={{ fontSize: 11, fontFamily: 'JetBrains Mono', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 2, opacity: 0.85 }}>
                    {mm.role}
                  </div>
                </div>
                {isActive && (
                  <span style={{
                    position: 'absolute', top: 16, right: 16,
                    fontFamily: 'JetBrains Mono', fontSize: 9, padding: '2px 6px',
                    background: 'var(--ink)', color: 'var(--paper)',
                    letterSpacing: '0.1em',
                  }}>● ON DUTY</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active panel */}
        <div style={{
          border: 'var(--rail-heavy)',
          background: 'var(--paper)',
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          minHeight: 540,
        }}>
          {/* Left: copy */}
          <div style={{ padding: 40, borderRight: 'var(--rail-heavy)' }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>{demo.kicker}</div>
            <h3 style={{ fontSize: 'clamp(28px, 3vw, 44px)', marginBottom: 20 }}>
              {demo.headline}
            </h3>
            <p style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.55, marginBottom: 32, maxWidth: 540 }}>
              {demo.body}
            </p>

            <div style={{ display: 'grid', gap: 0 }}>
              {demo.bullets.map(([t, d], i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '120px 1fr',
                  borderTop: '1.5px solid var(--line)',
                  borderBottom: i === demo.bullets.length-1 ? '1.5px solid var(--line)' : 0,
                  padding: '14px 0',
                  alignItems: 'baseline',
                }}>
                  <div style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: 14, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    <span style={{ display: 'inline-block', background: m.color, padding: '2px 8px', marginRight: 8 }}>0{i+1}</span>
                    {t}
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--ink-soft)' }}>{d}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 28, alignItems: 'center' }}>
              <a className="btn sm" href="#directory">See {m.name} in a product →</a>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: 'var(--ink-mute)' }}>
                included in every Pro 365 plan
              </span>
            </div>
          </div>

          {/* Right: live mockup panel */}
          <div style={{
            background: m.color,
            position: 'relative',
            overflow: 'hidden',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 32,
          }}>
            {/* big watermark mascot */}
            <div style={{
              position: 'absolute', right: -60, bottom: -60,
              width: 380, height: 380,
              backgroundImage: `url(${m.img})`,
              backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom',
              opacity: 0.18,
              animation: 'bobBig 3s ease-in-out infinite alternate',
            }} />

            {/* Demo panels */}
            {demo.panel === 'chat' && <OliverChat color={m.color} />}
            {demo.panel === 'pdf' && <ArthurPDF color={m.color} />}
            {demo.panel === 'feed' && <FionaFeed color={m.color} />}
            {demo.panel === 'reviews' && <SarahReviews color={m.color} />}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bobBig {
          from { transform: translate(0,0) rotate(-2deg); }
          to   { transform: translate(0,-10px) rotate(2deg); }
        }
      `}</style>
    </section>
  );
}

/* ============= MASCOT DEMO PANELS ============= */

function OliverChat({ color }) {
  const script = [
    { from: 'them', text: 'hi do u have 19 inch winter tyres in stock?', time: '02:17' },
    { from: 'me', text: 'Hi — yes, 19" winters in stock for most makes. What car?', time: '02:17' },
    { from: 'them', text: 'audi a4 2019', time: '02:18' },
    { from: 'me', text: '£89/tyre fitted. 4 tyres + balance + valves = £386. I can hold a Tuesday 09:30 slot — book?', time: '02:18' },
    { from: 'them', text: 'yes please book', time: '02:19' },
    { from: 'me', text: '✓ Booked. Confirmation sent. Drop keys via the night-box.', time: '02:19' },
  ];
  const [shown, setShown] = React.useState(1);
  React.useEffect(() => {
    if (shown >= script.length) return;
    const id = setTimeout(() => setShown(s => s + 1), 1100);
    return () => clearTimeout(id);
  }, [shown]);
  React.useEffect(() => {
    const reset = setInterval(() => setShown(1), 9000);
    return () => clearInterval(reset);
  }, []);

  return (
    <div style={{ position: 'relative', zIndex: 2, transform: 'rotate(-2deg)' }}>
      <Phone label="DM · 02:17" w={280} h={500}>
        <div style={{ marginTop: 8 }}>
          <div style={{ fontSize: 10, color: '#999', textAlign: 'center', fontFamily: 'JetBrains Mono', marginBottom: 10 }}>
            — TUESDAY · 02:17 AM —
          </div>
          {script.slice(0, shown).map((b, i) => (
            <Bubble key={i} from={b.from} time={b.time} color={color}>{b.text}</Bubble>
          ))}
          {shown < script.length && script[shown].from === 'me' && (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div style={{
                background: color, padding: '8px 14px', borderRadius: 14,
                display: 'flex', gap: 4, alignItems: 'center',
              }}>
                {[0,1,2].map(i => (
                  <span key={i} style={{
                    width: 5, height: 5, background: '#fff', borderRadius: 999,
                    animation: `dot 1.2s ${i*0.15}s infinite`,
                  }} />
                ))}
              </div>
            </div>
          )}
        </div>
      </Phone>
      <div style={{
        position: 'absolute', top: -16, left: -28,
        background: 'var(--ink)', color: 'var(--paper)',
        padding: '6px 12px', fontFamily: 'JetBrains Mono', fontSize: 11,
        letterSpacing: '0.1em', textTransform: 'uppercase',
        border: '2px solid var(--line)',
        boxShadow: '3px 3px 0 var(--line)',
        transform: 'rotate(-4deg)',
      }}>Reply time · 14 sec</div>
      <style>{`@keyframes dot { 0%,80%,100% {opacity:0.3;transform:translateY(0)} 40%{opacity:1;transform:translateY(-3px)} }`}</style>
    </div>
  );
}

function ArthurPDF({ color }) {
  const items = [
    { line: 'Heinz Beans 4×415g · £2.99 → £1.79', tag: 'MARGIN −40%', good: false },
    { line: 'Cadbury Twirl 5pk · clearance · expires 14d', tag: 'OPP +£412', good: true },
    { line: 'Coca-Cola 24pk · seasonal · weekend push', tag: 'OPP +£287', good: true },
    { line: 'Walkers Sensations · slow mover', tag: 'CLEAR', good: false },
    { line: 'Pringles Sour Cream · NEW · feature', tag: 'OPP +£198', good: true },
  ];
  return (
    <div style={{ position: 'relative', zIndex: 2, transform: 'rotate(-1.5deg)' }}>
      <div style={{
        width: 340, background: '#fff',
        border: '2px solid var(--line)', boxShadow: '6px 6px 0 var(--line)',
      }}>
        <div style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '10px 14px', fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.1em', display: 'flex', justifyContent: 'space-between' }}>
          <span>WHOLESALE_W47.PDF</span>
          <span>● PARSED · 1.4s</span>
        </div>
        <div style={{ padding: 14 }}>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: 14, marginBottom: 10 }}>
            42 angles found · ranked by £
          </div>
          {items.map((it, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '8px 0', borderTop: i ? '1px dashed #ddd' : '1.5px solid var(--line)',
              fontSize: 12,
            }}>
              <span style={{ flex: 1 }}>{it.line}</span>
              <span style={{
                fontFamily: 'JetBrains Mono', fontSize: 9, letterSpacing: '0.06em',
                padding: '2px 6px',
                background: it.good ? color : '#e8e8e8',
                color: it.good ? '#000' : '#666',
              }}>{it.tag}</span>
            </div>
          ))}
          <div style={{
            marginTop: 12, padding: '8px 10px',
            background: color, color: '#000',
            fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.08em',
            display: 'flex', justifyContent: 'space-between',
          }}>
            <span>QUEUE → FIONA</span>
            <span>£3,847 OPPORTUNITY</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FionaFeed({ color }) {
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  return (
    <div style={{ position: 'relative', zIndex: 2, transform: 'rotate(-1deg)', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{
        background: '#fff', border: '2px solid var(--line)',
        boxShadow: '6px 6px 0 var(--line)',
        padding: 14, width: 360,
      }}>
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#666', marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
          <span>SCHEDULE · WEEK 47</span>
          <span>14 posts · 2× daily</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
          {days.map((d, i) => (
            <div key={d} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#888' }}>{d}</div>
              <div style={{ marginTop: 4, height: 56, background: '#f5f5f5', border: '1px solid #ddd', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 4, left: 4, right: 4, height: 16, background: color, fontFamily: 'JetBrains Mono', fontSize: 8, color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  7:00 · IG
                </div>
                <div style={{ position: 'absolute', bottom: 4, left: 4, right: 4, height: 16, background: '#0e0d0c', fontFamily: 'JetBrains Mono', fontSize: 8, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  19:00 · TT
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, width: 360,
      }}>
        {['REEL','CAROUSEL','REEL'].map((kind, i) => (
          <div key={i} style={{
            aspectRatio: '9/14',
            background: i===1 ? '#fff' : 'var(--ink)',
            color: i===1 ? '#000' : '#fff',
            border: '2px solid var(--line)',
            padding: 8,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            fontFamily: 'Montserrat', fontWeight: 800,
            fontSize: 11, lineHeight: 1.1, letterSpacing: '-0.02em',
            boxShadow: '3px 3px 0 var(--line)',
          }}>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: 8, letterSpacing: '0.1em' }}>{kind}</span>
            <span>{['WEEKEND FLASH SALE','£1.79 BEANS','TWIRL 5PK 2-FOR-1'][i]}</span>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: 8, color: i===1 ? color : color }}>● ready</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SarahReviews({ color }) {
  return (
    <div style={{ position: 'relative', zIndex: 2, transform: 'rotate(-1deg)', display: 'flex', flexDirection: 'column', gap: 12, width: 360 }}>
      {[
        { stars: 5, name: 'Priya S.', text: 'Best garage in town — Oliver booked me in at 1am!', route: 'PUBLISH', color },
        { stars: 5, name: 'Daniel C.', text: 'Smooth, fast, fair price. Highly recommend.', route: 'PUBLISH', color },
        { stars: 2, name: 'Anonymous', text: 'Wheel still vibrates a bit, not happy.', route: '→ ROUTE TO OPS', color: '#e0254a' },
        { stars: 5, name: 'Aisha M.', text: 'They saved my MOT. 10/10.', route: 'PUBLISH', color },
      ].map((r, i) => (
        <div key={i} style={{
          background: '#fff', border: '2px solid var(--line)',
          padding: 12,
          boxShadow: '4px 4px 0 var(--line)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: 10,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <span style={{ color: r.stars >= 4 ? '#f5b800' : '#999', fontSize: 14 }}>
                {'★'.repeat(r.stars)}{'☆'.repeat(5-r.stars)}
              </span>
              <strong style={{ fontSize: 11 }}>{r.name}</strong>
            </div>
            <div style={{ fontSize: 11, color: '#444' }}>{r.text}</div>
          </div>
          <span style={{
            fontFamily: 'JetBrains Mono', fontSize: 9, letterSpacing: '0.06em',
            padding: '4px 8px',
            background: r.route === 'PUBLISH' ? color : r.color,
            color: r.route === 'PUBLISH' ? '#000' : '#fff',
            whiteSpace: 'nowrap',
          }}>{r.route}</span>
        </div>
      ))}
    </div>
  );
}

window.Workforce = Workforce;
