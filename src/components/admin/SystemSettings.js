import React, { useState } from 'react';

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

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const saveSettings = () => {
    // Save settings logic here
    alert('Settings saved successfully!');
  };

  return (
    <div className="system-settings">
      <h3 className="text-2xl font-semibold mb-6">System Settings</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platform Settings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold mb-4 text-gray-700">Platform Configuration</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Platform Name</label>
              <input
                type="text"
                value={settings.platformName}
                onChange={(e) => handleSettingChange('platformName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Version</label>
              <input
                type="text"
                value={settings.platformVersion}
                onChange={(e) => handleSettingChange('platformVersion', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="maintenanceMode"
                checked={settings.maintenanceMode}
                onChange={(e) => handleSettingChange('maintenanceMode', e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="maintenanceMode" className="text-sm font-medium text-gray-700">Maintenance Mode</label>
            </div>
          </div>
        </div>

        {/* Commission Settings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold mb-4 text-gray-700">Commission Structure</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Designer Commission (%)</label>
              <input
                type="number"
                value={settings.designerCommission}
                onChange={(e) => handleSettingChange('designerCommission', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">PM Commission (%)</label>
              <input
                type="number"
                value={settings.pmCommission}
                onChange={(e) => handleSettingChange('pmCommission', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Platform Fee (%)</label>
              <input
                type="number"
                value={settings.platformFee}
                onChange={(e) => handleSettingChange('platformFee', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Payment Settings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold mb-4 text-gray-700">Payment Configuration</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Payment Gateway</label>
              <select
                value={settings.paymentGateway}
                onChange={(e) => handleSettingChange('paymentGateway', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Razorpay">Razorpay</option>
                <option value="Payu">PayU</option>
                <option value="Stripe">Stripe</option>
              </select>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="autoPayoutEnabled"
                checked={settings.autoPayoutEnabled}
                onChange={(e) => handleSettingChange('autoPayoutEnabled', e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="autoPayoutEnabled" className="text-sm font-medium text-gray-700">Auto Payout Enabled</label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Payout Schedule</label>
              <select
                value={settings.payoutSchedule}
                onChange={(e) => handleSettingChange('payoutSchedule', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>
        </div>

        {/* Lead Management Settings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold mb-4 text-gray-700">Lead Management</h4>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="leadAutoAssignment"
                checked={settings.leadAutoAssignment}
                onChange={(e) => handleSettingChange('leadAutoAssignment', e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="leadAutoAssignment" className="text-sm font-medium text-gray-700">Auto Lead Assignment</label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Max Leads per Designer</label>
              <input
                type="number"
                value={settings.maxLeadsPerDesigner}
                onChange={(e) => handleSettingChange('maxLeadsPerDesigner', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Lead Expiry (Days)</label>
              <input
                type="number"
                value={settings.leadExpiryDays}
                onChange={(e) => handleSettingChange('leadExpiryDays', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold mb-4 text-gray-700">Notification Settings</h4>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="emailNotifications"
                checked={settings.emailNotifications}
                onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="emailNotifications" className="text-sm font-medium text-gray-700">Email Notifications</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="smsNotifications"
                checked={settings.smsNotifications}
                onChange={(e) => handleSettingChange('smsNotifications', e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="smsNotifications" className="text-sm font-medium text-gray-700">SMS Notifications</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="pushNotifications"
                checked={settings.pushNotifications}
                onChange={(e) => handleSettingChange('pushNotifications', e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="pushNotifications" className="text-sm font-medium text-gray-700">Push Notifications</label>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold mb-4 text-gray-700">Security Configuration</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
              <input
                type="number"
                value={settings.sessionTimeout}
                onChange={(e) => handleSettingChange('sessionTimeout', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password Expiry (days)</label>
              <input
                type="number"
                value={settings.passwordExpiry}
                onChange={(e) => handleSettingChange('passwordExpiry', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="twoFactorAuth"
                checked={settings.twoFactorAuth}
                onChange={(e) => handleSettingChange('twoFactorAuth', e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="twoFactorAuth" className="text-sm font-medium text-gray-700">Two-Factor Authentication</label>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-8 flex justify-end">
        <button
          onClick={saveSettings}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg"
        >
          Save All Settings
        </button>
      </div>
    </div>
  );
}

export default SystemSettings;