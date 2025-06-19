import React, { useState } from "react";
import "./Articles.css";

function Articles() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Simulated article data with images
  const articles = [
    {
      id: 1,
      title: "Understanding AI",
      preview: "A brief introduction to Artificial Intelligence and its impact on various industries.",
      content: "AI is a branch of computer science that aims to create machines that can simulate human intelligence. It is used in various applications such as speech recognition, self-driving cars, and more.",
      image: "https://via.placeholder.com/250x150?text=AI" // Example image link
    },
    {
      id: 2,
      title: "Exploring the Universe",
      preview: "An exploration into the mysteries of space, from black holes to the Big Bang Theory.",
      content: "The universe is a vast, ever-expanding place. Space exploration has led to numerous discoveries, including the existence of black holes, the origins of galaxies, and the potential for life on other planets.",
      image: "https://via.placeholder.com/250x150?text=Space" // Example image link
    },
    {
      id: 3,
      title: "The Future of Technology",
      preview: "A look into the future of technology and how it will change our daily lives.",
      content: "Technological advancements are accelerating at an exponential rate. The future will likely see innovations like quantum computing, advanced robotics, and the integration of AI into every aspect of human life.",
      image: "https://via.placeholder.com/250x150?text=Tech" // Example image link
    },
  ];

  // Handle article click to show details
  const handleCardClick = (articleId) => {
    const article = articles.find((article) => article.id === articleId);
    setSelectedArticle(article);
  };

  // Handle closing the modal
  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="learn-container" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Learn More Articles</h1>
      <div className="cards-container">
        {articles.map((article) => (
          <div
            key={article.id}
            className="card"
            onClick={() => handleCardClick(article.id)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={article.image} alt={article.title} className="card-image" />
                <h2>{article.title}</h2>
                <p>{article.preview}</p>
              </div>
              <div className="card-back">
                <h3>Click for Details</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Pop-up for the selected article */}
      {selectedArticle && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{selectedArticle.title}</h2>
            <p>{selectedArticle.content}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Articles;
