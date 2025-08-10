import React, { useMemo, useState } from "react";

const CONFIG = {
  businessName: "Cousins Cleanouts",
  phoneNickDisplay: "715-304-7663",
  phoneNickE164: "+17153047663",
  phoneShaneDisplay: "715-944-9389",
  phoneShaneE164: "+17159449389",
  email: "Sales@cousinscleanouts.com",
  serviceArea: "Chippewa / Eau Claire Area, WI",
  facebookUrl: "https://www.facebook.com/profile.php?id=61578240786797",
  heroBg:
    "https://images.unsplash.com/photo-1565610314838-9f0efc9e6e4a?q=80&w=1600&auto=format&fit=crop",
  logo: "/logo.png",
  brand: {
    primary: "#C25A2B", // orange from your logo
    dark: "#0B0F19",
  },
  // Leave gallery empty for now – add paths to images here later
  gallery: [],
};

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Compose mailto: link for form submission
  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`${CONFIG.businessName} – Quote Request`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nDetails:\n${message}`
    );
    return `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
  }, [name, email, phone, message]);

  return (
    <div style={styles.page}>
      <SiteStyles />
      <Header />
      <Hero />
      <Services />
      <Rental />
      <Pricing />
      <Photos />
      <Reviews />
      <Contact
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        message={message}
        setMessage={setMessage}
        mailtoHref={mailtoHref}
      />
      <Footer />
    </div>
  );
}

// Header with logo, navigation links, and call button (Nick)
function Header() {
  return (
    <header style={styles.headerWrapper}>
      <div style={styles.containerRow}>
        <a href="#top" style={styles.brandLink}>
          <img src={CONFIG.logo} alt="Cousins Cleanouts logo" style={{ height: 40 }} />
          <div>
            <div style={styles.brandName}>{CONFIG.businessName}</div>
            <div style={styles.brandTag}>Junk Removal • Dump Trailer Rental</div>
          </div>
        </a>
        {/* Navigation links restored */}
        <nav style={styles.nav}>
          <a style={styles.navLink} href="#services">Services</a>
          <a style={styles.navLink} href="#rental">Trailer Rental</a>
          <a style={styles.navLink} href="#pricing">Pricing</a>
          <a style={styles.navLink} href="#photos">Photos</a>
          <a style={styles.navLink} href="#contact">Contact</a>
        </nav>
        {/* Call Now button uses Nick’s number */}
        <a
          href={`tel:${CONFIG.phoneNickE164}`}
          style={styles.callBtn}
        >
          Call Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      style={{ ...styles.hero, backgroundImage: `url(${CONFIG.heroBg})` }}
    >
      <div style={styles.heroOverlay}>
        <div style={styles.containerGrid2}>
          <div>
            <img src={CONFIG.logo} alt="Cousins Cleanouts logo" style={{ height: 120 }} />
            <h1 style={styles.h1}>
              Fast, Friendly{" "}
              <span style={{ color: CONFIG.brand.primary }}>Cleanouts</span>
            </h1>
            <p style={styles.heroP}>
              Storm cleanup, full-service junk removal, and affordable dump trailer
              rentals. Serving {CONFIG.serviceArea}.
            </p>
            <div style={styles.rowGap}>
              <a href="#rental" style={styles.primaryBtn}>Book a Trailer</a>
              <a href="#contact" style={styles.secondaryBtn}>Get a Free Quote</a>
            </div>
            <div style={styles.heroMetaRow}>
              <span>Licensed & Insured</span>
              <span>Same/Next-Day</span>
              <span>Local Family Business</span>
            </div>
          </div>

          {/* CTA card unchanged */}
          <div style={styles.ctaCard}>
            <div style={styles.ctaCardHeader}>Need it gone today?</div>
            <div style={styles.ctaCardBody}>
              <a href={`sms:${CONFIG.phoneNickE164}`} style={styles.primaryBtnFull}>
                Text a Photo
              </a>
              <div style={styles.smallMuted}>
                Or call <a href={`tel:${CONFIG.phoneNickE164}`}>{CONFIG.phoneNickDisplay}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" style={styles.section}>
      <h2 style={styles.h2}>What We Do</h2>
      <div style={styles.cards3}>
        <Card title="Junk Removal">
          Full-service cleanouts for garages, basements, estates, renovations, and more. We lift, load, haul, and dispose responsibly.
        </Card>
        <Card title="Dump Trailer Rental">
          Need a trailer on-site? We drop it off, you fill it, we haul it away. Perfect for DIY cleanups and remodels.
        </Card>
        <Card title="U-Fill, We Haul">
          Budget-friendly option: you stage items, we load quickly and go. Ask about storm cleanup specials.
        </Card>
      </div>
    </section>
  );
}

