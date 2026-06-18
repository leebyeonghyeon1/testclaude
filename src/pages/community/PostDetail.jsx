import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getPost, incrementViewCount, deletePost } from '../../services/postService'
import { useAuth } from '../../contexts/AuthContext'

function formatDate(str) {
  return new Date(str).toLocaleString('ko-KR', {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit',
  })
}

export default function PostDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user, isAdmin } = useAuth()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPost(id)
      .then((data) => {
        setPost(data)
        incrementViewCount(id)
      })
      .catch(() => navigate('/community', { replace: true }))
      .finally(() => setLoading(false))
  }, [id])

  async function handleDelete() {
    if (!confirm('게시글을 삭제하시겠습니까?')) return
    try {
      await deletePost(id)
      navigate('/community')
    } catch {
      alert('삭제에 실패했습니다.')
    }
  }

  const canEdit = user && (user.id === post?.author_id || isAdmin)

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded w-2/3" />
        <div className="h-4 bg-gray-200 rounded w-1/3" />
        <div className="h-64 bg-gray-200 rounded" />
      </div>
    )
  }

  if (!post) return null

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* 브레드크럼 */}
      <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
        <Link to="/community" className="hover:text-blue-700">커뮤니티</Link>
        <span>›</span>
        <span className="text-gray-700 truncate">{post.title}</span>
      </nav>

      <div className="border border-gray-200 rounded-xl overflow-hidden">
        {/* 헤더 */}
        <div className="bg-gray-50 px-6 py-5 border-b">
          <div className="flex items-start gap-2 mb-3">
            {post.is_notice && (
              <span className="flex-shrink-0 text-xs bg-blue-700 text-white px-2 py-0.5 rounded font-medium">
                공지
              </span>
            )}
            <h1 className="text-xl font-bold text-gray-900">{post.title}</h1>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{post.profiles?.name ?? '알 수 없음'}</span>
            <span>{formatDate(post.created_at)}</span>
            <span>조회 {post.view_count}</span>
          </div>
        </div>

        {/* 본문 */}
        <div className="px-6 py-8 min-h-48 whitespace-pre-wrap text-gray-800 leading-relaxed">
          {post.content}
        </div>
      </div>

      {/* 버튼 */}
      <div className="flex justify-between mt-6">
        <Link
          to="/community"
          className="bg-gray-100 text-gray-700 px-5 py-2 rounded-lg text-sm hover:bg-gray-200 transition-colors"
        >
          목록
        </Link>
        {canEdit && (
          <div className="flex gap-2">
            <Link
              to={`/community/${id}/edit`}
              className="bg-blue-700 text-white px-5 py-2 rounded-lg text-sm hover:bg-blue-800 transition-colors"
            >
              수정
            </Link>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-5 py-2 rounded-lg text-sm hover:bg-red-600 transition-colors"
            >
              삭제
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
