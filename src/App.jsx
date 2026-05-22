import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AGENT_TODAY, MASCOTS, PRODUCTS } from '../shared/data.js';

const LANDING_PROBLEMS = [
  {
    title: 'Digital Silence',
    body: 'You have a good business, but the internet sees it as an empty shopfront. The algorithm rewards whoever shows up most.',
    badge: 'Algorithm penalty',
    stat: '−68% reach'
  },
  {
    title: 'Inbox Black Hole',
    body: 'A lead messages at 02:17. You see it at 09:00. The competitor replies in three minutes and gets the booking.',
    badge: 'Average reply',
    stat: '7h 42m'
  },
  {
    title: 'Map Anonymity',
    body: 'You are invisible when customers search near me. Review velocity, not hope, is what moves the ranking.',
    badge: 'Review velocity',
    stat: '1.2× / mo'
  }
];

const PRODUCT_ROWS = ['retail', 'food', 'auto', 'property', 'taxi', 'pi', 'crim', 'ecom', 'furniture'];

const FAQS = [
  ['At this price, what is the hidden catch or setup fee?', 'There isn’t one. You are paying to license enterprise-grade software, not covering a human\'s sick pay, holidays, or office space. There are zero setup fees, and the flat weekly rate is 100% transparent.'],
  ['Will my customers know they are speaking to a bot?', 'No. Oliver and Sarah are custom-tuned to your specific industry and brand guidelines. They don\'t sound like robotic scripts; they process context and reply with empathetic, accurate, and highly professional language in under 30 seconds.'],
  ['I am not tech-savvy. How hard is this to configure?', 'Onboarding takes less than 10 minutes. You simply click to connect your existing Google and Meta profiles securely. Our engineering team handles all the complex AI training and deployment in the background.'],
  ['Am I locked into a 12-month agency retainer?', 'Absolutely not. The traditional locked-in agency contract is dead. Our Pro 365 architectures operate on a strictly rolling monthly basis. If you aren\'t thrilled with the increased footfall, you can cancel at any time.'],
  ['Who owns the social accounts, the content, and the generated leads?', 'You do. 100%. Marketing Teams simply acts as the engine driving the vehicle. You retain full administrative control over your Meta and Google accounts, and all leads captured belong exclusively to your database.']
];

function Logo() {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 0, width: 36, height: 36, background: 'var(--ink)', borderRadius: 6, padding: 4, justifyContent: 'space-between' }}>
      {Object.values(MASCOTS).map((mascot) => <span key={mascot.name} style={{ width: 6, height: '100%', background: mascot.color }} />)}
    </span>
  );
}

