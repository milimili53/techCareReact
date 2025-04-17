import React from 'react'

export const Navbar = () => {
  return (
    <div>
        <div className="navbar">
  <div className="nav">
    <div className="logo">
      <img src="/assets/TestLogo.svg" alt="logo" />
    </div>
    <div className="navLinks">
      <a href="#" className="link">
        <img src="/assets/home.svg" alt="home" />
        <span className="linkText">Overview</span>
      </a>
      <a href="#" className="link active">
        <img src="/assets/group.svg" alt="group" />
        <span className="linkText">Patients</span>
      </a>
      <a href="#" className="link">
        <img src="/assets/calendar.svg" alt="calendar" />
        <span className="linkText">Schedule</span>
      </a>
      <a href="#" className="link">
        <img src="/assets/chat.svg" alt="chat" />
        <span className="linkText">Message</span>
      </a>
      <a href="#" className="link">
        <img src="/assets/credit_card.svg" alt="transactions" />
        <span className="linkText">Transactions</span>
      </a>
    </div>
    <div className="drNav">
      <div className="drinfo">
        <img
          className="drImg"
          src="/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png"
          alt="doctor"
        />
        <div className="docInfo">
          <h4>Dr. Jose Simmons</h4>
          <h5>General Practitioner</h5>
        </div>
        <img className="options" src="/assets/settings.svg" alt="settings" />
        <img className="options" src="/assets/more_vert.svg" alt="more-vertical" />
      </div>
    </div>
    <div className="hamburger-menu">
      <img className="hamburger" src="/assets/more.png" alt="hamburger" />
    </div>
  </div>
  <div className="resNav">
    <div className="hidden resNavLinks">
      <div className="drInfoRes drinfo">
        <img
          className="drImg"
          src="/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png"
          alt="doctor"
        />
        <div className="docInfo docInfoRes">
          <h4>Dr. Jose Simmons</h4>
          <h5>General Practitioner</h5>
        </div>
        <img className="options" src="/assets/settings.svg" alt="settings" />
        <img className="options" src="/assets/more_vert.svg" alt="more-vertical" />
      </div>
      <a href="#" className="link">
        <img src="/assets/home.svg" alt="home" />
        <span className="linkText">Overview</span>
      </a>
      <a href="#" className="link active">
        <img src="/assets/group.svg" alt="group" />
        <span className="linkText">Patients</span>
      </a>
      <a href="#" className="link">
        <img src="/assets/calendar.svg" alt="calendar" />
        <span className="linkText">Schedule</span>
      </a>
      <a href="#" className="link">
        <img src="/assets/chat.svg" alt="chat" />
        <span className="linkText">Message</span>
      </a>
      <a href="#" className="link">
        <img src="/assets/credit_card.svg" alt="transactions" />
        <span className="linkText">Transactions</span>
      </a>
    </div>
  </div>
  <div className="hamburger">
    <span className="bar" />
    <span className="bar" />
    <span className="bar" />
  </div>
</div>

    </div>
  )
}
