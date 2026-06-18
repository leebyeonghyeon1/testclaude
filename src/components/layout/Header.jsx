import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { supabase } from '../../lib/supabase'

const navItems = [
  {
    label: '회사소개',
    children: [
      { label: '회사소개', to: '/about/company' },
      { label: 'CEO 인사말', to: '/about/ceo' },
      { label: '비전', to: '/about/vision' },
      { label: '연혁', to: '/about/history' },
      { label: '오시는 길', to: '/about/location' },
    ],
  },
  {
    label: '제품소개',
    children: [
      { label: '제품목록', to: '/products' },
    ],
  },
  {
    label: '커뮤니티',
    children: [
      { label: '게시판', to: '/community' },
    ],
  },
  {
    label: '온라인문의',
    children: [
      { label: '문의하기', to: '/inquiry/write' },
      { label: '문의내역', to: '/inquiry/list' },
    ],
  },
]

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { user, profile, isAdmin } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    await supabase.auth.signOut()
    navigate('/')
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <Link to="/" className="text-xl font-bold text-blue-700">
            Company
          </Link>

          {/* PC 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button className="text-gray-700 hover:text-blue-700 font-medium py-2">
                  {item.label}
                </button>
                {openMenu === item.label && (
                  <div className="absolute top-full left-0 mt-0 w-40 bg-white shadow-lg rounded-md py-1 border">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 ${
                            isActive ? 'text-blue-700 font-medium' : 'text-gray-700'
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* 로그인/회원가입 */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <>
                {isAdmin && (
                  <Link to="/admin" className="text-sm text-blue-700 font-medium hover:underline">
                    관리자
                  </Link>
                )}
                <Link to="/mypage" className="text-sm text-gray-700 hover:text-blue-700">
                  {profile?.name ?? '마이페이지'}
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
                >
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-sm text-gray-700 hover:text-blue-700">
                  로그인
                </Link>
                <Link
                  to="/register"
                  className="text-sm bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800"
                >
                  회원가입
                </Link>
              </>
            )}
          </div>

          {/* 모바일 햄버거 */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {mobileOpen && (
          <div className="md:hidden border-t pb-4">
            {navItems.map((item) => (
              <div key={item.label} className="pt-2">
                <p className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {item.label}
                </p>
                {item.children.map((child) => (
                  <NavLink
                    key={child.to}
                    to={child.to}
                    className={({ isActive }) =>
                      `block px-6 py-2 text-sm ${
                        isActive ? 'text-blue-700 font-medium' : 'text-gray-700'
                      }`
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </NavLink>
                ))}
              </div>
            ))}
            <div className="flex space-x-3 px-4 pt-4 border-t mt-2">
              {user ? (
                <>
                  <Link to="/mypage" className="text-sm text-gray-700" onClick={() => setMobileOpen(false)}>
                    {profile?.name ?? '마이페이지'}
                  </Link>
                  <button
                    onClick={() => { handleLogout(); setMobileOpen(false) }}
                    className="text-sm text-gray-700"
                  >
                    로그아웃
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-sm text-gray-700" onClick={() => setMobileOpen(false)}>로그인</Link>
                  <Link to="/register" className="text-sm bg-blue-700 text-white px-4 py-2 rounded-md" onClick={() => setMobileOpen(false)}>회원가입</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
