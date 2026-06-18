const visions = [
  {
    icon: '🌐',
    title: '글로벌 리더십',
    desc: '2030년까지 아시아 시장 점유율 1위를 달성하여 글로벌 선도 기업으로 도약합니다.',
  },
  {
    icon: '⚙️',
    title: '기술 혁신',
    desc: 'R&D 투자를 매출의 15% 이상 유지하며 차세대 핵심 기술을 선점합니다.',
  },
  {
    icon: '🌱',
    title: '지속 가능 경영',
    desc: '탄소중립 목표 달성을 통해 환경과 사회에 책임지는 기업 문화를 만들어갑니다.',
  },
  {
    icon: '🤝',
    title: '상생 생태계',
    desc: '협력사와 공정하고 투명한 파트너십으로 함께 성장하는 생태계를 구축합니다.',
  },
]

const goals = [
  { year: '2025', label: '매출 1,000억 달성' },
  { year: '2027', label: '해외 법인 5개국 설립' },
  { year: '2029', label: '탄소중립 선언' },
  { year: '2030', label: '아시아 시장 점유율 1위' },
]

export default function AboutVision() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">비전</h1>
      <p className="text-gray-400 mb-10">Our Vision</p>

      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-2xl p-10 text-center mb-12">
        <p className="text-sm font-medium tracking-widest mb-3 opacity-80">VISION 2030</p>
        <h2 className="text-3xl font-bold mb-4">세상을 더 좋게 만드는<br />기술 혁신 기업</h2>
        <p className="opacity-90 text-lg">Innovating Technology for a Better World</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {visions.map((v) => (
          <div key={v.title} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">{v.icon}</div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">{v.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold mb-6">중장기 목표</h2>
        <div className="relative">
          <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-blue-100"></div>
          <div className="space-y-6">
            {goals.map((g) => (
              <div key={g.year} className="flex items-center gap-6">
                <div className="w-32 text-right font-bold text-blue-700 text-lg flex-shrink-0">{g.year}</div>
                <div className="w-4 h-4 bg-blue-700 rounded-full flex-shrink-0 z-10"></div>
                <div className="bg-blue-50 rounded-lg px-5 py-3 text-gray-700 font-medium">{g.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
