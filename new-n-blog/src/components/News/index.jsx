/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import noImg from "../../assets/images/noimg.png";
import userImg from "../../assets/images/user.jpg";
import Calendar from "../Calendar";
import Weather from "../Weather";
import NewsModal from "../NewsModal";
import BookMarks from "../BookMarks";

import "./News.style.css";

import axios from "axios";

const categories = [
  "general",
  "world",
  "nation",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
];

const News = () => {
  const [headline, setHeadline] = useState(null);
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("technology");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  // modal
  const [showModal, setShowModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  // book marks
  const [bookmarks, setBookmarks] = useState([]);
  const [showBookMarksModal, setShowBookMarksModal] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      // let url = "a";
      let url = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&apikey=b8021bf584f1ba548404ce478189a62f`;

      if (searchQuery) {
        url = `https://gnews.io/api/v4/search?q=${searchQuery}&lang=en&apikey=b8021bf584f1ba548404ce478189a62f`;
      }
      const res = await axios.get(url);
      const data = await res.data.articles;

      data.forEach((article) => {
        if (!article.image) {
          article.image = noImg;
        }
      });

      setHeadline(data[0]);
      setNews(data.slice(1, 7));

      const saveBookMarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
      setBookmarks(saveBookMarks);
    };
    fetchNews();
  }, [selectedCategory, searchQuery]);

  const handleCategoryClick = (e, category) => {
    e.preventDefault();
    setSelectedCategory(category);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput == "") {
      return;
    }
    setSearchQuery(searchInput);
    setSearchInput("");
  };

  // modal
  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
    console.log("article: ", article);
  };

  // bookmarks
  const handleBookMarksClick = (article) => {
    setBookmarks((prevBookMarks) => {
      const updateBookMarks = prevBookMarks.find((bookmark) => bookmark.title === article.title)
        ? prevBookMarks.filter((bookmark) => bookmark.title !== article.title)
        : [...prevBookMarks, article];

      localStorage.setItem("bookmarks", JSON.stringify(updateBookMarks));

      return updateBookMarks;
    });
  };

  return (
    <div className="news">
      <header className="news-header">
        <h1 className="logo">News & Blogs</h1>
        <div className="search-bar">
          <form onSubmit={(e) => handleSearch(e)}>
            <input
              type="text"
              placeholder="Search News..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </header>
      <div className="news-content">
        <div className="navbar">
          <div className="user">
            <img src={userImg || noImg} alt="User Image" />
            <p>lcsanh</p>
          </div>
          <div className="categories">
            <h1 className="nav-heading">Categories</h1>
            <div className="nav-links">
              {categories.map((category, idx) => (
                <a key={idx} href="#" className="nav-link" onClick={(e) => handleCategoryClick(e, category)}>
                  {category}
                </a>
              ))}

              <a href="#" className="nav-link" onClick={() => setShowBookMarksModal(true)}>
                Bookmarks
                <i className="fa-solid fa-bookmark"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="news-section">
          {headline && (
            <div className="headline" onClick={() => handleArticleClick(headline)}>
              <img src={headline.image || noImg} alt={headline.title} />
              <h2 className="headline-title">
                {headline.description}
                <i
                  className={`${
                    bookmarks.some((bookmark) => bookmark.title === headline.title) ? "fa-solid" : "fa-regular"
                  }  fa-bookmark bookmark`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookMarksClick(headline);
                  }}
                ></i>
              </h2>
            </div>
          )}

          <div className="news-grid">
            {news.map((newItem, idx) => (
              <div key={idx} className="news-grid-item" onClick={() => handleArticleClick(newItem)}>
                <img src={newItem.image || noImg} alt={newItem.title} />
                <h3>
                  {newItem.description.substring(0, 28) + "..."}
                  <i
                    className={`${
                      bookmarks.some((bookmark) => bookmark.title === newItem.title) ? "fa-solid" : "fa-regular"
                    }  fa-bookmark bookmark`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookMarksClick(newItem);
                    }}
                  ></i>
                </h3>
              </div>
            ))}
          </div>
        </div>
        <NewsModal show={showModal} article={selectedArticle} onClose={() => setShowModal(false)} />
        <BookMarks
          show={showBookMarksModal}
          bookmarks={bookmarks}
          onClose={() => setShowBookMarksModal(false)}
          onSelectArticle={handleArticleClick}
          onDeleteBookMark={handleBookMarksClick}
        />
        <div className="my-blogs">My Blogs</div>
        <div className="weather-calendar">
          <Weather />
          <Calendar />
        </div>
      </div>
      <footer className="news-footer">
        <p>
          <span>News and Blog App</span>
        </p>
        <p>lcsanh</p>
        <p>&copy; All Right Reserved. By Code and Create</p>
      </footer>
    </div>
  );
};

export default News;
