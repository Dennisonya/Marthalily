import { useState } from 'react' 
import {Routes ,Route, useNavigate, Link } from 'react-router-dom';
import './App.css'
import './Navbar';
import Navbar from './Navbar';
import Footer from './Footer';
import Services from './Services';
import ServiceDetails from './ServiceDetails';
import About from './About';
import Contact from './Contact';
import AnimateOnView from './AnimateOnView';
import FadeInWhenVisible from './FadeInWhenVisible';

export default function App() {
  const navigate = useNavigate(); // Hook for navigation

  const handleServicesClick = () => {
    navigate('/services');
  };

  const handleLearnMoreClick = () => {
    navigate('/about');
  };
  return(
    <div className='homepage'>
      <Routes>
        <Route path="/" element={
          <>
      <div className='home-hero'>
        <nav>
          <Navbar/>
        </nav>
        <div id="hero-txt">
          <h1 >
          Driven By a passion for structure and service, we operate with precision and care-ensuring clean, safe and functional spaces.
        </h1>
        <h3>
          We don't just maintain buildings, we elevate environments
        </h3>
        <button id="services-btn">
          <Link to="/services">
          View our Services
          </Link>
        </button>
        </div>
      </div>
 
  <section className="about-preview-section">
      <div className="about-content">
        <AnimateOnView delay={0.2}> 
        <h2>Our Story</h2>
         </AnimateOnView>
         <AnimateOnView delay={0.4}>
        <p>
        Martha Lily Facility Management is a total facility management service provider dedicated to delivering professional, reliable, and cost-effective services that enhance the functionality, safety, and aesthetic of built environments. From janitorial and cleaning services to landscaping, pest control, security, waste management, and building maintenance, we manage the spaces that power everyday life.
        Our operations are built on a foundation of excellence, integrity, and innovation. With a team of highly trained professionals and an investment in modern, industry-leading equipment, we ensure seamless service delivery that meets international standards. Whether supporting residential estates, commercial complexes, or government infrastructure, we tailor our solutions to meet the unique needs of each client.
        </p>
        </AnimateOnView>
        <AnimateOnView delay={0.6}>
        <button className="learn-more-btn" onClick={handleLearnMoreClick}>Learn More</button>
        </AnimateOnView>
      </div>
      <div className="about-image">
        <img 
          src="/images/Cleaners.jpeg" 
          alt="Our team at work" 
        />
      </div>
   </section>
    


      <section className='service-section'>
        <AnimateOnView>
          <h1 id="service-header">Services We Offer </h1>
          </AnimateOnView>
      <div className="services">
        <FadeInWhenVisible delay={0.2}>
        <div className='service-card'>
          <div>
            <img src="/images/security.png" alt="" className='service-img'/>
            <h2>Security Services</h2>
          </div>
          <ul>
            <li>Manned Guarding and surveillance</li>
            <li>Access control and security systems</li>
          </ul>
        </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.4}>
         <div className='service-card'>
          <div >
              <img src="/images/cleaning-services.png" alt="" className='service-img' />
              <h2>Janitorial & Cleaning services</h2>
          </div>
          <ul>
            <li>Commercial & residential cleaning</li>
            <li>Post contruction cleanup</li>
            <li> Deep cleaning & disinfection</li>
          </ul>
        </div>
          </FadeInWhenVisible>


          <FadeInWhenVisible delay={0.6}>
        <div className='service-card'>
          <div>
          <img src="/images/container.png" alt="" className='service-img' />
          <h2>Waste Management</h2>
          </div>
          <ul>
            <li>Solid and liquid waste collection</li>
            <li>Waste sorting, recycling and disposal</li>
          </ul>
        </div>
          </FadeInWhenVisible>

      </div>
        <button id="services-btn2" onClick={handleServicesClick}>
          See all our services
        </button>

      </section> 

      <section className='why-choose-us-section'>
        <h1 id='why-choose-us-header'>Why Choose Us?</h1>
        <div className='why-choose-us-content'>
          <div className='why-choose-us-item'>
            <h2>Tech Enabled Solutions</h2>
            <p>We leverage technology to streamline operations, enhance efficiency, and provide real-time data-driven insights to our clients.</p>
          </div>
          <div className='why-choose-us-item'>
            <h2>Trained Professionals</h2>
            <p>Our team is comprised of highly trained and experienced professionals who are dedicated to providing the best possible service to our clients.</p>
          </div>
          <div className='why-choose-us-item'>
            <h2>Flexible Service Models</h2>
            <p>We offer flexible service models to meet the unique needs of our clients, whether it's a full-time, part-time, or on-demand service.</p>
          </div>
          <div className='why-choose-us-item'>
            <h2>Customer-Centric Culture</h2>
            <p>We are committed to providing the best possible service to our clients and ensuring their satisfaction.</p>
          </div>
          <div className='why-choose-us-item'>
            <h2>Eco-Conscious Operations</h2>
            <p>We are committed to reducing our environmental impact and promoting sustainability in all our operations, with the use of green cleaning agents and energy efficient tools.</p>
          </div>
          <div className='why-choose-us-item'>
            <h2>High Grade Equipment</h2>
            <p>We invest in the latest and most advanced equipment to ensure the best possible service to our clients.</p>
          </div>
        </div>
      </section>

      <section className="clientele-section">
        <h1 className="clientele-header">Our Clientele</h1>
        <p className='clientele-p'>We deliver professional total facility management solutions to corporate offices, residential estate, hospitality businesses and commercial facilities across Nigeria.</p>
        <div className="clientele-grid">
          <div className='clientele-item'>
            <img src="/images/NB_Logo.png" alt="Nigerian Breweries logo" className='clientele-img'/>
            <h2>Nigerian Breweries</h2>
          </div>
          <div className='clientele-item'>
            <img src="/images/FAAN_Logo.jpg" alt="FAAN logo" className='clientele-img'/>
            <h2></h2>
          </div>    
          <div className='clientele-item'>
            <img src="/images/CBN.png" alt="CBN logo" className='clientele-img'/>
            <h2>CBN, AKURE</h2>
          </div>
          <div className='clientele-item'>
            <img src="/images/CBN.png" alt="CBN logo" className='clientele-img'/>
            <h2>CBN, MINNA</h2>
          </div>
          <div className='clientele-item'>
            <img src="/images/BOI_Logo.png" alt="BOI logo" className='clientele-img'/>
            <h2>Bank Of Industry</h2>
          </div>
          <div className='clientele-item'>
            <img src="/images/NEPZA.jpeg" alt="NEPZA logo" className='clientele-img'/>
            <h2></h2>
          </div>
        </div>
      </section>

      <section className='certifications'>
        <img src="/images/MARTHALILY_Certi_Logos.png" alt="" className='certi-images' />

      </section>
    <Footer/>
          </>
        }/>
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceSlug" element={<ServiceDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
  )

}
