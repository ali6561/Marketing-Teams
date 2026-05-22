/* global React, MASCOTS, Hero, ProblemMatrix, Workforce, Directory, Compare, Onboarding, useTweaks, TweaksPanel, TweakSection, TweakSelect, TweakColor, TweakToggle, TweakSlider */

function Nav() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'var(--paper)',
      borderBottom: 'var(--rail-heavy)',
      backdropFilter: 'blur(8px)',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '14px 56px',
        maxWidth: 1500, margin: '0 auto',
      }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'inherit' }}>
          <Logo />
          <span style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 18, letterSpacing: '-0.02em' }}>
            MARKETING<wbr/>TEAMS<span style={{ color: 'var(--c-fiona)' }}>.</span>
          </span>
          
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, fontSize: 13, fontFamily: 'Montserrat', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
          <a href="#problem" style={{ textDecoration: 'none', color: 'inherit' }}>Problem</a>
          <a href="#workforce" style={{ textDecoration: 'none', color: 'inherit' }}>Workforce</a>
          <a href="#directory" style={{ textDecoration: 'none', color: 'inherit' }}>Pro 365</a>
          <a href="#compare" style={{ textDecoration: 'none', color: 'inherit' }}>Pricing</a>
          <a href="deck/index.html" style={{ textDecoration: 'none', color: 'inherit', opacity: 0.6, fontSize: 11 }}>Deck</a>
          <a href="#directory" className="btn sm">Hire now →</a>
        </div>
      </div>
    </nav>
  );
}

function Logo() {
  // Original 4-mascot composite mark
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 0,
      width: 36, height: 36,
      background: 'var(--ink)',
      borderRadius: 6,
      padding: 4,
      justifyContent: 'space-between',
    }}>
      {['arthur','fiona','oliver','sarah'].map(id => (
        <span key={id} style={{
          width: 6, height: '100%',
          background: MASCOTS[id].color,
        }} />
      ))}
    </span>
  );
}

function FAQ() {
  const items = [
    {
      q: 'How is this not just another marketing agency?',
      a: 'Because there is no human account manager between you and the work. The AI workforce executes directly. We are an enterprise-grade SaaS platform — the agency framing is for clarity, not structure.',
    },
    {
      q: 'What about brand voice? Won\'t it sound robotic?',
      a: 'Fiona is fine-tuned per-vertical and per-client. She learns your tone of voice from your existing posts in onboarding. You approve the first week of content; after that, she runs.',
    },
    {
      q: 'Who owns the content and the accounts?',
      a: 'You do. We never own your handles, your audience or your data. If you cancel, the workforce stops; everything stays with you.',
    },
    {
      q: 'What happens if Oliver replies badly to a customer?',
      a: 'Oliver classifies every conversation. Anything outside his confidence threshold is escalated to your phone in under 60 seconds. He never fabricates stock, pricing or commitments.',
    },
    {
      q: 'Why is it 100% tax-deductible?',
      a: 'Because it is a recurring business expense (software subscription) for a tool used wholly and exclusively for trade — speak to your accountant, but most UK independents claim it as a Class 1 deductible.',
    },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="tight">
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 56 }}>
        <div>
          <div className="section-tag" style={{ marginBottom: 20 }}>
            <span className="dot" />
            06 · FAQ
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
            Questions<br/>your accountant<br/>will ask.
          </h2>
        </div>
        <div style={{ border: 'var(--rail-heavy)', background: 'var(--paper)' }}>
          {items.map((it, i) => (
            <div key={i} style={{ borderBottom: i < items.length - 1 ? 'var(--rail)' : 0 }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  appearance: 'none', border: 0, background: 'transparent',
                  width: '100%', textAlign: 'left',
                  padding: '20px 24px', cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  fontFamily: 'Montserrat', fontWeight: 700, fontSize: 18, gap: 16,
                }}
              >
                <span>{it.q}</span>
                <span style={{
                  fontFamily: 'JetBrains Mono', fontSize: 20,
                  width: 28, height: 28, display: 'inline-flex',
                  alignItems: 'center', justifyContent: 'center',
                  border: '1.5px solid var(--line)',
                  transition: 'transform 200ms',
                  transform: open === i ? 'rotate(45deg)' : 'none',
                  flexShrink: 0,
                }}>+</span>
              </button>
              {open === i && (
                <div style={{ padding: '0 24px 22px 24px', fontSize: 15, color: 'var(--ink-soft)', maxWidth: 720 }}>
                  {it.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
      <div className="wrap" style={{ textAlign: 'center' }}>
        <div className="eyebrow red" style={{ color: 'var(--paper)', justifyContent: 'center', marginBottom: 24 }}>
          THE CLOCK IS ALREADY TICKING
        </div>
        <h2 style={{ fontSize: 'clamp(48px, 7vw, 120px)', maxWidth: 1200, margin: '0 auto' }}>
          Your competitor's AI<br/>
          is <span style={{ color: 'var(--c-fiona)' }}>replying</span> right now.
        </h2>
        <p style={{ maxWidth: 640, margin: '24px auto 36px', fontSize: 18, opacity: 0.8 }}>
          Every hour you don't have a workforce online is an hour a hot lead is being
          quoted, booked and closed by someone else. Fix it before lunch.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <a className="btn" href="#directory" style={{
            background: 'var(--c-sarah)', color: 'var(--ink)',
            border: '2.5px solid var(--c-sarah)',
            boxShadow: '6px 6px 0 var(--paper)',
            minWidth: 220, textAlign: 'center',
          }}>
            Hire your workforce →
          </a>
        </div>

        {/* Mascot lineup */}
        <div style={{ marginTop: 64, display: 'flex', justifyContent: 'center', gap: 8 }}>
          {['arthur','fiona','oliver','sarah'].map((id, i) => (
            <div key={id} style={{
              width: 120, height: 120,
              backgroundImage: `url(${MASCOTS[id].img})`,
              backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
              animation: `bob 2.${i+2}s ease-in-out infinite alternate`,
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      background: 'var(--paper)',
      borderTop: 'var(--rail-heavy)',
      padding: '48px 56px 24px',
      fontSize: 13,
    }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48 }}>
        <div>
          <Logo />
          <div style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 20, letterSpacing: '-0.02em', marginTop: 12 }}>
            MARKETING<wbr/>TEAMS<span style={{ color: 'var(--c-fiona)' }}>.</span>
          </div>
          <p style={{ marginTop: 12, color: 'var(--ink-soft)', maxWidth: 360 }}>
            A house of brands of industry-tuned AI workforces for independent UK businesses.
          </p>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 10 }}>PRODUCTS</div>
          <div style={{ display: 'grid', gap: 6 }}>
            {['Retail','Food','Auto','Property','Taxi','PI','Crim','E-com','Furniture'].map(p => (
              <a key={p} href="#directory" style={{ color: 'inherit', textDecoration: 'none' }}>{p} Pro 365</a>
            ))}
          </div>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 10 }}>WORKFORCE</div>
          <div style={{ display: 'grid', gap: 6 }}>
            {['Arthur · Data','Fiona · Content','Oliver · Sales','Sarah · Reputation'].map(p => (
              <a key={p} href="#workforce" style={{ color: 'inherit', textDecoration: 'none' }}>{p}</a>
            ))}
          </div>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 10 }}>COMPANY</div>
          <div style={{ display: 'grid', gap: 6 }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Manifesto</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Founder note</a>
            <a href="#faq" style={{ color: 'inherit', textDecoration: 'none' }}>FAQ</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy / DPA</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
          </div>
        </div>
      </div>
      <div className="wrap" style={{
        marginTop: 40, paddingTop: 20, borderTop: 'var(--rail)',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        fontFamily: 'JetBrains Mono', fontSize: 11, color: 'var(--ink-mute)',
      }}>
        <span>© 2026 MARKETING TEAMS LTD · ENGLAND & WALES</span>
        <span>● ALL WORKFORCES OPERATIONAL</span>
      </div>
    </footer>
  );
}