function Rental() {
  return (
    <section id="rental" style={styles.sectionAlt}>
      <div style={styles.container}>
        <div style={styles.rowBetween}>
          <h2 style={styles.h2}>Dump Trailer Rental</h2>
        </div>
        <div style={styles.grid2}>
          <Card title="Simple, Transparent Pricing">
            <ul style={styles.ul}>
              <li>Day rate + dump fees (priced by weight)</li>
              <li>Includes drop-off & pick-up in local area</li>
              <li>Typical capacity: 12–14 yards (update if different)</li>
            </ul>
          </Card>
          <Card title="Reserve Your Date" accent>
            Call, text, or email us to reserve a trailer. We’ll confirm details and delivery window.
          </Card>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" style={styles.section}>
      <h2 style={styles.h2}>Typical Pricing</h2>
      <div style={styles.cards4}>
        <Card title="Single Item Pickups">
          <div style={styles.price}>Min $80</div>
          Curbside discounts available. Mattresses, couches, appliances.
        </Card>
        <Card title="Appliance Pickups">
          <div style={styles.price}>$50 each</div>
          Refrigerators, washers, dryers, etc.
        </Card>
        <Card title="Half Load (6–7 yds)">
          <div style={styles.price}>$250–$350</div>
          Great for garage cleanouts & small remodels.
        </Card>
        <Card title="Full Load (12–14 yds)" accent>
          <div style={styles.price}>$400–$600</div>
          Includes labor, hauling, and disposal (weight limits apply).
        </Card>
      </div>
      <div style={styles.fineprint}>
        *Final pricing depends on access, weight, and item types. We’ll confirm before any work starts.
      </div>
    </section>
  );
}

