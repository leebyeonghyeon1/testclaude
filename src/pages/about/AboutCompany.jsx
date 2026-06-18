export default function AboutCompany() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">회사소개</h1>
      <p className="text-gray-400 mb-10">About Us</p>

      <div className="bg-blue-50 rounded-2xl p-8 mb-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">고객과 함께 성장하는 기업</h2>
          <p className="text-gray-700 leading-relaxed">
            저희 회사는 2005년 창립 이래 고객 중심의 혁신적인 솔루션으로 산업의 발전을 이끌어 왔습니다.
            끊임없는 연구개발과 고품질 제품으로 국내외 시장에서 신뢰받는 기업으로 자리매김하고 있습니다.
          </p>
        </div>
        <div className="w-48 h-48 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-blue-700 text-4xl font-bold">CO.</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { label: '설립연도', value: '2005년' },
          { label: '임직원 수', value: '350명+' },
          { label: '연간 매출', value: '500억+' },
        ].map((item) => (
          <div key={item.label} className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
            <p className="text-3xl font-bold text-blue-700 mb-1">{item.value}</p>
            <p className="text-gray-500 text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">핵심 가치</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: '혁신', desc: '새로운 기술과 아이디어로 산업의 변화를 선도합니다.' },
            { title: '신뢰', desc: '고객과의 약속을 지키며 투명한 경영을 실천합니다.' },
            { title: '품질', desc: '최고의 품질 기준으로 제품과 서비스를 제공합니다.' },
            { title: '상생', desc: '파트너사와 함께 성장하는 협력 생태계를 만듭니다.' },
          ].map((v) => (
            <div key={v.title} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-blue-700 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                {v.title[0]}
              </div>
              <div>
                <p className="font-semibold text-gray-800">{v.title}</p>
                <p className="text-sm text-gray-600 mt-1">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
