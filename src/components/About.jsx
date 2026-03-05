import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import FadeInWhenVisible from "./FadeInWhenVisible.jsx";
import BurgerMenu from "./BurgerMenu.jsx";
import { Link } from "react-router-dom";
import { image } from "framer-motion/client";

const AboutUs = () => {
  const navigate = useNavigate();
  const complianceCarouselRef = useRef(null);
  const [activeCertificate, setActiveCertificate] = useState(null);
  const [expandedMaverick, setExpandedMaverick] = useState(null);

  const certifications = [
    {
      name: "CAC Certificate of Incorporation",
      authority: "Corporate Affairs Commission",
      status: "Active",
      image: "/images/CAC.jpg",
    },
    {
      name: "Tax Clearance Certificate",
      authority: "Federal Inland Revenue Service (FIRS)",
      status: "Valid until 2025",
      image: "/images/FIRS.jpg",
    },
    {
      name: "IFMA Certificate of Membership",
      authority: "International Facility Management Association (IFMA)",
      status: "Active",
      image: "/images/IFMA.jpg",
    },
    {
      name: "ISO 45001:2018",
      authority: "International Organization for Standardization",
      status: "Active",
      image: "/images/ISO 45001 2018.jpg",
    },
    {
      name: "ISO 14001:2015",
      authority: "International Organization for Standardization",
      status: "Active",
      image: "/images/ISO 2015.jpg",
    },
    {
      name: "ISO 9001:2015 - Quality Management System",
      authority: "International Organization for Standardization",
      status: "Active",
      image: "/images/ISO 90012015.jpg",
    },
    {
      name: "BPP Certificate",
      authority: "Bureau Of Public Procurement",
      status: "Active",
      image: "/images/BPP.jpg",
    },
    {
      name: "ITF Certificate",
      authority: "Industrial Training Fund",
      status: "Active",
      image: "/images/ITF.jpg",
    },
    {
      name: "Health, Safety & Environment (HSE) Policy",
      authority: "Health, Safety & Environment",
      status: "Active",
      image: "/images/HSE.jpg"
    }
  ];

  const handleContactClick = () => {
    navigate("/contact");
  };

  const scrollComplianceCarousel = (direction) => {
    const container = complianceCarouselRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const openCertificate = (cert) => {
    setActiveCertificate(cert);
  };

  const closeCertificate = () => {
    setActiveCertificate(null);
  };

  const toggleMaverick = (id) => {
    setExpandedMaverick((prev) => (prev === id ? null : id));
  };

  return (
    <div className="about-page">
      <div className="navbar1">
            <div className="logo">
                <Link to="/">
                <img src="/images/MARTHALLY_LogoWhite.webp" alt="" id="logo-img" />
                </Link>
            </div>

            <ul className="links">
                <li><Link to ="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li id="contact-us-btn"><Link to="/contact">Contact Us</Link></li>
            </ul>

            <div className="burger-wrapper1">
                 <BurgerMenu/>
            </div>
           
        </div>

<section className="our-story-section">
  <div className="story-content">
    <div className="story-text">
      <FadeInWhenVisible delay={0.2}>
      <h1 id="story-header">Our Story</h1>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.4}>
      <p id="story-paragraph">
        MarthaLily Facility Management is a total facility management service provider dedicated to delivering professional, reliable, and cost-effective services that enhance the functionality, safety, and aesthetic of built environments.
        From janitorial and cleaning services to landscaping, pest control, security, waste management, and building maintenance, we manage the spaces that power everyday life. Our operations are built on a foundation of excellence, integrity, and innovation. 
       We don't just maintain buildings;  <strong>we elevate environments.</strong>
      </p>
      </FadeInWhenVisible>
    
    </div>
    <img src="/images/homehero.webp" alt="Our Story" id="story-img" />
  </div>
</section>

<section className="our-advantage">
  <div className="advantage-header">
    <FadeInWhenVisible delay={0.3}>
    <h2>Our Advantage</h2>
    </FadeInWhenVisible>

    <FadeInWhenVisible delay={0.5}>
    <p>
      At Marthalily Facility Management, we blend innovation, sustainability, and people-first practices to deliver excellence in every service.
    </p>
    </FadeInWhenVisible>
  </div>

  <div className="advantage-grid">
    <FadeInWhenVisible delay={0.3}>
    <div className="advantage-card">
      <img src="/images/ANALYST_1.webp" className="advantage-img tech" />
      <h3>Tech-Driven Services</h3>
      <p>We use smart tools and automation to enhance efficiency and service quality.</p>
    </div>
    </FadeInWhenVisible>


    <FadeInWhenVisible delay={0.5}>
    <div className="advantage-card">
      <img src="/images/CLEANER_2.webp" className="advantage-img eco" />
      <h3>Eco-Conscious Operations</h3>
      <p>Committed to green cleaning agents and sustainable facility practices.</p>
    </div>
    </FadeInWhenVisible>

    <FadeInWhenVisible delay={0.7}>
    <div className="advantage-card">
      <img src="/images/Pro Team.webp" className="advantage-img trained" />
      <h3>Trained Professionals</h3>
      <p>Our team members are highly trained to deliver consistent, expert-level care.</p>
    </div>
    </FadeInWhenVisible>

    <FadeInWhenVisible delay={0.9}>
    <div className="advantage-card">
      <img src="/images/customer care.webp" className="advantage-img flexible" />
      <h3>Flexible Service Models</h3>
      <p>Customized plans for every client’s unique needs and environment.</p>
    </div>
    </FadeInWhenVisible>

    <FadeInWhenVisible delay={0.11}>
    <div className="advantage-card">
      <img src="/images/customer centric.webp" className="advantage-img customer" />
      <h3>Customer-Centric Culture</h3>
      <p>Everything we do revolves around satisfaction, trust, and long-term value.</p>
    </div>
    </FadeInWhenVisible>
  </div>
</section>

  <section className="mavericks">
    <FadeInWhenVisible delay={0.2}>
      <h1 id="mavericks-header">Meet Our Mavericks</h1>
    </FadeInWhenVisible>

    <FadeInWhenVisible delay={0.4}>
  <p className="mavericks-subtext">
    Our strength lies in the diverse expertise and passion of our team. Each team member brings unique skills and experience, driving innovation and collaboration.
  </p>
    </FadeInWhenVisible>

  <div className="maverick-cards">
    {/* Card 1 */}
    <FadeInWhenVisible delay={0.3}>
    <div className="maverick-card">
      <img src="/images/Lateef Headshot.webp" className="maverick-img placeholder-img" />
      <h3 className="maverick-name">Lateef Gbajabiamila</h3>
      <p className="maverick-title">Chief Executive Officer</p>
      <p className="maverick-desc">
        {expandedMaverick === "lateef"
          ? "Results-driven Executive with a diverse background in business development, media, and spirits distribution, leveraging strategic insight, operational excellence, and a passion for structure to lead multicultural teams and deliver innovative, client-focused solutions in the facility management industry."
          : "Results-driven Executive with a diverse background in business development, media, and spirits distribution, leveraging strategic insight and operational excellence to lead multicultural teams."}
      </p>
      <button
        type="button"
        className="maverick-read-more"
        onClick={() => toggleMaverick("lateef")}
      >
        {expandedMaverick === "lateef" ? "Read less" : "Read more"}
      </button>
    </div>
    </FadeInWhenVisible>
    {/* Card 4 */}
    <FadeInWhenVisible delay={0.3}>
    <div className="maverick-card">
      <img src="/images/MARTHALILY_Benson.png" className="maverick-img placeholder-img" />
      <h3 className="maverick-name">Oluwasegun Benson</h3>
      <p className="maverick-title">Managing Director</p>
      <p className="maverick-desc">
        {expandedMaverick === "benson"
          ? "With a strong background in Total Facility Management and a proven track record in delivering high-quality, integrated solutions across various sectors, his hands-on leadership and strategic vision have positioned Marthalily as a trusted name in the industry, known for operational excellence, client satisfaction, and a commitment to best practices in service delivery."
          : "With a strong background in Total Facility Management and a proven track record delivering integrated solutions across sectors, his hands-on leadership and strategic vision position Marthalily as a trusted industry name."}
      </p>
      <button
        type="button"
        className="maverick-read-more"
        onClick={() => toggleMaverick("benson")}
      >
        {expandedMaverick === "benson" ? "Read less" : "Read more"}
      </button>
    </div>
    </FadeInWhenVisible>
  
    {/* Card 2 */}
    <FadeInWhenVisible delay={0.5}> 
    <div className="maverick-card">
      <img src="/images/Tolulope headshot.webp" className="maverick-img placeholder-img" />
      <h3 className="maverick-name">Toluwalase Durosinmi-Etti</h3>
      <p className="maverick-title">Chief Operating Officer</p>
      <p className="maverick-desc">
        {expandedMaverick === "tolulope"
          ? "A dynamic operations leader with over six years of cross-industry experience in the UK and Nigeria. Drives process efficiency, team performance, and client satisfaction through strategic, data-driven decision-making."
          : "A dynamic operations leader with over six years of cross-industry experience in the UK and Nigeria, driving process efficiency, team performance, and client satisfaction."}
      </p>
      <button
        type="button"
        className="maverick-read-more"
        onClick={() => toggleMaverick("tolulope")}
      >
        {expandedMaverick === "tolulope" ? "Read less" : "Read more"}
      </button>
    </div>
    </FadeInWhenVisible>

    {/* Card 3 */}
    <FadeInWhenVisible delay={0.7}>
    <div className="maverick-card">
      <img src="/images/Kikelomo Headshot.webp" className="maverick-img placeholder-img" />
      <h3 className="maverick-name">Kikelomo Tito</h3>
      <p className="maverick-title">Head of HR/Projects</p>
      <p className="maverick-desc">
        {expandedMaverick === "kikelomo"
          ? "HR professional with expertise in strategic planning, talent acquisition, and organizational development. Known for driving compliance, performance, and employee engagement through a consultative, results-oriented approach."
          : "HR professional with expertise in strategic planning, talent acquisition, and organizational development, known for driving compliance, performance, and employee engagement."}
      </p>
      <button
        type="button"
        className="maverick-read-more"
        onClick={() => toggleMaverick("kikelomo")}
      >
        {expandedMaverick === "kikelomo" ? "Read less" : "Read more"}
      </button>
    </div>
    </FadeInWhenVisible>
    
  </div>
</section>

<h1 id='values-header'>Our Core Values</h1>
      <section className="core-values">  
          <div className="values">
            <img src="/images/honesty.png" alt="" className='value-img'/>
            <h4>Integrity</h4>
          </div>
           <div className="values">
            <img src="/images/innovation.png" alt="" className='value-img'/>
            <h4>Innovation</h4>
          </div>
           <div className="values">
            <img src="/images/earth.png" alt="" className='value-img'/>
            <h4>Sustainability</h4>
          </div>
           <div className="values">
            <img src="/images/reputation.png" alt="" className='value-img'/>
            <h4>Customer Satisfaction</h4>
          </div>
           <div className="values">
            <img src="/images/worker.png" alt="" className='value-img'/>
            <h4>Trained Professionals</h4>
          </div>
      </section>

      <section className="our-team">
        <h1 className="our-team-header">Our Team</h1>
        <div className="our-team-imgs">
          <img src="/images/Security2.jpeg" alt="Security personnel team" className="team-img" />
          <img src="/images/Cleaners.jpeg" alt="Cleaning crew" className="team-img" />
          <img src="/images/Security.jpeg" alt="Security staff" className="team-img" />
          <img src="/images/contact-us-hero.png" alt="Team at work" className="team-img" />
        </div>
      </section>

      <section className="compliance-section">
        <div className="compliance-container">
          <FadeInWhenVisible delay={0.2}>
            <div className="compliance-header">
              <h2>Regulatory Compliance &amp; Certifications</h2>
              <p>
                We operate in line with Nigerian regulatory requirements and industry best practices,
                maintaining up‑to‑date certifications that reflect our commitment to professionalism
                and accountability.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="compliance-carousel-wrapper">
            <button
              type="button"
              className="compliance-arrow compliance-arrow--left"
              aria-label="Scroll certifications left"
              onClick={() => scrollComplianceCarousel("left")}
            >
              &#8592;
            </button>

            <div className="compliance-carousel" ref={complianceCarouselRef}>
              {certifications.map((cert, index) => (
                <FadeInWhenVisible key={cert.name} delay={0.2 + index * 0.08}>
                  <article
                    className="compliance-card"
                    role="button"
                    tabIndex={0}
                    onClick={() => openCertificate(cert)}
                  >
                    <div className="compliance-card-img-wrap">
                      <img
                        src={cert.image}
                        alt={`${cert.name} issued by ${cert.authority}`}
                        className="compliance-card-image"
                      />
                      <div className="compliance-card-overlay" />
                      <span className="compliance-card-badge">CERTIFICATE</span>
                    </div>
                    <div className="compliance-card-body">
                      <p className="compliance-authority">{cert.authority}</p>
                      <h3 className="compliance-card-title">{cert.name}</h3>
                      <span
                        className={`compliance-status-badge ${
                          cert.status === "Active" ? "badge--active" : "badge--valid"
                        }`}
                      >
                        {cert.status}
                      </span>
                    </div>
                  </article>
                </FadeInWhenVisible>
              ))}
            </div>

            <button
              type="button"
              className="compliance-arrow compliance-arrow--right"
              aria-label="Scroll certifications right"
              onClick={() => scrollComplianceCarousel("right")}
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>

      {activeCertificate && (
        <div
          className="cert-modal-backdrop"
          onClick={closeCertificate}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="cert-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="cert-modal-close"
              onClick={closeCertificate}
              aria-label="Close certificate preview"
            >
              ×
            </button>
            <img
              src={activeCertificate.image}
              alt={`${activeCertificate.name} issued by ${activeCertificate.authority}`}
              className="cert-modal-image"
            />
            <h3 className="cert-modal-title">{activeCertificate.name}</h3>
            <p className="cert-modal-authority">{activeCertificate.authority}</p>
          </div>
        </div>
      )}

<section className="cta-section">
  <div className="cta-content">
    <h2>Partner with Marthalily for Superior Facility Management</h2>
    <div className="cta-buttons">
      <button className="cta-primary" onClick={handleContactClick}>Contact Us Today</button>
    </div>
  </div>
</section>

    <footer>
        <Footer/>
    </footer>
    </div>
  );
};

export default AboutUs;
