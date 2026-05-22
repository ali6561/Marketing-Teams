/* global React, MASCOTS */

const PRODUCTS = [
  {
    id: 'retail', name: 'Retail Pro 365', tier: 1, price: 80,
    target: 'Independent convenience stores · Nisa · Premier · local grocers',
    pain: 'Wasting high-margin stock that expires because nobody knows it\'s on sale.',
    angle: 'Shrink-to-Cash flash sales on local community groups.',
    heroes: ['arthur', 'fiona'],
    proof: ['£3,847 avg weekly margin recovered', '14 reels/week · 2× daily', 'Arthur ingests wholesale PDFs in 1.4s'],
    accent: 'var(--c-fiona)',
  },
  {
    id: 'food', name: 'Food Pro 365', tier: 1, price: 80,
    target: 'Takeaways · dark kitchens · independent restaurants',
    pain: 'Surrendering 30% of profit margins to aggregator apps.',
    angle: 'Intercept hungry locals on social. Route them direct.',
    heroes: ['oliver', 'fiona'],
    proof: ['Avg 28% aggregator-fee saved', 'Direct-order code auto-dispatched', '24/7 inbox guard on Instagram + Meta'],
    accent: 'var(--c-oliver)',
  },
  {
    id: 'auto', name: 'Auto Pro 365', tier: 2, price: 100,
    target: 'Independent garages · MOT stations · tyre fitters',
    pain: 'Mechanics are under the car. Phone rings. Booking goes elsewhere.',
    angle: 'Sub-30s tyre & service quotes via DM. 12-mo MOT loops.',
    heroes: ['oliver', 'sarah'],
    proof: ['Avg reply 14s · benchmark 7h 42m', '12-mo CRM retention loop', '5★ post-MOT request automation'],
    accent: 'var(--c-oliver)',
  },
  {
    id: 'property', name: 'Property Pro 365', tier: 2, price: 100,
    target: 'Estate agents · property developers · letting agents',
    pain: 'Missing high-value off-plan & weekend viewing requests.',
    angle: 'Cinematic listing reels generated the second a property hits CRM.',
    heroes: ['fiona', 'oliver'],
    proof: ['Listing → reel in <90s', '24/7 valuation capture flow', 'Cinematic 9:16 · Instagram + TikTok'],
    accent: 'var(--c-fiona)',
  },
  {
    id: 'taxi', name: 'Taxi Pro 365', tier: 2, price: 100,
    target: 'Local private hire firms · minicab offices',
    pain: 'Weekend dispatch volume bleeding to ride-hail giants.',
    angle: 'Chat-to-Web portal booking. Quote → confirm → dispatch.',
    heroes: ['oliver'],
    proof: ['2am quote → confirmed in 22s', 'Direct portal · zero commission', 'Saves ~£18 per fare vs aggregators'],
    accent: 'var(--c-oliver)',
  },
  {
    id: 'pi', name: 'PI Pro 365', tier: 3, price: 120,
    target: 'Personal injury · medical negligence solicitors',
    pain: 'Trust barriers. Sensitive intakes. Compliance complexity.',
    angle: 'SRA-compliant authority content + empathetic 24h triage.',
    heroes: ['arthur', 'oliver'],
    proof: ['SRA-compliant copy templates', 'Case-intake forms 24/7', 'Encrypted hand-off to fee-earners'],
    accent: 'var(--c-arthur)',
  },
  {
    id: 'crim', name: 'Crim Pro 365', tier: 3, price: 120,
    target: 'Legal aid · criminal defence lawyers',
    pain: 'Arrests at 3am. Phone unanswered = retainer lost to duty solicitor.',
    angle: 'Emergency lead capture → on-call mobile. Sub-60s.',
    heroes: ['oliver'],
    proof: ['Sub-60s on-call routing', 'Police-station alert ping', 'Retainer captured before duty solicitor arrives'],
    accent: 'var(--c-arthur)',
  },
  {
    id: 'ecom', name: 'E-commerce Pro 365', tier: 3, price: 120,
    target: 'Independent online retailers · DTC brands',
    pain: 'Cart abandonment from unanswered shipping/stock questions.',
    angle: 'Sub-30s replies · global timezones · 5★ harvesting.',
    heroes: ['oliver', 'sarah'],
    proof: ['24/7 multilingual replies', 'Trustpilot 5★ harvesting', '+18% avg conversion lift'],
    accent: 'var(--c-oliver)',
  },
  {
    id: 'furniture', name: 'Furniture Pro 365', tier: 3, price: 120,
    target: 'Bespoke & high-ticket furniture showrooms',
    pain: '£2,000+ purchases need exact dimensions and visual trust.',
    angle: '24/7 dimension assistant + aspirational room-set syndication.',
    heroes: ['fiona', 'oliver'],
    proof: ['Live dimension lookup from catalogue', 'Pinterest + Instagram syndication', 'Visual fabric swatch DMs'],
    accent: 'var(--c-fiona)',
  },
];

