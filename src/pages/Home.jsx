export default function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">함께 성장하는 기업</h1>
          <p className="text-xl text-blue-200 mb-8">최고의 제품과 서비스로 고객의 성공을 돕습니다</p>
          <a href="/inquiry/write" className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 inline-block">
            문의하기
          </a>
        </div>
      </section>

      {/* 나머지 섹션은 Phase 3에서 구현 */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center text-gray-500">
        회사소개, 대표 제품, 최신 게시글 섹션은 Phase 3에서 구현됩니다.
      </section>
    </div>
  )
}
