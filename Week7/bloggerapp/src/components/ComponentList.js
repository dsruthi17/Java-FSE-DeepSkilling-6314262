import React from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

const ComponentList = ({ components, isAdmin }) => {
  const getComponent = (type, data) => {
    switch (type) {
      case "books":
        return (
          <BookDetails
            key={`book-${data.title}`}
            data={data}
            isAdmin={isAdmin}
          />
        );
      case "blogs":
        return (
          <BlogDetails
            key={`blog-${data.title}`}
            data={data}
            isAdmin={isAdmin}
          />
        );
      case "courses":
        return (
          <CourseDetails
            key={`course-${data.title}`}
            data={data}
            isAdmin={isAdmin}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="component-list">
      {components.map((component) => (
        <div key={`${component.type}-container`} className="list-item">
          {getComponent(component.type, component.data)}
        </div>
      ))}
    </div>
  );
};

export default ComponentList;
