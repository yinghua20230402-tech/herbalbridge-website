"use client";
import { useState } from "react";

const whatsapp = "8617621530596";
const email = "yinghua20230402@gmail.com";
const waLink = (m) => `https://wa.me/${whatsapp}?text=${encodeURIComponent(m)}`;

const buyers = ["Wellness Brands","Spa & Hotel Buyers","Gift Companies","Importers & Wholesalers","Amazon Sellers","Boutique Retailers"];
const benefits = [
  ["Private Label","Add your logo, brand name and market-specific packaging."],
  ["Custom Packaging","Choose pouches, paper boxes, gift boxes and retail-ready packs."],
  ["Sample Development","Start with samples before confirming larger production."],
  ["China Coordination","We organize requirements with suitable manufacturing partners."],
  ["Flexible Project Support","Suitable for pilot orders, new launches and seasonal collections."],
  ["Clear Communication","Structured inquiry, specification and quotation coordination in English."]
];

export default function Home(){
  const [form,setForm]=useState({name:"",company:"",country:"",email:"",contact:"",product:"Botanical Mugwort Foot Soak",quantity:"",requirements:""});
  const update=(e)=>setForm({...form,[e.target.name]:e.target.value});
  const sendInquiry=(e)=>{
    e.preventDefault();
    const text=`Hello HerbalBridge,\n\nI would like to request a quotation.\n\nName: ${form.name}\nCompany: ${form.company}\nCountry / Market: ${form.country}\nEmail: ${form.email}\nWhatsApp / Contact: ${form.contact}\nProduct: ${form.product}\nEstimated quantity: ${form.quantity}\n\nRequirements:\n${form.requirements}`;
    window.open(waLink(text),"_blank","noopener,noreferrer");
  };

  return <main>
    <header>
      <a className="brand" href="#top"><span className="mark">H</span><span><strong>HerbalBridge</strong><small>Botanical Product Sourcing</small></span></a>
      <a className="topButton" href="#inquiry">Request a Quote</a>
    </header>

    <section className="hero" id="top">
      <div className="heroCopy">
        <p className="eyebrow">PRIVATE LABEL · CUSTOM PACKAGING · CHINA SOURCING</p>
        <h1>Custom Mugwort Foot Soak & Traditional Herbal Sachets</h1>
        <p className="lead">Launch botanical wellness products for your market with flexible private-label support, custom packaging and coordinated production through suitable manufacturing partners in China.</p>
        <div className="heroActions">
          <a className="button primary" href="#inquiry">Send Your Requirements</a>
          <a className="button secondary" href={waLink("Hello HerbalBridge, I am interested in custom mugwort foot soak bags or herbal sachets.")} target="_blank" rel="noreferrer">WhatsApp Us</a>
        </div>
        <div className="quickProof"><span>✓ Sample support</span><span>✓ Custom logo</span><span>✓ Retail packaging</span></div>
      </div>
      <div className="heroVisual">
        <div className="halo"></div>
        <div className="footPack"><small>HERBALBRIDGE</small><strong>BOTANICAL<br/>MUGWORT</strong><em>Foot Soak</em><b>艾</b></div>
        <div className="sachetMock"><span>HERBALBRIDGE</span><strong>Traditional<br/>Herbal Sachet</strong></div>
        <div className="roundTag">OEM / ODM</div>
      </div>
    </section>

    <section className="buyerStrip">{buyers.map(x=><span key={x}>{x}</span>)}</section>

    <section className="section" id="products">
      <div className="sectionHeading"><p className="eyebrow">FEATURED PRODUCTS</p><h2>Two focused products for your first inquiry</h2><p>Clear, customizable product formats that overseas buyers can understand, sample and develop.</p></div>

      <article className="productFeature">
        <div className="productArt footArt"><div className="displayPack"><span>HERBALBRIDGE</span><strong>Mugwort<br/>Foot Soak</strong><small>Botanical Wellness Collection</small></div><div className="herbs">🌿</div></div>
        <div className="productInfo"><span className="number">01</span><p className="eyebrow">MAIN PRODUCT</p><h3>Botanical Mugwort Foot Soak</h3><p>A botanical foot bath product for wellness brands, spas, gifting programs and retail channels. Available with custom filling, pack size, logo and retail packaging.</p><ul><li>Custom formula direction</li><li>Individual sachet or multi-pack box</li><li>Private label and English packaging</li><li>Sample development before bulk order</li></ul><a className="textButton" href="#inquiry">Request Foot Soak Quote →</a></div>
      </article>

      <article className="productFeature reverse">
        <div className="productArt sachetArt"><div className="fabricSachet"><span>HERBALBRIDGE</span><strong>HERBAL<br/>SACHET</strong><b>东方草本</b></div><div className="cord"></div></div>
        <div className="productInfo"><span className="number">02</span><p className="eyebrow">CULTURAL PRODUCT</p><h3>Traditional Herbal Sachet</h3><p>A Chinese-inspired botanical sachet for wardrobe, drawer, bedroom, gifting and decorative fragrance applications—adapted for modern overseas retail presentation.</p><ul><li>Custom fabric, shape and stitching</li><li>Traditional or minimalist visual style</li><li>Custom herb and aroma direction</li><li>Gift box and seasonal packaging options</li></ul><a className="textButton" href="#inquiry">Request Sachet Sample →</a></div>
      </article>
    </section>

    <section className="fitSection"><div><p className="eyebrow light">IS HERBALBRIDGE RIGHT FOR YOU?</p><h2>Built for buyers who need more than a standard catalog item</h2></div><div className="fitGrid">{buyers.map(x=><span key={x}>✓ {x}</span>)}</div></section>

    <section className="section">
      <div className="sectionHeading centered"><p className="eyebrow">WHY HERBALBRIDGE</p><h2>Practical support from product idea to production</h2><p>We do not position ourselves as a factory. We help overseas buyers structure requirements, coordinate samples and work with suitable manufacturing partners in China.</p></div>
      <div className="benefitGrid">{benefits.map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>

    <section className="process"><div className="sectionHeading"><p className="eyebrow light">HOW IT WORKS</p><h2>From inquiry to shipment</h2></div><div className="processLine">{[["01","Inquiry"],["02","Product Discussion"],["03","Sample"],["04","Packaging"],["05","Production"],["06","Shipment"]].map(([n,l])=><div key={l}><b>{n}</b><span>{l}</span></div>)}</div></section>

    <section className="inquiry" id="inquiry">
      <div className="inquiryIntro"><p className="eyebrow light">START YOUR PROJECT</p><h2>Tell us what you want to develop</h2><p>Share your product, target market and expected quantity. Your inquiry will open in WhatsApp with all details ready to send.</p><div className="contactLinks"><a href={`mailto:${email}`}>{email}</a><a href={waLink("Hello HerbalBridge, I would like to discuss a product project.")} target="_blank" rel="noreferrer">+86 176 2153 0596</a></div></div>
      <form onSubmit={sendInquiry}>
        <div className="twoCols"><label>Name<input required name="name" value={form.name} onChange={update}/></label><label>Company<input name="company" value={form.company} onChange={update}/></label></div>
        <div className="twoCols"><label>Country / Market<input required name="country" value={form.country} onChange={update} placeholder="e.g. Canada"/></label><label>Email<input required type="email" name="email" value={form.email} onChange={update}/></label></div>
        <label>WhatsApp / Other Contact<input name="contact" value={form.contact} onChange={update}/></label>
        <div className="twoCols"><label>Product<select name="product" value={form.product} onChange={update}><option>Botanical Mugwort Foot Soak</option><option>Traditional Herbal Sachet</option><option>Both Products</option></select></label><label>Estimated Quantity<input name="quantity" value={form.quantity} onChange={update} placeholder="e.g. 1,000 pcs"/></label></div>
        <label>Requirements<textarea required rows="5" name="requirements" value={form.requirements} onChange={update} placeholder="Size, filling, logo, packaging, target price or sample needs."/></label>
        <button type="submit">Send Inquiry via WhatsApp</button><small>WhatsApp will open with your inquiry text ready to send.</small>
      </form>
    </section>

    <footer><div className="brand"><span className="mark gold">H</span><span><strong>HerbalBridge</strong><small>Botanical Product Sourcing</small></span></div><p>Custom Mugwort Foot Soak · Traditional Herbal Sachets · Private Label · Custom Packaging</p></footer>
    <a className="floating" href={waLink("Hello HerbalBridge, I would like to request a quotation.")} target="_blank" rel="noreferrer">WhatsApp Inquiry</a>
  </main>;
}
