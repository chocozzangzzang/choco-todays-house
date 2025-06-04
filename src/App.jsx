import { Route, Routes } from 'react-router-dom'
import './App.css'
import TopBar from './ui/TopBar'
import MainPage from './components/MainPage'
import LoginPage from './components/LoginPage'
import MiddleBar from './ui/MiddleBar'

// 1. TopBar : 로그인 버튼 -> 로그인 페이지 o
// 1-1. TopBar는 로그인 되어있는 경우 로그아웃으로 변경 --> 로그아웃 클릭 시 로그아웃이 됨 o
//      이는 zustand로 상태 관리할 것
// 2. 중간 메뉴 -> 카테고리 및 검색바 구현  o
//            --> 카테고리 누르면 해당 카테고리만 출력
//            --> 검색바는 원하는 문자열로 검색
// 3. 메인 메뉴 --> 전체 가구 목록
// 3-1 가구 클릭하면 자세한 정보 
//  --> 로그인 해야만 볼 수 있음
//  --> 로그인 안되어있는 경우에는 로그인 화면을 리턴                

function App() {
  return (
    <div>
      <TopBar />
      <MiddleBar />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
