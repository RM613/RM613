import { useState } from 'react';
import CourseModal, { Course } from '../CourseModal';
import { Button } from '@/components/ui/button';

const mockCourse: Course = {
  id: 'coding',
  title: 'Coding & Full-Stack Development',
  description: 'This 16-week learning path is designed to take you from a beginner to a job-ready web developer.',
  duration: '16 weeks',
  students: 1250,
  skills: [
    'Build full-stack web applications',
    'Understand core programming concepts',
    'Master Python for back-end development',
    'Create responsive front-end interfaces',
    'Work with APIs and databases'
  ],
  project: 'Full-Stack Web Application (e.g., E-commerce site or Social Media clone)',
  syllabus: [
    {
      week: '1-2',
      focus: 'Programming Fundamentals',
      topics: 'Programming logic, variables, data types, and basic algorithms.',
      resources: 'Codecademy, W3Schools, freeCodeCamp'
    },
    {
      week: '3-5',
      focus: 'Python Programming',
      topics: 'Python syntax, data structures, functions, and modules.',
      resources: 'Python.org Tutorial, Automate the Boring Stuff'
    }
  ]
};

export default function CourseModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnroll = (courseId: string) => {
    console.log('Enrolling in course:', courseId);
    setIsOpen(false);
  };

  return (
    <div className="p-4">
      <Button onClick={() => setIsOpen(true)}>Open Course Modal</Button>
      <CourseModal
        course={mockCourse}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onEnroll={handleEnroll}
      />
    </div>
  );
}