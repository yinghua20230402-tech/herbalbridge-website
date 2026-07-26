"use client";

import { useState } from "react";

const whatsapp = "8617621530596";
const email = "yinghua20230402@gmail.com";

const products = [
  ["Mugwort Sachets", "Wardrobe, drawer, bedside and wellness gift applications."],
  ["Herbal Aroma Sachets", "Custom herbal blends, scents, fabrics, shapes and sizes."],
  ["Foot Soak Sachets", "Single-use herbal packs for spa, wellness and retail programs."],
  ["Herbal Gift Sets", "Private-label combinations for holidays, hotels and brand campaigns."]
];

const options = [
  "Herbal filling and aroma direction",
  "Fabric, size, shape and stitching",
  "Logo label and private-label branding",
  "Individual bag, paper box or gift packaging",
  "Sample development before bulk order",
  "Factory sourcing and production coordination in China"
];

function waLink(text) {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`;
}

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    market: "",
    product: "",
    quantity: "",
    message: ""
  });

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function sendInquiry(e) {
    e.preventDefault();
    const text = `Hello HerbalBridge,

I would like to request a quotation.

Name: ${form.name}
Company: ${form.company}
Target market: ${form.market}
Product: ${form.product}
Estimated quantity: ${form.quantity}
Requirements: ${form.message}`;

    window.open(waLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <header>
        <div className="brand">
          <span className="mark">H</span>
          <span><strong>HerbalBridge</strong><small>Custom Herbal Sachet Supply</small></span>
        </div>
        <a className="topCta" href="#inquiry">Request a Quote</a>
      </header>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">B2B SOURCING · PRIVATE LABEL · CUSTOM PACKAGING</p>
          <h1>Custom Herbal Sachets for Your Brand and Market</h1>
          <p className="lead">
            We connect overseas buyers with suitable Chinese production partners
            for herbal sachets, private-label development and customized packaging.
          </p>
          <p className="positioning">
            No confusing catalog. No hard sell. Tell us what you need, and we will
            help organize the sourcing and sample-development process.
          </p>
          <div className="actions">
            <a className="button primary" href="#inquiry">Send Your Requirements</a>
            <a
              className="button ghost"
              href={waLink("Hello HerbalBridge, I am looking for custom herbal sachets.")}
              target="_blank"
              rel="noreferrer"
            >
              Ask on WhatsApp
            </a>
          </div>
          <div className="proof">
            <span>✓ Private label</span>
            <span>✓ Custom packaging</span>
            <span>✓ Sample support</span>
          </div>
        </div>

        <div className="heroArt">
          <div className="circle"></div>
          <div className="pouch mainPouch">
            <small>YOUR BRAND</small>
            <strong>HERBAL<br/>SACHET</strong>
            <span>Custom Blend · Custom Pack</span>
            <b>🌿</b>
          </div>
          <div className="pouch miniPouch">Mugwort</div>
          <div className="tag">OEM / ODM</div>
        </div>
      </section>

      <section className="strip">
        <span>For Importers</span>
        <span>For Wellness Brands</span>
        <span>For Gift Retailers</span>
        <span>For Spa & Hotel Buyers</span>
      </section>

      <section className="section">
        <div className="heading">
          <p className="eyebrow">PRODUCT FOCUS</p>
          <h2>Start with the herbal sachet format that fits your channel</h2>
          <p>Every project can be adjusted according to your market, positioning and order plan.</p>
        </div>

        <div className="productGrid">
          {products.map(([title, text], i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#inquiry">Request details →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="custom">
        <div>
          <p className="eyebrow pale">CUSTOMIZATION</p>
          <h2>You bring the market idea. We help structure the supply solution.</h2>
          <p>
            HerbalBridge operates as a sourcing and project-coordination partner.
            Production is arranged through suitable manufacturing partners in China
            based on the product requirements.
          </p>
          <a className="button lightButton" href="#inquiry">Discuss Your Product</a>
        </div>
        <ul>
          {options.map(item => <li key={item}>✓ {item}</li>)}
        </ul>
      </section>

      <section className="process section">
        <div className="heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>A simple path from inquiry to sample</h2>
        </div>
        <div className="steps">
          <div><b>1</b><h3>Send requirements</h3><p>Product type, market, quantity and packaging idea.</p></div>
          <div><b>2</b><h3>Confirm direction</h3><p>We organize key specifications and quotation assumptions.</p></div>
          <div><b>3</b><h3>Develop sample</h3><p>Review the sample and refine details before bulk production.</p></div>
        </div>
      </section>

      <section className="inquiry" id="inquiry">
        <div className="inquiryIntro">
          <p className="eyebrow pale">GET A QUOTE</p>
          <h2>Tell us what kind of herbal sachet you want to source</h2>
          <p>
            Complete the form and click the button. Your inquiry will open in
            WhatsApp so you can send it directly.
          </p>
          <div className="direct">
            <a href={`mailto:${email}`}>{email}</a>
            <a href={waLink("Hello HerbalBridge, I would like to discuss a project.")} target="_blank" rel="noreferrer">
              +86 176 2153 0596
            </a>
          </div>
        </div>

        <form onSubmit={sendInquiry}>
          <div className="two">
            <label>Name<input required name="name" value={form.name} onChange={update} /></label>
            <label>Company<input name="company" value={form.company} onChange={update} /></label>
          </div>
          <div className="two">
            <label>Target market<input name="market" placeholder="e.g. Germany" value={form.market} onChange={update} /></label>
            <label>Product needed<input required name="product" placeholder="e.g. mugwort sachet" value={form.product} onChange={update} /></label>
          </div>
          <label>Estimated quantity<input name="quantity" placeholder="e.g. 1,000 pcs" value={form.quantity} onChange={update} /></label>
          <label>Requirements<textarea required name="message" rows="5" placeholder="Size, fabric, filling, logo, packaging..." value={form.message} onChange={update}></textarea></label>
          <button type="submit">Send Inquiry via WhatsApp</button>
          <small>By clicking, WhatsApp opens with your inquiry text ready to send.</small>
        </form>
      </section>

      <footer>
        <div className="brand">
          <span className="mark gold">H</span>
          <span><strong>HerbalBridge</strong><small>Custom Herbal Sachet Supply</small></span>
        </div>
        <p>Private label · Custom packaging · China sourcing support</p>
      </footer>

      <a
        className="float"
        href={waLink("Hello HerbalBridge, I would like to inquire about custom herbal sachets.")}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp Inquiry
      </a>
    </main>
  );
}
