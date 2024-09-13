/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import noImg from "../../assets/images/noimg.png";
import "./NewsModal.style.css";

const NewsModal = (props) => {
  const { show, article, onClose } = props;

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        {article && (
          <>
            <img src={article.image || noImg} className="modal-image" alt={article.title} />
            <h2 className="modal-title">{article.description}</h2>
            <p className="modal-source">Source: {article.source.name}</p>
            <p className="modal-date">
              {new Date(article.publishedAt).toLocaleString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p className="modal-content-text">{article.content}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more-link">
              Read More
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsModal;
