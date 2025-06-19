import React, { useState, useEffect } from "react";
import "./part6.css";

// Import images
import img152 from "../assets/152.jpg";
import img153 from "../assets/153.jpg";
import img154 from "../assets/154.jpg";
import img155 from "../assets/155.jpg";
import img156 from "../assets/156.jpg";
import img157 from "../assets/157.jpg";
import img158 from "../assets/158.jpg";
import img159 from "../assets/159.jpg";
import img160 from "../assets/160.jpg";
import img161 from "../assets/161.jpg";
import img162 from "../assets/162.jpg";
import img163 from "../assets/163.jpg";
import img164 from "../assets/164.jpg";
import img165 from "../assets/165.jpg";
import img166 from "../assets/166.jpg";
import img167 from "../assets/167.jpg";
import img168 from "../assets/168.jpg";
import img169 from "../assets/169.jpg";
import img170 from "../assets/170.jpg";
import img171 from "../assets/171.jpg";
import img172 from "../assets/172.jpg";
import img173 from "../assets/173.jpg";
import img174 from "../assets/174.jpg";
import img175 from "../assets/175.jpg";
import img176 from "../assets/176.jpg";
import img177 from "../assets/177.jpg";
import img178 from "../assets/178.jpg";
import img179 from "../assets/179.jpg";
import img180 from "../assets/180.jpg";
import img181 from "../assets/181.jpg";
import img182 from "../assets/182.jpg";
import img183 from "../assets/183.jpg";
import img184 from "../assets/184.jpg";
import img185 from "../assets/185.jpg";
import img186 from "../assets/186.jpg";
import img187 from "../assets/187.jpg";
import img188 from "../assets/188.jpg";
import img189 from "../assets/189.jpg";
import img190 from "../assets/190.jpg";
import img191 from "../assets/191.jpg";
import img192 from "../assets/192.jpg";
import img193 from "../assets/193.jpg";
import img194 from "../assets/194.jpg";
import img195 from "../assets/195.jpg";
import img196 from "../assets/196.jpg";
import img197 from "../assets/197.jpg";
import img198 from "../assets/198.jpg";
import img199 from "../assets/199.jpg";
import img200 from "../assets/200.jpg";
import img201 from "../assets/201.jpg";
import img202 from "../assets/202.jpg";
import img203 from "../assets/203.jpg";
import img204 from "../assets/204.jpg";
import img205 from "../assets/205.jpg";
import img206 from "../assets/206.jpg";
import img207 from "../assets/207.jpg";
import img208 from "../assets/208.jpg";
import img209 from "../assets/209.jpg";
import img210 from "../assets/210.jpg";
import img211 from "../assets/211.jpg";
import img212 from "../assets/212.jpg";
import img213 from "../assets/213.jpg";
import img214 from "../assets/214.jpg";
import img215 from "../assets/215.jpg";
import img216 from "../assets/216.jpg";
import img217 from "../assets/217.jpg";
import img218 from "../assets/218.jpg";
import img219 from "../assets/219.jpg";
import img220 from "../assets/220.jpg";
import img221 from "../assets/221.jpg";
import img222 from "../assets/222.jpg";
import img223 from "../assets/223.jpg";
import img224 from "../assets/224.jpg";
import img224A from "../assets/224A.jpg";
import img225 from "../assets/225.jpg";
import img226 from "../assets/226.jpg";
import img227 from "../assets/227.jpg";
import img228 from "../assets/228.jpg";
import img229 from "../assets/229.jpg";
import img230 from "../assets/230.jpg";
import img231 from "../assets/231.jpg";
import img232 from "../assets/232.jpg";
import img233 from "../assets/233.jpg";
import img233A from "../assets/233A.jpg";
import img234 from "../assets/234.jpg";
import img235 from "../assets/235.jpg";
import img236 from "../assets/236.jpg";
import img237 from "../assets/237.jpg";





const imageMap = {
  "152": img152,
  "153": img153,
"154": img154,
"155": img155,
"156": img156,
"157": img157,
"158": img158,
"159": img159,
"160": img160,
"161": img161,
"162": img162,
"163": img163,
"164": img164,
"165": img165,
"166": img166,
"167": img167,
"168": img168,
"169": img169,
"170": img170,
"171": img171,
"172": img172,
"173": img173,
"174": img174,
"175": img175,
"176": img176,
"177": img177,
"178": img178,
"179": img179,
"180": img180,
"181": img181,
"182": img182,
"183": img183,
"184": img184,
"185": img185,
"186": img186,
"187": img187,
"188": img188,
"189": img189,
"190": img190,
"191": img191,
"192": img192,
"193": img193,
"194": img194,
"195": img195,
"196": img196,
"197": img197,
"198": img198,
"199": img199,
"200": img200,
"201": img201,
"202": img202,
"203": img203,
"204": img204,
"205": img205,
"206": img206,
"207": img207,
"208": img208,
"209": img209,
"210": img210,
"211": img211,
"212": img212,
"213": img213,
"214": img214,
"215": img215,
"216": img216,
"217": img217,
"218": img218,
"219": img219,
"220": img220,
"221": img221,
"222": img222,
"223": img223,
"224": img224,
"224A": img224A,
"225": img225,
"226": img226,
"227": img227,
"228": img228,
"229": img229,
"230": img230,
"231": img231,
"232": img232,
"233": img233,
"233A": img233A,
"234": img234,
"235": img235,
"236": img236,
"237": img237,

  
};

const Part6 = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 12;

  useEffect(() => {
    // Fetch articles for Part 6 from the backend API
    fetch("http://localhost:5000/api/part6/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching Part 6 articles:", error));
  }, []);

  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;

  const handleCardClick = (articleId) => {
    const article = articles.find((a) => a._id === articleId);
    setSelectedArticle(article);
  };

  const closeModal = () => setSelectedArticle(null);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className="constitution-container">
      <h1>Indian Constitution - Part VI (Articles 152 to 237)</h1>
      <div className="article-cards">
        {articles.slice(startIndex, endIndex).map((article) => (
          <div
            key={article._id}
            className="article-card"
            onClick={() => handleCardClick(article._id)}
          >
            <div className="card-structure">
              <div className="card-front-face">
                <img
                  src={imageMap[article.article_number]}
                  alt={`Article ${article.article_number}`}
                  className="article-image"
                />
                <h2>{`Article ${article.article_number}`}</h2>
              </div>
              <div className="card-back-face">
                <p>{article.simplified_content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-controls">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="control-button"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={endIndex >= articles.length}
          className="control-button"
        >
          Next
        </button>
      </div>

      {selectedArticle && (
        <div className="modal-overlay-new">
          <div className="modal-content-new">
            <h2>{`Article ${selectedArticle.article_number}`}</h2>
            <p>{selectedArticle.content}</p>
            <button onClick={closeModal} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Part6;
