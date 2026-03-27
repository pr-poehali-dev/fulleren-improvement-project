import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const COSMOS_IMG = "https://cdn.poehali.dev/projects/c0cb684d-fd67-46bd-984f-ba9cb5a2e6f2/files/d93fc8df-07e8-460a-83b3-29591a2ed631.jpg";

const services = [
  {
    number: "01",
    title: "Персональное консультирование",
    desc: "Индивидуальные сессии по стратегии жизни, карьеры и личных финансов. Конфиденциально. Результативно.",
    icon: "UserCheck",
    glyph: "✦",
  },
  {
    number: "02",
    title: "Эксклюзивные тренинги",
    desc: "Закрытые форматы для первых лиц компаний. Трансформационные программы с гарантированным результатом.",
    icon: "Layers",
    glyph: "✧",
  },
  {
    number: "03",
    title: "Консьерж-сервис",
    desc: "Полное сопровождение на уровне private banking. Организация, логистика, доступ к эксклюзивным ресурсам.",
    icon: "Crown",
    glyph: "✦",
  },
];

const testimonials = [
  {
    text: "Работа с Fulleren Club изменила моё понимание возможного. Это не просто консалтинг — это качественно другой уровень мышления.",
    author: "Александр В.",
    role: "Генеральный директор, ТОП-50 Forbes",
    initials: "АВ",
  },
  {
    text: "За шесть месяцев сотрудничества я перестроил бизнес-стратегию полностью. Результат превзошёл самые смелые ожидания.",
    author: "Елена М.",
    role: "Основатель инвестиционного фонда",
    initials: "ЕМ",
  },
  {
    text: "Консьерж-услуги на том уровне, о котором я даже не знал, что он существует. Абсолютно другое качество жизни.",
    author: "Михаил К.",
    role: "Серийный предприниматель",
    initials: "МК",
  },
];

const stats = [
  { value: "500+", label: "Клиентов" },
  { value: "12", label: "Лет опыта" },
  { value: "98%", label: "Рекомендуют" },
  { value: "47", label: "Стран мира" },
];

