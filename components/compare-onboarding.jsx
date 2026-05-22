/* global React, MASCOTS */

function Compare() {
  const rows = [
    ['Monthly cost', '£1,500+', '£80 – £120', 'PRICE'],
    ['Headcount', '1 account manager (junior)', '4 specialists', 'TEAM'],
    ['Hours worked', 'Mon–Fri · 9–5 (-ish)', '24 / 7 / 365', 'UPTIME'],
    ['Reply time to a lead', '7h 42m avg', 'Sub-30 seconds', 'SPEED'],
    ['Sick days · holiday', '21+ days/year lost', 'Zero', 'AVAILABILITY'],
    ['Content output / week', '2–3 posts', '14 posts · 2× daily', 'VOLUME'],
    ['Setup fee', '£2,000+', '£0', 'ONBOARDING'],
    ['Cancel notice', '3 months', 'Monthly', 'COMMITMENT'],
    ['Tax treatment', 'Marketing spend', '100% tax-deductible expense', 'TAX'],
  ];

  return (
    <section id="compare" style={{ background: 'var(--ink)', color: 'var(--paper)', borderTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-tag" style={{ background: 'transparent', color: 'var(--paper)', borderColor: 'var(--paper)' }}>
              <span className="dot" style={{ background: 'var(--c-sarah)' }} />
              04 · THE AGENCY KILLER MATHS
            </div>
            <h2>
              The old way<br/>
              vs <span style={{ color: 'var(--c-sarah)' }}>the AI way.</span>
            </h2>
          </div>
          <p className="lede" style={{ color: 'rgba(245,241,234,0.7)' }}>
            Side-by-side, line-by-line. The agency model isn't broken — it just hasn't
            updated since the fax machine.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '180px 1fr 1fr',
          border: '2px solid var(--paper)',
        }}>
          {/* header row */}
          <div style={{ padding: '16px 18px', borderBottom: '2px solid var(--paper)', borderRight: '2px solid var(--paper)', fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.12em' }}>
            DIMENSION
          </div>
          <div style={{
            padding: '20px 22px', borderBottom: '2px solid var(--paper)', borderRight: '2px solid var(--paper)',
            background: 'rgba(255,255,255,0.04)',
          }}>
            <div className="eyebrow" style={{ color: 'var(--paper)', opacity: 0.7, marginBottom: 8 }}>OPTION A</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <h3 style={{ fontSize: 32, color: 'var(--paper)' }}>The Old Way</h3>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: 12, opacity: 0.6 }}>· human agency</span>
            </div>
          </div>
          <div style={{
            padding: '20px 22px', borderBottom: '2px solid var(--paper)',
            background: 'var(--c-sarah)', color: 'var(--ink)',
            position: 'relative',
          }}>
            <div className="eyebrow" style={{ marginBottom: 8 }}>OPTION B · RECOMMENDED</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <h3 style={{ fontSize: 32 }}>The AI Way</h3>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: 12, opacity: 0.7 }}>· Marketing Teams</span>
            </div>
            <span style={{
              position: 'absolute', top: 12, right: 16,
              fontFamily: 'JetBrains Mono', fontSize: 10, padding: '4px 8px',
              background: 'var(--ink)', color: 'var(--paper)',
              letterSpacing: '0.12em',
            }}>● RECOMMENDED</span>
          </div>

          {/* data rows */}
          {rows.map(([dim, old, n3w, kind], i) => {
            const last = i === rows.length - 1;
            return (
              <React.Fragment key={dim}>
                <div style={{
                  padding: '14px 18px',
                  borderRight: '2px solid var(--paper)',
                  borderBottom: last ? 0 : '1.5px solid rgba(255,255,255,0.18)',
                  fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.12em',
                  display: 'flex', alignItems: 'center',
                  opacity: 0.65,
                }}>{kind}</div>
                <div style={{
                  padding: '14px 22px',
                  borderRight: '2px solid var(--paper)',
                  borderBottom: last ? 0 : '1.5px solid rgba(255,255,255,0.18)',
                  fontSize: 16,
                  fontFamily: 'Nunito',
                  textDecoration: i === 0 || i === 6 ? 'line-through' : 'none',
                  textDecorationColor: 'rgba(224,37,74,0.7)',
                  textDecorationThickness: '2px',
                  opacity: 0.85,
                }}>
                  <span style={{ fontWeight: 600 }}>{old}</span>
                  <span style={{ fontSize: 11, opacity: 0.55, marginLeft: 10, textDecoration: 'none' }}>— {dim}</span>
                </div>
                <div style={{
                  padding: '14px 22px',
                  borderBottom: last ? 0 : '1.5px solid var(--ink)',
                  fontSize: 16,
                  background: 'var(--c-sarah)',
                  color: 'var(--ink)',
                  fontFamily: 'Nunito',
                  display: 'flex', alignItems: 'baseline', gap: 8,
                }}>
                  <strong style={{ fontWeight: 800 }}>{n3w}</strong>
                  <span style={{ fontSize: 11, opacity: 0.6 }}>— {dim}</span>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Trust band */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
          marginTop: -2,
          border: '2px solid var(--paper)',
          borderTop: 0,
        }}>
          <div style={{ padding: 28, borderRight: '2px solid var(--paper)' }}>
            <div className="eyebrow" style={{ color: 'var(--paper)', opacity: 0.7, marginBottom: 12 }}>ANNUAL DAMAGE · THE OLD WAY</div>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: 56, letterSpacing: '-0.03em' }}>
              <span className="strike">£20,000+</span>
            </div>
            <div style={{ fontSize: 13, opacity: 0.7, marginTop: 4, fontFamily: 'JetBrains Mono' }}>
              £1,500 × 12 + £2,000 setup + lost weekends
            </div>
          </div>
          <div style={{ padding: 28, background: 'var(--c-sarah)', color: 'var(--ink)' }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>ANNUAL · THE AI WAY</div>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: 56, letterSpacing: '-0.03em' }}>
              £960<span style={{ fontSize: 22, fontWeight: 500 }}> – £1,440</span>
            </div>
            <div style={{ fontSize: 13, marginTop: 4, fontFamily: 'JetBrains Mono', fontWeight: 700 }}>
              ● 100% TAX-DEDUCTIBLE BUSINESS EXPENSE
            </div>
          </div>
        </div>

        <div style={{ marginTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontSize: 18, fontWeight: 600, maxWidth: 540 }}>
            That's not a discount. That's a different business model.
          </p>
          <a href="#onboarding" className="btn" style={{
            background: 'var(--c-sarah)', color: 'var(--ink)',
            border: '2.5px solid var(--c-sarah)',
            boxShadow: '6px 6px 0 var(--paper)',
          }}>
            Switch in 48 hours →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================== ONBOARDING ============================== */

