const history = [
  {
    year: '2024',
    events: ['ISO 9001 품질경영 시스템 인증 획득', '베트남 현지 법인 설립'],
  },
  {
    year: '2022',
    events: ['코스닥 상장', '누적 매출 2,000억 달성'],
  },
  {
    year: '2020',
    events: ['R&D 센터 신축 이전', '중소벤처기업부 혁신기업 선정'],
  },
  {
    year: '2018',
    events: ['제품 라인업 확대 (3개 → 8개 카테고리)', '수출 개시 (일본, 동남아)'],
  },
  {
    year: '2015',
    events: ['임직원 100명 돌파', '대한민국 기술대상 수상'],
  },
  {
    year: '2010',
    events: ['첫 번째 특허 등록 (5건)', '법인 전환'],
  },
  {
    year: '2005',
    events: ['회사 창립', '첫 제품 출시'],
  },
]

export default function AboutHistory() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">연혁</h1>
      <p className="text-gray-400 mb-10">History</p>

      <div className="relative">
        <div className="absolute left-24 md:left-32 top-0 bottom-0 w-0.5 bg-blue-100"></div>
        <div className="space-y-8">
          {history.map((h, i) => (
            <div key={h.year} className="flex gap-6 md:gap-10">
              <div className="w-24 md:w-32 text-right flex-shrink-0 pt-1">
                <span className={`font-bold text-xl ${i === 0 ? 'text-blue-700' : 'text-gray-400'}`}>
                  {h.year}
                </span>
              </div>
              <div className="relative flex-shrink-0 pt-1.5">
                <div className={`w-4 h-4 rounded-full border-2 z-10 relative ${i === 0 ? 'bg-blue-700 border-blue-700' : 'bg-white border-blue-300'}`}></div>
              </div>
              <div className="flex-1 pb-2">
                {h.events.map((ev) => (
                  <div key={ev} className="flex items-start gap-2 mb-2">
                    <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
                    <p className="text-gray-700">{ev}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
