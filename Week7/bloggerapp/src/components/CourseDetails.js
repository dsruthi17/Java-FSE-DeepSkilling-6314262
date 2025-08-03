import React from "react";

const CourseDetails = ({ data, isAdmin }) => {
  if (!data) return <div>No course data available</div>;

  return (
    <div className="course-details">
      <h2>
        Course Details{" "}
        {isAdmin && <span className="admin-badge">(Admin View)</span>}
      </h2>
      <h3>{data.title}</h3>
      <p>Instructor: {data.instructor}</p>
      <p>Duration: {data.duration}</p>
      <p>Level: {data.level}</p>

      {isAdmin && (
        <div className="admin-options">
          <button>Update Course</button>
          <button>Manage Students</button>
        </div>
      )}

      {!isAdmin && <button>Enroll Now</button>}
    </div>
  );
};

export default CourseDetails;
