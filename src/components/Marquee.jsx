export default function Marquee() {
  return (
    <div className="marquee-wrapper">
      <div className="top-marquee" role="status" aria-live="polite">
        <div id="marquee-text">
          အစီအစဉ်များကြည့်ရန် Network Streaming Video Player ကို install ပြုလုပ်ရန် လိုအပ်ပါသည် —
          Please install the Network Streaming Video Player to watch streams.
        </div>
      </div>
      <div className="image-marquee" role="region" aria-label="Promotional carousel">
        <div className="marquee-content">
          {["adhere.png", "admm.png", "tiktokshop.png", "shopping.png"].map((img, i) => (
            <img
              key={i}
              src={`https://thuwanawadi.vercel.app/image/${img}`}
              alt={`Promo ${i + 1}`}
              className="h-12 rounded-md object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
