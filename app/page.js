"use client";
import { useState } from "react";

const whatsapp = "8617621530596";
const email = "yinghua20230402@gmail.com";
const waLink = (message) => `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;

const products = [
  {
    number: "01",
    eyebrow: "BOTANICAL WELLNESS",
    title: "Mugwort Foot Soak",
    text: "A modern foot-soak ritual developed for wellness brands, spas, gift programs and retail collections.",
    points: ["Private label", "Custom pack size", "Retail-ready packaging"],
    className: "mugwortCard",
    cta: "Request Foot Soak Quote",
  },
  {
    number: "02",
    eyebrow: "BOTANICAL LIFESTYLE",
    title: "Traditional Herbal Sachet",
    text: "A Chinese-inspired botanical sachet adapted for contemporary gifting, home fragrance and lifestyle retail.",
    points: ["Custom fabric", "Custom aroma direction", "Gift-box options"],
    className: "sachetCard",
    cta: "Request Sachet Sample",
  },
];

const steps = ["Consultation", "Formula & Sample", "Packaging Design", "Production", "Delivery"];
const strengths = [
  ["PL", "Private Label", "Build the product under your own brand."],
  ["CP", "Custom Packaging", "From simple pouches to premium gift boxes."],
  ["LM", "Flexible MOQ", "A practical starting point for new projects."],
  ["CS", "China Sourcing", "Clear coordination with suitable partners."],
];

export default function Home() {
  const [form, setForm] = useState({
    name: "", company: "", country: "", email: "", contact: "",
    product: "Botanical Mugwort Foot Soak", quantity: "", requirements: "",
  });
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const sendInquiry = (event) => {
    event.preventDefault();
    const text = `Hello HerbalBridge,\n\nI would like to request a quotation.\n\nName: ${form.name}\nCompany: ${form.company}\nCountry / Market: ${form.country}\nEmail: ${form.email}\nWhatsApp / Contact: ${form.contact}\nProduct: ${form.product}\nEstimated quantity: ${form.quantity}\n\nRequirements:\n${form.requirements}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="HerbalBridge home">
          <span className="brandMark"><i></i></span>
          <span><strong>HerbalBridge</strong><small>Botanical Product Partner</small></span>
        </a>
        <nav>
          <a href="#products">Products</a>
          <a href="#oem">OEM</a>
          <a href="#why">Why Us</a>
        </nav>
        <a className="headerCta" href="#inquiry">Request a Quote</a>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">PRIVATE LABEL · CUSTOM PACKAGING · CHINA SOURCING</p>
          <h1>Bring Traditional Chinese Botanicals<br/><em>to Modern Wellness Brands.</em></h1>
          <p className="heroText">Custom mugwort foot soak and herbal sachets for brands, spas, gift companies and importers worldwide.</p>
          <div className="heroActions">
            <a className="button buttonPrimary" href="#inquiry">Request a Sample</a>
            <a className="button buttonGhost" href={waLink("Hello HerbalBridge, I would like to discuss a custom botanical wellness product.")} target="_blank" rel="noreferrer">Talk on WhatsApp</a>
          </div>
          <div className="proofRow"><span>Private Label</span><span>Custom Packaging</span><span>Flexible Projects</span></div>
        </div>

        <div className="heroStage heroPhoto" aria-label="Botanical wellness lifestyle scene">
          <img src="/images/hero-lifestyle.jpg" alt="Premium botanical wellness products in a calm natural setting" />
          <div className="photoBadge">OEM · PRIVATE LABEL</div>
        </div>
      </section>

      <div className="trustBar"><span>WELLNESS BRANDS</span><span>SPA & HOSPITALITY</span><span>GIFT COMPANIES</span><span>IMPORTERS</span><span>AMAZON SELLERS</span></div>

      <section className="products section" id="products">
        <div className="sectionHead">
          <p className="eyebrow">TWO PRODUCTS. ONE CLEAR START.</p>
          <h2>Focused products built for customization.</h2>
        </div>
        <div className="productGrid">
          {products.map((product) => (
            <article className={`productCard ${product.className}`} key={product.title}>
              <div className="productVisual productPhoto">
                <span className="productNumber">{product.number}</span>
                <img
                  src={product.className === "mugwortCard" ? "/images/foot-soak.jpg" : "/images/herbal-sachet.jpg"}
                  alt={product.title}
                />
              </div>
              <div className="productBody">
                <p className="eyebrow">{product.eyebrow}</p>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
                <div className="chips">{product.points.map((point) => <span key={point}>{point}</span>)}</div>
                <a href="#inquiry">{product.cta} <b>↗</b></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="oem" id="oem">
        <div className="oemIntro">
          <p className="eyebrow light">OEM & PRIVATE LABEL</p>
          <h2>Your idea.<br/>Our coordinated path to market.</h2>
          <a className="button buttonLight" href="#inquiry">Start Your Project</a>
        </div>
        <div className="steps">
          {steps.map((step, index) => <div className="step" key={step}><b>0{index + 1}</b><span>{step}</span></div>)}
        </div>
      </section>

      <section className="why section" id="why">
        <div className="sectionHead compact"><p className="eyebrow">WHY HERBALBRIDGE</p><h2>Simple support for serious buyers.</h2><p>We are your sourcing and product-development partner—not a factory pretending to be one.</p></div>
        <div className="strengthGrid">
          {strengths.map(([icon, title, text]) => <article key={title}><span>{icon}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="ctaBand">
        <p>Have a product idea?</p><h2>Let’s turn it into a sample.</h2><a href="#inquiry">Start Your Project ↘</a>
      </section>

      <section className="inquiry" id="inquiry">
        <div className="inquiryIntro">
          <p className="eyebrow light">START YOUR PROJECT</p>
          <h2>Tell us what you want to create.</h2>
          <p>Share your target market, product idea and quantity. Your message will open in WhatsApp, ready to send.</p>
          <div className="contactLinks"><a href={`mailto:${email}`}>{email}</a><a href={waLink("Hello HerbalBridge, I would like to discuss a product project.")} target="_blank" rel="noreferrer">+86 176 2153 0596</a></div>
        </div>
        <form onSubmit={sendInquiry}>
          <div className="twoCols"><label>Name<input required name="name" value={form.name} onChange={update}/></label><label>Company<input name="company" value={form.company} onChange={update}/></label></div>
          <div className="twoCols"><label>Country / Market<input required name="country" value={form.country} onChange={update} placeholder="e.g. Germany"/></label><label>Email<input required type="email" name="email" value={form.email} onChange={update}/></label></div>
          <label>WhatsApp / Other Contact<input name="contact" value={form.contact} onChange={update}/></label>
          <div className="twoCols"><label>Product<select name="product" value={form.product} onChange={update}><option>Botanical Mugwort Foot Soak</option><option>Traditional Herbal Sachet</option><option>Both Products</option></select></label><label>Estimated Quantity<input name="quantity" value={form.quantity} onChange={update} placeholder="e.g. 1,000 pcs"/></label></div>
          <label>Requirements<textarea required rows="5" name="requirements" value={form.requirements} onChange={update} placeholder="Product size, formula direction, logo, packaging, sample needs..."/></label>
          <button type="submit">Send Inquiry via WhatsApp</button>
          <small>WhatsApp will open with your inquiry details ready to send.</small>
        </form>
      </section>

      <footer><div className="brand inverse"><span className="brandMark"><i></i></span><span><strong>HerbalBridge</strong><small>Botanical Product Partner</small></span></div><p>Custom Mugwort Foot Soak · Traditional Herbal Sachets · Private Label</p></footer>
      <a className="floating" href={waLink("Hello HerbalBridge, I would like to request a quotation.")} target="_blank" rel="noreferrer"><span>●</span> WhatsApp Inquiry</a>
    </main>
  );
}
