import React from 'react'
import '../App.css'

export const ProfileLabRes = () => {
  return (
    <div className="profileLabRes">
  <div className="profileInfo">
    <div className="profileHeader">
      <img id="profilePic" src="assets/Layer 2.png" alt="profile picture" />
      <h2 id="profileName" />
    </div>
    <div className="profileContent">
      <div className="profileInfoCard">
        <div className="profileSticker">
          <img src="assets/BirthIcon.svg" alt="calendar" />
        </div>
        <div className="pieceOfInfo">
          <h4>Date Of Birth</h4>
          <h5 id="birthDate" />
        </div>
      </div>
      <div className="profileInfoCard">
        <div className="profileSticker">
          <img id="genderIcon" src="assets/FemaleIcon.svg" alt="Gender Icon" />
        </div>
        <div className="pieceOfInfo">
          <h4>Gender</h4>
          <h5 id="gender" />
        </div>
      </div>
      <div className="profileInfoCard">
        <div className="profileSticker">
          <img src="assets/PhoneIcon.svg" alt="Phone" />
        </div>
        <div className="pieceOfInfo">
          <h4>Contact Info.</h4>
          <h5 id="contactInfo" />
        </div>
      </div>
      <div className="profileInfoCard">
        <div className="profileSticker">
          <img src="assets/PhoneIcon.svg" alt="Phone" />
        </div>
        <div className="pieceOfInfo">
          <h4>Emergency Contacts</h4>
          <h5 id="emergencyContact" />
        </div>
      </div>
      <div className="profileInfoCard">
        <div className="profileSticker">
          <img src="assets/InsuranceIcon.svg" alt="Insurance" />
        </div>
        <div className="pieceOfInfo">
          <h4>Insurance Provider</h4>
          <h5 id="insurance" />
        </div>
      </div>
      <button className="profileButton">Show All Information</button>
    </div>
  </div>
  <div className="labResults">
    <div className="sectionHeader">
      <h2>Lab Results</h2>
    </div>
    <div className="dataSection"></div>
  </div>
</div>

  )
}
