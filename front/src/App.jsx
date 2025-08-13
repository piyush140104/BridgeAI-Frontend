import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatbotPage from './chatbot/chatbot.jsx';
import LoginPage from './loginpage.jsx';
import LogoutPage from './logoutpage.jsx';
import SignupPage from './signup/signup.jsx';
import EditProfilePage from './editprofilepage/editprofilepage.jsx';
import Dashboard from './getstarted/getstarted.jsx';
import ArticlesPage from './Article/article.jsx';
import Help from './help/help.jsx'
import ProductsPage from './Products/Productspage.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>

      <Route path="/help" element={<Help/>}/>

        <Route path="/products" element={<ProductsPage/>}/>

        <Route path="/articles" element={<ArticlesPage/>}/>
        <Route path="/chatbotpage" element={<ChatbotPage/>}/>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/logoutpage" element={<LogoutPage/>}/>
        <Route path="/signuppage" element={<SignupPage/>}/>
        <Route path="/editprofilepage" element={<EditProfilePage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
