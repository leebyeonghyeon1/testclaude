import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ProtectedRoute from './components/common/ProtectedRoute'
import Home from './pages/Home'
import AboutCompany from './pages/about/AboutCompany'
import AboutCeo from './pages/about/AboutCeo'
import AboutVision from './pages/about/AboutVision'
import AboutHistory from './pages/about/AboutHistory'
import AboutLocation from './pages/about/AboutLocation'
import ProductList from './pages/products/ProductList'
import ProductDetail from './pages/products/ProductDetail'
import PostList from './pages/community/PostList'
import PostDetail from './pages/community/PostDetail'
import PostWrite from './pages/community/PostWrite'
import InquiryWrite from './pages/inquiry/InquiryWrite'
import InquiryList from './pages/inquiry/InquiryList'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import MyPage from './pages/MyPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {/* 회사소개 */}
        <Route path="about">
          <Route path="company" element={<AboutCompany />} />
          <Route path="ceo" element={<AboutCeo />} />
          <Route path="vision" element={<AboutVision />} />
          <Route path="history" element={<AboutHistory />} />
          <Route path="location" element={<AboutLocation />} />
        </Route>

        {/* 제품소개 */}
        <Route path="products">
          <Route index element={<ProductList />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>

        {/* 커뮤니티 */}
        <Route path="community">
          <Route index element={<PostList />} />
          <Route path=":id" element={<PostDetail />} />
          <Route path="write" element={<ProtectedRoute><PostWrite /></ProtectedRoute>} />
          <Route path=":id/edit" element={<ProtectedRoute><PostWrite /></ProtectedRoute>} />
        </Route>

        {/* 온라인문의 */}
        <Route path="inquiry">
          <Route path="write" element={<ProtectedRoute><InquiryWrite /></ProtectedRoute>} />
          <Route path="list" element={<ProtectedRoute><InquiryList /></ProtectedRoute>} />
        </Route>

        {/* 인증 */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="mypage" element={<ProtectedRoute><MyPage /></ProtectedRoute>} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