const TIERS = [
  { n: 1, label: 'Local Retail & Food', price: '£80/mo' },
  { n: 2, label: 'Service · Logistics · Property', price: '£100/mo' },
  { n: 3, label: 'High-Ticket & Professional', price: '£120/mo' },
];

function Directory() {
  const [filter, setFilter] = React.useState(0); // 0 = all
  const [open, setOpen] = React.useState(null);

  const filtered = filter === 0 ? PRODUCTS : PRODUCTS.filter(p => p.tier === filter);

  return (
    <section id="directory">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-tag">
              <span className="dot" />
              03 · THE PRO 365 DIRECTORY
            </div>
            <h2>
              Nine industries.<br/>
              <span style={{ color: 'var(--c-sarah)' }}>One flat fee per month.</span>
            </h2>
          </div>
          <p className="lede">
            Each Pro 365 product ships with all four AI specialists, pre-tuned for the
            specific pain of your trade. Tap any tile for the full brief.
          </p>
        </div>

        {/* Tier filter */}
        <div style={{
          display: 'flex',
          gap: 0,
          marginBottom: 32,
          border: 'var(--rail-heavy)',
          background: 'var(--paper)',
        }}>
          {[{ n: 0, label: 'All 9 Products', price: 'from £80' }, ...TIERS].map((t, i) => {
            const isActive = filter === t.n;
            return (
              <button
                key={t.n}
                onClick={() => setFilter(t.n)}
                style={{
                  flex: 1,
                  appearance: 'none',
                  border: 0,
                  borderRight: i < TIERS.length ? 'var(--rail-heavy)' : 0,
                  background: isActive ? 'var(--ink)' : 'transparent',
                  color: isActive ? 'var(--paper)' : 'var(--ink)',
                  padding: '18px 20px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: 'inherit',
                }}
              >
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.12em', opacity: 0.7 }}>
                  {t.n === 0 ? 'ALL' : `TIER ${t.n}`}
                </div>
                <div style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: 18, marginTop: 2 }}>
                  {t.label}
                </div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, marginTop: 4, opacity: 0.8 }}>
                  {t.price}
                </div>
              </button>
            );
          })}
        </div>

        {/* Product grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          border: 'var(--rail-heavy)',
          borderRight: 0,
          borderBottom: 0,
        }}>
          {filtered.map((p, i) => (
            <ProductCard key={p.id} p={p} onOpen={() => setOpen(p)} />
          ))}
        </div>

        {/* Footer note */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginTop: 24, flexWrap: 'wrap', gap: 16,
          padding: '14px 20px',
          background: 'var(--paper-2)',
          border: 'var(--rail)',
          fontFamily: 'JetBrains Mono', fontSize: 12,
        }}>
          <span>● ALL PRODUCTS · FLAT MONTHLY · ZERO SETUP FEES · CANCEL ANYTIME</span>
          <span>● 100% TAX-DEDUCTIBLE BUSINESS EXPENSE</span>
        </div>
      </div>

      {open && <ProductDrawer p={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

function ProductCard({ p, onOpen }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={onOpen}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        appearance: 'none',
        border: 0,
        borderRight: 'var(--rail-heavy)',
        borderBottom: 'var(--rail-heavy)',
        background: hover ? p.accent : 'var(--paper)',
        padding: 28,
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'background 150ms',
        fontFamily: 'inherit',
        display: 'flex', flexDirection: 'column', gap: 14,
        minHeight: 280,
        position: 'relative',
      }}
    >
      {/* Tier pill */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.1em',
      }}>
        <span>TIER {p.tier}</span>
        <span style={{
          fontFamily: 'Montserrat', fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em',
        }}>
          £{p.price}<span style={{ fontSize: 11, fontWeight: 400 }}>/mo</span>
        </span>
      </div>

      <h3 style={{ fontSize: 30, letterSpacing: '-0.03em' }}>{p.name}</h3>

      <p style={{ fontSize: 13, color: hover ? 'var(--ink)' : 'var(--ink-soft)', flex: 1, margin: 0 }}>
        {p.angle}
      </p>

      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginTop: 'auto',
      }}>
        <div style={{ display: 'flex' }}>
          {p.heroes.map((id, i) => (
            <div key={id} style={{
              width: 40, height: 40,
              backgroundImage: `url(${MASCOTS[id].img})`,
              backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
              marginLeft: i === 0 ? 0 : -10,
              transform: hover ? `translateY(-3px) rotate(${i%2 ? 4 : -4}deg)` : 'none',
              transition: 'transform 180ms',
            }} />
          ))}
        </div>
        <span style={{
          fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.08em',
          textDecoration: 'underline',
          textUnderlineOffset: 4,
        }}>
          read brief →
        </span>
      </div>
    </button>
  );
}

