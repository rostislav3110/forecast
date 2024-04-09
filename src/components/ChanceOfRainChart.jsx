import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';


ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false
    }
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      stacked: true,
      min: 0,
      max: 100,
      border: {
        display: false,
        dash: [5, 5]
      },
      ticks: {
        stepSize: 1,
        maxTicksLimit: 12,
        callback: function(value) {
          if (value === 30) return 'Heavy';
          if (value === 60) return 'Sunny';
          if (value === 90) return 'Rainy';
          return '';
        }
      },
      grid: {
        border: {
          dash: [5, 5]
        },
        drawBorder: false,
        color: function(context) {
          if ([30, 60, 90].includes(context.tick.value)) {
            return '#eee';
          } else {
            return 'transparent';
          }
        },
      },
    },
    x: {
      beginAtZero: true,
      stacked: true,
      border: {
        display: false,
      },
      grid: {
        display: false,
        drawBorder: false,
        drawOnChartArea: false
      }
    },
  },
};

const labels = ['10AM', '11AM', '12AM', '1PM', '2PM', '3PM']; // Your X-axis labels

const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: 'Min Value',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      fill: false,
      tension: 0.3
    },
    {
      type: 'bar',
      label: 'Max Value',
      data: [65, 59, 80, 81, 56, 55], // Max values
      backgroundColor: '#bad5e9',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 0,
      barThickness: 6,
      borderRadius: 6
    },
    {
      type: 'bar',
      label: 'Max Value',
      data: [10, 10, 10, 10, 10, 10],
      backgroundColor: '#a9a9a9',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 0,
      barThickness: 6,
      borderRadius: 6
    }
  ],
};

export default function ChanceOfRainChart() {
  return (
    <div>
      <h4>Chance Of Rain</h4>
      <div className='chart_container'>
      <Chart type="bar" options={options} data={data} />
    </div>
    </div>
    
  );
}