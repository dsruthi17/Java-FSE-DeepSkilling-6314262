import React from "react";

const BookDetails = ({ data, isAdmin }) => {
  if (!data) return <div>No book data available</div>;

  return (
    <div className="book-details">
      <h2>
        Book Details{" "}
        {isAdmin && <span className="admin-badge">(Admin View)</span>}
      </h2>
      <ul>
        <li>Title: {data.title}</li>
        <li>Author: {data.author}</li>
        <li>Pages: {data.pages}</li>
        <li>Price: ${data.price}</li>
      </ul>

      {isAdmin ? (
        <div className="admin-controls">
          <button>Edit Book</button>
          <button>Delete Book</button>
        </div>
      ) : (
        <button>Add to Wishlist</button>
      )}
    </div>
  );
};

export default BookDetails;
