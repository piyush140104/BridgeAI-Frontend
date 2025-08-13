// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ArticlesPage = () => {
//     const [articles, setArticles] = useState([]);
//     const [query, setQuery] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const fetchArticles = async () => {
//         setLoading(true);
//         setError(null);

//         try {
//             const response = await axios.get(`http://localhost:8000/api/v1/articles`, {
//                 params: { query: query.trim() || "entrepreneurship" }, // Default topic
//             });
//             setArticles(response.data);
//         } catch (err) {
//             console.error("Error fetching articles:", err);
//             setError("Failed to fetch articles. Try again later.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchArticles();
//     }, []); // Fetch articles on page load

//     return (
//         <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//             <h2>Latest Articles</h2>
//             <input
//                 type="text"
//                 placeholder="Enter a topic..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 style={{ padding: "8px", width: "300px", marginRight: "10px" }}
//             />
//             <button onClick={fetchArticles} style={{ padding: "8px 12px", cursor: "pointer" }}>
//                 Search
//             </button>

//             {loading && <p>Loading articles...</p>}
//             {error && <p style={{ color: "red" }}>{error}</p>}

//             <ul style={{ listStyleType: "none", padding: 0 }}>
//                 {articles.map((article, index) => (
//                     <li key={index} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
//                         <h3>{article.title}</h3>
//                         <a href={article.link} target="_blank" rel="noopener noreferrer">
//                             Read full article
//                         </a>
//                         <p><strong>Summary:</strong> {article.summary}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ArticlesPage;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./article.css"; // Import CSS file

const ArticlesPage = () => {
    const [articles, setArticles] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchArticles = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`http://localhost:8000/api/v1/articles`, {
                params: { query: query.trim() || "entrepreneurship" }, // Default topic
            });
            setArticles(response.data);
        } catch (err) {
            console.error("Error fetching articles:", err);
            setError("Failed to fetch articles. Try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []); // Fetch articles on page load

    return (
        <div className="articles-container">
            <h2 className="articles-title">Latest Articles</h2>

            {/* Search Bar */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Enter a topic..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                />
                <button onClick={fetchArticles} className="search-button">
                    Search
                </button>
            </div>

            {loading && <p className="loading-text">Loading articles...</p>}
            {error && <p className="error-text">{error}</p>}

            {/* Article List */}
            <ul className="article-list">
                {articles.map((article, index) => (
                    <li key={index} className="article-item">
                        <h3 className="article-title">{article.title}</h3>
                        <a href={article.link} target="_blank" rel="noopener noreferrer" className="article-link">
                            Read full article
                        </a>
                        <p className="article-summary"><strong>Summary:</strong> {article.summary}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticlesPage;

