import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Marquee from '../components/Marquee'
import AdBanner from '../components/AdBanner'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    // Load products (fallback to sample if failed)
    fetch('https://thuwanawadi.vercel.app/products.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setFilteredProducts(data)
      })
      .catch(() => {
        // Sample products
        setProducts([
          { name: "Wireless Bluetooth Headphones", price: 49.99, category: "Electronics", image: "https://via.placeholder.com/300x200/4B5563/FFFFFF?text=Headphones" },
          { name: "Smart Fitness Watch", price: 89.99, category: "Wearables", image: "https://via.placeholder.com/300x200/4B5563/FFFFFF?text=Smart+Watch" },
          { name: "Laptop Backpack", price: 39.99, category: "Accessories", image: "https://via.placeholder.com/300x200/4B5563/FFFFFF?text=Backpack" },
          { name: "USB-C Charging Cable", price: 19.99, category: "Electronics", image: "https://via.placeholder.com/300x200/4B5563/FFFFFF?text=USB+Cable" }
        ])
      })
  }, [])

  useEffect(() => {
    const results = products.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredProducts(results)
  }, [searchTerm, products])

  return (
    <div className="flex bg-gray-100">
      <Sidebar open={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Content */}
      <div className="flex-1 lg:ml-48 pt-16 lg:pt-0">
        <Marquee />

        <AdBanner />

        <div className="content-section">
          <header className="products-header flex justify-between items-center bg-gray-800 text-white p-4">
            <h2 className="font-bold text-xl">Products</h2>
            <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-white">
              Select Products
            </button>
          </header>

          <main className="p-4 pb-16">
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-blue-600">Visit my TikTok Shop account</h2>
              <p className="text-gray-700 mt-1">တိုက်ရိုက်ဝယ်ယူရန် အောက်ပါ button များကိုနှိပ်ပါ</p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {[
                { url: "https://vt.tiktok.com/ZSDgtfqDk/", label: "Shop-1" },
                { url: "https://vt.tiktok.com/ZSHWfLnJfHLn1-5OvEB/", label: "Shop-2" },
                { url: "http://tiktok.com/@tiktokshopth25", label: "account-1" },
                { url: "https://www.tiktok.com/@nextplaymm", label: "account-2" }
              ].map((shop, i) => (
                <a
                  key={i}
                  href={shop.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 bg-pink-500 text-white font-bold px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition text-sm sm:text-base"
                >
                  <i className="fas fa-shopping-cart"></i> {shop.label}
                </a>
              ))}
            </div>

            <div className="search-container mt-0">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="product-grid-container mt-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center w-full max-w-6xl mx-auto">
                {filteredProducts.map((product, i) => (
                  <ProductCard key={i} product={product} />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
                    }