function LandingNav() {
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'var(--paper)', borderBottom: 'var(--rail-heavy)', backdropFilter: 'blur(8px)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 56px', maxWidth: 1500, margin: '0 auto' }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'inherit' }}>
          <Logo />
          <span style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 18, letterSpacing: '-0.02em' }}>
            MARKETING<wbr />TEAMS<span style={{ color: 'var(--c-fiona)' }}>.</span>
          </span>
          
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, fontSize: 13, fontFamily: 'Montserrat', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
          <a href="#problem" style={{ textDecoration: 'none', color: 'inherit' }}>Problem</a>
          <a href="#workforce" style={{ textDecoration: 'none', color: 'inherit' }}>Workforce</a>
          <a href="#directory" style={{ textDecoration: 'none', color: 'inherit' }}>Pro 365</a>
          <a href="#compare" style={{ textDecoration: 'none', color: 'inherit' }}>Pricing</a>
          <Link to="/hire-us" className="btn sm">Hire us →</Link>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.35fr 0.9fr', gap: 48, alignItems: 'center' }}>
        <div>
          <div className="eyebrow red" style={{ marginBottom: 24 }}>THE AGENCY KILLER</div>
          <h1 style={{ fontSize: 'clamp(54px, 8vw, 128px)', maxWidth: 1080 }}>
            Fire the <span style={{ color: 'var(--c-fiona)' }}>£1,500/mo</span> agency.
            <br />
            <span style={{ background: 'var(--ink)', color: 'var(--paper)', display: 'inline-block', padding: '0 14px', transform: 'rotate(-1deg)' }}>Hire the bots.</span>
          </h1>
          <p style={{ maxWidth: 760, fontSize: 22, lineHeight: 1.5, color: 'var(--ink-soft)', marginTop: 28 }}>
            An enterprise-grade AI workforce for independent UK businesses. From £80/month, live in 48 hours, and built to replace the busywork that is draining revenue.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 32 }}>
            <a className="btn" href="#directory">View products</a>
            <a className="btn ghost" href="#workforce">Meet the workforce</a>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div className="card pop" style={{ padding: 28, background: 'var(--paper-2)' }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Live operating snapshot</div>
            <div style={{ display: 'grid', gap: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}>
                <span>Avg reply time</span><strong>42 seconds</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}>
                <span>Posts scheduled today</span><strong>184</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}>
                <span>Reviews intercepted</span><strong>312</strong>
              </div>
              <div className="marquee" style={{ marginTop: 4, border: 'var(--rail)', borderRadius: 0 }}>
                <div className="track" style={{ animationDuration: '24s' }}>
                  <span>● All workforces operational</span>
                  <span className="star">★</span>
                  <span>99.997% uptime</span>
                  <span className="star">★</span>
                  <span>12 minute brief</span>
                  <span className="star">★</span>
                  <span>UK tax-deductible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="marquee">
      <div className="track">
        <span>LOCAL SEO</span><span className="star">★</span><span>SOCIAL CONTENT</span><span className="star">★</span><span>INBOX COVER</span><span className="star">★</span><span>REVIEWS</span><span className="star">★</span><span>LOCAL SEO</span><span className="star">★</span><span>SOCIAL CONTENT</span><span className="star">★</span><span>INBOX COVER</span><span className="star">★</span><span>REVIEWS</span>
      </div>
    </div>
  );
}

function SectionHeading({ label, title, lede }) {
  return (
    <div className="section-head">
      <div>
        <div className="section-tag"><span className="dot" />{label}</div>
        <h2>{title}</h2>
      </div>
      <p className="lede">{lede}</p>
    </div>
  );
}

