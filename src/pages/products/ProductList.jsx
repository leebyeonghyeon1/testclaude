import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../../services/productService'

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [category])

  async function fetchProducts() {
    setLoading(true)
    try {
      const data = await getProducts({ category: category || undefined })
      setProducts(data)
      const cats = [...new Set(data.map((p) => p.category).filter(Boolean))]
      setCategories(cats)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">제품소개</h1>
      <p className="text-gray-400 mb-8">Products</p>

      {/* 검색 + 카테고리 */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="text"
          placeholder="제품명으로 검색"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
        />
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setCategory('')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              category === '' ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            전체
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category === cat ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-100 rounded-xl h-64 animate-pulse" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">등록된 제품이 없습니다.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                {product.image_url ? (
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <div className="text-gray-300">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-5">
                {product.category && (
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">
                    {product.category}
                  </span>
                )}
                <h3 className="font-bold text-gray-900 mt-2 mb-1 group-hover:text-blue-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
