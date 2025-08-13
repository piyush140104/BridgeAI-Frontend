// import React, { useState, useEffect } from "react";
// import "./Chatbot.css";
// import { Link } from "react-router-dom";

// const ChatbotPage = () => {
//   const [messages, setMessages] = useState([
//     { text: "Hello! How can I assist you today?", sender: "bot" },
//   ]);
//   const [profiles, setProfiles] = useState([]);
//   const [input, setInput] = useState("");
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [botResponse, setBotResponse] = useState("");
//   const [displayedResponse, setDisplayedResponse] = useState("");
//   const [showProfiles, setShowProfiles] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);

//   const handleSend = async () => {
//     if (input.trim() === "") return;

//     const newMessage = { text: input, sender: "user" };
//     setMessages((prevMessages) => [...prevMessages, newMessage]);
//     setInput("");
//     setLoading(true);
//     setIsTyping(true);

//     try {
//       const response = await fetch("http://localhost:8000/api/v1/chatbot/query", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ userQuery: input }),
//       });

//       const data = await response.json();
//       setBotResponse(data.data.content);
//       setLoading(false);

//       if (data.data.profiles && data.data.profiles.length > 0) {
//         setProfiles(data.data.profiles);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setLoading(false);
//     }
//   };

//   const handleStop = () => {
//     setBotResponse("");
//     setDisplayedResponse("");
//     setIsTyping(false);
//     setLoading(false);
//   };

//   useEffect(() => {
//     if (botResponse) {
//       let index = 0;
//       setDisplayedResponse("");
//       setShowProfiles(false);
//       setIsTyping(true);
//       const interval = setInterval(() => {
//         if (index < botResponse.length) {
//           setDisplayedResponse((prev) => prev + botResponse[index]);
//           index++;
//         } else {
//           clearInterval(interval);
//           setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: "bot" }]);
//           setBotResponse("");
//           setShowProfiles(true);
//           setIsTyping(false);
//         }
//       }, 20);
//     }
//   }, [botResponse]);

//   return (
//     <div className="chatbot-container">
//       <div className="profile-container">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
//           alt="Profile"
//           className="profile-icon"
//           onClick={() => setProfileOpen(!profileOpen)}
//         />
//         {profileOpen && (
//           <div className="profile-dropdown">
//             <ul>
//               <Link to="/editprofilepage"><li>Edit Profile</li></Link>
//               <li>Settings</li>
//               <Link to="/logoutpage"><li>Logout</li></Link>
//             </ul>
//           </div>
//         )}
//       </div>

//       <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
//         ☰
//       </button>

//       <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
//         <div className="random">
//           <ul>
//             <li>Menu</li>
//             <li>Home</li>
//             <li>Settings</li>
//             <li>Help</li>
//           </ul>
//         </div>
//       </div>

//       <div className="chatbot">
//         <div className="chat-header">Bridge AI</div>
//         <div className="chat-messages">
//           {messages.map((msg, index) => (
//             <div key={index} className={`message ${msg.sender} justify-text`}>
//               {msg.text}
//             </div>
//           ))}
//           {botResponse && <div className="message bot justify-text">{displayedResponse}</div>}
//           {loading && <div className="message bot">Typing...</div>}
//           {showProfiles && profiles.length > 0 && (
//             <div className="profiles-section">
//               <h3>Profiles Found:</h3>
//               {profiles.map((profile, index) => (
//                 <div key={index} className="profile-link">
//                   <p><strong>{profile.name}</strong></p>
//                   <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
//                   {" | "}
//                   <a href={profile.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="chat-input">
//           <input
//             type="text"
//             placeholder="Type a message..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleSend()}
//           />
//           <button onClick={isTyping ? handleStop : handleSend}>
//             {isTyping ? "Stop" : "➤"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatbotPage;



import React, { useState, useEffect } from "react";
import "./Chatbot.css";
import { Link } from "react-router-dom";

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [profiles, setProfiles] = useState([]);
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [botResponse, setBotResponse] = useState("");
  const [displayedResponse, setDisplayedResponse] = useState("");
  const [showProfiles, setShowProfiles] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const newMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput("");
    setLoading(true);
    setIsTyping(true);

    try {
      const response = await fetch("http://localhost:8000/api/v1/chatbot/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userQuery: input }),
      });

      const data = await response.json();
      setBotResponse(data.data.content);
      setLoading(false);

      if (data.data.profiles && data.data.profiles.length > 0) {
        setProfiles(data.data.profiles);
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  const handleStop = () => {
    setBotResponse("");
    setDisplayedResponse("");
    setIsTyping(false);
    setLoading(false);
  };

  useEffect(() => {
    if (botResponse) {
      let index = 0;
      setDisplayedResponse("");
      setShowProfiles(false);
      setIsTyping(true);
      const interval = setInterval(() => {
        if (index < botResponse.length) {
          setDisplayedResponse((prev) => prev + botResponse[index]);
          index++;
        } else {
          clearInterval(interval);
          setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: "bot" }]);
          setBotResponse("");
          setShowProfiles(true);
          setIsTyping(false);
        }
      }, 1);
    }
  }, [botResponse]);

  return (
    <div className="chatbot-container">
      {/* <div className="profile-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="Profile"
          className="profile-icon"
          onClick={() => setProfileOpen(!profileOpen)}
        />
        {profileOpen && (
          <div className="profile-dropdown">
            <ul>
              <Link to="/editprofilepage"><li>Edit Profile</li></Link>
              <li>Settings</li>
              <Link to="/logoutpage"><li>Logout</li></Link>
            </ul>
          </div>
        )}
      </div> */}
      <div className="profile-container">
  {/* Profile Icon */}
  <img
    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
    alt="Profile"
    className="profile-icon"
    onClick={() => setProfileOpen(!profileOpen)}
  />
  {profileOpen && (
    <div className="profile-dropdown">
      <ul>
        <Link to="/editprofilepage"><li>Edit Profile</li></Link>
        <li>Settings</li>
        <Link to="/logoutpage"><li>Logout</li></Link>
      </ul>
    </div>
  )}

  {/* New Articles Icon */}
  <Link to="/articles">
    <img
      src="https://cdn-icons-png.flaticon.com/128/11223/11223679.png"
      alt="Articles"
      className="articles-icon"
    />
  </Link>
</div>


      <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        ☰
      </button>

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="random">
          <ul>
          <Link to="/dashboard"><li>Home</li></Link>
            <Link to="/products"><li>Showcase</li></Link>
            <Link to="/help"><li>Help</li></Link>
          </ul>
        </div>
      </div>

      <div className="chatbot">
        <div className="chat-header">Bridge AI</div>
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender} justify-text`}>
              {msg.text}
            </div>
          ))}
          {botResponse && <div className="message bot justify-text">{displayedResponse}</div>}
          {loading && <div className="message bot">Typing...</div>}
          {showProfiles && profiles.length > 0 && (
            <div className="profiles-section">
              <h3>Profiles Found:</h3>
              {profiles.map((profile, index) => (
                <div key={index} className="profile-link">
                  <p><strong>{profile.name}</strong></p>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  {" | "}
                  <a href={profile.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={isTyping ? handleStop : handleSend}>
            {isTyping ? "Stop" : "➤"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
