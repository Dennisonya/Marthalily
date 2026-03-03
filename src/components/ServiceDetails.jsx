import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Services.css";
import { div } from "framer-motion/client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SERVICE_DETAILS = {
  "janitorial-cleaning": {
    title: "Janitorial & Cleaning Services",
    tagline: "Immaculate, consistent cleaning for workplaces and residential spaces.",
    intro:
      "Our janitorial and cleaning services are designed to keep your spaces spotless, healthy, and presentation-ready every day. We partner with organisations that value reliability, discretion, and a consistently high standard of cleanliness.",
    highlights: [
      "Daily, periodic, and deep-cleaning programmes tailored to your operation.",
      "Commercial and residential property cleaning, including offices, estates, and public facilities.",
      "Post-construction clean-up to hand over dust-free, move‑in‑ready spaces.",
      "Targeted disinfection of high-touch areas with industry-approved products."
    ],
    idealFor: [
      "Corporate offices and headquarter buildings",
      "Residential estates and managed apartments",
      "Banks, government facilities, and public institutions",
      "Hospitality and commercial facilities"
    ],
    outcomes: [
      "A consistently clean, pleasant environment for staff and visitors.",
      "Lower health and safety risks linked to poor hygiene.",
      "A professional first impression that reflects your brand."
    ]
  },
  "security-services": {
    title: "Security Services",
    tagline: "Trained personnel and smart systems protecting people, assets, and reputation.",
    intro:
      "We provide integrated security solutions that combine well-trained guards with appropriate technology to reduce risk, control access, and protect critical assets.",
    highlights: [
      "Manned guarding and surveillance for facilities of all sizes.",
      "Access control management for staff, visitors, and vehicles.",
      "CCTV monitoring and incident reporting (in line with client protocols).",
      "Security risk assessments and recommendations for improvement."
    ],
    idealFor: [
      "Corporate offices and data-sensitive environments",
      "Industrial facilities and warehouses",
      "Estates, gated communities, and high‑traffic sites"
    ],
    outcomes: [
      "Improved control of who enters and exits your facilities.",
      "Deterrence of theft, vandalism, and unauthorised access.",
      "Greater peace of mind for management, staff, and residents."
    ]
  },
  "pest-management": {
    title: "Integrated Pest Management System (IPMS)",
    tagline: "Environmentally conscious pest control that protects people, assets, and brand reputation.",
    intro:
      "Our IPMS approach goes beyond one-off fumigation. We focus on prevention, safe treatment, and continuous monitoring to keep your facility free from infestations with minimal disruption.",
    highlights: [
      "Environmentally safe chemicals and treatment methods where applicable.",
      "Scheduled preventive treatments and rapid-response corrective visits.",
      "Rodent, insect, and crawling-pest management tailored to each site.",
      "Root‑cause investigation to reduce recurrence and complaints."
    ],
    idealFor: [
      "Food and beverage facilities and warehouses",
      "Hospitality, healthcare, and educational environments",
      "Residential estates and high‑density properties"
    ],
    outcomes: [
      "Noticeable reduction in pest activity and complaints.",
      "Improved compliance with health, safety, and audit requirements.",
      "Protection of your brand image and customer experience."
    ]
  },
  "streetlight-infrastructure": {
    title: "Streetlight & Infrastructure Maintenance",
    tagline: "Reliable lighting and infrastructure that keeps communities safe and functional.",
    intro:
      "We help governments, estates, and private organisations maintain critical streetlighting and associated infrastructure so that roads, walkways, and shared spaces remain safe and operational.",
    highlights: [
      "Installation, inspection, and repair of streetlights and poles.",
      "Smart lighting solutions to reduce energy consumption and downtime.",
      "Preventive maintenance schedules to minimise unexpected failures.",
      "Asset condition reporting to support long‑term planning."
    ],
    idealFor: [
      "Government agencies and municipal projects",
      "Industrial parks and free‑trade zones",
      "Large estates, campuses, and private developments"
    ],
    outcomes: [
      "Safer, better‑lit environments for road users and pedestrians.",
      "Lower downtime and maintenance emergencies.",
      "Extended asset life and better visibility of infrastructure condition."
    ]
  },
  "landscaping-groundskeeping": {
    title: "Landscaping & Groundskeeping",
    tagline: "Well-kept outdoor spaces that reflect the quality of your organisation.",
    intro:
      "We design, maintain, and refresh green areas so that your outdoor environment feels intentional, safe, and beautifully maintained all year round.",
    highlights: [
      "Routine lawn care, trimming, and debris removal.",
      "Landscape design and softscaping to elevate your frontage and common areas.",
      "Tree and shrub maintenance to keep walkways safe and tidy.",
      "Seasonal refresh programmes for high‑profile locations."
    ],
    idealFor: [
      "Corporate campuses and commercial buildings",
      "Residential estates and gated communities",
      "Hospitality and recreational facilities"
    ],
    outcomes: [
      "Attractive, well‑presented outdoor spaces that enhance visitor experience.",
      "Reduced slip, trip, and visibility hazards.",
      "A cohesive external environment that supports your brand image."
    ], 
    images: ["/images/cleaning service.jpeg","/images/cleaning service2.jpeg"]
  },
  "waste-management": {
    title: "Waste Management",
    tagline: "Structured collection, sorting, and disposal that keeps your facility compliant and orderly.",
    intro:
      "We provide end‑to‑end waste management services for both solid and liquid waste, helping organisations maintain cleanliness while meeting regulatory and environmental expectations.",
    highlights: [
      "Scheduled collection of solid and liquid waste streams.",
      "On‑site segregation and sorting to support recycling initiatives.",
      "Coordination with approved disposal partners and facilities.",
      "Provision and maintenance of bins, compactors, and containers."
    ],
    idealFor: [
      "Industrial and manufacturing facilities",
      "Banks, offices, and multi‑tenant buildings",
      "Residential estates and commercial complexes"
    ],
    outcomes: [
      "Cleaner, more organised back‑of‑house and external areas.",
      "Better tracking of waste volumes and associated costs.",
      "Improved compliance with environmental regulations."
    ]
  },
  "building-maintenance": {
    title: "Building, Elevators & Generator Maintenance",
    tagline: "Critical systems kept running so your operations never pause.",
    intro:
      "Our technical teams manage key building systems — from power and lifts to plumbing and HVAC — through structured preventive maintenance and responsive repairs.",
    highlights: [
      "Elevator and generator inspections, servicing, and coordination with OEM partners.",
      "Plumbing, electrical, and HVAC checks to reduce unplanned downtime.",
      "Corrective maintenance and minor works carried out by trained technicians.",
      "Asset registers and maintenance logs to support long‑term planning."
    ],
    idealFor: [
      "High‑rise commercial and residential buildings",
      "Industrial facilities and data‑reliant environments",
      "Banks, campuses, and mission‑critical sites"
    ],
    outcomes: [
      "Greater uptime for lifts, power, and essential services.",
      "Lower risk of major failures through early detection.",
      "A more predictable maintenance budget over time."
    ]
  }
};

