export default function AboutCeo() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">CEO 인사말</h1>
      <p className="text-gray-400 mb-10">CEO Message</p>

      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="flex-shrink-0 flex flex-col items-center">
          <div className="w-48 h-48 bg-gray-200 rounded-2xl flex items-center justify-center mb-3">
            <svg className="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
          <p className="font-bold text-gray-800">홍 길 동</p>
          <p className="text-sm text-gray-500">대표이사 / CEO</p>
        </div>

        <div className="flex-1 space-y-5">
          <div className="text-2xl font-light text-blue-800 leading-snug border-l-4 border-blue-700 pl-4">
            "기술로 세상을 연결하고,<br />사람으로 가치를 만듭니다."
          </div>
          <p className="text-gray-700 leading-relaxed">
            안녕하십니까, 대표이사 홍길동입니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            저희 회사를 찾아주신 모든 분께 진심으로 감사드립니다. 우리는 2005년 창립 이후 단 하나의 목표를
            향해 달려왔습니다. 바로 고객의 삶을 더 편리하고 풍요롭게 만드는 것입니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            급변하는 글로벌 시장에서 우리는 혁신을 멈추지 않겠습니다. 최고의 인재, 최첨단 기술, 그리고
            고객에 대한 깊은 이해를 바탕으로 더 큰 도전을 이어나가겠습니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            앞으로도 변함없는 성원과 신뢰를 부탁드립니다. 감사합니다.
          </p>
          <p className="text-right text-gray-600 font-medium mt-6">
            대표이사 <span className="font-bold text-gray-800">홍 길 동</span>
          </p>
        </div>
      </div>
    </div>
  )
}
