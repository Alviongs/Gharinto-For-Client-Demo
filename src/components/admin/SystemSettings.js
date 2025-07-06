import React, { useState } from 'react';
import SystemSettingForm from './SystemSettingForm';

function SystemSettings() {
  const [settings, setSettings] = useState({
    // Platform Settings
    platformName: 'Gharinto',
    platformVersion: '1.0.0',
    maintenanceMode: false,
    
    // Commission Settings
    designerCommission: 15,
    pmCommission: 10,
    platformFee: 5,
    
    // Payment Settings
    paymentGateway: 'Razorpay',
    autoPayoutEnabled: true,
    payoutSchedule: 'weekly',
    
    // Lead Settings
    leadAutoAssignment: true,
    maxLeadsPerDesigner: 5,
    leadExpiryDays: 7,
    
    // Notification Settings
    emailNotifications: true,
    smsNotifications: true,
    pushNotifications: true,
    
    // Security Settings
    sessionTimeout: 30,
    passwordExpiry: 90,
    twoFactorAuth: false,
    
    // Business Settings
    businessHours: '9:00 AM - 7:00 PM',
    supportEmail: 'support@gharinto.com',
    supportPhone: '+91-9876543210'
  });

  const [showSystemSettingForm, setShowSystemSettingForm] = useState(false);
  const [selectedSetting, setSelectedSetting] = useState(null);

  const handleEditClick = (key, value) => {
    setSelectedSetting({ key, value });
    setShowSystemSettingForm(true);
  };

  const handleSave = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
    setShowSystemSettingForm(false);
  };

  return (
    <div className="system-settings">
      {showSystemSettingForm && <SystemSettingForm onClose={() => setShowSystemSettingForm(false)} setting={selectedSetting} onSave={handleSave} />}
      <h3 className="text-2xl font-semibold mb-6">System Settings</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Object.entries(settings).map(([key, value]) => (
          <div key={key} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-lg font-semibold text-gray-700">{key}</h4>
                <p className="text-gray-600">{String(value)}</p>
              </div>
              <button onClick={() => handleEditClick(key, value)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded text-xs">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SystemSettings;