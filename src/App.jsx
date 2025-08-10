import React, { useMemo, useState } from "react";

const CONFIG = {
  businessName: "Cousins Cleanouts",
  phoneNickDisplay: "715-304-7663",
  phoneNickE164: "+17153047663",
  phoneShaneDisplay: "715-944-9389",
  phoneShaneE164: "+17159449389",
  email: "Sales@cousinscleanouts.com",
  serviceArea: "Chippewa / Eau Claire Area, WI",
  facebookUrl: "https://www.facebook.com/profile.php?id=61562333859276",
  heroBg:
    "https://images.unsplash.com/photo-1565610314838-9f0efc9e6e4a?q=80&w=1600&auto=format&fit=crop",
  logo: "/logo.png", // logo file in public folder
  brand: {
    primary: "#F97316", // adjust to match your logo's orange if needed
    dark: "#0B0F19",
  },
};

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

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
      <Pricing />
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
              Fast, Friendly <span style={{ color: CONFIG.brand.primary }}>Cleanouts</span>
            </h1>
            <p style={styles.heroP}>
              Storm cleanup, full-service junk removal, and affordable dump trailer rentals. Serving {CONFIG.serviceArea}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" style={styles.section}>
      <h2 style={styles.h2}>Typical Pricing</h2>
      <div style={styles.cards3}>
        <Card title="Single Item Pickups">
          <div style={styles.price}>Min $80</div>
          Curbside discounts available. Mattresses, couches, appliances.
        </Card>
        <Card title="Appliance Pickups">
          <div style={styles.price}>$50 each</div>
          Refrigerators, washers, dryers, etc.
        </Card>
      </div>
    </section>
  );
}

function Contact({ name, setName, email, setEmail, phone, setPhone, message, setMessage, mailtoHref }) {
  return (
    <section id="contact" style={styles.sectionAlt}>
      <div style={styles.containerGrid2}>
        <div>
          <h2 style={styles.h2}>Get a Free Quote</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailtoHref;
            }}
            style={styles.form}
          >
            <input style={styles.input} placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input style={styles.input} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input style={styles.input} placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <textarea style={{ ...styles.input, minHeight: 120 }} placeholder="Details" value={message} onChange={(e) => setMessage(e.target.value)} required />
            <button type="submit" style={styles.primaryBtn}>Send</button>
          </form>
        </div>
        <div>
          <strong>Nick:</strong> <a href={`tel:${CONFIG.phoneNickE164}`}>{CONFIG.phoneNickDisplay}</a><br />
          <strong>Shane:</strong> <a href={`tel:${CONFIG.phoneShaneE164}`}>{CONFIG.phoneShaneDisplay}</a><br />
          <strong>Email:</strong> <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.containerRow}>
        <img src={CONFIG.logo} alt="Cousins Cleanouts logo" style={{ height: 50 }} />
        <div>Serving {CONFIG.serviceArea}</div>
      </div>
    </footer>
  );
}

function Card({ title, children }) {
  return (
    <div style={styles.card}>
      {title && <div style={styles.cardTitle}>{title}</div>}
      {children}
    </div>
  );
}

function SiteStyles() {
  return (
    <style>{`
      body { margin: 0; font-family: Arial, sans-serif; }
    `}</style>
  );
}

const styles = {
  page: { fontFamily: "Arial, sans-serif" },
  containerRow: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 16px" },
  containerGrid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 },
  headerWrapper: { background: "#fff", borderBottom: "1px solid #eee" },
  brandLink: { display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "#000" },
  brandName: { fontWeight: 800, fontSize: 18 },
  brandTag: { fontSize: 12, color: "#666" },
  hero: { backgroundSize: "cover", backgroundPosition: "center" },
  heroOverlay: { background: "rgba(0,0,0,0.6)", padding: "60px 16px" },
  h1: { color: "#fff", fontSize: 40, margin: "20px 0 10px" },
  heroP: { color: "#eee", fontSize: 18 },
  section: { padding: "40px 16px" },
  sectionAlt: { background: "#fafafa", padding: "40px 16px" },
  cards3: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 },
  price: { fontSize: 28, fontWeight: "bold", margin: "10px 0" },
  form: { display: "grid", gap: 10 },
  input: { padding: "10px", borderRadius: 6, border: "1px solid #ccc" },
  primaryBtn: { background: CONFIG.brand.primary, color: "#fff", padding: "12px 18px", border: "none", borderRadius: 8 },
  card: { background: "#fff", borderRadius: 8, padding: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.1)" },
  cardTitle: { fontWeight: "bold", marginBottom: 8 },
  footer: { background: "#0b0f19", color: "#fff", padding: "20px 16px" },
};

