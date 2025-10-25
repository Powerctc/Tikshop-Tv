import { useState, useEffect } from 'react'

export default function ProductGrid() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://thuwanawadi.vercel.app/products.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading && products.length === 0) {
    return <div className="text-center py-4 text-gray-500">Loading products...</div>
  }

  const displayProducts = products.length > 0 ? products : [
    // sample fallback products
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center w-full max-w-6xl mx-auto">
      {displayProducts.map((p, i) => (
        <button
          key={i}
          className="w-full bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          onClick={() => {
            localStorage.setItem("selectedProduct", JSON.stringify(p))
            window.location.href = "product_detail.html"
          }}
        >
          <img src={p.image} alt={p.name} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white truncate">{p.name}</h3>
            <p className="text-green-400 text-sm mb-2">฿{p.price} | {p.category}</p>
            <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded w-full text-white">
              View Details
            </button>
          </div>
        </button>
      ))}
    </div>
  )
}
