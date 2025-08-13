import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginPage from './loginpage.jsx'
import LogoutPage from './logoutpage.jsx'
import ChatbotPage from './chatbot/chatbot.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App/>
  {/* <ChatbotPage/>, */}
  </StrictMode>,
)
