import ImageCarousel from "@/components/Atoms/ImageCarousel";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Industrial Transportation",
    text: "Safe and dependable movement of raw materials, machinery and industrial goods.",
  },
  {
    number: "02",
    title: "Contract Logistics",
    text: "Dedicated transport operations planned around your routes, schedules and business volume.",
  },
  {
    number: "03",
    title: "Commercial Hauling",
    text: "Flexible load solutions for regular trade, project and commercial requirements.",
  },
];

const reasons = [
  "Reliable route and schedule planning",
  "Safety-first transport practices",
  "Responsive operational support",
];

const HomePage = () => {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span />
              Industrial transportation
            </p>
            <h1>
              VIJI TRANSPORT
              <span>Excellence in Motion.</span>
            </h1>
            <p className="hero-description">
              Reliable transportation solutions for industrial and commercial
              requirements.
            </p>
            <div className="hero-actions" id="quote">
              <Link href="#contact" className="primary-button">
                Get a Transport Quote
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="#services" className="text-button">
                Explore services
              </Link>
            </div>
          </div>

          <div className="hero-visual" aria-label="Viji Transport fleet">
            <ImageCarousel />
            <div className="fleet-stat">
              <strong>Reliable</strong>
              <span>on every route</span>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-section" aria-label="Company introduction">
        <div className="intro-label">
          <span>01</span>
          <p>Who we are</p>
        </div>
        <div className="intro-copy">
          <h2>Built for the demands of industry.</h2>
          <p>
            Viji Transport delivers dependable road transportation and contract
            logistics with a practical, customer-first approach. We help
            businesses move goods confidently through disciplined planning,
            responsive service and a commitment to keeping operations moving.
          </p>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">
              <span />
              What we do
            </p>
            <h2>Transport solutions that keep business moving.</h2>
          </div>
          <p>
            Purpose-built logistics support for consistent, cost-conscious and
            on-time movement.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-number">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link href="#contact" aria-label={`Enquire about ${service.title}`}>
                Enquire now <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="fleet-section" id="fleet">
        <div className="fleet-media">
          <ImageCarousel />
        </div>
        <div className="fleet-copy">
          <p className="eyebrow dark">
            <span />
            Our fleet
          </p>
          <h2>Ready to move what matters.</h2>
          <p>
            Our fleet and operational approach are focused on load safety,
            route efficiency and dependable delivery for every assignment.
          </p>
          <Link href="#contact" className="outline-button">
            Discuss your requirement
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="why-section" id="why-us">
        <div className="why-heading">
          <p className="eyebrow">
            <span />
            Why choose us
          </p>
          <h2>A transport partner you can rely on.</h2>
        </div>
        <div className="reason-grid">
          {reasons.map((reason, index) => (
            <article key={reason}>
              <span>0{index + 1}</span>
              <h3>{reason}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div>
          <p>Have a transport requirement?</p>
          <h2>Let&apos;s keep your cargo moving.</h2>
        </div>
        <Link href="#contact" className="primary-button">
          Get a Transport Quote
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
};

export default HomePage;