import React from "react";

const BlogDetails = ({ data, isAdmin }) => {
  if (!data) return <div>No blog data available</div>;

  return (
    <div className="blog-details">
      <h2>
        Blog Details{" "}
        {isAdmin && <span className="admin-badge">(Admin View)</span>}
      </h2>
      <h3>{data.title}</h3>
      <p>
        By {data.author} on {data.date}
      </p>
      <p>{data.content}</p>

      {isAdmin ? (
        <div className="admin-actions">
          <button>Edit Blog</button>
          <button>Delete Blog</button>
        </div>
      ) : (
        <div className="user-actions">
          <button>Like</button>
          <button>Comment</button>
          <button>Share</button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
