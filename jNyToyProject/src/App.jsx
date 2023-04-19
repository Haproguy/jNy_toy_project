import { Routes, Route } from "react-router-dom"
import MainPage from "./pages/main/mainPage.container"
import NotFound from "./pages/404"
import JoinPage from "./pages/join/join.container"
import SignPage from "./pages/sign/sign.container"
import ResultPage from "./pages/result/result.container"
import MyPage from "./pages/myPage/myPage.container"

function App() {

  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/' element={<MainPage />} />
      <Route path='/join' element={<JoinPage />} />
      <Route path='/sign' element={<SignPage />} />

      <Route path='/result/*' element={<ResultPage />} />
      <Route path='/mypage/*' element={<MyPage />} />
    </Routes>
  )
}

export default App
