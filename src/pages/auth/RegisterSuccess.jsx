import { Link } from 'react-router-dom'

export default function RegisterSuccess() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-12">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-10 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">회원가입 완료</h1>
        <p className="text-gray-500 mb-8">
          회원가입이 완료되었습니다.<br />
          로그인 후 서비스를 이용해 주세요.
        </p>
        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            홈으로
          </Link>
          <Link
            to="/login"
            className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            로그인
          </Link>
        </div>
      </div>
    </div>
  )
}
