import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";
import ComponentList from "./components/ComponentList";

function App() {
  const [activeComponent, setActiveComponent] = useState("books");
  const [isAdmin, setIsAdmin] = useState(false);
  const [renderMethod, setRenderMethod] = useState("if-else");

  const componentsData = {
    books: {
      title: "React Essentials",
      author: "John Doe",
      pages: 300,
      price: 29.99,
    },
    blogs: {
      title: "Learning React in 2023",
      author: "Jane Smith",
      date: "2023-10-15",
      content: "React continues to dominate the frontend landscape...",
    },
    courses: {
      title: "Advanced React Patterns",
      instructor: "Mike Johnson",
      duration: "8 weeks",
      level: "Advanced",
    },
  };

  const renderWithIfElse = () => {
    if (activeComponent === "books") {
      return <BookDetails data={componentsData.books} isAdmin={isAdmin} />;
    } else if (activeComponent === "blogs") {
      return <BlogDetails data={componentsData.blogs} isAdmin={isAdmin} />;
    } else {
      return <CourseDetails data={componentsData.courses} isAdmin={isAdmin} />;
    }
  };

  const renderWithSwitch = () => {
    switch (activeComponent) {
      case "books":
        return <BookDetails data={componentsData.books} isAdmin={isAdmin} />;
      case "blogs":
        return <BlogDetails data={componentsData.blogs} isAdmin={isAdmin} />;
      case "courses":
        return (
          <CourseDetails data={componentsData.courses} isAdmin={isAdmin} />
        );
      default:
        return <BookDetails data={componentsData.books} isAdmin={isAdmin} />;
    }
  };

  const renderWithObject = () => {
    const components = {
      books: <BookDetails data={componentsData.books} isAdmin={isAdmin} />,
      blogs: <BlogDetails data={componentsData.blogs} isAdmin={isAdmin} />,
      courses: (
        <CourseDetails data={componentsData.courses} isAdmin={isAdmin} />
      ),
    };
    return components[activeComponent];
  };

  const renderWithTernary = () => {
    return activeComponent === "books" ? (
      <BookDetails data={componentsData.books} isAdmin={isAdmin} />
    ) : activeComponent === "blogs" ? (
      <BlogDetails data={componentsData.blogs} isAdmin={isAdmin} />
    ) : (
      <CourseDetails data={componentsData.courses} isAdmin={isAdmin} />
    );
  };

  const renderWithLogicalAnd = () => {
    return (
      <>
        {activeComponent === "books" && (
          <BookDetails data={componentsData.books} isAdmin={isAdmin} />
        )}
        {activeComponent === "blogs" && (
          <BlogDetails data={componentsData.blogs} isAdmin={isAdmin} />
        )}
        {activeComponent === "courses" && (
          <CourseDetails data={componentsData.courses} isAdmin={isAdmin} />
        )}
      </>
    );
  };

  const getCurrentRender = () => {
    switch (renderMethod) {
      case "if-else":
        return renderWithIfElse();
      case "switch":
        return renderWithSwitch();
      case "object":
        return renderWithObject();
      case "ternary":
        return renderWithTernary();
      case "logical-and":
        return renderWithLogicalAnd();
      default:
        return renderWithIfElse();
    }
  };

  return (
    <div className="app">
      <h1>BloggerApp</h1>

      <div className="controls">
        <button onClick={() => setIsAdmin(!isAdmin)}>
          {isAdmin ? "Disable Admin Mode" : "Enable Admin Mode"}
        </button>

        <div className="render-method-selector">
          <label>Render Method: </label>
          <select
            value={renderMethod}
            onChange={(e) => setRenderMethod(e.target.value)}
          >
            <option value="if-else">If-Else</option>
            <option value="switch">Switch</option>
            <option value="object">Object Lookup</option>
            <option value="ternary">Ternary</option>
            <option value="logical-and">Logical AND</option>
          </select>
        </div>
      </div>

      <nav className="component-nav">
        <button onClick={() => setActiveComponent("books")}>Books</button>
        <button onClick={() => setActiveComponent("blogs")}>Blogs</button>
        <button onClick={() => setActiveComponent("courses")}>Courses</button>
      </nav>

      <div className="component-container">{getCurrentRender()}</div>

      <h2>All Components Rendered with List and Keys</h2>
      <ComponentList
        components={[
          { type: "books", data: componentsData.books },
          { type: "blogs", data: componentsData.blogs },
          { type: "courses", data: componentsData.courses },
        ]}
        isAdmin={isAdmin}
      />
    </div>
  );
}

export default App;
