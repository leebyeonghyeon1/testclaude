import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'
import { createInquiry } from '../../services/inquiryService'

const schema = z.object({
  title: z.string().min(1, '제목을 입력하세요').max(200, '제목은 200자 이내로 입력하세요'),
  content: z.string().min(10, '내용을 10자 이상 입력하세요'),
})

export default function InquiryWrite() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
  })

  async function onSubmit(data) {
    try {
      await createInquiry(data)
      alert('문의가 등록되었습니다.')
      navigate('/inquiry/list')
    } catch {
      alert('문의 등록에 실패했습니다.')
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">온라인 문의</h1>
      <p className="text-gray-400 mb-8">Online Inquiry</p>

      <div className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 mb-8 text-sm text-blue-800">
        <p className="font-medium mb-1">문의 안내</p>
        <ul className="list-disc list-inside space-y-0.5 text-blue-700">
          <li>영업일 기준 1~2일 내에 답변 드립니다.</li>
          <li>문의 내역은 <a href="/inquiry/list" className="underline">문의내역</a> 페이지에서 확인하실 수 있습니다.</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">제목</label>
          <input
            {...register('title')}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="문의 제목을 입력하세요"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">내용</label>
          <textarea
            {...register('content')}
            rows={10}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            placeholder="문의 내용을 자세히 입력해 주세요"
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
            {isSubmitting ? '등록 중...' : '문의 등록'}
          </button>
        </div>
      </form>
    </div>
  )
}
