const products = [
  {
    icon: "🌿",
    name: "Mugwort Sachets",
    text: "Aromatic herbal sachets for wardrobes, drawers, gift sets and wellness collections."
  },
  {
    icon: "🛁",
    name: "Herbal Foot Soak Packs",
    text: "Convenient single-use packs developed for relaxation, gifting and private-label programs."
  },
  {
    icon: "♨️",
    name: "Herbal Heat Packs",
    text: "Comfort-focused herbal packs with customizable fabric, filling, size and packaging."
  },
  {
    icon: "🎁",
    name: "Seasonal Gift Sets",
    text: "Curated herbal gift concepts for holidays, spa programs, hotels and retail campaigns."
  }
];

const advantages = [
  {
    title: "Flexible OEM / ODM",
    text: "Choose product format, scent profile, fabric, size, label and retail packaging."
  },
  {
    title: "Buyer-Friendly MOQ",
    text: "Start with samples and pilot orders before moving into larger production."
  },
  {
    title: "Export-Oriented Support",
    text: "Clear communication, quotation support and practical coordination for international buyers."
  },
  {
    title: "Custom Product Development",
    text: "We help turn a concept into a sellable herbal wellness product step by step."
  }
];

function WhatsAppLink({ children, className = "" }) {
  const message = encodeURIComponent(
    "Hello HerbalBridge, I am interested in your mugwort products and OEM/ODM service."
  );
  return (
    <a
      className={className}
      href={`https://wa.me/8617621530596?text=${message}`}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="HerbalBridge home">
          <span className="brandMark">H</span>
          <span>
            <strong>HerbalBridge</strong>
            <small>Natural Wellness Supply</small>
          </span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#products">Products</a>
          <a href="#oem">OEM / ODM</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <WhatsAppLink className="headerCta">WhatsApp Us</WhatsAppLink>
      </header>

      <section className="hero" id="top">
        <div className="heroContent">
          <p className="eyebrow">MUGWORT & HERBAL WELLNESS PRODUCTS</p>
          <h1>Bring Traditional Herbal Inspiration to Your Market</h1>
          <p className="heroText">
            HerbalBridge helps wholesalers, wellness brands, spas and gift
            retailers source adaptable mugwort products from China—with
            practical OEM and ODM support.
          </p>
          <div className="heroActions">
            <WhatsAppLink className="button primary">
              Get a Quick Quote
            </WhatsAppLink>
            <a className="button secondary" href="#products">
              Explore Products
            </a>
          </div>
          <div className="heroNotes">
            <span>✓ Sample support</span>
            <span>✓ Custom packaging</span>
            <span>✓ English communication</span>
          </div>
        </div>

        <div className="heroVisual" aria-label="Decorative herbal product illustration">
          <div className="sun" />
          <div className="leaf leafOne">❧</div>
          <div className="leaf leafTwo">❧</div>
          <div className="productMockup">
            <span className="mockupTop">HERBALBRIDGE</span>
            <strong>MUGWORT</strong>
            <em>Herbal Wellness Collection</em>
            <div className="mockupLeaf">🌿</div>
          </div>
          <div className="miniPack packOne">Foot Soak</div>
          <div className="miniPack packTwo">Herbal Sachet</div>
        </div>
      </section>

      <section className="trustStrip" aria-label="Buyer types">
        <span>For Wellness Brands</span>
        <span>For Wholesalers</span>
        <span>For Spa & Gift Retail</span>
        <span>For Private Label Projects</span>
      </section>

      <section className="section" id="products">
        <div className="sectionHeading">
          <p className="eyebrow">PRODUCT DIRECTIONS</p>
          <h2>Start with a proven format. Make it your own.</h2>
          <p>
            Our first collection focuses on practical herbal products that are
            easy to sample, customize and present to overseas buyers.
          </p>
        </div>

        <div className="productGrid">
          {products.map((product) => (
            <article className="productCard" key={product.name}>
              <div className="productIcon">{product.icon}</div>
              <h3>{product.name}</h3>
              <p>{product.text}</p>
              <a href="#contact">Ask about customization →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="splitSection" id="oem">
        <div className="splitVisual">
          <div className="sampleCard">
            <p>YOUR BRAND</p>
            <strong>Custom Herbal Set</strong>
            <span>Fabric · Formula · Label · Box</span>
          </div>
          <div className="sampleBadge">OEM / ODM</div>
        </div>

        <div className="splitContent">
          <p className="eyebrow">CUSTOM DEVELOPMENT</p>
          <h2>From a rough idea to a buyer-ready sample</h2>
          <p>
            Tell us your target market, product style and budget. We will help
            organize the right questions and move the project toward a sample
            efficiently.
          </p>
          <div className="steps">
            <div><b>01</b><span><strong>Share your idea</strong>Product, market, size, packaging and target quantity.</span></div>
            <div><b>02</b><span><strong>Confirm the direction</strong>We align materials, format and quotation assumptions.</span></div>
            <div><b>03</b><span><strong>Develop samples</strong>Review the physical sample before mass production.</span></div>
          </div>
          <WhatsAppLink className="textLink">Discuss an OEM project →</WhatsAppLink>
        </div>
      </section>

      <section className="section soft" id="about">
        <div className="sectionHeading narrow">
          <p className="eyebrow">WHY HERBALBRIDGE</p>
          <h2>A practical bridge between Chinese herbal products and global buyers</h2>
          <p>
            We focus on clear communication, flexible development and products
            that can be adapted to different retail and wholesale channels.
          </p>
        </div>

        <div className="advantageGrid">
          {advantages.map((item, index) => (
            <article key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div>
          <p className="eyebrow light">LET'S TALK</p>
          <h2>Looking for a mugwort product or private-label idea?</h2>
          <p>
            Send your product name, target market and estimated quantity. We
            will reply with the next practical step.
          </p>
        </div>

        <div className="contactCard">
          <WhatsAppLink className="contactButton">
            <span>WhatsApp</span>
            <strong>+86 176 2153 0596</strong>
          </WhatsAppLink>
          <a className="contactButton" href="mailto:yinghua20230402@gmail.com">
            <span>Email</span>
            <strong>yinghua20230402@gmail.com</strong>
          </a>
          <small>Typical inquiry details: product · market · quantity · packaging</small>
        </div>
      </section>

      <footer>
        <div className="brand footerBrand">
          <span className="brandMark">H</span>
          <span>
            <strong>HerbalBridge</strong>
            <small>Natural Wellness Supply</small>
          </span>
        </div>
        <p>© {new Date().getFullYear()} HerbalBridge. All rights reserved.</p>
        <div>
          <a href="#products">Products</a>
          <a href="#oem">OEM / ODM</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>

      <WhatsAppLink className="floatingWhatsApp" aria-label="Chat on WhatsApp">
        <span>WhatsApp</span>
      </WhatsAppLink>
    </main>
  );
}
