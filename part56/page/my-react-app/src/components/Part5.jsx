import React, { useState, useEffect } from "react";
import "./Part5.css";

// Import images
import img52 from "../assets/52.jpg";
import img53 from "../assets/53.jpg";
import img54 from "../assets/54.jpg";
import img55 from "../assets/55.jpg";
import img56 from "../assets/56.jpg";
import img57 from "../assets/57.jpg";
import img58 from "../assets/58.jpg";
import img59 from "../assets/59.jpg";
import img60 from "../assets/60.jpg";
import img61 from "../assets/61.jpg";
import img62 from "../assets/62.jpg";
import img63 from "../assets/63.jpg";
import img64 from "../assets/64.jpg";
import img65 from "../assets/65.jpg";
import img66 from "../assets/66.jpg";
import img67 from "../assets/67.jpg";
import img68 from "../assets/68.jpg";
import img69 from "../assets/69.jpg";
import img70 from "../assets/70.jpg";
import img71 from "../assets/71.jpg";
import img72 from "../assets/72.jpg";
import img73 from "../assets/73.jpg";
import img74 from "../assets/74.jpg";
import img75 from "../assets/75.jpg";
import img76 from "../assets/76.jpg";
import img77 from "../assets/77.jpg";
import img78 from "../assets/78.jpg";
import img79 from "../assets/79.jpg";
import img80 from "../assets/80.jpg";
import img81 from "../assets/81.jpg";
import img82 from "../assets/82.jpg";
import img83 from "../assets/83.jpg";
import img84 from "../assets/84.jpg";
import img85 from "../assets/85.jpg";
import img86 from "../assets/86.jpg";
import img87 from "../assets/87.jpg";
import img88 from "../assets/88.jpg";
import img89 from "../assets/89.jpg";
import img90 from "../assets/90.jpg";
import img91 from "../assets/91.jpg";
import img92 from "../assets/92.jpg";
import img93 from "../assets/93.jpg";
import img94 from "../assets/94.jpg";
import img95 from "../assets/95.jpg";
import img96 from "../assets/96.jpg";
import img97 from "../assets/97.jpg";
import img98 from "../assets/98.jpg";
import img99 from "../assets/99.jpg";
import img100 from "../assets/100.jpg";
import img101 from "../assets/101.jpg";
import img102 from "../assets/102.jpg";
import img103 from "../assets/103.jpg";
import img104 from "../assets/104.jpg";
import img105 from "../assets/105.jpg";
import img106 from "../assets/106.jpg";
import img107 from "../assets/107.jpg";
import img108 from "../assets/108.jpg";
import img109 from "../assets/109.jpg";
import img110 from "../assets/110.jpg";
import img111 from "../assets/111.jpg";
import img112 from "../assets/112.jpg";
import img113 from "../assets/113.jpg";
import img114 from "../assets/114.jpg";
import img115 from "../assets/115.jpg";
import img116 from "../assets/116.jpg";
import img117 from "../assets/117.jpg";
import img118 from "../assets/118.jpg";
import img119 from "../assets/119.jpg";
import img120 from "../assets/120.jpg";
import img121 from "../assets/121.jpg";
import img122 from "../assets/122.jpg";
import img123 from "../assets/123.jpg";
import img124 from "../assets/124.jpg";
import img125 from "../assets/125.jpg";
import img126 from "../assets/126.jpg";
import img127 from "../assets/127.jpg";
import img128 from "../assets/128.jpg";
import img129 from "../assets/129.jpg";
import img130 from "../assets/130.jpg";
import img131 from "../assets/131.jpg";
import img132 from "../assets/132.jpg";
import img133 from "../assets/133.jpg";
import img134 from "../assets/134.jpg";
import img134A from "../assets/134A.jpg";
import img135 from "../assets/135.jpg";
import img136 from "../assets/136.jpg";
import img137 from "../assets/137.jpg";
import img138 from "../assets/138.jpg";
import img139 from "../assets/139.jpg";
import img139A from "../assets/139A.jpg";
import img140 from "../assets/140.jpg";
import img141 from "../assets/141.jpg";
import img142 from "../assets/142.jpg";
import img143 from "../assets/143.jpg";
import img144 from "../assets/144.jpg";
import img145 from "../assets/145.jpg";
import img146 from "../assets/146.jpg";
import img147 from "../assets/147.jpg";
import img148 from "../assets/148.jpg";
import img149 from "../assets/149.jpg";
import img150 from "../assets/150.jpg";
import img151 from "../assets/151.jpg";

const imageMap = {
  "52": img52,
  "53": img53,
"54": img54,
"55": img55,
"56": img56,
"57": img57,
"58": img58,
"59": img59,
"60": img60,
"61": img61,
"62": img62,
"63": img63,
"64": img64,
"65": img65,
"66": img66,
"67": img67,
"68": img68,
"69": img69,
"70": img70,
"71": img71,
"72": img72,
"73": img73,
"74": img74,
"75": img75,
"76": img76,
"77": img77,
"78": img78,
"79": img79,
"80": img80,
"81": img81,
"82": img82,
"83": img83,
"84": img84,
"85": img85,
"86": img86,
"87": img87,
"88": img88,
"89": img89,
"90": img90,
"91": img91,
"92": img92,
"93": img93,
"94": img94,
"95": img95,
"96": img96,
"97": img97,
"98": img98,
"99": img99,
"100": img100,
"101": img101,
"102": img102,
"103": img103,
"104": img104,
"105": img105,
"106": img106,
"107": img107,
"108": img108,
"109": img109,
"110": img110,
"111": img111,
"112": img112,
"113": img113,
"114": img114,
"115": img115,
"116": img116,
"117": img117,
"118": img118,
"119": img119,
"120": img120,
"121": img121,
"122": img122,
"123": img123,
"124": img124,
"125": img125,
"126": img126,
"127": img127,
"128": img128,
"129": img129,
"130": img130,
"131": img131,
"132": img132,
"133": img133,
"134": img134,
"134A": img134A,
"135": img135,
"136": img136,
"137": img137,
"138": img138,
"139": img139,
"139A": img139A,
"140": img140,
"141": img141,
"142": img142,
"143": img143,
"144": img144,
"145": img145,
"146": img146,
"147": img147,
"148": img148,
"149": img149,
"150": img150,
"151": img151,
};

const Part5 = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 12;

  useEffect(() => {
    // Fetch articles from backend API
    fetch("http://localhost:5000/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching articles:", error));
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
      <h1>Indian Constitution - Part V (Articles 52 to 151)</h1>
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
                <h2>Article {article.article_number}</h2>
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
            <h2>Article {selectedArticle.article_number}</h2>
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

export default Part5;