function ProductDrawer({ p, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'rgba(14,13,12,0.65)',
      zIndex: 80,
      display: 'flex', justifyContent: 'flex-end',
      animation: 'fadeIn 200ms ease',
    }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{
        width: 'min(720px, 100%)',
        background: 'var(--paper)',
        borderLeft: 'var(--rail-heavy)',
        overflowY: 'auto',
        animation: 'slideIn 280ms cubic-bezier(.2,.8,.2,1)',
      }}>
        {/* header */}
        <div style={{
          position: 'sticky', top: 0, zIndex: 2,
          background: p.accent,
          padding: '20px 32px',
          borderBottom: 'var(--rail-heavy)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.12em' }}>
              TIER {p.tier} · £{p.price}/MO · FLAT
            </div>
            <h3 style={{ fontSize: 36, marginTop: 4, letterSpacing: '-0.03em' }}>{p.name}</h3>
          </div>
          <button onClick={onClose} style={{
            appearance: 'none', border: '2px solid var(--line)', background: 'var(--paper)',
            width: 42, height: 42, fontSize: 18, cursor: 'pointer', boxShadow: '3px 3px 0 var(--line)',
            fontFamily: 'inherit',
          }} aria-label="close">✕</button>
        </div>

        <div style={{ padding: 32 }}>
          <div className="eyebrow" style={{ marginBottom: 8 }}>WHO IT'S FOR</div>
          <p style={{ fontSize: 17, fontWeight: 600, marginBottom: 24 }}>{p.target}</p>

          <div className="eyebrow" style={{ marginBottom: 8 }}>THE PAIN</div>
          <p style={{ fontSize: 17, color: 'var(--ink-soft)', marginBottom: 8 }}>{p.pain}</p>

          <div className="eyebrow" style={{ marginBottom: 8, marginTop: 24 }}>WHAT THE AI DOES</div>
          <p style={{ fontSize: 19, fontWeight: 700, marginBottom: 24 }}>{p.angle}</p>

          {/* Mascot bios for this product */}
          <div className="eyebrow" style={{ marginBottom: 12 }}>YOUR PRIMARY SPECIALISTS</div>
          <div style={{ display: 'grid', gap: 12, marginBottom: 28 }}>
            {p.heroes.map(id => {
              const m = MASCOTS[id];
              return (
                <div key={id} style={{
                  display: 'grid', gridTemplateColumns: '64px 1fr',
                  gap: 16, alignItems: 'center',
                  padding: 14, border: 'var(--rail)', background: 'var(--paper-2)',
                }}>
                  <div style={{
                    width: 64, height: 64,
                    backgroundImage: `url(${m.img})`,
                    backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
                  }} />
                  <div>
                    <div style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: 18 }}>
                      {m.name} AI · <span style={{ color: 'var(--ink-mute)', fontWeight: 500, fontSize: 13 }}>{m.role}</span>
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 2 }}>{m.one}</div>
                  </div>
                </div>
              );
            })}
            {p.heroes.length < 4 && (
              <div style={{ fontSize: 12, fontFamily: 'JetBrains Mono', color: 'var(--ink-mute)' }}>
                + the other team members work in the background on every plan.
              </div>
            )}
          </div>

          <div className="eyebrow" style={{ marginBottom: 12 }}>PROOF POINTS</div>
          <div style={{ display: 'grid', gap: 0, marginBottom: 32 }}>
            {p.proof.map((line, i) => (
              <div key={i} style={{
                padding: '12px 0',
                borderTop: '1.5px solid var(--line)',
                borderBottom: i === p.proof.length - 1 ? '1.5px solid var(--line)' : 0,
                display: 'flex', gap: 12, alignItems: 'baseline',
                fontSize: 15,
              }}>
                <span style={{
                  fontFamily: 'JetBrains Mono', fontSize: 11, color: 'var(--ink-mute)',
                  minWidth: 32,
                }}>0{i+1}</span>
                <span style={{ flex: 1 }}>{line}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a className="btn" href="#onboarding">Hire {p.name} →</a>
            <button className="btn ghost" onClick={onClose}>Keep browsing</button>
          </div>
          <div style={{ marginTop: 16, fontSize: 12, color: 'var(--ink-mute)', fontFamily: 'JetBrains Mono' }}>
            ● 100% tax-deductible · ● cancel monthly · ● live in 48 hours
          </div>
        </div>
      </div>
      <style>{`
        @keyframes slideIn { from { transform: translateX(40px); opacity: 0; } to { transform: none; opacity: 1; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
}

window.Directory = Directory;
window.PRODUCTS = PRODUCTS;
