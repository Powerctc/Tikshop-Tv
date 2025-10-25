import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTiktok, faShop } from '@fortawesome/free-solid-svg-icons'
import { faTiktok as faTiktokBrand } from '@fortawesome/free-brands-svg-icons'
import Sidebar from './components/Sidebar'
import Marquee from './components/Marquee'
import ProductGrid from './components/ProductGrid'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="bg-gray-100 font-sans">
      {/* Header */}
      <header className="lg:hidden flex items-center justify-between bg-black p-4 fixed top-0 left-0 right-0 z-50">
        <h1 className="text-white font-bold text-lg flex items-center">
          <FontAwesomeIcon icon={faTiktokBrand} className="mr-2 text-pink-500" />
          <FontAwesomeIcon icon={faShop} className="mr-1 text-yellow-400" />
          TIKTOK SHOP 🇲🇲
        </h1>
        <button onClick={() => setSidebarOpen(true)} className="text-white text-2xl">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="main-content pt-16 lg:pt-0">
        <Marquee />

        {/* Ad GIF */}
        <div className="adhere-gif text-center">
          <a href="https://aitools.tv" target="_blank" rel="noopener noreferrer">
            <img
              src="https://djmorio.wordpress.com/wp-content/uploads/2020/04/place-your-advert-here-1.gif"
              alt="Adhere GIF"
              className="max-w-full h-auto rounded-md"
            />
          </a>
          <p className="mt-2 text-yellow-400 font-bold text-sm sm:text-base">
            ဘာလိုလို Visit now!
          </p>
        </div>

        {/* Products */}
        <div className="content-section">
          <header className="products-header flex justify-between items-center bg-gray-800 p-3">
            <h2 className="text-white font-bold text-xl">Products</h2>
            <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-white">
              Select Products
            </button>
          </header>

          <div className="p-4">
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-blue-600">Visit my TikTok Shop account</h2>
              <p className="text-gray-700 mt-1">တိုက်ရိုက်ဝယ်ယူရန် အောက်ပါ button များကိုနှိပ်ပါ</p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {[
                { label: "Shop-1", url: "https://vt.tiktok.com/ZSDgtfqDk/" },
                { label: "Shop-2", url: "https://vt.tiktok.com/ZSHWfLnJfHLn1-5OvEB/" },
                { label: "account-1", url: "http://tiktok.com/@tiktokshopth25" },
                { label: "account-2", url: "https://www.tiktok.com/@nextplaymm" }
              ].map((btn, i) => (
                <a
                  key={i}
                  href={btn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-pink-500 text-white font-bold px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition text-sm sm:text-base"
                >
                  <FontAwesomeIcon icon={faShop} /> {btn.label}
                </a>
              ))}
            </div>

            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none mb-4"
            />

            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  )
        }
