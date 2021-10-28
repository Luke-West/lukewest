import React, { useRef } from "react";
import { useIntersection } from "react-use";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import beerLogo from "./logos/beer-logo.png";
import laptopLogo from "./logos/laptop-logo.png";
import walkingLogo from "./logos/walking-logo.png";
import gsap from "gsap";
import "./App.css";

function App() {

  const SectionRef = useRef(null);

  const intersection = useIntersection(SectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1
  });

  const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: 'power4.out',
      stagger: {
        amount: .3
      }
    })
  };

  const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: 'power4.out',
      stagger: {
        amount: .3
      }
    })
  }


  intersection && intersection.intersectionRatio < .8 ? 
    fadeOut(".fadeIn")
  : fadeIn(".fadeIn");


  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Row>
            <Col lg={4} md={4} sm={4}>
              <img src={beerLogo} className="App-logo" alt="logo" />
              <img src={laptopLogo} className="App-logo" alt="logo" />
              <img src={walkingLogo} className="App-logo" alt="logo" />
            </Col>
        </Row>
        <h1>
          Luke West
        </h1>
        </Container>
      </header>
      <body className="App-body">
        <Container>
          <Row ref={SectionRef} className="justify-content-md-center">
            <Col>
              <h1 className="fadeIn">About me</h1>
              <small className="fadeIn">(... Or at least the vaguely interesting stuff)</small>
              <h3 className="fadeIn">My career in a nutshell</h3>
              <p className="about-paragraph fadeIn">I am a Web Developer by trade and I reside between Huddersfield and Wakefield in West Yorkshire. 
              I started my career as an apprentice back in 2015 (when I was 17 years old) and I've been a PHP Developer
              ever since. My skillset has already had to change lots even throughout this small period of time, picking up
              different tools and languages as I go along which I expect to be the case for the rest of my career.
              My only weakness? Frontend. As if I even had to tell you that though, am I right?</p>
              <h3 className="fadeIn">My hobbies</h3>
              <small className="fadeIn">(... I'll try and stick to the point)</small>
              <p className="about-paragraph fadeIn">My main hobby is probably exactly what yours is, but with a much deeper root; beer. We all love beer, right?! But 
              my love for beer goes one step further... I basically take nature photos of the beers I drink (they are unique craft beers
              by the way, not just any old supermarket brew) and then blog about them on my instagram. I've managed to pick up a couple
              of followers along the way. This leads me to my second hobby... Walking. I love getting out in nature and walking routes
              I've never done before. The Peak District is a great place to go to find a new walk. Lastly, one random morning, sometime
              around 2017, I woke up early and couldn't get back to sleep. Rather than stressing, I thought to myself, "wouldn't this be
              a great time to do something productive", and so my love for running began. Every work morning since, I have been for a jog.
              I also jog much further on an evening, or go to the gym.</p>
            </Col>
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default App;
