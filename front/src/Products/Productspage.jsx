// // import React, { useState, useEffect } from "react";
// // //import "./ProductsPage.css"; // Create CSS for styling

// // const ProductsPage = () => {
// //     const [products, setProducts] = useState([]);

// //     useEffect(() => {
// //         fetch("http://localhost:8000/api/v1/products") // Adjust URL if needed
// //             .then(response => response.json())
// //             .then(data => setProducts(data))
// //             .catch(error => console.error("Error fetching products:", error));
// //     }, []);

// //     return (
// //         <div className="products-container">
// //             <h2>🔥 Products of the Month</h2>
// //             <div className="products-list">
// //                 {products.map(product => (
// //                     <div key={product.id} className="product-card">
// //                         <img src={product.image} alt={product.name} className="product-image" />
// //                         <div className="product-info">
// //                             <h3>{product.name}</h3>
// //                             <p>{product.description}</p>
// //                             <a href={product.website} target="_blank" rel="noopener noreferrer">
// //                                 Visit Website
// //                             </a>
// //                         </div>
// //                         <div className="votes-section">
// //                             👍 {product.votes} Votes
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default ProductsPage;

// import React, { useState, useEffect } from "react";
// import "./Products.css"; // Ensure the CSS file is linked

// const ProductsPage = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetch("http://localhost:8000/api/v1/products") // Adjust URL if needed
//             .then(response => response.json())
//             .then(data => setProducts(data))
//             .catch(error => console.error("Error fetching products:", error));
//     }, []);

//     return (
//         <div className="products-container">
//             <h2 className="title">🔥 Products of the Month</h2>
//             <div className="products-list">
//                 {products.length > 0 ? (
//                     products.map(product => (
//                         <div key={product.id} className="product-card">
//                             <img src={product.image} alt={product.name} className="product-image" />
//                             <div className="product-info">
//                                 <h3>{product.name}</h3>
//                                 <p className="product-description">{product.description}</p>
//                                 <a href={product.website} target="_blank" rel="noopener noreferrer" className="visit-btn">
//                                     Visit Website
//                                 </a>
//                             </div>
//                             <div className="votes-section">
//                                 👍 {product.votes} Votes
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p className="loading">Loading products...</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ProductsPage;

import React, { useState, useEffect } from "react";
import "./Products.css"; // Make sure this file exists

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/v1/products") // Adjust URL if needed
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    return (
        <div className="products-container">
            <h2 className="title">🔥 Products of the Month</h2>
            <div className="products-list">
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p className="product-description">{product.description}</p>
                                <a href={product.website} target="_blank" rel="noopener noreferrer" className="visit-btn">
                                    Visit Website
                                </a>
                            </div>
                            <div className="votes-section">
                                👍 {product.votes} Votes
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="loading">Loading products...</p>
                )}
            </div>
        </div>
    );
};

export default ProductsPage;
