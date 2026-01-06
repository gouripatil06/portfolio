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

        {/* Use Case Diagram */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Use Case Diagram</h3>
          <DiagramImage
            singleSrc='/images/diagrams/use_case_diagram.jpeg'
            lightSrc=''
            darkSrc=''
            alt='Use Case Diagram - Saheli 2.0'
          />
          <p className='text-light-gray-2 text-sm mt-3'>
            The use case diagram illustrates the interactions between different actors (Female Users, Police Personnel) and the system, showing all major functionalities including SOS alerts, issue reporting, community features, and police dashboard operations.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>System Architecture (UML Component Diagram)</h3>
          <DiagramImage
            lightSrc='/images/diagrams/uml_component_light.svg'
            darkSrc='/images/diagrams/uml_component_dark.png'
            alt='UML Component Diagram - Saheli 2.0 System Architecture'
          />
          <p className='text-light-gray-2 text-sm mt-3'>
            The system architecture shows the modular design of Saheli 2.0, including frontend React components, Express.js backend services, MongoDB database, Socket.io for real-time updates, and external integrations like WhatsApp Business API and map services.
          </p>
        </div>

        {/* Context Model */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Context Model</h3>
          <DiagramImage
            lightSrc='/images/diagrams/context_model_light.png'
            darkSrc='/images/diagrams/context_model_dark.png'
            alt='Context Model - Saheli 2.0'
          />
          <p className='text-light-gray-2 text-sm mt-3'>
            The context model illustrates the interaction between Saheli 2.0 and external entities including users, police department, and third-party services like WhatsApp Business API, map services (Leaflet/OpenStreetMap, Google Maps), and MongoDB database.
          </p>
        </div>

        {/* SOS Workflow */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>SOS Workflow (Activity Diagram)</h3>
          <DiagramImage
            lightSrc='/images/diagrams/sos_activity_diagram_light.png'
            darkSrc='/images/diagrams/sos_activity_diagram_dark.png'
            alt='SOS Workflow Activity Diagram'
          />
          <p className='text-light-gray-2 text-sm mt-3'>
            This activity diagram shows the complete workflow of an SOS alert from trigger to resolution, including all decision points and actions.
          </p>
        </div>

        {/* Sequence Diagram */}
        <div className='mb-8'>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>Sequence Diagram</h3>
          <DiagramImage
            lightSrc='/images/diagrams/sequence_diagram_light.png'
            darkSrc='/images/diagrams/sequence_diagram_dark.svg'
            alt='Sequence Diagram - SOS Alert Flow'
          />
          <p className='text-light-gray-2 text-sm mt-3'>
            The sequence diagram demonstrates the interaction between different system components during an SOS alert, showing the chronological flow of messages and actions.
          </p>
        </div>

        {/* System Data Flow */}
        <div>
          <h3 className='text-light-gray-4 text-lg font-semibold mb-4'>System Data Flow Diagram</h3>
          <DiagramImage
            lightSrc='/images/diagrams/system_data_flow_light.png'
            darkSrc='/images/diagrams/system_data_flow_dark.svg'
            alt='System Data Flow Diagram - Saheli 2.0'
          />
          <p className='text-light-gray-2 text-sm mt-3'>
            The data flow diagram shows how data moves through the system from user actions to frontend processing, API layer, database storage, and external services, illustrating the complete data flow architecture.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