function Onboarding() {
  return (
    <section id="onboarding" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-tag">
              <span className="dot" />
              05 · ONBOARDING
            </div>
            <h2>
              From card to crew<br/>
              in <span style={{ color: 'var(--c-arthur)' }}>48 hours.</span>
            </h2>
          </div>
          <p className="lede">
            No discovery calls. No 6-week onboarding decks. Three clicks, two days,
            and the workforce is live on your channels.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          border: 'var(--rail-heavy)',
        }}>
          <Step
            n="01"
            title="Click."
            sub="Secure subscription via Stripe."
            time="~ 2 minutes"
            who={null}
            accent="var(--c-fiona)"
            body={[
              'Pick your industry · Pro 365 product',
              'Enter card · flat monthly billing starts',
              'No setup fee · no annual lock-in',
            ]}
            visual={<StepClick />}
          />
          <Step
            n="02"
            title="Configure."
            sub="Grant Meta + Google access."
            time="~ 8 minutes"
            who="arthur"
            accent="var(--c-arthur)"
            body={[
              'Connect Meta · Instagram · Google Business',
              'Upload menus / catalogues / wholesale PDFs',
              'Arthur ingests it all in seconds',
            ]}
            visual={<StepConfig />}
          />
          <Step
            n="03"
            title="Profit."
            sub="The workforce goes live."
            time="< 48 hours"
            who="oliver"
            accent="var(--c-oliver)"
            body={[
              'Fiona starts publishing on day 1',
              'Oliver guards inboxes from the first DM',
              'Sarah harvests her first 5★ within the week',
            ]}
            visual={<StepLive />}
          />
        </div>

        {/* Timeline strip */}
        <div style={{
          marginTop: 32,
          border: 'var(--rail)',
          padding: 0,
          background: 'var(--paper)',
        }}>
          <div style={{ padding: '12px 20px', borderBottom: 'var(--rail)', fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.12em', display: 'flex', justifyContent: 'space-between' }}>
            <span>● PROJECTED TIMELINE · TYPICAL CLIENT</span>
            <span>HOUR 00 → HOUR 48</span>
          </div>
          <div style={{
            position: 'relative',
            padding: '32px 24px 24px',
          }}>
            {/* track */}
            <div style={{ position: 'absolute', left: 24, right: 24, top: 56, height: 3, background: 'var(--ink)' }} />
            {/* ticks */}
            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
              {[
                { h: '00', l: 'Subscription', m: 'fiona' },
                { h: '02', l: 'Access granted', m: 'arthur' },
                { h: '06', l: 'Data ingested', m: 'arthur' },
                { h: '12', l: 'First reels live', m: 'fiona' },
                { h: '24', l: 'Oliver online', m: 'oliver' },
                { h: '36', l: 'First lead closed', m: 'oliver' },
                { h: '48', l: 'First 5★ harvest', m: 'sarah' },
              ].map((t, i) => (
                <div key={i} style={{ flex: 1, textAlign: 'center', position: 'relative' }}>
                  <div style={{
                    width: 44, height: 44, margin: '0 auto',
                    backgroundImage: `url(${MASCOTS[t.m].img})`,
                    backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
                  }} />
                  <div style={{
                    width: 14, height: 14, borderRadius: 999,
                    background: 'var(--ink)', border: '2px solid var(--paper)',
                    margin: '0 auto', marginTop: -2,
                  }} />
                  <div style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 13, marginTop: 8 }}>H+{t.h}</div>
                  <div style={{ fontSize: 11, color: 'var(--ink-soft)', marginTop: 2 }}>{t.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 36, display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <a className="btn" href="#directory">Start the 48-hour clock →</a>
          <a className="btn ghost" href="#workforce">Re-brief the team</a>
        </div>
      </div>
    </section>
  );
}

function Step({ n, title, sub, time, who, accent, body, visual }) {
  return (
    <div style={{
      padding: 32,
      borderRight: n !== '03' ? 'var(--rail-heavy)' : 0,
      background: 'var(--paper)',
      display: 'flex', flexDirection: 'column',
      position: 'relative',
      minHeight: 460,
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: 24,
      }}>
        <span style={{
          fontFamily: 'Montserrat', fontWeight: 900, fontSize: 64,
          letterSpacing: '-0.04em', lineHeight: 1,
          background: accent, padding: '0 16px',
        }}>{n}</span>
        <span className="pill">{time}</span>
      </div>

      <h3 style={{ fontSize: 42 }}>{title}</h3>
      <div style={{ fontSize: 16, color: 'var(--ink-soft)', marginTop: 6, marginBottom: 24 }}>{sub}</div>

      {/* visual */}
      <div style={{ marginBottom: 24 }}>{visual}</div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 'auto 0 0 0', fontSize: 14 }}>
        {body.map((line, i) => (
          <li key={i} style={{
            padding: '10px 0',
            borderTop: '1px dashed var(--hair)',
            display: 'flex', gap: 10, alignItems: 'baseline',
          }}>
            <span style={{ width: 6, height: 6, background: 'var(--ink)', flex: '0 0 6px', marginTop: 5 }} />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StepClick() {
  return (
    <div style={{
      background: '#fff', border: '2px solid var(--line)', boxShadow: 'var(--shadow-pop-sm)',
      padding: 14,
    }}>
      <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#888', marginBottom: 10 }}>
        SECURE CHECKOUT
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, fontFamily: 'Montserrat', fontWeight: 800 }}>
        <span>Retail Pro 365</span>
        <span>£80.00 /mo</span>
      </div>
      <div style={{
        background: '#f5f5f5', padding: 10, fontFamily: 'JetBrains Mono', fontSize: 12,
        marginBottom: 10, letterSpacing: '0.06em',
      }}>4242 4242 4242 ▮</div>
      <div style={{
        background: 'var(--c-fiona)', color: '#fff',
        padding: '10px 14px', fontFamily: 'Montserrat', fontWeight: 700, fontSize: 14,
        textAlign: 'center', letterSpacing: '0.04em',
      }}>SUBSCRIBE · £80/mo</div>
    </div>
  );
}

function StepConfig() {
  return (
    <div style={{
      background: '#fff', border: '2px solid var(--line)', boxShadow: 'var(--shadow-pop-sm)',
      padding: 14,
    }}>
      <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#888', marginBottom: 10 }}>
        CONNECT YOUR STACK
      </div>
      {['Meta · Facebook + Instagram', 'Google Business Profile', 'TikTok for Business', 'Wholesale PDFs (drop here)'].map((l, i) => (
        <div key={l} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '8px 10px',
          borderTop: i ? '1px dashed #ddd' : 'none',
          fontSize: 12,
        }}>
          <span>{l}</span>
          <span style={{
            fontFamily: 'JetBrains Mono', fontSize: 10,
            padding: '2px 6px',
            background: i < 3 ? 'var(--c-arthur)' : '#eee',
            color: i < 3 ? '#fff' : '#999',
          }}>{i < 3 ? '✓ LINKED' : 'DROP'}</span>
        </div>
      ))}
    </div>
  );
}

function StepLive() {
  return (
    <div style={{
      background: 'var(--ink)', color: 'var(--paper)',
      border: '2px solid var(--line)', boxShadow: 'var(--shadow-pop-sm)',
      padding: 14,
    }}>
      <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, opacity: 0.7, marginBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
        <span>● WORKFORCE LIVE</span>
        <span>since 09:42</span>
      </div>
      {['arthur','fiona','oliver','sarah'].map(id => (
        <div key={id} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '6px 0',
          borderTop: '1px dashed rgba(255,255,255,0.15)',
          fontSize: 12,
        }}>
          <div style={{
            width: 24, height: 24,
            backgroundImage: `url(${MASCOTS[id].img})`,
            backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
          }} />
          <strong style={{ flex: 1, fontFamily: 'Montserrat' }}>{MASCOTS[id].name}</strong>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: MASCOTS[id].color }}>
            ● ON DUTY
          </span>
        </div>
      ))}
    </div>
  );
}

window.Compare = Compare;
window.Onboarding = Onboarding;
