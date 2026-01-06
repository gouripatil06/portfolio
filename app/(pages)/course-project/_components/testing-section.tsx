'use client';
import { motion } from 'motion/react';

export default function TestingSection() {
  return (
    <motion.section
      id='testing'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='scroll-mt-24'
    >
      <div className='bg-very-dark-gray border-dark-gray-3 rounded-xl border p-6 sm:p-8'>
        <h2 className='text-light-gray-4 text-2xl font-bold mb-6'>Software Testing</h2>

        {/* Test Plan */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Test Plan</h3>
          <div className='bg-dark-gray-4 border-border-color rounded-lg border p-4'>
            <p className='text-light-gray-2 text-sm mb-4'>
              Comprehensive test plan covering unit testing, integration testing, system testing, and user acceptance testing.
            </p>
            <div className='space-y-3'>
              {[
                { type: 'Unit Testing', desc: 'Testing individual components and modules in isolation' },
                { type: 'Integration Testing', desc: 'Testing interaction between different modules and services' },
                { type: 'System Testing', desc: 'End-to-end testing of the complete system functionality' },
                { type: 'User Acceptance Testing', desc: 'Testing with real users to ensure the system meets requirements' },
                { type: 'Performance Testing', desc: 'Testing system performance under load and stress conditions' },
                { type: 'Security Testing', desc: 'Testing authentication, authorization, and data encryption' },
              ].map((test, index) => (
                <div key={index} className='bg-darkest-gray rounded-md p-3'>
                  <h4 className='text-white font-medium text-sm mb-1'>{test.type}</h4>
                  <p className='text-light-gray-2 text-xs'>{test.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Test Cases */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Test Cases</h3>
          <div className='bg-dark-gray-4 border-border-color rounded-lg border p-4 overflow-x-auto'>
            <table className='w-full text-sm'>
              <thead>
                <tr className='border-b border-border-color'>
                  <th className='text-left py-2 px-4 text-light-gray-4 font-semibold'>Test ID</th>
                  <th className='text-left py-2 px-4 text-light-gray-4 font-semibold'>Test Case</th>
                  <th className='text-left py-2 px-4 text-light-gray-4 font-semibold'>Expected Result</th>
                  <th className='text-left py-2 px-4 text-light-gray-4 font-semibold'>Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 'TC001', case: 'User Registration', result: 'User successfully registered with valid credentials', status: 'Pass' },
                  { id: 'TC002', case: 'User Login', result: 'User successfully logged in with JWT authentication', status: 'Pass' },
                  { id: 'TC003', case: 'SOS Alert Trigger', result: 'SOS alert created and sent to emergency contacts via WhatsApp', status: 'Pass' },
                  { id: 'TC004', case: 'Location Tracking', result: 'Real-time GPS location accurately tracked and displayed on map', status: 'Pass' },
                  { id: 'TC005', case: 'WhatsApp Notification', result: 'Emergency alerts sent successfully via WhatsApp Business API', status: 'Pass' },
                  { id: 'TC006', case: 'Police Dashboard Access', result: 'Authorized police personnel can view and manage alerts', status: 'Pass' },
                  { id: 'TC007', case: 'Issue Reporting', result: 'Users can report safety issues with location tagging', status: 'Pass' },
                  { id: 'TC008', case: 'Community Posts', result: 'Users can create posts, like, and comment in community feed', status: 'Pass' },
                  { id: 'TC009', case: 'Safe Route Planning', result: 'Map-based route planning with safety indicators works correctly', status: 'Pass' },
                  { id: 'TC010', case: 'Real-time Updates', result: 'Socket.io provides real-time alert status updates', status: 'Pass' },
                ].map((testCase, index) => (
                  <tr key={index} className='border-b border-border-color'>
                    <td className='py-2 px-4 text-light-gray-2'>{testCase.id}</td>
                    <td className='py-2 px-4 text-light-gray-2'>{testCase.case}</td>
                    <td className='py-2 px-4 text-light-gray-2'>{testCase.result}</td>
                    <td className='py-2 px-4'>
                      <span className='bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium'>
                        {testCase.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Testing Tools */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Testing Tools</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {[
              { tool: 'Jest', purpose: 'JavaScript unit testing framework' },
              { tool: 'React Testing Library', purpose: 'Component testing for React applications' },
              { tool: 'Postman', purpose: 'API testing and integration testing' },
              { tool: 'Selenium', purpose: 'End-to-end browser automation testing' },
              { tool: 'JMeter', purpose: 'Performance and load testing' },
              { tool: 'OWASP ZAP', purpose: 'Security vulnerability scanning' },
            ].map((tool, index) => (
              <div key={index} className='bg-dark-gray-4 border-border-color rounded-lg border p-4'>
                <h4 className='text-white font-medium mb-1'>{tool.tool}</h4>
                <p className='text-light-gray-2 text-sm'>{tool.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