function useIntersection(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function StarField() {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    delay: Math.random() * 4,
    dur: Math.random() * 3 + 2,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: 0,
            animation: `starTwinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function CosmicLanding() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const servicesAnim = useIntersection();
  const statsAnim = useIntersection();
  const testimonialsAnim = useIntersection();
  const contactAnim = useIntersection();

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="cosmic-root min-h-screen font-cosmic-body text-cosmic-text" style={{ background: "#020612" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400&family=Raleway:wght@300;400;500;600&display=swap');

        .cosmic-root { font-family: 'Raleway', sans-serif; color: #e8eaf6; }
        .font-display { font-family: 'Playfair Display', serif; }

        @keyframes starTwinkle {
          0%, 100% { opacity: 0; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.3); }
        }
        @keyframes nebulaFloat {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.4; }
          50% { transform: scale(1.05) rotate(2deg); opacity: 0.6; }
        }
        @keyframes cosmicReveal {
          from { opacity: 0; transform: translateY(30px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 15px rgba(167,139,250,0.3), 0 0 40px rgba(167,139,250,0.1); }
          50% { box-shadow: 0 0 25px rgba(167,139,250,0.5), 0 0 60px rgba(167,139,250,0.2); }
        }
        @keyframes scanLine {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        @keyframes shootingStar {
          0% { transform: translateX(-200px) translateY(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(200vw) translateY(100px); opacity: 0; }
        }

        .nebula-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 20% 30%, rgba(88,28,135,0.35) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 20%, rgba(30,58,138,0.4) 0%, transparent 60%),
            radial-gradient(ellipse 70% 50% at 50% 80%, rgba(15,23,42,0.9) 0%, transparent 50%),
            radial-gradient(ellipse 40% 40% at 70% 60%, rgba(124,58,237,0.2) 0%, transparent 50%);
          animation: nebulaFloat 12s ease-in-out infinite;
        }
        .cosmic-card {
          background: rgba(15, 20, 50, 0.6);
          border: 1px solid rgba(167,139,250,0.15);
          backdrop-filter: blur(12px);
          transition: all 0.4s ease;
        }
        .cosmic-card:hover {
          border-color: rgba(167,139,250,0.4);
          background: rgba(20, 28, 65, 0.8);
          animation: glowPulse 2s ease-in-out infinite;
          transform: translateY(-4px);
        }
        .gold-accent { color: #c4a96c; }
        .violet-accent { color: #a78bfa; }
        .cosmic-btn {
          background: linear-gradient(135deg, rgba(124,58,237,0.8), rgba(67,56,202,0.8));
          border: 1px solid rgba(167,139,250,0.4);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .cosmic-btn::after {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s ease;
        }
        .cosmic-btn:hover::after { left: 100%; }
        .cosmic-btn:hover {
          box-shadow: 0 0 30px rgba(124,58,237,0.5);
          border-color: rgba(167,139,250,0.7);
        }
        .cosmic-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(167,139,250,0.4), rgba(196,169,108,0.4), transparent);
        }
        .orbit-ring {
          border: 1px solid rgba(167,139,250,0.2);
          border-radius: 50%;
          animation: orbitSpin 20s linear infinite;
        }
        .shooting-star {
          position: absolute;
          width: 150px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
          animation: shootingStar 8s linear infinite;
        }
        .cosmic-input {
          background: rgba(15,20,50,0.6);
          border: 1px solid rgba(167,139,250,0.2);
          color: #e8eaf6;
          transition: border-color 0.3s;
        }
        .cosmic-input:focus {
          outline: none;
          border-color: rgba(167,139,250,0.6);
          box-shadow: 0 0 15px rgba(124,58,237,0.2);
        }
        .cosmic-input::placeholder { color: rgba(200,210,240,0.3); }
        .nav-link {
          color: rgba(200,210,240,0.6);
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: color 0.3s;
        }
        .nav-link:hover { color: #a78bfa; }
        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          background: linear-gradient(135deg, #c4a96c, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Shooting stars */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="shooting-star" style={{ top: "15%", animationDelay: "0s" }} />
        <div className="shooting-star" style={{ top: "45%", animationDelay: "3s" }} />
        <div className="shooting-star" style={{ top: "75%", animationDelay: "6s" }} />
      </div>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ background: "rgba(2,6,18,0.7)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(167,139,250,0.08)" }}>
        <div className="font-display text-lg tracking-widest gold-accent font-medium">FULLEREN</div>
        <div className="hidden md:flex gap-10">
          {["Услуги", "О нас", "Отзывы", "Контакт"].map((l) => (
            <a key={l} href="#" className="nav-link">{l}</a>
          ))}
        </div>
        <button className="cosmic-btn text-white px-5 py-2 text-xs tracking-widest uppercase rounded-sm font-medium">
          Подать заявку
        </button>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={COSMOS_IMG} alt="Cosmos" className="w-full h-full object-cover" style={{ opacity: 0.55 }} />
          <div className="nebula-bg" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(2,6,18,0.4) 0%, rgba(2,6,18,0.1) 40%, rgba(2,6,18,0.85) 100%)" }} />
        </div>
        <StarField />

        {/* Orbit decoration */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden lg:block" style={{ width: 320, height: 320, opacity: 0.3 }}>
          <div className="orbit-ring absolute inset-0" />
          <div className="orbit-ring absolute inset-8" style={{ animationDuration: "14s", animationDirection: "reverse" }} />
          <div className="orbit-ring absolute inset-16" style={{ animationDuration: "10s" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div style={{ width: 8, height: 8, background: "#a78bfa", borderRadius: "50%", boxShadow: "0 0 20px #a78bfa, 0 0 40px rgba(167,139,250,0.4)" }} />
          </div>
        </div>

        <div className="relative z-10 px-8 md:px-20 max-w-3xl"
          style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(40px)", transition: "all 1.2s cubic-bezier(0.16,1,0.3,1)" }}>
          <div className="flex items-center gap-3 mb-8">
            <div style={{ width: 40, height: 1, background: "linear-gradient(90deg, transparent, #a78bfa)" }} />
            <span className="text-xs tracking-[0.3em] uppercase violet-accent" style={{ opacity: 0.7 }}>Частный клуб</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.1] mb-6" style={{ color: "#f0f4ff" }}>
            За пределами<br />
            <span style={{ fontStyle: "italic", background: "linear-gradient(135deg, #c4a96c 0%, #e8d5a3 50%, #a78bfa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>обычного</span>
          </h1>
          <p className="text-base leading-relaxed mb-10 max-w-lg" style={{ color: "rgba(200,210,240,0.65)", fontWeight: 300 }}>
            Fulleren Club — пространство для тех, кто смотрит дальше горизонта. Персональные стратегии, закрытые форматы и консьерж-сервис высшего уровня.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="cosmic-btn text-white px-9 py-3.5 text-xs tracking-widest uppercase rounded-sm font-medium">
              Стать участником
            </button>
            <button className="text-xs tracking-widest uppercase px-9 py-3.5 rounded-sm font-medium transition-all duration-300 hover:text-violet-300"
              style={{ border: "1px solid rgba(200,210,240,0.2)", color: "rgba(200,210,240,0.6)" }}>
              Узнать больше
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0.4 }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(200,210,240,0.5)", fontSize: "0.6rem" }}>Прокрутить</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(167,139,250,0.6), transparent)" }} />
        </div>
      </section>

      {/* STATS */}
      <div ref={statsAnim.ref} style={{ background: "rgba(8,12,35,0.9)" }}>
        <div className="cosmic-divider" />
        <div className="max-w-5xl mx-auto px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center"
              style={{ opacity: statsAnim.visible ? 1 : 0, transform: statsAnim.visible ? "none" : "translateY(20px)", transition: `all 0.7s ease ${i * 120}ms` }}>
              <div className="stat-number mb-1">{s.value}</div>
              <div className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(200,210,240,0.4)" }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div className="cosmic-divider" />
      </div>

      {/* SERVICES */}
      <section className="py-28 px-8 relative overflow-hidden" style={{ background: "#020612" }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)" }} />
        <StarField />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div ref={servicesAnim.ref} className="mb-16 text-center"
            style={{ opacity: servicesAnim.visible ? 1 : 0, transform: servicesAnim.visible ? "none" : "translateY(20px)", transition: "all 0.8s ease" }}>
            <p className="text-xs tracking-[0.3em] uppercase violet-accent mb-4" style={{ opacity: 0.7 }}>Что мы предлагаем</p>
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "#f0f4ff" }}>Наши услуги</h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div style={{ width: 50, height: 1, background: "rgba(167,139,250,0.3)" }} />
              <span style={{ color: "#c4a96c", fontSize: "0.7rem" }}>✦</span>
              <div style={{ width: 50, height: 1, background: "rgba(167,139,250,0.3)" }} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={s.number} className="cosmic-card p-8 rounded-sm cursor-default"
                style={{ opacity: servicesAnim.visible ? 1 : 0, transform: servicesAnim.visible ? "none" : "translateY(30px)", transition: `all 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 150}ms` }}>
                <div className="flex items-start justify-between mb-6">
                  <span className="font-display text-4xl font-light" style={{ color: "rgba(167,139,250,0.15)" }}>{s.number}</span>
                  <span style={{ color: "#c4a96c", opacity: 0.5, fontSize: "1rem" }}>{s.glyph}</span>
                </div>
                <div className="w-9 h-9 flex items-center justify-center mb-6 rounded-sm"
                  style={{ border: "1px solid rgba(167,139,250,0.25)", background: "rgba(124,58,237,0.1)" }}>
                  <Icon name={s.icon} fallback="Star" size={16} style={{ color: "#a78bfa" }} />
                </div>
                <h3 className="font-display text-xl font-light mb-3" style={{ color: "#e8eaf6", lineHeight: 1.3 }}>{s.title}</h3>
                <p className="text-sm leading-relaxed font-light" style={{ color: "rgba(200,210,240,0.5)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-8 relative" style={{ background: "rgba(5,8,25,0.95)" }}>
        <div className="cosmic-divider mb-0" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 py-20">
          <div className="flex-1">
            <p className="text-xs tracking-[0.3em] uppercase gold-accent mb-6" style={{ opacity: 0.7 }}>О клубе</p>
            <h2 className="font-display text-4xl font-light leading-tight mb-7" style={{ color: "#f0f4ff" }}>
              Пространство для тех,<br />
              <span style={{ fontStyle: "italic", color: "#c4a96c" }}>кто уже достиг многого</span>
            </h2>
            <p className="text-sm leading-relaxed mb-5 font-light" style={{ color: "rgba(200,210,240,0.55)" }}>
              Fulleren Club — закрытое сообщество людей с высокими стандартами. Мы не работаем с потоком. Каждый клиент получает полное внимание и индивидуальный подход.
            </p>
            <p className="text-sm leading-relaxed mb-8 font-light" style={{ color: "rgba(200,210,240,0.55)" }}>
              Наша методология соединяет классическую стратегическую работу с современными инструментами трансформации — результат, который невозможно получить где-то ещё.
            </p>
            <div className="flex items-center gap-4">
              <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #a78bfa, transparent)" }} />
              <div>
                <p className="font-display text-base italic" style={{ color: "#e8eaf6" }}>«Мы открываем то, что за горизонтом»</p>
                <p className="text-xs mt-1 tracking-wider uppercase" style={{ color: "rgba(200,210,240,0.35)" }}>Философия клуба</p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 relative" style={{ width: 280 }}>
            <div className="absolute -inset-3 rounded-sm" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(67,56,202,0.1))", border: "1px solid rgba(167,139,250,0.15)" }} />
            <div className="relative rounded-sm overflow-hidden" style={{ height: 340 }}>
              <div className="w-full h-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(15,20,50,0.9), rgba(30,20,60,0.9))" }}>
                <div className="text-center">
                  <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(196,169,108,0.3))", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", border: "1px solid rgba(167,139,250,0.3)" }}>
                    <span className="font-display text-2xl" style={{ color: "#c4a96c" }}>FC</span>
                  </div>
                  <p className="font-display text-lg font-light" style={{ color: "#e8eaf6" }}>Fulleren Club</p>
                  <p className="text-xs mt-2 tracking-widest uppercase" style={{ color: "rgba(167,139,250,0.5)" }}>Since 2012</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cosmic-divider" />
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-8 relative overflow-hidden" style={{ background: "#020612" }}>
        <StarField />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div ref={testimonialsAnim.ref} className="mb-14 text-center"
            style={{ opacity: testimonialsAnim.visible ? 1 : 0, transform: testimonialsAnim.visible ? "none" : "translateY(20px)", transition: "all 0.8s ease" }}>
            <p className="text-xs tracking-[0.3em] uppercase violet-accent mb-4" style={{ opacity: 0.7 }}>Что говорят клиенты</p>
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "#f0f4ff" }}>Отзывы</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={t.author} className="cosmic-card p-7 rounded-sm"
                style={{ opacity: testimonialsAnim.visible ? 1 : 0, transform: testimonialsAnim.visible ? "none" : "translateY(30px)", transition: `all 0.9s ease ${i * 130}ms` }}>
                <div className="mb-5 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} style={{ color: "#c4a96c", fontSize: "0.6rem" }}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed italic mb-6 font-light" style={{ color: "rgba(200,210,240,0.65)" }}>
                  «{t.text}»
                </p>
                <div className="flex items-center gap-3 pt-5" style={{ borderTop: "1px solid rgba(167,139,250,0.1)" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium"
                    style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.5), rgba(67,56,202,0.3))", border: "1px solid rgba(167,139,250,0.3)", color: "#a78bfa" }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-xs font-medium" style={{ color: "#e8eaf6" }}>{t.author}</p>
                    <p className="text-xs font-light" style={{ color: "rgba(200,210,240,0.35)", fontSize: "0.65rem" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-8 relative" style={{ background: "rgba(5,8,28,0.98)" }}>
        <div className="cosmic-divider mb-0" />
        <div ref={contactAnim.ref} className="max-w-2xl mx-auto py-20"
          style={{ opacity: contactAnim.visible ? 1 : 0, transform: contactAnim.visible ? "none" : "translateY(30px)", transition: "all 0.9s ease" }}>
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase gold-accent mb-4" style={{ opacity: 0.7 }}>Связаться с нами</p>
            <h2 className="font-display text-4xl font-light mb-3" style={{ color: "#f0f4ff" }}>Начать диалог</h2>
            <p className="text-sm font-light" style={{ color: "rgba(200,210,240,0.45)" }}>Первый шаг всегда конфиденциален</p>
          </div>
          <div className="cosmic-card p-8 rounded-sm space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="cosmic-input w-full px-4 py-3 text-sm rounded-sm" placeholder="Имя"
                value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} />
              <input className="cosmic-input w-full px-4 py-3 text-sm rounded-sm" placeholder="Телефон"
                value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} />
            </div>
            <input className="cosmic-input w-full px-4 py-3 text-sm rounded-sm" placeholder="Email"
              value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} />
            <textarea className="cosmic-input w-full px-4 py-3 text-sm rounded-sm resize-none" placeholder="Расскажите о себе и своём запросе" rows={4}
              value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} />
            <button className="cosmic-btn w-full text-white py-3.5 text-xs tracking-widest uppercase rounded-sm font-medium">
              Отправить заявку
            </button>
          </div>
        </div>
        <div className="cosmic-divider" />

        {/* Footer */}
        <div className="max-w-5xl mx-auto pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { icon: "Phone", label: "Телефон", value: "+7 (495) 000-00-00" },
              { icon: "Mail", label: "Email", value: "club@fulleren.ru" },
              { icon: "MapPin", label: "Адрес", value: "Москва, Пресненская наб." },
            ].map((c) => (
              <div key={c.label} className="flex flex-col items-center gap-2">
                <Icon name={c.icon} fallback="Star" size={15} style={{ color: "rgba(167,139,250,0.5)" }} />
                <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(200,210,240,0.3)" }}>{c.label}</p>
                <p className="text-xs font-light" style={{ color: "rgba(200,210,240,0.45)" }}>{c.value}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-xs tracking-widest" style={{ color: "rgba(200,210,240,0.2)" }}>
            © 2026 FULLEREN CLUB · Все права защищены
          </p>
        </div>
      </section>
    </div>
  );
}
