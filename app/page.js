const WA = 'https://wa.me/8617621530596?text=Hello%20HerbalBridge%2C%20I%20would%20like%20to%20request%20a%20quote.';
const EMAIL = 'mailto:yinghua20230402@gmail.com?subject=HerbalBridge%20Inquiry';
const FORM_ACTION = 'https://formsubmit.co/yinghua20230402@gmail.com';

function Icon({ children }) { return <span className="icon">{children}</span>; }

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="brand" href="#top" aria-label="HerbalBridge home">
          <span className="brandMark">❧</span>
          <span><b>HerbalBridge</b><small>Bridging Nature. Connecting Wellness.</small></span>
        </a>
        <nav>
          <a href="#products">Products</a><a href="#why">Why Us</a><a href="#oem">OEM Service</a><a href="#process">Process</a><a href="#about">About Us</a>
        </nav>
        <a className="quote" href="#inquiry">Request a Quote</a>
      </header>

      <section id="top" className="hero">
        <div className="heroCopy">
          <span className="eyebrow">PRIVATE LABEL & OEM MANUFACTURING</span>
          <h1>Bring Traditional<br/>Chinese Botanicals<br/><em>to Modern Wellness Brands</em></h1>
          <p>We help wellness brands, retailers and wholesalers develop custom herbal products with trusted manufacturing partners in China.</p>
          <div className="checks"><span>● Private Label</span><span>● Custom Packaging</span><span>● China Sourcing</span></div>
          <div className="actions"><a className="primary" href="#inquiry">Request a Sample <b>→</b></a><a className="play" href="#process"><i>▶</i> See How It Works</a></div>
        </div>
        <div className="heroVisual"><img src="/images/hero.jpg" alt="HerbalBridge mugwort foot soak and herbal sachet packaging"/></div>
      </section>

      <section className="trust" id="about">
        <article><Icon>♧</Icon><div><b>BOTANICAL EXPERTISE</b><p>Carefully selected herbs with traditional inspiration.</p></div></article>
        <article><Icon>◇</Icon><div><b>CUSTOM SOLUTIONS</b><p>From formula to packaging, tailored to your brand.</p></div></article>
        <article><Icon>♙</Icon><div><b>RELIABLE PARTNERSHIP</b><p>Transparent communication and long-term support.</p></div></article>
      </section>

      <section id="products" className="section products">
        <div className="sectionTitle"><h2>Our Core Products</h2><a href={WA} target="_blank">View All Products →</a></div>
        <div className="productGrid">
          <article className="productCard"><img src="/images/foot-soak.jpg" alt="Botanical mugwort foot soak"/><div className="productText"><h3>Botanical<br/>Mugwort Foot Soak</h3><p>Natural herbal foot bath bags for a calming, modern wellness ritual.</p><div className="tags"><span>Natural Herbs</span><span>Easy to Use</span><span>Customizable</span></div><a href={WA} target="_blank">Request Quote →</a></div></article>
          <article className="productCard reverse"><img src="/images/herbal-sachet.jpg" alt="Traditional herbal sachet"/><div className="productText"><h3>Traditional<br/>Herbal Sachet</h3><p>Elegant botanical sachets for gifting, home fragrance and lifestyle retail.</p><div className="tags"><span>Handmade Style</span><span>Pleasant Aroma</span><span>Custom Design</span></div><a href={WA} target="_blank">Request Quote →</a></div></article>
        </div>
      </section>

      <section id="process" className="section process">
        <div className="centerTitle"><h2>OEM / Private Label Process</h2></div>
        <div className="steps">
          {[['1','Consultation','Share your ideas and requirements.'],['2','Formula & Sample','We develop samples for approval.'],['3','Packaging Design','Custom packaging tailored to your brand.'],['4','Production','Quality-focused manufacturing.'],['5','Delivery','Reliable delivery to your destination.']].map(([n,t,d])=><article key={n}><span>{n}</span><div><b>{t}</b><p>{d}</p></div></article>)}
        </div>
      </section>

      <section id="why" className="section why">
        <div className="whyInfo"><div className="centerTitle left"><h2>Why Choose HerbalBridge</h2></div><div className="benefits">
          {[['◇','Experienced Team','Botanical product development and international trade support.'],['♙','Flexible MOQ','Flexible project quantities to support emerging brands.'],['♢','Quality Assurance','Clear specifications and quality-focused sourcing.'],['◎','Global Export','Support for buyers across North America, Europe and Asia.']].map(([i,t,d])=><article key={t}><Icon>{i}</Icon><b>{t}</b><p>{d}</p></article>)}
        </div><div className="greenStrip"><span>♧ Natural Ingredients</span><span>♧ Traditional Wisdom</span><span>♡ Modern Wellness</span></div></div>
        <div className="cta"><img src="/images/cta.jpg" alt="Botanical ingredients and gift packaging"/><div><h2>Let’s create your next winning herbal product.</h2><a href="#inquiry">Start Your Project →</a></div></div>
      </section>

      <section id="inquiry" className="inquirySection">
        <div className="inquiryIntro">
          <span className="eyebrow">START YOUR PROJECT</span>
          <h2>Get Your Sample & OEM Proposal</h2>
          <p>Tell us what you are looking for. We will reply with product recommendations, packaging options and an initial quotation.</p>
          <ul>
            <li>Product and sample recommendation</li>
            <li>Private-label and packaging options</li>
            <li>Quotation within one business day</li>
          </ul>
          <a className="whatsappText" href={WA} target="_blank">Need a faster reply? Chat on WhatsApp →</a>
        </div>
        <form className="inquiryForm" action={FORM_ACTION} method="POST">
          <input type="hidden" name="_subject" value="New HerbalBridge Website Inquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <div className="formGrid">
            <label>Full Name *<input name="name" type="text" required placeholder="Your name" /></label>
            <label>Company *<input name="company" type="text" required placeholder="Company name" /></label>
            <label>Business Email *<input name="email" type="email" required placeholder="name@company.com" /></label>
            <label>Country / Region *<input name="country" type="text" required placeholder="Country" /></label>
            <label>Product Interest *<select name="product" required defaultValue=""><option value="" disabled>Select a product</option><option>Mugwort Foot Soak</option><option>Traditional Herbal Sachet</option><option>Gift Set</option><option>OEM / Private Label Project</option></select></label>
            <label>Estimated Quantity<select name="quantity" defaultValue=""><option value="">Not sure yet</option><option>Under 500 units</option><option>500–1,000 units</option><option>1,000–5,000 units</option><option>More than 5,000 units</option></select></label>
          </div>
          <label>Project Details<textarea name="message" rows="5" placeholder="Tell us about your product, packaging, target market or sample needs."></textarea></label>
          <button type="submit">Send My Inquiry →</button>
          <small>By submitting, you agree that HerbalBridge may contact you about this inquiry.</small>
        </form>
      </section>

      <footer><span>© 2026 HerbalBridge. All rights reserved.</span><span><a href={EMAIL}>Email Us</a> · <a href={WA} target="_blank">WhatsApp</a></span></footer>
      <a className="float" href={WA} target="_blank" aria-label="WhatsApp inquiry">◉<span>Request<br/>Quote</span></a>
    </main>
  );
}