function ProblemSection() {
  return (
    <section id="problem">
      <div className="wrap">
        <SectionHeading
          label="01 · The premise"
          title={<>Three leaks every independent business is suffering, silently.</>}
          lede="The business is usually not broken. The discovery, response, and follow-up layers are leaking value every hour."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: 'var(--rail-heavy)' }}>
          {LANDING_PROBLEMS.map((problem, index) => (
            <div key={problem.title} style={{ padding: 32, borderRight: index < LANDING_PROBLEMS.length - 1 ? 'var(--rail)' : '0', background: index === 1 ? 'var(--paper-2)' : 'var(--paper)' }}>
              <div className="mono" style={{ fontSize: 12, letterSpacing: '0.16em', color: 'var(--ink-mute)' }}>{problem.badge.toUpperCase()}</div>
              <h3 style={{ fontSize: 44, marginTop: 18 }}>{problem.title}</h3>
              <p style={{ fontSize: 18, marginTop: 22, color: 'var(--ink-soft)' }}>{problem.body}</p>
              <div style={{ marginTop: 28, padding: '12px 16px', background: index === 2 ? 'var(--c-sarah)' : index === 1 ? 'var(--ink)' : 'var(--c-fiona)', color: index === 1 ? 'var(--paper)' : 'var(--ink)', fontFamily: 'JetBrains Mono', fontSize: 13, fontWeight: 700, letterSpacing: '0.06em' }}>
                {problem.badge.toUpperCase()} · {problem.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkforceSection() {
  return (
    <section id="workforce">
      <div className="wrap">
        <SectionHeading
          label="02 · Workforce"
          title={<>Four agents, one operating system.</>}
          lede="Each role has a narrow job, a visible output, and a built-in fallback to avoid hallucinated commitments."
        />
        <div className="eq-3" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {Object.entries(MASCOTS).map(([key, mascot]) => (
            <div key={key} className="card pop" style={{ padding: 24, background: 'var(--paper)', minHeight: 320 }}>
              <div style={{ height: 120, backgroundImage: `url(${mascot.img})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', marginBottom: 18 }} />
              <div className="eyebrow">{mascot.role}</div>
              <h3 style={{ fontSize: 30, marginTop: 10 }}>{mascot.name}</h3>
              <p style={{ color: 'var(--ink-soft)', marginTop: 14, fontSize: 15 }}>
                {key === 'arthur' && 'Data intake, PDF parsing, and source of truth checks.'}
                {key === 'fiona' && 'Social content, tone control, and scheduling.'}
                {key === 'oliver' && 'Lead reply, quote qualification, and routing.'}
                {key === 'sarah' && 'Review interception, escalation, and recovery.'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DirectorySection() {
  return (
    <section id="directory">
      <div className="wrap">
        <SectionHeading
          label="03 · Products"
          title={<>Pro 365 packages, tuned by industry.</>}
          lede="The same operating model, adjusted for the economics and response patterns of each vertical."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {PRODUCT_ROWS.map((slug) => {
            const product = PRODUCTS[slug];
            return (
              <div key={slug} className="card pop" style={{ padding: 24, borderTop: `6px solid ${product.color}` }}>
                <div className="pill" style={{ color: product.color, borderColor: product.color }}>{product.tier === 1 ? 'Starter' : product.tier === 2 ? 'Growth' : 'Scale'}</div>
                <h3 style={{ fontSize: 28, marginTop: 18 }}>{product.name}</h3>
                <p style={{ marginTop: 10, color: 'var(--ink-soft)' }}>From the landing page through to lead capture, replies, and reputation recovery.</p>
                <div style={{ marginTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ fontSize: 22 }}>£{product.price}/mo</strong>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CompareSection() {
  return (
    <section id="compare" className="tight">
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        <div className="card solid pop" style={{ padding: 32 }}>
          <div className="eyebrow red" style={{ color: 'var(--paper)' }}>Agency model</div>
          <h3 style={{ fontSize: 38, marginTop: 18 }}>You pay for meetings, not output.</h3>
          <ul style={{ paddingLeft: 18, marginTop: 20, color: 'rgba(245,241,234,0.85)', fontSize: 16, lineHeight: 1.75 }}>
            <li>Slow response times and manual churn.</li>
            <li>Multiple humans between intent and execution.</li>
            <li>Recurring fees even when nothing ships.</li>
          </ul>
        </div>
        <div className="card pop" style={{ padding: 32, background: 'var(--paper-2)' }}>
          <div className="eyebrow">Marketing Teams model</div>
          <h3 style={{ fontSize: 38, marginTop: 18 }}>Software that ships every day.</h3>
          <ul style={{ paddingLeft: 18, marginTop: 20, color: 'var(--ink-soft)', fontSize: 16, lineHeight: 1.75 }}>
            <li>Direct execution from structured prompts and templates.</li>
            <li>Agent coverage across content, sales, and reputation.</li>
            <li>Visible metrics, with human escalation when needed.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = React.useState(0);

  return (
    <section id="faq" className="tight">
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 56 }}>
        <div>
          <div className="section-tag" style={{ marginBottom: 20 }}><span className="dot" />04 · FAQ</div>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>No Jargon. Just Answers.</h2>
        </div>
        <div style={{ border: 'var(--rail-heavy)', background: 'var(--paper)' }}>
          {FAQS.map(([question, answer], index) => (
            <div key={question} style={{ borderBottom: index < FAQS.length - 1 ? 'var(--rail)' : '0' }}>
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                style={{ appearance: 'none', border: 0, background: 'transparent', width: '100%', textAlign: 'left', padding: '20px 24px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Montserrat', fontWeight: 700, fontSize: 18, gap: 16 }}
              >
                <span>{question}</span>
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: 20, width: 28, height: 28, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid var(--line)', transition: 'transform 200ms', transform: open === index ? 'rotate(45deg)' : 'none', flexShrink: 0 }}>+</span>
              </button>
              {open === index && <div style={{ padding: '0 24px 22px 24px', fontSize: 15, color: 'var(--ink-soft)', maxWidth: 720 }}>{answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
      <div className="wrap" style={{ textAlign: 'center' }}>
        <div className="eyebrow red" style={{ color: 'var(--paper)', justifyContent: 'center', marginBottom: 24 }}>THE CLOCK IS ALREADY TICKING</div>
        <h2 style={{ fontSize: 'clamp(48px, 7vw, 120px)', maxWidth: 1200, margin: '0 auto' }}>
          Your competitor's AI is replying right now.
        </h2>
        <p style={{ maxWidth: 640, margin: '24px auto 36px', fontSize: 18, opacity: 0.8 }}>
          Every hour you wait is an hour a hot lead is being quoted, booked, and closed by somebody else. Fix it before lunch.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <Link className="btn" to="/hire-us" style={{ background: 'var(--c-sarah)', color: 'var(--ink)', border: '2.5px solid var(--c-sarah)', boxShadow: '6px 6px 0 var(--paper)' }}>Hire us →</Link>
        </div>
        <div style={{ marginTop: 64, display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
          {Object.values(MASCOTS).map((mascot, index) => <div key={mascot.name} style={{ width: 120, height: 120, backgroundImage: `url(${mascot.img})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', animation: `bob 2.${index + 2}s ease-in-out infinite alternate` }} />)}
        </div>
      </div>
    </section>
  );
}

function LandingFooter() {
  return (
    <footer style={{ background: 'var(--paper)', borderTop: 'var(--rail-heavy)', padding: '48px 56px 24px', fontSize: 13 }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48 }}>
        <div>
          <Logo />
          <div style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 20, letterSpacing: '-0.02em', marginTop: 12 }}>MARKETING<wbr />TEAMS<span style={{ color: 'var(--c-fiona)' }}>.</span></div>
          <p style={{ marginTop: 12, color: 'var(--ink-soft)', maxWidth: 360 }}>A house of brands of industry-tuned AI workforces for independent UK businesses.</p>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 10 }}>Products</div>
          <div style={{ display: 'grid', gap: 6 }}>
            {Object.values(PRODUCTS).map((product) => <a key={product.name} href="#directory" style={{ color: 'inherit', textDecoration: 'none' }}>{product.name}</a>)}
          </div>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 10 }}>Workforce</div>
          <div style={{ display: 'grid', gap: 6 }}>
            {Object.values(MASCOTS).map((mascot) => <a key={mascot.name} href="#workforce" style={{ color: 'inherit', textDecoration: 'none' }}>{mascot.name} · {mascot.role}</a>)}
          </div>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 10 }}>Company</div>
          <div style={{ display: 'grid', gap: 6 }}>
            <a href="#top" style={{ color: 'inherit', textDecoration: 'none' }}>Manifesto</a>
            <a href="#faq" style={{ color: 'inherit', textDecoration: 'none' }}>FAQ</a>
          </div>
        </div>
      </div>
      <div className="wrap" style={{ marginTop: 40, paddingTop: 20, borderTop: 'var(--rail)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontFamily: 'JetBrains Mono', fontSize: 11, color: 'var(--ink-mute)' }}>
        <span>© 2026 MARKETING TEAMS LTD · ENGLAND & WALES</span>
        <span>● ALL WORKFORCES OPERATIONAL</span>
      </div>
    </footer>
  );
}

function HireUsPage() {
  const fieldStyle = {
    width: '100%',
    border: '1.5px solid var(--line)',
    background: 'var(--paper)',
    padding: '14px 16px',
    borderRadius: 10,
    fontFamily: 'Nunito',
    fontSize: 15,
    color: 'var(--ink)'
  };

  React.useEffect(() => {
    function scrollToHash() {
      try {
        const hash = window.location.hash;
        if (!hash) {
          window.scrollTo({ top: 0 });
          return;
        }
        const id = hash.replace('#', '');
        const landingIds = ['top', 'problem', 'workforce', 'directory', 'compare', 'faq', 'onboarding'];
        if (landingIds.includes(id)) {
          // Replace the current history entry and navigate to the landing page hash
          // Use replace so /hire-us is removed from the URL and not kept in history
          window.location.replace(window.location.origin + '/#' + id);
          return;
        }
        const el = document.getElementById(id);
        if (el) el.scrollIntoView(); else window.scrollTo({ top: 0 });
      } catch (e) {
        window.scrollTo({ top: 0 });
      }
    }

    // Scroll on mount
    scrollToHash();
    // Also respond to future hash changes
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <div id="top">
      <LandingNav />
      <section className="tight">
        <div className="wrap" style={{ maxWidth: 980 }}>
          <div className="eyebrow red" style={{ marginBottom: 18 }}>Hire us</div>
          <h1 style={{ fontSize: 'clamp(42px, 6vw, 82px)', maxWidth: 860 }}>
            Tell us about your company.
          </h1>
          <p style={{ maxWidth: 780, fontSize: 18, lineHeight: 1.6, color: 'var(--ink-soft)', marginTop: 18 }}>
            Fill out the form below and we’ll use it to understand your business, your goals, and the support you need.
          </p>

          <div className="card pop" style={{ marginTop: 32, padding: 28, background: 'var(--paper-2)' }}>
            <div className="section-tag" style={{ marginBottom: 18 }}><span className="dot" />Company details</div>
            <form onSubmit={(event) => event.preventDefault()} style={{ display: 'grid', gap: 18 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <label style={{ display: 'grid', gap: 8 }}>
                  <span className="eyebrow">Company name</span>
                  <input style={fieldStyle} type="text" name="companyName" placeholder="company ltd" required />
                </label>
                <label style={{ display: 'grid', gap: 8 }}>
                  <span className="eyebrow">Contact number</span>
                  <input style={fieldStyle} type="text" name="companyNumber" placeholder="1234567890" />
                </label>
              </div>

              <label style={{ display: 'grid', gap: 8 }}>
                <span className="eyebrow">Company address</span>
                <input style={fieldStyle} type="text" name="companyAddress" placeholder="Street, City, Postcode" />
              </label>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <label style={{ display: 'grid', gap: 8 }}>
                  <span className="eyebrow">Website</span>
                  <input style={fieldStyle} type="url" name="website" placeholder="https://yourcompany.co.uk" />
                </label>
                <label style={{ display: 'grid', gap: 8 }}>
                  <span className="eyebrow">Package</span>
                  <select style={fieldStyle} name="package" defaultValue="Retail Pro 365">
                    <option>Retail Pro 365</option>
                    <option>Food Pro 365</option>
                    <option>Auto Pro 365</option>
                    <option>Property Pro 365</option>
                    <option>Taxi Pro 365</option>
                    <option>PI Pro 365</option>
                    <option>Crim Pro 365</option>
                    <option>E-com Pro 365</option>
                    <option>Furniture Pro 365</option>
                    <option>All of the above</option>
                  </select>
                </label>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <label style={{ display: 'grid', gap: 8 }}>
                  <span className="eyebrow">Contact name</span>
                  <input style={fieldStyle} type="text" name="contactName" placeholder="Name" required />
                </label>
                <label style={{ display: 'grid', gap: 8 }}>
                  <span className="eyebrow">Contact role</span>
                  <input style={fieldStyle} type="text" name="contactRole" placeholder="Head of Marketing" />
                </label>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <label style={{ display: 'grid', gap: 8 }}>
                  <span className="eyebrow">Contact email</span>
                  <input style={fieldStyle} type="email" name="contactEmail" placeholder="email@company.co.uk" required />
                </label>
                
              </div>

              <label style={{ display: 'grid', gap: 8 }}>
                <span className="eyebrow">Notes</span>
                <textarea style={{ ...fieldStyle, minHeight: 120, resize: 'vertical' }} name="notes" placeholder="Anything else we should know"></textarea>
              </label>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                <button className="btn" type="submit">Send details</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <LandingFooter />
    </div>
  );
}

function LandingPage() {
  return (
    <div id="top">
      <LandingNav />
      <Hero />
      <Marquee />
      <ProblemSection />
      <WorkforceSection />
      <DirectorySection />
      <CompareSection />
      <FaqSection />
      <FinalCta />
      <LandingFooter />
    </div>
  );
}

// Admin UI removed — admin route was removed and admin components archived.

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/hire-us" element={<HireUsPage />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

