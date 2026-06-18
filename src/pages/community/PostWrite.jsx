import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useNavigate, useParams } from 'react-router-dom'
import { createPost, updatePost, getPost } from '../../services/postService'
import { useAuth } from '../../contexts/AuthContext'

const schema = z.object({
  title: z.string().min(1, '제목을 입력하세요').max(200, '제목은 200자 이내로 입력하세요'),
  content: z.string().min(1, '내용을 입력하세요'),
})

export default function PostWrite() {
  const { id } = useParams()
  const isEdit = Boolean(id)
  const navigate = useNavigate()
  const { user } = useAuth()

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    if (!isEdit) return
    getPost(id).then((post) => {
      if (post.author_id !== user?.id) {
        navigate('/community', { replace: true })
        return
      }
      reset({ title: post.title, content: post.content })
    }).catch(() => navigate('/community', { replace: true }))
  }, [id])

  async function onSubmit(data) {
    try {
      if (isEdit) {
        await updatePost(id, data)
        navigate(`/community/${id}`)
      } else {
        const post = await createPost(data)
        navigate(`/community/${post.id}`)
      }
    } catch {
      alert('저장에 실패했습니다.')
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">{isEdit ? '게시글 수정' : '게시글 작성'}</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">제목</label>
          <input
            {...register('title')}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="제목을 입력하세요"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">내용</label>
          <textarea
            {...register('content')}
            rows={16}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            placeholder="내용을 입력하세요"
          />
          {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>}
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
          >
            취소
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2.5 bg-blue-700 text-white rounded-lg text-sm font-medium hover:bg-blue-800 disabled:opacity-50 transition-colors"
          >
            {isSubmitting ? '저장 중...' : isEdit ? '수정 완료' : '등록'}
          </button>
        </div>
      </form>
    </div>
  )
}
