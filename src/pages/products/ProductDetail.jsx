import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProduct } from '../../services/productService'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProduct(id)
      .then(setProduct)
      .catch(() => navigate('/products', { replace: true }))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-48" />
          <div className="h-80 bg-gray-200 rounded-xl" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-3/4" />
        </div>
      </div>
    )
  }

  if (!product) return null

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* 브레드크럼 */}
      <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
        <Link to="/products" className="hover:text-blue-700">제품소개</Link>
        <span>›</span>
        <span className="text-gray-700">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10">
        {/* 이미지 */}
        <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center overflow-hidden">
          {product.image_url ? (
            <img src={product.image_url} alt={product.name} className="w-full h-full object-cover rounded-2xl" />
          ) : (
            <div className="text-gray-300">
              <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>

        {/* 정보 */}
        <div className="flex flex-col justify-between">
          <div>
            {product.category && (
              <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
                {product.category}
              </span>
            )}
            <h1 className="text-3xl font-bold text-gray-900 mt-3 mb-4">{product.name}</h1>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">{product.description}</p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/inquiry/write"
              className="flex-1 bg-blue-700 text-white text-center py-3 rounded-xl font-medium hover:bg-blue-800 transition-colors"
            >
              제품 문의하기
            </Link>
            <Link
              to="/products"
              className="flex-1 bg-gray-100 text-gray-700 text-center py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
            >
              목록으로
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
