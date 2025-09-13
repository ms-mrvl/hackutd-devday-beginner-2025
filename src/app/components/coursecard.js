import React from 'react';

const data = [
  {
    "courseCode": "CS 1200",
    "title": "Introduction to Computer Science and Software Engineering",
    "description": "Overview of computer science and software engineering concepts.",
    "creditHours": 2
  }
];

const CourseCard = (props) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white border border-gray-300 round-lg shadow-sm">
      
      <h1 className="text-3xl font-bold mb-3 text-red-700">
        {props.courseCode}
      </h1>

      <h2 className="text-xl font-semibold mb-3 text-gray-700">
        {props.title}
      </h2>

      <p className="text-gray-600 mb-4">
        {props.description}
      </p>

      <div className="inline-block">
        <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
          {props.creditHours} Credit Hours
        </span>
      </div>
      
    </div>
  );
};

export default CourseCard;