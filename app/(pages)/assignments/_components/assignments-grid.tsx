'use client';
import React, { useState } from 'react';

import AssignmentCard, { AssignmentType, assignmentsData } from './assignment-card';
import AssignmentDetailModal from './assignment-detail-modal';

export default function AssignmentsGrid() {
  const [selectedAssignment, setSelectedAssignment] = useState<AssignmentType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (assignment: AssignmentType) => {
    setSelectedAssignment(assignment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Small delay before clearing selection for smooth exit animation
    setTimeout(() => {
      setSelectedAssignment(null);
    }, 200);
  };

  return (
    <>
      <div className='relative grid h-min w-full flex-none grid-cols-1 justify-center gap-5 overflow-visible p-0 lg:grid-cols-2 lg:gap-5'>
        {assignmentsData.map((assignment, index) => (
          <AssignmentCard
            key={assignment.id}
            assignment={assignment}
            onClick={() => handleCardClick(assignment)}
            index={index}
          />
        ))}
      </div>

      <AssignmentDetailModal
        assignment={selectedAssignment}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

