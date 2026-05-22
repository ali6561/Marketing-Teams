/* global React */

// Problem Matrix — 3 columns with mini-mockups instead of icons
function ProblemMatrix() {
  const [unread, setUnread] = React.useState(7);
  React.useEffect(() => {
    const id = setInterval(() => setUnread(n => (n + 1) % 24), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="problem" id="problem">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-tag">
              <span className="dot" />
              01 · THE DISCONNECT
            </div>
            <h2>
              Your shop is brilliant.<br/>
              Your <span style={{ color: 'var(--c-fiona)' }}>digital shadow</span><br/>
              is what's killing you.
            </h2>
          </div>
          <p className="lede">
            Three quiet leaks every independent UK business is suffering — silently,
            nightly, and at exactly the moment a competitor is awake.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          border: 'var(--rail-heavy)',
          alignItems: 'stretch',
        }}>
          {/* COLUMN 1 — DIGITAL SILENCE */}
          <div style={{ padding: 32, borderRight: 'var(--rail-heavy)', background: 'var(--paper)', display: 'flex', flexDirection: 'column' }}>
            <div className="eyebrow" style={{ marginBottom: 24 }}>PROBLEM 01</div>
            <h3 style={{ fontSize: 40, marginBottom: 16 }}>Digital<br/>Silence.</h3>
            <p style={{ fontSize: 14, color: 'var(--ink-soft)', marginBottom: 32 }}>
              You haven't posted in 11 days. Your competitor down the road posts at
              <em> 7am, noon, and 9pm.</em> Local feeds reward who shows up most.
            </p>

            <div style={{ flex: 1 }} />

            {/* Mockup: stale feed */}
            <div style={{
              background: '#fafafa', border: '2px solid var(--line)', padding: 12,
              boxShadow: 'var(--shadow-pop-sm)',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#888', marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
                <span>YOUR PAGE · POSTS</span>
                <span>last updated 11d ago</span>
              </div>
              {[
                { d: '11d', t: 'Bank Holiday opening hours', faded: true },
                { d: '47d', t: 'Christmas opening times 🎄', faded: true },
                { d: '4mo', t: 'New stock arrived!', faded: true },
              ].map((p,i) => (
                <div key={i} style={{
                  padding: '10px 0',
                  borderTop: i ? '1px dashed #ccc' : 'none',
                  opacity: 0.45 - i * 0.1,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#555' }}>
                    <span>{p.d} ago</span>
                    <span>· · ·</span>
                  </div>
                  <div style={{ fontSize: 13, marginTop: 2, fontWeight: 600 }}>{p.t}</div>
                  <div style={{ fontSize: 10, color: '#999', marginTop: 4 }}>0 likes · 0 shares</div>
                </div>
              ))}
              <div style={{
                marginTop: 8, padding: '8px 10px',
                background: 'var(--c-fiona)', color: '#fff',
                fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.1em',
              }}>
                ALGORITHM PENALTY: −68% REACH
              </div>
            </div>
          </div>

          {/* COLUMN 2 — INBOX BLACK HOLE */}
          <div style={{ padding: 32, borderRight: 'var(--rail-heavy)', background: 'var(--paper-2)', display: 'flex', flexDirection: 'column' }}>
            <div className="eyebrow" style={{ marginBottom: 24 }}>PROBLEM 02</div>
            <h3 style={{ fontSize: 40, marginBottom: 16 }}>Inbox<br/>Black Hole.</h3>
            <p style={{ fontSize: 14, color: 'var(--ink-soft)', marginBottom: 32 }}>
              A hot lead messages at <strong>02:17</strong>. You see it at 09:00.
              They've already booked the competitor that replied in 3 minutes.
            </p>

            <div style={{ flex: 1 }} />

            {/* Mockup: phone with unread */}
            <div style={{
              position: 'relative',
              background: '#0e0d0c', borderRadius: 24, padding: 6,
              boxShadow: 'var(--shadow-pop-sm)',
              border: '2px solid var(--line)',
            }}>
              <div style={{
                background: '#f5f5f7', borderRadius: 18, padding: '14px 12px', minHeight: 280,
                position: 'relative',
              }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  fontFamily: 'JetBrains Mono', fontSize: 10, color: '#666', marginBottom: 12,
                }}>
                  <span>2:17 AM</span>
                  <span style={{ display: 'flex', gap: 4 }}>
                    <span style={{ width: 14, height: 6, background: '#333', borderRadius: 2 }} />
                  </span>
                </div>
                <div style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: 18, marginBottom: 12 }}>
                  Page inbox
                  <span style={{
                    display: 'inline-flex',
                    minWidth: 22, height: 22,
                    background: '#e0254a', color: '#fff',
                    borderRadius: 999, fontSize: 11, alignItems: 'center', justifyContent: 'center',
                    marginLeft: 8, padding: '0 6px',
                    fontFamily: 'Nunito',
                  }}>{unread}</span>
                </div>
                {[
                  { n: 'Janine M.', m: 'do you still have the cream sofa in stock?', t: '02:17', new: true },
                  { n: 'Ahmed K.',  m: 'fare to airport tonight x4 passengers?', t: '01:43', new: true },
                  { n: 'Lucy R.',   m: 'is your kitchen still open? need food', t: '23:08', new: true },
                  { n: 'Mark P.',   m: 'urgent — locked out, need solicitor', t: '03:51', new: true },
                ].map((row, i) => (
                  <div key={i} style={{
                    padding: '8px 0', borderTop: '1px solid #e2e2e6',
                    display: 'flex', gap: 8, alignItems: 'flex-start',
                  }}>
                    <span style={{
                      width: 8, height: 8, borderRadius: 999,
                      background: row.new ? '#0084ff' : 'transparent',
                      flex: '0 0 8px', marginTop: 4,
                    }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11 }}>
                        <strong>{row.n}</strong>
                        <span style={{ color: '#888' }}>{row.t}</span>
                      </div>
                      <div style={{ fontSize: 11, color: '#555', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {row.m}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{
              marginTop: 14, padding: '8px 10px',
              background: 'var(--ink)', color: 'var(--paper)',
              fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.1em',
              display: 'flex', justifyContent: 'space-between',
            }}>
              <span>AVG REPLY TIME</span>
              <span>7h 42m</span>
            </div>
          </div>

          {/* COLUMN 3 — MAP ANONYMITY */}
          <div style={{ padding: 32, background: 'var(--paper)', display: 'flex', flexDirection: 'column' }}>
            <div className="eyebrow" style={{ marginBottom: 24 }}>PROBLEM 03</div>
            <h3 style={{ fontSize: 40, marginBottom: 16 }}>Map<br/>Anonymity.</h3>
            <p style={{ fontSize: 14, color: 'var(--ink-soft)', marginBottom: 32 }}>
              You're rank #12 on Google for "near me". The top 3 win 87% of clicks.
              And the only thing separating you from them is review velocity.
            </p>

            <div style={{ flex: 1 }} />

            {/* Mockup: stylised map */}
            <div style={{
              background: '#e9ebe2', border: '2px solid var(--line)', padding: 0,
              boxShadow: 'var(--shadow-pop-sm)', position: 'relative', overflow: 'hidden',
              height: 220,
            }}>
              {/* faux roads */}
              <svg viewBox="0 0 240 220" width="100%" height="100%" preserveAspectRatio="none" style={{ display: 'block' }}>
                <path d="M0,40 L240,80" stroke="#d4d6cc" strokeWidth="14" fill="none" />
                <path d="M0,170 L240,140" stroke="#d4d6cc" strokeWidth="10" fill="none" />
                <path d="M60,0 L80,220" stroke="#d4d6cc" strokeWidth="12" fill="none" />
                <path d="M180,0 L160,220" stroke="#d4d6cc" strokeWidth="8" fill="none" />
                {/* park */}
                <rect x="90" y="100" width="55" height="40" fill="#cbd5b2" />
              </svg>

              {/* competitor pins */}
              {[
                { x: 18, y: 22, n: 4.9, c: 142 },
                { x: 62, y: 8,  n: 4.8, c: 318 },
                { x: 78, y: 70, n: 4.7, c: 89 },
              ].map((p, i) => (
                <div key={i} style={{
                  position: 'absolute', left: `${p.x}%`, top: `${p.y}%`,
                  transform: 'translate(-50%, -100%)',
                  background: '#fff', border: '1.5px solid var(--line)',
                  padding: '3px 7px',
                  fontFamily: 'JetBrains Mono', fontSize: 9,
                  whiteSpace: 'nowrap',
                  boxShadow: '2px 2px 0 var(--line)',
                }}>
                  ★ {p.n} · {p.c} reviews
                </div>
              ))}

              {/* your pin */}
              <div style={{
                position: 'absolute', left: '38%', top: '60%',
                transform: 'translate(-50%, -100%)',
                background: 'var(--c-fiona)', color: '#fff',
                border: '2px solid var(--line)',
                padding: '5px 10px',
                fontFamily: 'JetBrains Mono', fontSize: 10, fontWeight: 700,
                boxShadow: '3px 3px 0 var(--line)',
              }}>
                YOU · ★ 4.2 · 18 reviews
              </div>

              {/* legend */}
              <div style={{
                position: 'absolute', bottom: 8, right: 8,
                background: '#fff', border: '1.5px solid var(--line)',
                padding: '4px 8px',
                fontFamily: 'JetBrains Mono', fontSize: 9,
              }}>
                YOU RANK #12
              </div>
            </div>

            <div style={{
              marginTop: 14, padding: '8px 10px',
              background: 'var(--c-sarah)',
              fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.1em',
              display: 'flex', justifyContent: 'space-between',
            }}>
              <span>REVIEW VELOCITY</span>
              <span>1.2× / month · target 14×</span>
            </div>
          </div>
        </div>

        {/* Bottom slab */}
        <div style={{
          marginTop: -2,
          background: 'var(--ink)', color: 'var(--paper)',
          padding: '20px 32px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap',
          gap: 16,
          border: 'var(--rail-heavy)',
          borderTop: 0,
        }}>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em' }}>
            Three leaks. One workforce. <span style={{ color: 'var(--c-sarah)' }}>Plugged in 48 hours.</span>
          </div>
          <a href="#workforce" className="btn sm" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
            Meet the team →
          </a>
        </div>
      </div>
    </section>
  );
}

window.ProblemMatrix = ProblemMatrix;