// Updated Photos section: shows a message if no photos are listed
function Photos() {
  return (
    <section id="photos" style={styles.sectionAlt}>
      <div style={styles.container}>
        <h2 style={styles.h2}>Recent Jobs</h2>
        {CONFIG.gallery.length === 0 ? (
          <p>No photos available at the moment. Check back soon!</p>
        ) : (
          <div style={styles.grid3Img}>
            {CONFIG.gallery.map((src, i) => (
              <img key={i} src={src} alt={`Job ${i + 1}`} style={styles.galleryImg} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    "On time and super friendly!",
    "Made storm cleanup painless.",
    "Fair price, fast work, zero stress.",
  ];
  return (
    <section style={styles.section}>
      <h2 style={styles.h2}>Neighbors Love Us</h2>
      <div style={styles.cards3}>
        {reviews.map((txt, i) => (
          <Card key={i}>
            <p>“{txt}”</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Contact({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  message,
  setMessage,
  mailtoHref,
}) {
  return (
    <section id="contact" style={styles.sectionAlt}>
      <div style={styles.containerGrid2}>
        <div>
          <h2 style={styles.h2}>Get a Free Quote</h2>
          <p style={styles.lead}>
            Tell us what you’re dealing with—photos help. Same-day and next-day slots go fast.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailtoHref;
            }}
            style={styles.form}
          >
            <input
              style={styles.input}
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              style={styles.input}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              style={styles.input}
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <textarea
              style={{ ...styles.input, minHeight: 120 }}
              placeholder="What do you need gone? Address, access details, preferred dates."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <div style={styles.rowGap}>
              <button
                type="submit"
                style={{ ...styles.primaryBtn, background: CONFIG.brand.primary }}
              >
                Send
              </button>
              <a href={`sms:${CONFIG.phoneNickE164}`} style={styles.secondaryBtn}>
                Text Us
              </a>
            </div>
            <div style={styles.smallMuted}>
              Attaching photos? Use the Text Us button for the fastest quote.
            </div>
          </form>
        </div>
        <div style={styles.stackGap}>
          <Card>
            <div style={styles.stackGap}>
              <div>
                <strong>Nick:</strong>{" "}
                <a href={`tel:${CONFIG.phoneNickE164}`}>{CONFIG.phoneNickDisplay}</a>
              </div>
              <div>
                <strong>Shane:</strong>{" "}
                <a href={`tel:${CONFIG.phoneShaneE164}`}>{CONFIG.phoneShaneDisplay}</a>
              </div>
              <div>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
              </div>
              <div>
                <strong>Area:</strong> {CONFIG.serviceArea}
              </div>
              <div>
                <strong>Facebook:</strong>{" "}
                <a href={CONFIG.facebookUrl} target="_blank" rel="noreferrer">
                  Find us on Facebook
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.containerRow}>
        <div>
          <img src={CONFIG.logo} alt="Cousins Cleanouts logo" style={{ height: 50 }} />
        </div>
        <div>
          <div>Serving {CONFIG.serviceArea}</div>
          <div>Licensed & Insured</div>
        </div>
        <div>
          <a href={`tel:${CONFIG.phoneNickE164}`} style={styles.secondaryBtn}>Call</a>{" "}
          <a href="#rental" style={styles.primaryBtn}>Book</a>
        </div>
      </div>
      <div style={styles.copy}>
        © {new Date().getFullYear()} {CONFIG.businessName}. All rights reserved.
      </div>
    </footer>
  );
}

function Card({ title, accent = false, children }) {
  return (
    <div
      style={{
        ...styles.card,
        border: accent
          ? `2px solid ${CONFIG.brand.primary}`
          : "1px solid #e5e7eb",
      }}
    >
      {title ? <div style={styles.cardTitle}>{title}</div> : null}
      <div>{children}</div>
    </div>
  );
}

function SiteStyles() {
  return (
    <style>{`
      :root { --brand: ${CONFIG.brand.primary}; }
      *{box-sizing:border-box}
      html,body,#root{height:100%}
      body{margin:0;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#111827;background:#fafafa}
      a{color:#111827}
      a:hover{text-decoration:underline}
      button{cursor:pointer}
      @media (max-width: 860px){
        nav{display:none}
      }
    `}</style>
  );
}

// Styles object replicating original layout
const styles = {
  page: { minHeight: "100%", display: "flex", flexDirection: "column" },
  container: { maxWidth: 1120, margin: "0 auto", padding: "0 16px" },
  containerRow: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "8px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  containerGrid2: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "0 16px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
  },
  section: { maxWidth: 1120, margin: "0 auto", padding: "64px 16px" },
  sectionAlt: {
    background: "#fff",
    borderTop: "1px solid #eee",
    borderBottom: "1px solid #eee",
    padding: "64px 0",
  },
  headerWrapper: {
    position: "sticky",
    top: 0,
    zIndex: 40,
    backdropFilter: "blur(6px)",
    background: "rgba(255,255,255,.86)",
    borderBottom: "1px solid #eee",
  },
  brandLink: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    textDecoration: "none",
    color: "#111827",
  },
  brandName: { fontWeight: 800, fontSize: 18 },
  brandTag: { fontSize: 12, color: "#6b7280" },
  nav: { display: "flex", alignItems: "center", gap: 8 },
  navLink: {
    padding: "8px 12px",
    borderRadius: 8,
    textDecoration: "none",
    color: "#111827",
  },
  callBtn: {
    marginLeft: 8,
    padding: "10px 16px",
    borderRadius: 12,
    background: CONFIG.brand.primary,
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600,
  },
  hero: {
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  heroOverlay: { background: "rgba(0,0,0,.6)", padding: "80px 0" },
  h1: { color: "#fff", fontWeight: 900, fontSize: 44, lineHeight: 1.1, margin: 0 },
  heroP: { color: "#e5e7eb", fontSize: 18, marginTop: 12 },
  rowGap: { display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" },
  primaryBtn: {
    display: "inline-block",
    padding: "12px 18px",
    borderRadius: 12,
    background: CONFIG.brand.primary,
    color: "#fff",
    textDecoration: "none",
    fontWeight: 700,
  },
  secondaryBtn: {
    display: "inline-block",
    padding: "12px 18px",
    borderRadius: 12,
    background: "#fff",
    color: "#111827",
    textDecoration: "none",
    fontWeight: 700,
    border: "1px solid #e5e7eb",
  },
  primaryBtnFull: {
    display: "block",
    textAlign: "center",
    padding: "12px 18px",
    borderRadius: 12,
    background: CONFIG.brand.primary,
    color: "#fff",
    textDecoration: "none",
    fontWeight: 700,
  },
  heroMetaRow: {
    display: "flex",
    gap: 16,
    marginTop: 12,
    color: "#d1d5db",
    fontSize: 14,
    flexWrap: "wrap",
  },
  ctaCard: {
    background: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,.18)",
  },
  ctaCardHeader: {
    background: "#0b0f19",
    color: "#fff",
    padding: 16,
    fontWeight: 700,
    fontSize: 18,
  },
  ctaCardBody: { padding: 20, fontSize: 14 },
  cards3: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 16,
  },
  cards4: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: 16,
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
  },
  grid3Img: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 12,
  },
  galleryImg: {
    width: "100%",
    height: 260,
    objectFit: "cover",
    borderRadius: 16,
    boxShadow: "0 6px 16px rgba(0,0,0,.12)",
  },
  card: { background: "#fff", borderRadius: 16, padding: 20 },
  cardTitle: { fontWeight: 700, marginBottom: 8, fontSize: 18 },
  price: { fontSize: 32, fontWeight: 900, margin: "6px 0 10px" },
  fineprint: { fontSize: 12, color: "#6b7280", marginTop: 8 },
  lead: { color: "#374151", marginBottom: 16 },
  form: { display: "grid", gap: 10, maxWidth: 640 },
  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid #e5e7eb",
    fontSize: 16,
  },
  stackGap: { display: "grid", gap: 12 },
  bold: { fontWeight: 700 },
  smallMuted: { fontSize: 12, color: "#6b7280", marginTop: 6 },
  rowBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 12,
  },
  footer: {
    background: "#0b0f19",
    color: "#e5e7eb",
    marginTop: 40,
    paddingTop: 24,
  },
  copy: {
    borderTop: "1px solid rgba(255,255,255,.12)",
    marginTop: 16,
    padding: "10px 0",
    textAlign: "center",
    fontSize: 12,
    color: "#9ca3af",
  },
};
