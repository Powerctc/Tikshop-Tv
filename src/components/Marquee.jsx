export default function Marquee() {
  return (
    <div className="marquee-wrapper border-2 border-yellow-400 rounded-md p-2 m-2 bg-black">
      <div className="top-marquee text-yellow-400 font-bold overflow-hidden mb-2">
        <div className="inline-block animate-scroll-left whitespace-nowrap">
          အစီအစဉ်များကြည့်ရန် Network Streaming Video Player ကို install ပြုလုပ်ရန် လိုအပ်ပါသည် — Please install the Network Streaming Video Player to watch streams.
        </div>
      </div>
      <div className="image-marquee overflow-hidden whitespace-nowrap">
        <div className="marquee-content flex gap-3 animate-scroll">
          {[
            "https://thuwanawadi.vercel.app/image/adhere.png",
            "https://thuwanawadi.vercel.app/image/admm.png",
            "https://thuwanawadi.vercel.app/image/tiktokshop.png",
            "https://thuwanawadi.vercel.app/image/shopping.png"
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Promo ${i + 1}`}
              className="h-12 rounded-md object-cover"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll-left {
          display: inline-block;
          padding-left: 100%;
          animation: scroll-left 15s linear infinite;
        }
        .animate-scroll {
          display: inline-flex;
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
  )
}
