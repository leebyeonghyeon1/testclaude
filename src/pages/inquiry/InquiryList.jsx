import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMyInquiries, getInquiry } from '../../services/inquiryService'

function formatDate(str) {
  return new Date(str).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })
}

const STATUS_LABEL = {
  pending: { label: '답변 대기', className: 'bg-yellow-100 text-yellow-700' },
  answered: { label: '답변 완료', className: 'bg-green-100 text-green-700' },
}

export default function InquiryList() {
  const [inquiries, setInquiries] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)
  const [detailLoading, setDetailLoading] = useState(false)

  useEffect(() => {
    getMyInquiries()
      .then(setInquiries)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  async function openDetail(id) {
    if (selected?.id === id) { setSelected(null); return }
    setDetailLoading(true)
    try {
      const data = await getInquiry(id)
      setSelected(data)
    } catch {
      alert('불러오기에 실패했습니다.')
    } finally {
      setDetailLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-bold">문의내역</h1>
        <Link
          to="/inquiry/write"
          className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
        >
          문의하기
        </Link>
      </div>
      <p className="text-gray-400 mb-8">My Inquiries</p>

      {loading ? (
        <div className="py-20 text-center text-gray-400">불러오는 중...</div>
      ) : inquiries.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-gray-400 mb-4">등록된 문의가 없습니다.</p>
          <Link to="/inquiry/write" className="text-blue-700 underline text-sm">첫 문의 등록하기</Link>
        </div>
      ) : (
        <div className="space-y-3">
          {inquiries.map((inq) => {
            const status = STATUS_LABEL[inq.status]
            const isOpen = selected?.id === inq.id
            return (
              <div key={inq.id} className="border border-gray-200 rounded-xl overflow-hidden">
                {/* 헤더 행 */}
                <button
                  onClick={() => openDetail(inq.id)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className={`flex-shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${status.className}`}>
                    {status.label}
                  </span>
                  <span className="flex-1 text-sm font-medium text-gray-800 truncate">{inq.title}</span>
                  <span className="flex-shrink-0 text-xs text-gray-400">{formatDate(inq.created_at)}</span>
                  <svg
                    className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* 상세 내용 (아코디언) */}
                {isOpen && (
                  <div className="border-t border-gray-100 bg-gray-50">
                    {detailLoading ? (
                      <div className="px-5 py-6 text-center text-gray-400 text-sm">불러오는 중...</div>
                    ) : (
                      <>
                        <div className="px-5 py-5">
                          <p className="text-xs font-semibold text-gray-400 mb-2">문의 내용</p>
                          <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">{selected.content}</p>
                        </div>
                        {selected.status === 'answered' && (
                          <div className="border-t border-blue-100 bg-blue-50 px-5 py-5">
                            <p className="text-xs font-semibold text-blue-600 mb-2">
                              답변 — {formatDate(selected.answered_at)}
                            </p>
                            <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">{selected.answer}</p>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
