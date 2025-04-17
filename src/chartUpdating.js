/*
export function updateChart(selectedValue) {
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

*/