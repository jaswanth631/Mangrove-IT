'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TestEmail() {
  const [status, setStatus] = useState<{
    loading: boolean;
    success: boolean | null;
    message: string;
  }>({
    loading: false,
    success: null,
    message: '',
  });

  const [debugLogs, setDebugLogs] = useState<string[]>([]);

  const addDebugLog = (log: string) => {
    setDebugLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${log}`]);
  };

  const testEmail = async () => {
    setDebugLogs([]); // Clear previous logs
    addDebugLog('Starting email test from frontend...');
    setStatus({ loading: true, success: null, message: 'Sending test email...' });

    try {
      addDebugLog('Making API request to /api/test-email');
      const response = await fetch('/api/test-email', {
        method: 'POST',
      });

      addDebugLog(`API Response status: ${response.status}`);
      const data = await response.json();
      addDebugLog(`API Response data: ${JSON.stringify(data, null, 2)}`);

      if (data.success) {
        addDebugLog('Email sent successfully from frontend');
        setStatus({
          loading: false,
          success: true,
          message: 'Test email sent successfully! Check your inbox.',
        });
      } else {
        addDebugLog(`Email sending failed: ${data.error}`);
        setStatus({
          loading: false,
          success: false,
          message: `Failed to send email: ${data.error || 'Unknown error'}`,
        });
      }
    } catch (error) {
      addDebugLog(`Frontend error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setStatus({
        loading: false,
        success: false,
        message: 'Error connecting to the server',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-background-darker/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Test Email Configuration
        </h1>

        <div className="space-y-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={testEmail}
            disabled={status.loading}
            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg"
          >
            {status.loading ? 'Sending...' : 'Send Test Email'}
          </motion.button>

          {status.message && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-xl ${
                status.success === true
                  ? 'bg-green-500/10 text-green-500'
                  : status.success === false
                  ? 'bg-red-500/10 text-red-500'
                  : 'bg-blue-500/10 text-blue-500'
              }`}
            >
              <p className="text-center">{status.message}</p>
            </motion.div>
          )}

          {/* Debug Logs Section */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-2 text-text">Debug Logs</h2>
            <div className="bg-background-darker/80 rounded-xl p-4 max-h-60 overflow-y-auto font-mono text-sm">
              {debugLogs.length === 0 ? (
                <p className="text-text/50">No logs yet. Click "Send Test Email" to start.</p>
              ) : (
                debugLogs.map((log, index) => (
                  <div key={index} className="py-1 border-b border-background-darker/20">
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 