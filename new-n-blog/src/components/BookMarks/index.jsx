/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./BookMarks.style.css";
import noImg from "../../assets/images/noimg.png";

const BooksMarks = (props) => {
  const { show, bookmarks, onClose, onSelectArticle, onDeleteBookMark } = props;

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        {bookmarks.length === 0 ? (
          <h2 className="bookmarks-heading">No Bookmarked News Here</h2>
        ) : (
          <h2 className="bookmarks-heading">Bookmarked News</h2>
        )}

        <div className="bookmarks-list">
          {bookmarks.map((bookmark, idx) => (
            <div key={bookmark.title} className="bookmarks-item" onClick={() => onSelectArticle(bookmark)}>
              <img src={bookmark.image || noImg} alt={bookmark.title} />
              <h3>{bookmark.title} </h3>
              <span
                className="delete-button"
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteBookMark(bookmark);
                }}
              >
                <i className="fa-regular fa-circle-xmark"></i>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksMarks;
