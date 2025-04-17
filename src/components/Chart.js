
/*
import React from 'react'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Chart = () => {


    
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


  return (
    <div></div>
  )
}

*/
/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const BloodPressureChart = () => {
  const [data, setData] = useState([]);
  const [systolic, setSystolic] = useState([]);
  const [diastolic, setDiastolic] = useState([]);
  const [labels, setLabels] = useState([]);
  const [selectedRange, setSelectedRange] = useState("6");

  const fetchData = async () => {
    const username = "coalition";
    const password = "skills-test";
    const auth = btoa(`${username}:${password}`);

    try {
      const res = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
        headers: { Authorization: `Basic ${auth}` },
      });
      const json = await res.json();
      const patient = json.find(p => p.name === "Jessica Taylor");

      const history = patient.diagnosis_history;
      setData(history);
      setLabels(history.map(d => `${d.month.slice(0,3)}, ${d.year}`));
      setSystolic(history.map(d => d.blood_pressure.systolic.value));
      setDiastolic(history.map(d => d.blood_pressure.diastolic.value));
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const range = selectedRange === 'all' ? data.length : parseInt(selectedRange);

  const chartData = {
    labels: labels.slice(0, range),
    datasets: [
      {
        label: 'Systolic Pressure',
        data: systolic.slice(0, range),
        borderColor: '#C26EB4',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        pointBackgroundColor: '#E66FD2',
        tension: 0.4,
      },
      {
        label: 'Diastolic Pressure',
        data: diastolic.slice(0, range),
        borderColor: '#7E6CAB',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        pointBackgroundColor: '#8C6FE6',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: {
        ticks: {
          font: { size: 10, weight: 'bold' },
          color: '#000',
        },
        grid: { display: false },
      },
      y: {
        ticks: {
          font: { size: 10, weight: 'bold' },
          color: '#000',
        },
        grid: {
          drawOnChartArea: true,
          lineWidth: 1,
        },
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="range" className="mr-2 font-medium">Select Range:</label>
        <select
          id="range"
          value={selectedRange}
          onChange={(e) => setSelectedRange(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="6">Last 6</option>
          <option value="12">Last 12</option>
          <option value="all">All</option>
        </select>
      </div>
      <div className="h-96">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BloodPressureChart;

*/