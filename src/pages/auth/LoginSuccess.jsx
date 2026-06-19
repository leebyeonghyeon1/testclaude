import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default function LoginSuccess() {
  const { profile } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/')
    }, 3000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-10 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">로그인 완료</h1>
        <p className="text-gray-500 mb-1">
          {profile?.name ? `${profile.name}님, ` : ''}환영합니다!
        </p>
        <p className="text-sm text-gray-400 mb-6">3초 후 메인 페이지로 이동합니다.</p>
        <div className="flex gap-3 justify-center">
          <Link
            to="/"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            메인으로 이동
          </Link>
          <Link
            to="/mypage"
            className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            마이페이지
          </Link>
        </div>
      </div>
    </div>
  )
}
