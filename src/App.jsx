import React, { useMemo, useState } from "react";

/* Configuration */
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
    primary: "#C25A2B",
    dark: "#0B0F19",
  },
  gallery: [], // leave empty to remove photos
};

// Combine both numbers for group SMS links
const smsTargets = `${CONFIG.phoneNickE164},${CONFIG.phoneShaneE164}`;

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

/* ...[remaining components (Header, Hero, Services, Rental, Pricing, Photos, Reviews, Contact, Footer) and styles as provided earlier remain unchanged]... */
