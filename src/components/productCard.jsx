import { useNavigate } from 'react-router-dom'

export default function ProductCard({ product }) {
  const navigate = useNavigate()

  const handleClick = () => {
    localStorage.setItem("selectedProduct", JSON.stringify(product))
    navigate("/product-detail") // နောက်ပိုင်း ဖန်တီးနိုင်
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full text-left cursor-pointer bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white truncate">{product.name}</h3>
        <p className="text-green-400 text-sm mb-2">฿{product.price} | {product.category}</p>
        <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded w-full text-white">
          View Details
        </button>
      </div>
    </button>
  )
}
