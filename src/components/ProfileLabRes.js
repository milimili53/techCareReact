import React from 'react'
import '../App.css'
import { usePatients } from '../contexts/patientRequest'
import { useSelectedPatient } from '../contexts/selectedPatientContext'

export const ProfileLabRes = () => {

  const patients = usePatients();
  const { selectedName, setSelectedName, selectedPatient } = useSelectedPatient();

const genderIcon = () => {
  if (selectedPatient?.gender == 'Male') {
    return ("assets/MaleIcon.svg")
  } else if (selectedPatient?.gender == 'Female') {return ("assets/FemaleIcon.svg")}}


 
  return (
    <div className="profileLabRes">
  <div className="profileInfo">
    <div className="profileHeader">
      <img id="profilePic" src={selectedPatient?.profile_picture} alt="profile picture" />
      <h2 id="profileName" >{selectedPatient?.name}</h2>
    </div>
    <div className="profileContent">
      <div className="profileInfoCard">
        <div className="profileSticker">
          <img src="assets/BirthIcon.svg" alt="calendar" />
        </div>
        <div className="pieceOfInfo">
          <h4>Date Of Birth</h4>
          <h5 id="birthDate">
            {selectedPatient?.date_of_birth ? selectedPatient?.date_of_birth : 'Not provided'}
          </h5>
        </div>
      </div>
      <div className="profileInfoCard">
        <div className="profileSticker">
          <img id="genderIcon" src= {genderIcon()} alt="Gender Icon" />
        </div>
        <div className="pieceOfInfo">
          <h4>Gender</h4>
          <h5 id="gender">{selectedPatient?.gender ? selectedPatient?.gender : 'Not provided'}</h5>
        </div>
      </div>
      <div className="profileInfoCard">
        <div className="profileSticker">
          <img src="assets/PhoneIcon.svg" alt="Phone" />
        </div>
        <div className="pieceOfInfo">
          <h4>Contact Info.</h4>
          <h5 id="contactInfo" >{selectedPatient?.phone_number ? selectedPatient?.phone_number : 'Not provided'}</h5>
        </div>
      </div>
      <div className="profileInfoCard">
        <div className="profileSticker">
          <img src="assets/PhoneIcon.svg" alt="Phone" />
        </div>
        <div className="pieceOfInfo">
          <h4>Emergency Contacts</h4>
          <h5 id="emergencyContact" >{selectedPatient?.emergency_contact ? selectedPatient?.emergency_contact : 'Not provided'}</h5>
        </div>
      </div>
      <div className="profileInfoCard">
        <div className="profileSticker">
          <img src="assets/InsuranceIcon.svg" alt="Insurance" />
        </div>
        <div className="pieceOfInfo">
          <h4>Insurance Provider</h4>
          <h5 id="insurance" >{selectedPatient?.insurance_type ? selectedPatient?.insurance_type : 'Not provided'}</h5>
        </div>
      </div>
      <button className="profileButton">Show All Information</button>
    </div>
  </div>
  <div className="labResults">
    <div className="sectionHeader">
      <h2>Lab Results</h2>
    </div>
    <div className="dataSection">
      {selectedPatient?.lab_results.map((result, index) => {
        return (
            <div className="downloadData" key={index}>
                <h4>{result}</h4>
                <a href="#" download><img src="assets/download.svg" alt="download" /></a>
            </div>
        )
      })}
    </div>
  </div>
</div>

  )
}
