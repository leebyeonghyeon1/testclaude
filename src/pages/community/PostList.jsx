import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getPosts } from '../../services/postService'
import { useAuth } from '../../contexts/AuthContext'

function formatDate(str) {
  return new Date(str).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })
}

export default function PostList() {
  const { user } = useAuth()
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('page') || 1)
  const search = searchParams.get('search') || ''

  const [posts, setPosts] = useState([])
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [inputSearch, setInputSearch] = useState(search)

  useEffect(() => {
    setLoading(true)
    getPosts({ page, search })
      .then(({ data, count }) => { setPosts(data); setCount(count) })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [page, search])

  function handleSearch(e) {
    e.preventDefault()
    setSearchParams(inputSearch ? { search: inputSearch, page: 1 } : { page: 1 })
  }

  const totalPages = Math.ceil(count / 10)

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-bold">커뮤니티</h1>
        {user && (
          <Link
            to="/community/write"
            className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
          >
            글쓰기
          </Link>
        )}
      </div>
      <p className="text-gray-400 mb-8">Community</p>

      {/* 검색 */}
      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <input
          type="text"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="제목으로 검색"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-gray-800 text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-900 transition-colors"
        >
          검색
        </button>
      </form>

      {/* 목록 */}
      <div className="border-t border-gray-200">
        {loading ? (
          <div className="py-20 text-center text-gray-400">불러오는 중...</div>
        ) : posts.length === 0 ? (
          <div className="py-20 text-center text-gray-400">게시글이 없습니다.</div>
        ) : (
          <>
            {/* 헤더 */}
            <div className="hidden sm:grid grid-cols-[1fr_120px_80px_100px] gap-4 px-4 py-2 bg-gray-50 text-xs text-gray-500 font-medium border-b">
              <span>제목</span>
              <span className="text-center">작성자</span>
              <span className="text-center">조회</span>
              <span className="text-center">작성일</span>
            </div>
            {posts.map((post) => (
              <div
                key={post.id}
                className={`grid sm:grid-cols-[1fr_120px_80px_100px] gap-2 sm:gap-4 px-4 py-3 border-b hover:bg-gray-50 transition-colors items-center ${
                  post.is_notice ? 'bg-blue-50' : ''
                }`}
              >
                <Link to={`/community/${post.id}`} className="flex items-center gap-2 min-w-0">
                  {post.is_notice && (
                    <span className="flex-shrink-0 text-xs bg-blue-700 text-white px-2 py-0.5 rounded font-medium">
                      공지
                    </span>
                  )}
                  <span className={`truncate text-sm hover:text-blue-700 ${post.is_notice ? 'font-semibold' : ''}`}>
                    {post.title}
                  </span>
                </Link>
                <span className="text-center text-sm text-gray-500 truncate">{post.profiles?.name ?? '-'}</span>
                <span className="text-center text-sm text-gray-400">{post.view_count}</span>
                <span className="text-center text-xs text-gray-400">{formatDate(post.created_at)}</span>
              </div>
            ))}
          </>
        )}
      </div>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-1 mt-6">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setSearchParams(search ? { search, page: p } : { page: p })}
              className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                p === page ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
