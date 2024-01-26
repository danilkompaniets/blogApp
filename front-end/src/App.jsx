import HomePage from "./pages/home/HomePage"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage"
function App() {

  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/blog/:id" element={<ArticleDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
