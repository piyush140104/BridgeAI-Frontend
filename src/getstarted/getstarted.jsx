// import React from "react";
// import { Link } from "react-router-dom";
// import "./getstarted.css";

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <div className="content">
//         <h1 className="title">Welcome to Bridge AI</h1>
//         <p className="subtitle">Your AI-powered assistant for seamless interactions.</p>
//         <Link to="/chatbotpage">
//           <button className="start-button">Get Started</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./getstarted.css";

const Dashboard = () => {
  const topics = [
 
    { id: 4, title: "AI Chatbots", image: "https://i.pinimg.com/736x/e1/18/f5/e118f5f71deae656815c4628dbf564aa.jpg" },
    { id: 3, title: "LAW", image: "https://cdn.leonardo.ai/users/17d1f6f8-1a7d-454c-b943-7e93aa54a448/generations/85d80c83-5c0b-47c3-9cf3-c338c8ca245d/Leonardo_Phoenix_10_Generate_a_highresolution_image_of_the_Res_1.jpg" },
    { id: 2, title: "MARKETING", image: "https://i.pinimg.com/1200x/a1/a3/3d/a1a33d2aa91a7b4cb0323818a0e247ba.jpg" },
    { id: 1, title: "FINANCE", image: " https://cdn.leonardo.ai/users/17d1f6f8-1a7d-454c-b943-7e93aa54a448/generations/bd733724-7ae8-498a-8417-6779ce3bfc30/Leonardo_Phoenix_10_generate_a_highly_detailed_futuristic_and_3.jpg" }
   
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % topics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [topics.length]);

  return (
    <div className="dashboard-container">
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {topics.map((topic) => (
            <div key={topic.id} className="carousel-item">
              <div className="carousel-image-container">
                <img src={topic.image} alt={topic.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="content">
        <h1 className="title">Welcome to Bridge AI</h1>
        <p className="subtitle">Your AI Assistant, Bridging Ideas & Growth.</p>
        <Link to="/chatbotpage">
          <button className="start-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;