'use client';
import { motion } from 'motion/react';

export default function DevOpsSection() {
  return (
    <motion.section
      id='devops'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='scroll-mt-24'
    >
      <div className='bg-very-dark-gray border-dark-gray-3 rounded-xl border p-6 sm:p-8'>
        <h2 className='text-light-gray-4 text-2xl font-bold mb-6'>DevOps Certification</h2>

        {/* Certificate */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>DevOps Certification</h3>
          <div className='bg-dark-gray-4 border-border-color rounded-lg border p-6 text-center'>
            <p className='text-light-gray-2 text-sm mb-4'>
              DevOps certification certificate will be uploaded here.
            </p>
            <div className='bg-darkest-gray rounded-lg p-8 border border-border-color'>
              <p className='text-light-gray-2 text-sm'>Certificate image will be displayed here</p>
            </div>
          </div>
        </div>

        {/* Learning Reflection */}
        <div>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Learning Reflection</h3>
          <div className='bg-dark-gray-4 border-border-color rounded-lg border p-5'>
            <p className='text-light-gray-2 text-sm leading-relaxed mb-4'>
              Through the DevOps certification process, I gained valuable insights into:
            </p>
            <ul className='space-y-2'>
              {[
                'Continuous Integration and Continuous Deployment (CI/CD) pipelines',
                'Containerization with Docker and orchestration with Kubernetes',
                'Infrastructure as Code (IaC) using tools like Terraform',
                'Monitoring and logging with tools like Prometheus and Grafana',
                'Cloud platform deployment and management (AWS, Azure, GCP)',
                'Version control best practices and Git workflows',
                'Automated testing and quality assurance in deployment pipelines',
                'Security practices in DevOps (DevSecOps)',
              ].map((item, index) => (
                <li key={index} className='flex items-start gap-3 text-light-gray-2 text-sm'>
                  <span className='text-blue-400 mt-1'>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className='text-light-gray-2 text-sm leading-relaxed mt-4'>
              This knowledge has been instrumental in deploying Saheli 2.0 efficiently and ensuring reliable, scalable infrastructure for the application.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