/* ============== APP + TWEAKS ============== */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "paper": "#f5f1ea",
  "ink": "#0e0d0c",
  "accent": "fiona",
  "density": "comfortable",
  "grain": true,
  "ticker": true
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--paper', tweaks.paper);
    r.style.setProperty('--ink', tweaks.ink);
    // tone paper-2 ~ slightly darker
    r.style.setProperty('--paper-2', shade(tweaks.paper, -6));
    r.style.setProperty('--line', tweaks.ink);
  }, [tweaks.paper, tweaks.ink]);

  return (
    <div id="top">
      {tweaks.grain && <div className="grain" />}
      <Nav />
      <Hero />
      <ProblemMatrix />
      <Workforce />
      <Directory />
      <Compare />
      <Onboarding />
      <FAQ />
      <FinalCTA />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Aesthetic">
          <TweakColor
            label="Paper (background)"
            value={tweaks.paper}
            onChange={v => setTweak('paper', v)}
            options={['#f5f1ea', '#ffffff', '#eee9df', '#fff7e8', '#0e0d0c']}
          />
          <TweakColor
            label="Ink (foreground)"
            value={tweaks.ink}
            onChange={v => setTweak('ink', v)}
            options={['#0e0d0c', '#1c1b18', '#2a2926', '#3a2a1a']}
          />
          <TweakToggle
            label="Grain overlay"
            value={tweaks.grain}
            onChange={v => setTweak('grain', v)}
          />
        </TweakSection>
        <TweakSection title="Voice & energy">
          <p style={{ fontSize: 12, color: '#888', margin: '0 0 8px' }}>
            Each accent reskins headlines & hero punchwords.
          </p>
          <TweakSelect
            label="Headline accent"
            value={tweaks.accent}
            onChange={v => {
              setTweak('accent', v);
              const map = {
                fiona: 'var(--c-fiona)',
                oliver: 'var(--c-oliver)',
                sarah: 'var(--c-sarah)',
                arthur: 'var(--c-arthur)',
              };
              document.documentElement.style.setProperty('--c-fiona', map[v] ? getComputedStyle(document.documentElement).getPropertyValue(`--c-${v}`).trim() : '#ff4d97');
            }}
            options={[
              { value: 'fiona',  label: 'Hot pink (Fiona)' },
              { value: 'oliver', label: 'Teal (Oliver)' },
              { value: 'sarah',  label: 'Sun yellow (Sarah)' },
              { value: 'arthur', label: 'Electric purple (Arthur)' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

function shade(hex, delta) {
  // simple lighten/darken
  const c = hex.replace('#','');
  if (c.length !== 6) return hex;
  const r = Math.max(0, Math.min(255, parseInt(c.slice(0,2),16) + delta));
  const g = Math.max(0, Math.min(255, parseInt(c.slice(2,4),16) + delta));
  const b = Math.max(0, Math.min(255, parseInt(c.slice(4,6),16) + delta));
  return '#' + [r,g,b].map(x => x.toString(16).padStart(2,'0')).join('');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
