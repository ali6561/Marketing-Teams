/* global React, Mascot, MASCOTS, Sparkline, StatusRow */

function Hero() {
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setT(n => n + 1), 1100);
    return () => clearInterval(id);
  }, []);

  // Rotating activity log
  const events = [
    { who: 'oliver',  msg: 'replied to lead', detail: '"need a quote for 4 winter tyres"', tag: 'sub-30s' },
    { who: 'fiona',   msg: 'scheduled 14 reels', detail: '"weekend flash sale · 3 stores"', tag: 'Mon→Sun' },
    { who: 'arthur',  msg: 'ingested wholesale PDF', detail: '"42 margin opportunities found"', tag: '7.3MB' },
    { who: 'sarah',   msg: 'flagged 2-star review', detail: '"routed to ops · 11:42pm"', tag: 'intercept' },
    { who: 'oliver',  msg: 'booked an MOT slot', detail: '"Tue 09:30 · automated"', tag: 'booked' },
    { who: 'fiona',   msg: 'published TikTok', detail: '"3-second hook · vertical 9:16"', tag: 'live' },
    { who: 'sarah',   msg: 'requested 5★ review', detail: '"happy customer · post-sale +2hr"', tag: 'sent' },
    { who: 'arthur',  msg: 'parsed CRM listing', detail: '"4-bed semi · £465k · off-market"', tag: 'scored' },
  ];

  const sparkVals = React.useMemo(() => {
    const base = [3,5,4,6,5,7,6,8,7,9,11,10,12,14,13,15];
    return base.map(v => v + (t % 3));
  }, [t]);

  return (
    <section className="hero">
      <div className="wrap">

        {/* Headline block */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.45fr) minmax(0, 1fr)',
          gap: 56,
          alignItems: 'stretch',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 720 }}>
            <div>
            <div style={{ marginBottom: 24 }}>
              <span className="section-tag">
                <span className="dot" style={{ background: '#e0254a' }} />
                THE AGENCY KILLER 
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(60px, 8vw, 140px)' }}>
              FIRE THE<br/>
              <span style={{ color: 'var(--c-fiona)', WebkitTextStroke: '0px var(--ink)' }}>£1,500/mo</span><br/>
              AGENCY.<br/>
              <span style={{
                display: 'inline-block',
                background: 'var(--ink)',
                color: 'var(--paper)',
                padding: '0 16px',
                transform: 'rotate(-1deg)',
                marginTop: 8,
              }}>HIRE THE BOTS.</span>
            </h1>
            </div>

            <div>
            <p style={{
              maxWidth: 620, marginTop: 32, fontSize: 19, lineHeight: 1.5,
              fontWeight: 500,
            }}>
              Stop losing local customers to digital silence. <strong>We drive the traffic;
              you run the physical business.</strong> An enterprise-grade AI workforce
              for independent UK businesses — from £80/month, 100% tax-deductible,
              zero setup, zero sick days.
            </p>

            <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap', justifyContent: 'center' }}>
              <a className="btn" href="#directory" style={{ minWidth: 220, textAlign: 'center' }}>
                Hire the workforce →
              </a>
            </div>

            <div style={{ display: 'flex', gap: 28, marginTop: 28, flexWrap: 'wrap', fontSize: 13 }}>
              <StatusRow>£80/mo · flat · 100% tax-deductible</StatusRow>
              <StatusRow>Live in 48 hours · no setup fee</StatusRow>
              <StatusRow>9 industry-tuned products</StatusRow>
            </div>
            </div>
          </div>

          {/* Live workforce panel */}
          <div className="card pop" style={{ background: 'var(--ink)', color: 'var(--paper)', display: 'flex', flexDirection: 'column', alignSelf: 'stretch' }}>
            <div style={{
              padding: '14px 18px',
              borderBottom: '1.5px solid rgba(255,255,255,0.18)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
              flexShrink: 0,
            }}>
              <span>● workforce.live</span>
              <span style={{ opacity: 0.65 }}>last 60s</span>
            </div>

            <div style={{ padding: 20, display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 4 }}>
                <span style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: 56, letterSpacing: '-0.04em' }}>
                  {1842 + (t * 3)}
                </span>
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.7 }}>
                  actions today
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <Sparkline values={sparkVals} color="var(--c-sarah)" />
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: 'var(--c-sarah)' }}>+248% vs human</span>
              </div>

              {/* Mascot row */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 4, marginBottom: 18,
              }}>
                {['arthur','fiona','oliver','sarah'].map(id => {
                  const m = MASCOTS[id];
                  return (
                    <div key={id} style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      padding: 8,
                      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                    }}>
                      <div style={{
                        width: 60, height: 60,
                        backgroundImage: `url(${m.img})`,
                        backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
                        animation: `bob 2.${id.length}s ease-in-out infinite alternate`,
                      }} />
                      <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11, letterSpacing: '0.04em' }}>{m.name.toUpperCase()}</div>
                      <div style={{ fontFamily: 'JetBrains Mono', fontSize: 9, color: m.color, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        {m.verbs[t % 4]}…
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Live event */}
              <div style={{
                borderTop: '1.5px solid rgba(255,255,255,0.18)',
                paddingTop: 14,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}>
                {[events[t % events.length], events[(t+1) % events.length], events[(t+2) % events.length]].map((e, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: 10,
                    padding: '8px 0',
                    borderBottom: i < 2 ? '1px dashed rgba(255,255,255,0.12)' : 'none',
                    opacity: 1 - i * 0.3,
                    fontSize: 12,
                  }}>
                    <div style={{
                      width: 22, height: 22, flex: '0 0 22px',
                      backgroundImage: `url(${MASCOTS[e.who].img})`,
                      backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
                    }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 12 }}>
                        {MASCOTS[e.who].name} {e.msg}
                      </div>
                      <div style={{ fontSize: 10, opacity: 0.7, fontFamily: 'JetBrains Mono', marginTop: 2 }}>
                        {e.detail}
                      </div>
                    </div>
                    <span style={{
                      fontFamily: 'JetBrains Mono', fontSize: 9, padding: '2px 6px',
                      background: MASCOTS[e.who].color, color: '#000',
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      alignSelf: 'flex-start',
                    }}>{e.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Marquee strip */}
      <div className="marquee" style={{ marginTop: 80, marginLeft: -56, marginRight: -56 }}>
        <div className="track">
          {[...Array(2)].flatMap((_, k) => [
            <span key={`${k}a`}>OFFLINE EXCELLENCE.</span>,
            <span key={`${k}b`} className="star">★ ONLINE FAILURE.</span>,
            <span key={`${k}c`}>STOP BLEEDING LOCAL REVENUE</span>,
            <span key={`${k}d`} className="star">★ ZERO SICK DAYS</span>,
            <span key={`${k}e`}>£80/MO · FLAT</span>,
            <span key={`${k}f`} className="star">★ 100% TAX DEDUCTIBLE</span>,
            <span key={`${k}g`}>FIRE THE AGENCY</span>,
            <span key={`${k}h`} className="star">★ HIRE THE BOTS</span>,
          ])}
        </div>
      </div>

      <style>{`
        @keyframes bob {
          from { transform: translateY(0); }
          to   { transform: translateY(-4px); }
        }
      `}</style>
    </section>
  );
}

window.Hero = Hero;
