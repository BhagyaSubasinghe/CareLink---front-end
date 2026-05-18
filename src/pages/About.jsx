import React from 'react';
import './About.css';
import hospitalImg from '../assest/aboutus/hospital.jpg';
import doctorImg from '../assest/aboutus/doctor.jpg';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about-root">
      <header className="about-hero">
        <img src={hospitalImg} alt="Hospital facade" className="about-hero-img" />
        <div className="about-hero-content">
          <h1>Compassionate Care, Clinical Excellence.</h1>
          <p>We combine state-of-the-art medical technology with a deeply human, patient-first approach to redefine healthcare experiences.</p>
          <button className="btn-primary" onClick={() => navigate('/contact')}>Our Mission</button>
        </div>
      </header>

      <section className="about-intro">
        <div className="intro-text">
          <h2>A Legacy of Commitment</h2>
          <p>
            CareLink has been growing with a simple but profound mission: to provide accessible, patient-centric healthcare
            that treats the person, not just the symptoms. Founded by a group of dedicated practitioners, our journey started
            with a single clinic and a promise to serve our community with compassion and excellence.
          </p>
          <p>
            Today, CareLink combines clinical expertise with modern technology to deliver reliable, evidence-based care across
            a growing network of facilities.
          </p>
        </div>

        <div className="intro-media">
          <div className="media-card">
            <img src={doctorImg} alt="Doctor" />
            <div className="media-pin">Patient-Centric Focus</div>
          </div>
        </div>
      </section>

      <section className="pillars">
        <h3 className="pillars-title">The Pillars of CareLink</h3>
        <div className="pillar-cards">
          <div className="pillar-card">
            <div className="pillar-icon">🛡️</div>
            <h4>Integrity</h4>
            <p>We uphold the highest ethical standards, ensuring transparent care and trusted partnerships.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">💡</div>
            <h4>Innovation</h4>
            <p>Leveraging cutting-edge medical technology to improve outcomes and patient experiences.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">🤝</div>
            <h4>Inclusion</h4>
            <p>Delivering respectful, equitable care to every person who walks through our doors.</p>
          </div>
        </div>
      </section>

      <div className="about-metrics">
        <div className="metric"> 
          <div className="metric-number">20+</div>
          <div className="metric-label">Years of Service</div>
        </div>
        <div className="metric"> 
          <div className="metric-number">1M+</div>
          <div className="metric-label">Patients Treated</div>
        </div>
        <div className="metric"> 
          <div className="metric-number">500+</div>
          <div className="metric-label">Specialist Doctors</div>
        </div>
      </div>
    </div>
  );
}

