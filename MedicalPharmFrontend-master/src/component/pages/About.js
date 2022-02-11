import React from 'react';
import Footer from '../layout/Footer';
import NavBar from '../layout/NavBar';
import "./About.css"
export default function About() {
  return (
      <div className='container-bg'>
          <NavBar/>
    <div className="about-section">
    <h1>About Us Page</h1>
    <p>Some text about who we are and what we do.</p>
    <p>PHARMACEUTICAL ADVISORY SYSTEM provides you a healthy service !,Even In case of Emergency LockDown</p>
  </div>
  
  <h2 style={{"textAlign":"center"}}>Our Team</h2>
  <div className="row" style={{height:"20px"}}>
    <div className="column">
      <div className="card">
        <img src="https://www.idafoundation.org/media/Emedicines/default/Essential_medicines_edit.jpg" alt="Jane" style={{ "width":"100%","height":"150px" }}/>
        <div className="container">
          <h2 class="title">PHARMACEUTICAL ADVISORY SYSTEM</h2>
          <p className="title">OUR WORK</p>
          <p class="title">We are suggesting very good quality medicines to our user's who all are using our website. They can give rating according to the quality of  medicine after the use of them.In this advisory system it's very user friendly and allows people to search medicine what they need and the medicine price</p>
          <p class="title">medipharm@example.com</p>
          
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  </div>
  );
}
