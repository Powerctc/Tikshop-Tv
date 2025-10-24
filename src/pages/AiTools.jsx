import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AiTools() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const navigate = useNavigate();

  // AI Tools Data
  const aiTools = {
    'Website Builder AI': {
      description: 'AI ကိုအသုံးပြုပြီး Website ကို လွယ်ကူလျင်မြန်စွာ ဖန်တီးနိုင်ပါတယ်။',
      link: 'https://mmtvsport.vercel.app/webbuildAi.html'
    },
    'GPT-5': {
      description: 'GPT-5 (Thinking mini) — အဆင့်မြင့် ဘာသာစကား မော်ဒယ် ဖြစ်ပြီး စကားပြော၊ စာရေး၊ ကိုးကားရှာဖွေရေးနှင့် စိတ်ကြိုက် အကူအညီများ ပေးနိုင်သည်။',
      link: 'https://openai.com/gpt-5'
    },
    'Logo Maker AI': {
      description: 'AI နည်းပညာနဲ့ စိတ်ကြိုက်လိုဂိုတွေကို အလွယ်တကူ ဒီဇိုင်းဆွဲနိုင်ပါတယ်။',
      link: 'https://looka.com/'
    },
    'Image Generator AI': {
      description: 'စာသားကို ပုံအဖြစ် ပြောင်းပေးနိုင်တဲ့ AI Tool ပါ။',
      link: 'https://app.leonardo.ai/'
    },
    'Text to Speech AI': {
      description: 'စာသားတွေကို လူသားဆန်တဲ့အသံအဖြစ် ပြောင်းပေးနိုင်ပါတယ်။',
      link: 'https://www.speechgen.io/'
    },
    'Chatbot AI': {
      description: 'မေးခွန်းတွေ မေးမြန်း၊ အဖြေရှာနိုင်တဲ့ စကားပြော AI ပါ။',
      link: 'https://chat.openai.com/'
    },
    'AI Text to Image': {
      description: 'စာသားကနေ ပုံအမျိုးမျိုးကို ဖန်တီးပေးနိုင်တဲ့ AI ပါ။',
      link: 'https://deepai.org/machine-learning-model/text2img'
    },
    'PFP Maker AI': {
      description: 'သင့်အတွက် Profile Picture ကို လှပအောင် ဖန်တီးပေးပါမယ်။',
      link: 'https://pfpmaker.com/'
    },
    'Video Maker AI': {
      description: 'AI ကိုအသုံးပြုပြီး ဗီဒီယိုတွေကို လွယ်ကူစွာ ဖန်တီးပါ။',
      link: 'https://app.invideo.io/'
    },
    'AI Talking Avatar': {
      description: 'သင့်ရဲ ဓာတ်ပုံကို စကားပြောတဲ့ Avatar အဖြစ် ပြောင်းပေးနိုင်ပါတယ်။',
      link: 'https://studio.d-id.com/'
    },
    'Background Remover': {
      description: 'ပုံတွေရဲ့ နောက်ခံကို အလွယ်တကူ ဖျက်ပေးနိုင်ပါတယ်။',
      link: 'https://remove.bg/'
    },
    'AI Object Remover': {
      description: 'ပုံထဲက မလိုတဲ့ အရာဝတ္ထုတွေကို ဖယ်ရှားပေးပါတယ်။',
      link: 'https://clipdrop.co/cleanup'
    },
    'ChatGPT': {
      description: 'OpenAI မှ စွမ်းဆောင်ပေးထားသော အစွမ်းထက်ဆုံး စကားပြော AI တစ်ခုပါ။',
      link: 'https://chat.openai.com/'
    },
    'DeepSeek AI': {
      description: 'အချက်အလက်ရှာဖွေရေးအတွက် အထောက်အကူပြုနိုင်တဲ့ AI ပါ။',
      link: 'https://deepseek.com/'
    },
    'Gemini AI': {
      description: 'Google မှ ဖန်တီးထားသော ဘာသာစကားမော်ဒယ်လ် (LLM) ဖြစ်ပါတယ်။',
      link: 'https://gemini.google.com/'
    },
    'Microsoft Copilot': {
      description: 'Microsoft ကနေ ထောက်ပံ့ပေးထားတဲ့ AI လက်ထောက်ပါ။',
      link: 'https://copilot.microsoft.com/'
    },
    'Claude AI': {
      description: 'Anthropic မှ ဖန်တီးထားတဲ့ AI chatbot ပါ။',
      link: 'https://claude.ai/'
    },
    'Perplexity AI': {
      description: 'ရှုပ်ထွေးတဲ့ မေးခွန်းတွေကို အသေးစိတ် အဖြေရှာပေးနိုင်ပါတယ်။',
      link: 'https://perplexity.ai/'
    },
    'Notion AI': {
      description: 'စာရေးသားခြင်း၊ အစီအစဉ်ချမှတ်ခြင်းတို့ကို ကူညီပေးတဲ့ Notion ရဲ့ AI ပါ။',
      link: 'https://www.notion.so/product/ai'
    },
    'Canva AI Design': {
      description: 'ဒီဇိုင်းဆွဲတဲ့အခါ အထောက်အကူပေးနိုင်တဲ့ Canva ရဲ့ AI Feature ပါ။',
      link: 'https://www.canva.com/ai/'
    },
    'Runway ML': {
      description: 'ဗီဒီယိုနဲ့ ပုံတွေ ဖန်တီးရာမှာ AI နည်းပညာကို အသုံးပြုထားပါတယ်။',
      link: 'https://runwayml.com/'
    },
    'Sora Video AI': {
      description: 'စာသားကနေ ဗီဒီယိုဖိုင်တွေကို ဖန်တီးပေးနိုင်တဲ့ AI နည်းပညာပါ။',
      link: 'https://openai.com/sora'
    },
    'ElevenLabs Voice AI': {
      description: 'အသံတွေကို အစွမ်းထက်စွာ ပြောင်းလဲဖန်တီးပေးနိုင်တဲ့ AI ပါ။',
      link: 'https://elevenlabs.io/'
    }
  };

  const toolList = Object.keys(aiTools);

  const handleToolClick = (name) => {
    setSelectedTool({ name, ...aiTools[name] });
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedTool(null);
  };

  const goToTool = () => {
    if (selectedTool) {
      window.open(selectedTool.link, '_blank', 'noopener,noreferrer');
      closePopup();
    }
  };

  // Close sidebar when route changes
  useEffect(() => {
    const handleRouteChange = () => setSidebarOpen(false);
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a] text-[#FFD700] font-sans" data-theme="dark">
      {/* Sidebar Toggle Button (Mobile) */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-4 left-4 z-50 bg-[#2d2d2d] border-2 border-[#FFD700] text-[#FFD700] rounded-full p-2 lg:hidden"
        aria-label="Open Menu"
      >
        ☰ Menu
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-60 bg-[#2d2d2d] z-40 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="pt-16">
          {[
            { to: '/', label: 'Home', icon: 'fa-home' },
            { to: 'https://thuwanawadi.vercel.app/index.html', label: 'မြန်မာတီဗွီ', icon: 'fa-tv', external: true },
            { to: 'https://thuwanawadi.vercel.app/movie/index.html', label: 'မြန်မာစာတန်းထိုး', icon: 'fa-film', external: true },
            { to: '/freeAi.html', label: 'အေအိုင်(Ai)', icon: 'fa-tools' },
            { to: 'https://thuwanawadi.vercel.app/coming/index.html', label: 'ဘောလုံးပွဲ', icon: 'fa-futbol', external: true },
            { to: 'https://subuu-gq2t.vercel.app/', label: 'အွန်လိုင်ငွေရှာနည်း', icon: 'fa-money-bill', external: true },
            { to: 'https://thuwanawadi.vercel.app/about.html', label: 'Appအကြောင်း', icon: 'fa-question-circle', external: true }
          ].map((item, i) =>
            item.external ? (
              <a
                key={i}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center py-3 px-4 text-[#FFD700] hover:bg-yellow-400 hover:text-black"
              >
                <i className={`fas ${item.icon} mr-3`}></i>
                <span>{item.label}</span>
              </a>
            ) : (
              <button
                key={i}
                onClick={() => {
                  navigate(item.to);
                  setSidebarOpen(false);
                }}
                className="w-full text-left flex items-center py-3 px-4 text-[#FFD700] hover:bg-yellow-400 hover:text-black"
              >
                <i className={`fas ${item.icon} mr-3`}></i>
                <span>{item.label}</span>
              </button>
            )
          )}
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 pt-16 lg:pt-4 lg:ml-60 p-4">
        <h1 className="text-center text-[#FFD700] text-2xl font-bold mb-6">🤖 POPULAR FREE AI TOOLS</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {toolList.map((toolName) => (
            <button
              key={toolName}
              type="button"
              onClick={() => handleToolClick(toolName)}
              className="flex flex-col items-center justify-center bg-[#2d2d2d] p-4 rounded-xl shadow hover:shadow-lg transition-transform hover:scale-105 focus:outline-2 focus:outline-[#FFD700]"
            >
              <i className={`fas fa-2x mb-2 ${
                toolName === 'Website Builder AI' ? 'fa-globe' :
                toolName === 'GPT-5' ? 'fa-robot' :
                toolName === 'Logo Maker AI' ? 'fa-paint-brush' :
                toolName === 'Image Generator AI' ? 'fa-image' :
                toolName === 'Text to Speech AI' ? 'fa-volume-up' :
                toolName === 'Chatbot AI' ? 'fa-comments' :
                toolName === 'AI Text to Image' ? 'fa-magic' :
                toolName === 'PFP Maker AI' ? 'fa-user-circle' :
                toolName === 'Video Maker AI' ? 'fa-video' :
                toolName === 'AI Talking Avatar' ? 'fa-face-smile' :
                toolName === 'Background Remover' ? 'fa-scissors' :
                toolName === 'AI Object Remover' ? 'fa-eraser' :
                toolName === 'ChatGPT' ? 'fa-comments' :
                toolName === 'DeepSeek AI' ? 'fa-search' :
                toolName === 'Gemini AI' ? 'fa-gem' :
                toolName === 'Microsoft Copilot' ? 'fa-microchip' :
                toolName === 'Claude AI' ? 'fa-brain' :
                toolName === 'Perplexity AI' ? 'fa-question-circle' :
                toolName === 'Notion AI' ? 'fa-lightbulb' :
                toolName === 'Canva AI Design' ? 'fa-palette' :
                toolName === 'Runway ML' ? 'fa-film' :
                toolName === 'Sora Video AI' ? 'fa-video' :
                toolName === 'ElevenLabs Voice AI' ? 'fa-headphones' : 'fa-robot'
              }`}></i>
              <span className="text-center text-sm">{toolName}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-400 text-sm">
        2025 All Rights Reserved - Share4it Myanmar Team | Development By U Maung (Forever Study){' '}
        <a href="/contact.html" className="text-[#FFD700]">➡️Contact⬅️</a>
      </footer>

      {/* Popup */}
      {popupVisible && selectedTool && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#2d2d2d] border-2 border-[#FFD700] rounded-xl p-6 max-w-md w-full animate-fadeIn">
            <h3 className="text-center text-[#FFD700] text-xl font-bold mb-3">{selectedTool.name}</h3>
            <p className="text-[#FFD700] mb-4">{selectedTool.description}</p>
            <div className="flex justify-between">
              <button
                onClick={closePopup}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={goToTool}
                className="px-4 py-2 bg-[#FFD700] text-black font-bold rounded-lg"
              >
                Go to Tool
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
