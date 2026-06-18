import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-bold text-lg mb-3">Company</h3>
            <p className="text-sm leading-relaxed">
              고객과 함께 성장하는 기업입니다.<br />
              최고의 제품과 서비스를 제공하겠습니다.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">바로가기</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about/company" className="hover:text-white">회사소개</Link></li>
              <li><Link to="/products" className="hover:text-white">제품소개</Link></li>
              <li><Link to="/community" className="hover:text-white">커뮤니티</Link></li>
              <li><Link to="/inquiry/write" className="hover:text-white">온라인문의</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">고객센터</h4>
            <ul className="space-y-2 text-sm">
              <li>Tel: 02-1234-5678</li>
              <li>Fax: 02-1234-5679</li>
              <li>Email: info@company.co.kr</li>
              <li>평일 09:00 ~ 18:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
          © 2024 Company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
