"use client"
import { useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Data Growth',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const barData = {
    labels: ['Analytics', 'Processing', 'Storage', 'Security', 'Integration'],
    datasets: [
      {
        label: 'Service Usage',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
        ],
      },
    ],
  };

  const pieData = {
    labels: ['Data Analysis', 'Machine Learning', 'Business Intelligence', 'Others'],
    datasets: [
      {
        data: [300, 50, 100, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Data Analytics Dashboard</h2>
          
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'analytics'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Analytics
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'reports'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Reports
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Data Growth Trends</h3>
              <Line data={lineData} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Service Distribution</h3>
              <Bar data={barData} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Data Categories</h3>
              <Pie data={pieData} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Key Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Total Data Points</p>
                  <p className="text-2xl font-bold text-blue-600">1.2M</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Processing Speed</p>
                  <p className="text-2xl font-bold text-green-600">2.5s</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Accuracy Rate</p>
                  <p className="text-2xl font-bold text-purple-600">99.9%</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Active Users</p>
                  <p className="text-2xl font-bold text-yellow-600">5.4K</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 