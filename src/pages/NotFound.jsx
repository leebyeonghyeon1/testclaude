import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다.</p>
      <Link to="/" className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800">
        홈으로 돌아가기
      </Link>
    </div>
  )
}
