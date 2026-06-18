const contacts = [
  { label: '주소', value: '서울특별시 강남구 테헤란로 123, 10층' },
  { label: '대표전화', value: '02-1234-5678' },
  { label: '팩스', value: '02-1234-5679' },
  { label: '이메일', value: 'info@company.co.kr' },
  { label: '업무시간', value: '평일 09:00 – 18:00 (점심 12:00 – 13:00)' },
]

const transports = [
  {
    type: '지하철',
    icon: '🚇',
    desc: '2호선 강남역 3번 출구 도보 5분\n신분당선 강남역 8번 출구 도보 3분',
  },
  {
    type: '버스',
    icon: '🚌',
    desc: '간선: 140, 146, 360\n지선: 3412, 4412',
  },
  {
    type: '자가용',
    icon: '🚗',
    desc: '건물 지하 주차장 이용 가능\n(방문 목적 2시간 무료)',
  },
]

export default function AboutLocation() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">오시는 길</h1>
      <p className="text-gray-400 mb-10">Location</p>

      {/* 지도 자리 */}
      <div className="w-full h-72 bg-gray-200 rounded-2xl flex items-center justify-center mb-10 overflow-hidden">
        <div className="text-center text-gray-400">
          <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-sm">지도 영역 (카카오맵 / 네이버지도 API 연동)</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-4">연락처</h2>
          <div className="space-y-3">
            {contacts.map((c) => (
              <div key={c.label} className="flex gap-3">
                <span className="text-sm text-gray-400 w-20 flex-shrink-0 pt-0.5">{c.label}</span>
                <span className="text-sm text-gray-800">{c.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">교통안내</h2>
          <div className="space-y-4">
            {transports.map((t) => (
              <div key={t.type} className="flex gap-3">
                <span className="text-xl flex-shrink-0">{t.icon}</span>
                <div>
                  <p className="font-medium text-gray-800 text-sm mb-1">{t.type}</p>
                  {t.desc.split('\n').map((line) => (
                    <p key={line} className="text-sm text-gray-600">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
