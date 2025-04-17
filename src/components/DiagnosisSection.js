import React, {useEffect, useState, useRef} from 'react'
import '../App.css'
import { usePatients } from '../contexts/patientRequest' 
import chartUpdating from '../chartUpdating'
import { useSelectedPatient } from '../contexts/selectedPatientContext'
import Chart from './Chart.js'


export const DiagnosisSection = () => {

    const patients = usePatients();
    const { selectedName, setSelectedName, selectedPatient } = useSelectedPatient();

    
    
    const[bloodPressureChart, setBloodPressureChart] = useState(null);
    const [diagnosisHistory, setDiagnosisHistory] = useState([]);
    const [systolicValues, setSystolicValues] = useState([]);
    const [diastolicValues, setDiastolicValues] = useState([]);
    const [chartValue, setChartValue] = useState(6);
    
    useEffect(() => {
  
      setDiagnosisHistory(selectedPatient?.diagnosis_history);
      setSystolicValues(selectedPatient?.diagnosis_history.map((diagnosis) => diagnosis.blood_pressure.systolic)); 
      setDiastolicValues(selectedPatient?.diagnosis_history.map((diagnosis) => diagnosis.blood_pressure.diastolic));
      
      
    }, [selectedPatient])
    
    let latestDiagnosis = selectedPatient?.diagnosis_history[0];

    
/*
    const check = (message) => {
      if (message === "Lower than Average") {
          return <img src="assets/ArrowDown.svg" alt="ArrowDown">Lower than Average</img>;
      } else if (message === "Higher than Average") {
          return <img src="assets/ArrowUp.svg" alt="ArrowUp" >Higher than Average</img>;
      } else if (message === 'Normal') {
          return `Normal`;
      }
  };
*/

/*////////////////////CHART///////////////////////

function updateChart(selectedValue) {
  const dataLength = selectedValue === 'all' ? diagnosisHistory.length : parseInt(selectedValue);
  
  const newData = {
      labels: diagnosisHistory.slice(0, dataLength),
      datasets: [
          {
              label: "Systolic Pressure",
              data: systolicValues.slice(0, dataLength),
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
              data: diastolicValues.slice(0, dataLength),
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

  if (bloodPressureChart) {
      bloodPressureChart.destroy();
  }

  bloodPressureChart = new Chart(ctx, {
      type: "line",
      data: newData,
      options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
              y: {
                  beginAtZero: false,
              }
          },
          plugins: {
              legend: {
                  display: false 
              }
          },
          scales: {
              x: {
                  ticks: {
                      font: {
                          size: 10, 
                          weight: 'bold',
                          color: '#000' 
                      }
                  },
                  grid: {
                      display: false, 
                  }
              },
              y: {
                  ticks: {
                      font: {
                          size: 10, 
                          weight: 'bold',
                          color: '#000'
                      }
                  },
                  grid: {
                      drawOnChartArea: true, 
                      lineWidth: 1, 
                  }
              }
          },
      }
  });
}

/*////////////////////////CHART///////////////////////*/





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
            <button className="dropdown-button">
              <h6 id="chartValue">
                Last 6 months{" "}
                <img
                  src="assets/expand_more_FILL0_wght300_GRAD0_opsz24.svg"
                  alt="arrowDown"
                />
              </h6>
            </button>
            <div className="dropdown-menu">
              <a href="#" data-value={6}>
                Last 6 months
              </a>
              <a href="#" data-value={12}>
                Last 12 months
              </a>
              <a href="#" data-value="all">
                All time
              </a>
            </div>
          </div>
        </div>
        {/*

          <canvas id="bloodPressureChart" >
            
        </canvas>
        */}
        <Chart/>
      </div>
      <div className="infoPart">
        <div className="infoCard systolic">
          <div className="center">
            <div className="dot">
              <div className="pink" />
            </div>
            <h4>Systolic</h4>
          </div>
          <h3 className="numSys"></h3>
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
          <h3 className="numDia"></h3>
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
        <tbody className="tableBody"></tbody>
      </table>
    </div>
  </div>
</div>

  )
}
