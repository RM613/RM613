import { useState } from 'react';
import CoursesSection from '../CoursesSection';
import CourseModal, { Course } from '../CourseModal';

export default function CoursesSectionExample() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleEnroll = (courseId: string) => {
    console.log('Enrolling in course:', courseId);
    setIsModalOpen(false);
  };

  return (
    <div>
      <CoursesSection onCourseClick={handleCourseClick} />
      <CourseModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onEnroll={handleEnroll}
      />
    </div>
  );
}