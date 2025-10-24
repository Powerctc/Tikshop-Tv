import { Link } from 'react-router-dom'

export default function Sidebar({ open, toggle }) {
  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggle}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-48 bg-gray-800 z-30 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        } lg:block`}
      >
        <div className="p-4 flex items-center">
          <i className="fas fa-taxi text-yellow-400 text-2xl mr-2"></i>
          <h1 className="text-lg font-bold text-yellow-400">Thuwanawaddy</h1>
        </div>
        <nav className="flex flex-col">
          {[
            { to: "/", icon: "fa-home", label: "Home" },
            { to: "/movie/index.html", icon: "fa-tv", label: "မြန်မာစာတန်းထိုး", external: "https://thuwanawadi.vercel.app/movie/index.html" },
            { to: "/mmtv/index.html", icon: "fa-tv", label: "မြန်မာတီဗွီ" },
            { to: "/freeAi.html", icon: "fa-tools", label: "အေအိုင်(Tools)" },
            { to: "/aipromp.html", icon: "fa-tools", label: "အေအိုင်(Prompt)" },
            { to: "/live/index.html", icon: "fa-futbol", label: "ဘောလုံးပွဲ(main)" },
            { to: "https://www.rbtvplus.com/football.html", icon: "fa-futbol", label: "ဘောလုံးပွဲ(rbtv)", external: true },
            { to: "https://app.mmfot.com/", icon: "fa-futbol", label: "ဘောလုံးပွဲ(mm)", external: true },
            { to: "https://www.fotmob.com/my", icon: "fa-futbol", label: "ဂိုးစကိုး(Livescore)", external: true },
            { to: "https://subuu-gq2t.vercel.app/", icon: "fa-money-bill", label: "အွန်လိုငွေရှာနည်း", external: true },
            { to: "/about.html", icon: "fa-question-circle", label: "Appအကြောင်း" },
            { to: "https://thuwanawadi.vercel.app/Adult/index.html", icon: "fa-ban", label: "Adult (🔐)", external: true }
          ].map((item, i) =>
            item.external ? (
              <a
                key={i}
                href={item.external || item.to}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-4 flex items-center text-gray-300 hover:bg-yellow-400 hover:text-black"
              >
                <i className={`fas ${item.icon} mr-3`}></i>
                <span>{item.label}</span>
              </a>
            ) : (
              <Link
                key={i}
                to={item.to}
                className="py-3 px-4 flex items-center text-gray-300 hover:bg-yellow-400 hover:text-black"
              >
                <i className={`fas ${item.icon} mr-3`}></i>
                <span>{item.label}</span>
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Mobile Header */}
      <header className="lg:hidden flex items-center justify-between bg-black p-4 fixed top-0 left-0 right-0 z-50">
        <h1 className="text-white font-bold text-lg flex items-center">
          <i className="fab fa-tiktok mr-2 text-pink-500"></i>
          <i className="fas fa-shop mr-1 text-yellow-400"></i>
          TIKTOK SHOP 🇲🇲
        </h1>
        <button
          onClick={toggle}
          className="text-white text-2xl"
          aria-label="Open menu"
        >
          <i className="fas fa-bars"></i>
        </button>
      </header>
    </>
  )
}
