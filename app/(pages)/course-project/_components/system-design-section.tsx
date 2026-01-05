'use client';
import { motion } from 'motion/react';
import DiagramImage from './diagram-image';

export default function SystemDesignSection() {
  return (
    <motion.section
      id='system-design'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='scroll-mt-24'
    >
      <div className='bg-very-dark-gray border-dark-gray-3 rounded-xl border p-6 sm:p-8'>
        <h2 className='text-light-gray-4 text-2xl font-bold mb-6'>System Design</h2>

        {/* Architecture Diagram */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>System Architecture (UML Component Diagram)</h3>
          <DiagramImage
            src='/images/diagrams/uml_component_diagram.jpeg'
            alt='UML Component Diagram - Saheli 2.0 System Architecture'
            isLightTheme={false}
          />
          <p className='text-light-gray-2 text-sm mt-3'>
            The system architecture shows the modular design of Saheli 2.0, including frontend components, backend services, AI modules, and external integrations.
          </p>
        </div>

        {/* Context Model */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Context Model</h3>
          <DiagramImage
            src='/images/diagrams/context_model.jpeg'
            alt='Context Model - Saheli 2.0'
            isLightTheme={false}
          />
          <p className='text-light-gray-2 text-sm mt-3'>
            The context model illustrates the interaction between Saheli 2.0 and external entities including users, police, NGOs, and third-party services.
          </p>
        </div>

        {/* SOS Workflow */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>SOS Workflow (Activity Diagram)</h3>
          <DiagramImage
            src='/images/diagrams/sos_workflow.jpeg'
            alt='SOS Workflow Activity Diagram'
            isLightTheme={false}
          />
          <p className='text-light-gray-2 text-sm mt-3'>
            This activity diagram shows the complete workflow of an SOS alert from trigger to resolution, including all decision points and actions.
          </p>
        </div>

        {/* Sequence Diagram */}
        <div>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Sequence Diagram</h3>
          <DiagramImage
            src='/images/diagrams/sequence_diagram.jpeg'
            alt='Sequence Diagram - SOS Alert Flow'
            isLightTheme={true}
          />
          <p className='text-light-gray-2 text-sm mt-3'>
            The sequence diagram demonstrates the interaction between different system components during an SOS alert, showing the chronological flow of messages and actions.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

