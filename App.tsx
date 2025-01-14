import React from 'react';
import { BellRing, Camera, Shield, AlertTriangle, Activity } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-600 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8" />
              <h1 className="text-2xl font-bold">AI Traffic Monitor</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-indigo-700 rounded-full">
                <BellRing className="w-6 h-6" />
              </button>
              <div className="w-10 h-10 bg-indigo-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-700">Active Cameras</h3>
              <Camera className="w-6 h-6 text-indigo-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
            <p className="text-sm text-gray-500">All systems operational</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-700">Current Alerts</h3>
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">3</p>
            <p className="text-sm text-gray-500">Requiring attention</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-700">Traffic Flow</h3>
              <Activity className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">Normal</p>
            <p className="text-sm text-gray-500">Updated 2 mins ago</p>
          </div>
        </div>

        {/* Live Feed */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Live Monitoring</h2>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <Camera className="w-16 h-16 text-gray-400" />
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Alerts</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((alert) => (
              <div key={alert} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Suspicious Activity Detected</h4>
                    <p className="text-sm text-gray-500">Camera #12 - North Entrance</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">2 min ago</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;