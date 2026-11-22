import Logo from "@/components/assets/images/vt-logo-1.jpeg";
import Image from "next/image";
import Link from "next/link";

const HeaderFooter = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="brand" aria-label="Viji Transport home">
            <Image
              src={Logo}
              alt="Viji Transport"
              width={54}
              height={54}
              className="brand-logo"
              priority
            />
            <div className="brand-copy">
              <strong>VIJI TRANSPORT</strong>
              <span>Excellence in Motion</span>
            </div>
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            <Link href="/#services">Services</Link>
            <Link href="/#fleet">Fleet</Link>
            <Link href="/#why-us">Why Us</Link>
            <Link href="/#contact" className="nav-quote">
              Get a Quote
            </Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer" id="contact">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <Image src={Logo} alt="" width={64} height={64} />
              <div>
                <strong>VIJI TRANSPORT</strong>
                <span>Excellence in Motion</span>
              </div>
            </div>
            <p>
              Reliable transportation and contract logistics for industrial
              and commercial requirements.
            </p>
          </div>
          <div>
            <h3>Quick links</h3>
            <Link href="/#services">Our Services</Link>
            <Link href="/#fleet">Our Fleet</Link>
            <Link href="/#why-us">Why Choose Us</Link>
          </div>
          <div>
            <h3>Transport Enquiries</h3>
            <p>Share your route, load details and required timeline.</p>
            <Link href="/#quote" className="footer-link">
              Request a quote
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Viji Transport</span>
          <span>Industrial Transportation &amp; Contract Logistics</span>
        </div>
      </footer>
    </div>
  );
};

export default HeaderFooter;