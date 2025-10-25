import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTv, faTools, faFutbol, faMoneyBill, faQuestionCircle, faBan, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'

export default function Sidebar({ isOpen, toggle }) {
  const links = [
    { icon: faHome, label: "Home", href: "/" },
    { icon: faTv, label: "မြန်မာစာတန်းထိုး", href: "https://thuwanawadi.vercel.app/movie/index.html" },
    { icon: faTv, label: "မြန်မာတီဗွီ", href: "/mmtv" },
    { icon: faTools, label: "အေအိုင်(Tools)", href: "https://thuwanawadi.vercel.app/freeAi.html" },
    { icon: faTools, label: "အေအိုင်(Prompt)", href: "https://thuwanawadi.vercel.app/aipromp.html" },
    { icon: faFutbol, label: "ဘောလုံးပွဲ(main)", href: "https://thuwanawadi.vercel.app/live/index.html" },
    { icon: faFutbol, label: "ဘောလုံးပွဲ(rbtv)", href: "https://www.rbtvplus.com/football.html" },
    { icon: faFutbol, label: "ဘောလုံးပွဲ(mm)", href: "https://app.mmfot.com/" },
    { icon: faFutbol, label: "ဂိုးစကိုး(Livescore)", href: "https://www.fotmob.com/my" },
    { icon: faMoneyBill, label: "အွန်လိုငွေရှာနည်း", href: "https://subuu-gq2t.vercel.app/" },
    { icon: faQuestionCircle, label: "Appအကြောင်း", href: "https://thuwanawadi.vercel.app/about.html" },
    { icon: faBan, label: "Adult (🔐)", href: "https://thuwanawadi.vercel.app/Adult/index.html" },
  ]

  return (
    <div
      className={`sidebar bg-gray-800 w-48 fixed top-0 left-0 z-30 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
    >
      <div className="p-4 flex items-center">
        <FontAwesomeIcon icon={faTaxi} className="text-yellow-400 text-2xl mr-2" />
        <h1 className="text-lg font-bold text-yellow-400">Thuwanawaddy</h1>
      </div>
      <div className="flex flex-col">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="py-3 px-4 flex items-center text-gray-300 hover:bg-yellow-400 hover:text-black"
          >
            <FontAwesomeIcon icon={link.icon} className="mr-3" />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
      }