export default function ServiceDetails() {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();

  const service = SERVICE_DETAILS[serviceSlug];

  if (!service) {
    return (
      <div className="service-detail-page">
        <nav>
          <Navbar />
        </nav>
        <main className="service-detail-main">
          <header className="service-detail-hero">
            <h1>Service not found</h1>
            <p>The service you&apos;re looking for doesn&apos;t exist or has moved.</p>
            <button
              className="service-back-btn"
              onClick={() => navigate("/services")}
            >
              Back to all services
            </button>
          </header>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <nav>
        <Navbar />
      </nav>
      {service.images.length !== 0 ?
      <section className="service-detail-images">
      <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
        {service.images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`${service.title} ${index + 1}`}
              className="service-detail-image"
            />
          </div>
        ))}
      </Slider>
    </section> : <></>}      
    <main className="service-detail-main">
        <header className="service-detail-hero">
          <span className="service-detail-label">SERVICE DETAIL</span>
          <h1>{service.title}</h1>
          <p>{service.tagline}</p>
        </header>

        <section className="service-detail-grid">
          <div className="service-detail-primary">
            <h2>What we deliver</h2>
            <p className="service-detail-intro">{service.intro}</p>
            <ul className="service-detail-list">
              {service.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="service-detail-sidebar">
            <div className="service-detail-card">
              <h3>Ideal for</h3>
              <ul>
                {service.idealFor.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="service-detail-card">
              <h3>Key outcomes</h3>
              <ul>
                {service.outcomes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        <section className="service-detail-cta">
          <button
            className="service-back-btn secondary"
            onClick={() => navigate("/services")}
          >
            Back to all services
          </button>
          <button
            className="service-contact-btn"
            onClick={() => navigate("/contact")}
          >
            Talk to our team
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

