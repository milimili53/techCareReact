import React, {useState } from 'react'
import '../App.css'
import { usePatients } from '../contexts/patientRequest'
import { useFindPatient } from '../hooks/useFindPatient'
import { useSelectedPatient } from '../contexts/selectedPatientContext'

export const PatientList = () => {

    const patients = usePatients();

    /*
    const [selectedName, setSelectedName] = useState('Jessica Taylor');
    
    const selectedPatient = useFindPatient(selectedName);

  const handlePatientClick = (e) => {
    const name = e.currentTarget.getAttribute('name');
    setSelectedName(name);
    
};

*/


const { selectedName, setSelectedName, selectedPatient } = useSelectedPatient();

    const handlePatientClick = (e) => {
        const name = e.currentTarget.getAttribute('name');
        setSelectedName(name);
    };

    console.log("Selected Patient:", selectedPatient);
    

  return (
    <div className="patientsList">
  <div className="sectionHeader headalign">
    <h2>Patients</h2>
    <img id="patSearch" src="assets/search.svg" alt="search" />
  </div>
  <div className="listpat">
    {patients.map((patient, id) => (
        <div onClick={handlePatientClick} className="patientOption" key={id} name={patient.name}>
        <div className="patientinfo">
          <img src={patient.profile_picture} alt="patient" />
          <span>
            <h4>
              {patient.name}
            </h4>
            <h5>
              {patient.gender}, {patient.age}
            </h5>
          </span>
        </div>
        <img src="assets/more_horiz.svg" alt="more-horizontal" />
      </div>
        ))}      
  </div>
</div>
  )
}

