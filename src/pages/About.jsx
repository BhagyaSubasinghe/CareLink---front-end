import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Stack from '@mui/material/Stack';
import './About.css';

function ServiceCard({ icon, title, desc }) {
  return (
    <Card className="service-card" elevation={1}>
      <CardContent>
        <div className="service-icon">{icon}</div>
        <Typography variant="h6" className="service-title">{title}</Typography>
        <Typography className="service-desc">{desc}</Typography>
      </CardContent>
    </Card>
  );
}

export default function About() {
  const services = [
    { icon: '🩺', title: 'Verified Doctors', desc: 'Search verified profiles, specialties and ratings.' },
    { icon: '💬', title: 'Telehealth', desc: 'Secure online consultations with qualified providers.' },
    { icon: '⏰', title: 'Reminders & Scheduling', desc: 'Automated reminders and easy rescheduling.' },
    { icon: '🔐', title: 'Secure Records', desc: 'Encrypted storage for prescriptions and records.' },
  ];

  const faqs = [
    { q: 'How do you verify doctors?', a: 'We verify licenses and clinic affiliations before listing.' },
    { q: 'Is my data private?', a: 'Yes — we store records securely and never share without consent.' },
    { q: 'Can I consult online?', a: 'Yes — telehealth options are available for many providers.' },
  ];

  return (
    <Container className="about-root">
      <section className="about-hero">
        <div className="about-text">
          <Typography variant="h3" component="h1" className="about-title">About CareLink</Typography>
          <Typography variant="body1" className="about-lead">We make healthcare simpler by connecting you with verified providers, offering flexible telehealth, and keeping your records secure — all from one place.</Typography>

          <div className="services-grid-wrap">
            <Grid container spacing={2}>
              {services.map((s) => (
                <Grid item xs={12} sm={6} md={3} key={s.title}>
                  <ServiceCard icon={s.icon} title={s.title} desc={s.desc} />
                </Grid>
              ))}
            </Grid>
          </div>

        </div>

        <div className="about-visual" aria-hidden>
          <img src="https://via.placeholder.com/520x340?text=CareLink" alt="CareLink" />
        </div>
      </section>

      <section className="how-it-works">
        <Typography variant="h5" component="h2" className="section-title">How it works</Typography>
        <Stack direction="row" spacing={2} className="steps-row">
          <div className="step">
            <div className="step-bubble">1</div>
            <div className="step-text">Search doctors</div>
          </div>
          <div className="step">
            <div className="step-bubble">2</div>
            <div className="step-text">Choose service</div>
          </div>
          <div className="step">
            <div className="step-bubble">3</div>
            <div className="step-text">Get care</div>
          </div>
        </Stack>
      </section>

      <section className="about-values">
        <Typography variant="h5" component="h2" className="section-title">Frequently asked</Typography>
        <div className="faq-list">
          {faqs.map((f) => (
            <Accordion key={f.q}>
              <AccordionSummary expandIcon={<span>▾</span>}>
                <Typography className="faq-q">{f.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="faq-a">{f.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </section>
    </Container>
  );
}
