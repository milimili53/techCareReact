import React, {useEffect, useState, useRef, use} from 'react'
import '../App.css'
import { usePatients } from '../contexts/patientRequest'
import { useSelectedPatient } from '../contexts/selectedPatientContext'
import {Chart as ChartJS} from 'chart.js/auto';    
import {Line} from 'react-chartjs-2';


export const DiagnosisSection = () => {

    const patients = usePatients();
    const { selectedName, setSelectedName, selectedPatient } = useSelectedPatient();
    const [showMenu, setShowMenu] = useState(false);
    const [dataLength, setDataLength] = useState(6);
    const [buttonText, setButtonText] = useState('Last 6 months');

   
    
    const[bloodPressureChart, setBloodPressureChart] = useState(null);
    const [diagnosisHistory, setDiagnosisHistory] = useState([]);
    const [diagnosisList, setDiagnosisList] = useState([]);
    const [systolicValues, setSystolicValues] = useState([]);
    const [diastolicValues, setDiastolicValues] = useState([]);
    
    useEffect(() => {
  
      setDiagnosisHistory(selectedPatient?.diagnosis_history.map((diagnosis) => {let date = diagnosis.month.substr(0,3) + ', ' + diagnosis.year; return date}));
      setDiagnosisList(selectedPatient?.diagnostic_list);
      setSystolicValues(selectedPatient?.diagnosis_history.map((diagnosis) => diagnosis.blood_pressure.systolic.value)); 
      setDiastolicValues(selectedPatient?.diagnosis_history.map((diagnosis) => diagnosis.blood_pressure.diastolic.value));
      
      
    }, [selectedPatient])
    
    let latestDiagnosis = selectedPatient?.diagnosis_history[0];
 

console.log(systolicValues)
console.log(diastolicValues);
console.log(diagnosisHistory)


const newData = {
  labels: diagnosisHistory?.slice(0, dataLength),
  datasets: [
      {
          label: "Systolic Pressure",
          data: systolicValues?.slice(0, dataLength),
          borderColor: '#C26EB4',
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: '#E66FD2',
          pointBorderWidth: 1,
          pointBorderColor: '#fff',
          tension: 0.4,
      },
      {
          label: "Diastolic Pressure",
          data: diastolicValues?.slice(0, dataLength),
          borderColor: "#7E6CAB",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: '#8C6FE6',
          pointBorderWidth: 1,
          pointBorderColor: '#fff',
          tension: 0.4,
      }
  ]
};

const options = {
  plugins: {
    legend: {
      display: false, 
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};




const check = (message) => {
  if (message === "Lower than Average") {
    return (
      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <img src="assets/ArrowDown.svg" alt="ArrowDown" />
        Lower than Average
      </span>
    );
  } else if (message === "Higher than Average") {
    return (
      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <img src="assets/ArrowUp.svg" alt="ArrowUp" />
        Higher than Average
      </span>
    );
  } else if (message === "Normal") {
    return "Normal";
  }
};

  return (
    <div className="diagnosisSection">
  <div className="diagnosisHistory">
    <div className="sectionHeader headalign">
      <h2>Diagnosis History</h2>
    </div>
    <div className="graphic">
      <div className="chartPart">
        <div className="chartHeader">
          <h2>Blood Pressure</h2>
          <div className="dropdown">
            <button className="dropdown-button" onClick={() => setShowMenu(!showMenu)}>
              <h6 id="chartValue">
                {buttonText}{" "}
                <img
                  src="assets/expand_more_FILL0_wght300_GRAD0_opsz24.svg"
                  alt="arrowDown"
                />
              </h6>
            </button>
            <div className="dropdown-menu"  style={{display : showMenu ? 'block' : 'none'}} >
              <a href="#" key={6} onClick={(event) => {setDataLength(6); setShowMenu(false); setButtonText(event.target.innerText)}}>
                Last 6 months
              </a>
              <a href="#" key={12} onClick={(event) => {setDataLength(12); setShowMenu(false); setButtonText(event.target.innerText)}}>
                Last 12 months
              </a>
              <a href="#" key="all" onClick={(event) => {setDataLength(-1); setShowMenu(false); setButtonText(event.target.innerText)}}>
                All time
              </a>
            </div>
          </div>
        </div>
        
        <Line data={newData} options={options} id='canvas'/>
      </div>
      <div className="infoPart">
        <div className="infoCard systolic">
          <div className="center">
            <div className="dot">
              <div className="pink" />
            </div>
            <h4>Systolic</h4>
          </div>
          <h3 className="numSys">{latestDiagnosis?.blood_pressure.systolic.value}</h3>
          <div className="center">
            <h5 id="sysStat" />
          </div>
        </div>
        <div className="infoCard diastolic">
          <div className="center">
            <div className="dot">
              <div className="purple" />
            </div>
            <h4>Diastolic</h4>
          </div>
          <h3 className="numDia">{latestDiagnosis?.blood_pressure.diastolic.value}</h3>
          <div className="center">
            <h5 id="diasStat" />
          </div>
        </div>
      </div>
    </div>
    <div className="basicInfo">
      <div className="card lungs">
        <img src="assets/respiratory rate.svg" alt="respiratory" />
        <h4>Respiratory Rate</h4>
        <h3 className="detail" id="respiratory">
          {latestDiagnosis?.respiratory_rate.value} bpm
        </h3>
        <h6 id="resStat" >{check(latestDiagnosis?.respiratory_rate.levels)}</h6>
      </div>
      <div className="card temperature">
        <img src="assets/temperature.svg" alt="temperature" />
        <h4>Temperature</h4>
        <h3 className="detail" id="temperature">
          {latestDiagnosis?.temperature.value} °C
        </h3>
        <h6 id="tempStat" >
          {check(latestDiagnosis?.temperature.levels)}
        </h6>
      </div>
      <div className="card heart">
        <img src="assets/HeartBPM.svg" alt="heart rate" />
        <h4>Heart Rate</h4>
        <h3 className="detail" id="heart">
          {latestDiagnosis?.heart_rate.value} bpm
        </h3>
        <h6 id="heartStat" >{check(latestDiagnosis?.heart_rate.levels)}</h6>
      </div>
    </div>
  </div>
  <div className="diagnosisList">
    <div className="listh sectionHeader">
      <h2>Diagnostic List</h2>
    </div>
    <div className="table-container">
      <table className="rounded-corners">
        <thead>
          <tr>
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {diagnosisList?.map((diagnosis, index) => (
          <tr key={index}>
            <td>{diagnosis?.name}</td>
            <td>{diagnosis?.description}</td>
            <td>{diagnosis?.status}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

  )
}
