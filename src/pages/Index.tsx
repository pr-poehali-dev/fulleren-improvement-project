import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/c0cb684d-fd67-46bd-984f-ba9cb5a2e6f2/files/a479af6f-afcc-43ea-b89e-f5ad8b64d91c.jpg";
const PORTRAIT_IMG = "https://cdn.poehali.dev/projects/c0cb684d-fd67-46bd-984f-ba9cb5a2e6f2/files/4d6a97bf-06d4-448c-a7d5-6bda7c45f057.jpg";
const GALLERY_IMG = "https://cdn.poehali.dev/projects/c0cb684d-fd67-46bd-984f-ba9cb5a2e6f2/files/395fcced-65d3-4b5e-ba26-bbd8f837c50e.jpg";

const services = [
  {
    number: "01",
    title: "Персональное консультирование",
    desc: "Индивидуальные сессии по стратегии жизни, карьеры и личных финансов. Конфиденциально. Результативно.",
    icon: "UserCheck",
  },
  {
    number: "02",
    title: "Эксклюзивные тренинги",
    desc: "Закрытые форматы для первых лиц компаний. Трансформационные программы с гарантированным результатом.",
    icon: "Layers",
  },
  {
    number: "03",
    title: "Консьерж-сервис",
    desc: "Полное сопровождение на уровне private banking. Организация, логистика, доступ к эксклюзивным ресурсам.",
    icon: "Crown",
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

function useIntersection(threshold = 0.15) {
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
  }, [threshold]);

  return { ref, visible };
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const servicesAnim = useIntersection();
  const testimonialsAnim = useIntersection();
  const aboutAnim = useIntersection();
  const contactAnim = useIntersection();

  return (
    <div className="min-h-screen bg-obsidian text-foreground overflow-x-hidden">
      <div className="noise-overlay" />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6"
        style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.95), transparent)' }}>
        <div className="font-cormorant text-xl tracking-widest text-gold-light font-light">
          FULLEREN CLUB
        </div>
        <div className="hidden md:flex items-center gap-10">
          {["Услуги", "Галерея", "Отзывы", "Контакты"].map((item) => (
            <a key={item}
              href={`#${item.toLowerCase()}`}
              className="font-montserrat text-xs tracking-widest uppercase text-foreground/60 hover:text-gold transition-colors duration-300">
              {item}
            </a>
          ))}
          <button className="btn-gold">Записаться</button>
        </div>
        <button className="md:hidden text-gold" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-obsidian flex flex-col items-center justify-center gap-8">
          {["Услуги", "Галерея", "Отзывы", "Контакты"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-cormorant text-3xl tracking-widest text-gold font-light">
              {item}
            </a>
          ))}
          <button className="btn-gold mt-4">Записаться</button>
        </div>
      )}

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Fulleren Club" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at center, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.85) 70%, rgba(10,10,10,1) 100%)'
          }} />
        </div>

        {/* decorative corner lines */}
        <div className="absolute top-24 left-8 md:left-16 w-16 h-16 border-l border-t border-gold/30" />
        <div className="absolute top-24 right-8 md:right-16 w-16 h-16 border-r border-t border-gold/30" />
        <div className="absolute bottom-12 left-8 md:left-16 w-16 h-16 border-l border-b border-gold/30" />
        <div className="absolute bottom-12 right-8 md:right-16 w-16 h-16 border-r border-b border-gold/30" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="section-label mb-8 animate-fade-in opacity-0-init">
            Центр квантовой педагогики и психологии
          </p>
          <div className="gold-line w-24 mx-auto mb-10 animate-line-grow opacity-0-init" style={{ width: '0' }} />
          <h1 className="font-cormorant text-6xl md:text-8xl lg:text-9xl font-light leading-none mb-6 animate-fade-up opacity-0-init">
            <span className="gold-gradient">Fulleren</span>
            <br />
            <span className="text-foreground/90 italic">Club</span>
          </h1>
          <p className="font-montserrat text-sm md:text-base text-foreground/60 tracking-widest leading-relaxed mb-12 max-w-xl mx-auto animate-fade-up-delay opacity-0-init">
            Эксклюзивное пространство для тех, кто выбирает качество жизни без компромиссов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay2 opacity-0-init">
            <button className="btn-gold">Записаться на консультацию</button>
            <button className="btn-outline-gold">Узнать подробнее</button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up-delay3 opacity-0-init">
          <span className="section-label">Прокрутите вниз</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="услуги" className="py-28 md:py-36 px-6 md:px-16">
        <div ref={servicesAnim.ref} className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${servicesAnim.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="section-label mb-6">Наши направления</p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-foreground/90">
              Услуги <span className="gold-gradient italic">премиум</span> класса
            </h2>
            <div className="gold-line w-20 mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={s.number}
                className={`card-premium p-10 transition-all duration-1000 ${servicesAnim.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="font-cormorant text-5xl font-light text-gold/20 mb-6">{s.number}</div>
                <div className="w-10 h-10 flex items-center justify-center border border-gold/30 mb-6">
                  <Icon name={s.icon} fallback="Star" size={18} className="text-gold" />
                </div>
                <h3 className="font-cormorant text-2xl font-light text-foreground/90 mb-4 leading-snug">
                  {s.title}
                </h3>
                <p className="font-montserrat text-sm text-foreground/50 leading-relaxed font-light">
                  {s.desc}
                </p>
                <div className="mt-8 flex items-center gap-3 text-gold text-xs tracking-widest uppercase font-montserrat cursor-pointer hover:gap-5 transition-all duration-300">
                  <span>Подробнее</span>
                  <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY / ABOUT */}
      <section id="галерея" className="py-16 md:py-24 px-6 md:px-16 bg-obsidian-light/30">
        <div ref={aboutAnim.ref} className="max-w-6xl mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${aboutAnim.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <img src={PORTRAIT_IMG} alt="Эксперт" className="w-full h-[520px] object-cover" style={{ filter: 'brightness(0.85) contrast(1.05)' }} />
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold/20 pointer-events-none" />
              <div className="absolute bottom-6 left-6 bg-obsidian/90 border border-gold/20 p-5 backdrop-blur-sm">
                <p className="font-cormorant text-4xl font-light text-gold">15+</p>
                <p className="font-montserrat text-xs text-foreground/60 tracking-widest uppercase mt-1">Лет экспертизы</p>
              </div>
            </div>

            <div>
              <p className="section-label mb-6">О Fulleren Club</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground/90 leading-tight mb-8">
                Пространство,<br />
                где рождаются<br />
                <span className="gold-gradient italic">великие решения</span>
              </h2>
              <p className="font-montserrat text-sm text-foreground/55 leading-relaxed mb-6 font-light">
                Fulleren Club — это закрытый центр трансформации для людей, которые уже достигли многого и хотят большего. Мы работаем с теми, кто ценит своё время и требует исключительного результата.
              </p>
              <p className="font-montserrat text-sm text-foreground/55 leading-relaxed mb-10 font-light">
                Наш подход сочетает глубинную психологию, современные методологии и эксклюзивный консьерж-сервис в единой экосистеме.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                {[["500+", "Клиентов"], ["98%", "Рекомендуют"], ["12", "Стран присутствия"], ["30+", "Программ"]].map(([n, l]) => (
                  <div key={l} className="border-l-2 border-gold/40 pl-4">
                    <p className="font-cormorant text-3xl text-gold font-light">{n}</p>
                    <p className="font-montserrat text-xs text-foreground/50 tracking-widest uppercase">{l}</p>
                  </div>
                ))}
              </div>
              <button className="btn-gold">Наша история</button>
            </div>
          </div>

          {/* second gallery image */}
          <div className={`mt-20 relative overflow-hidden transition-all duration-1000 delay-300 ${aboutAnim.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <img src={GALLERY_IMG} alt="Fulleren Club Premium" className="w-full h-[320px] object-cover opacity-70" style={{ filter: 'brightness(0.7) contrast(1.1) saturate(0.8)' }} />
            <div className="absolute inset-0 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.6), rgba(10,10,10,0.4))' }}>
              <div className="text-center">
                <p className="font-cormorant text-4xl md:text-5xl text-foreground/90 font-light italic mb-4">
                  «Роскошь — это не вещи.<br />Это время и смыслы.»
                </p>
                <p className="section-label">Философия Fulleren Club</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="отзывы" className="py-28 md:py-36 px-6 md:px-16">
        <div ref={testimonialsAnim.ref} className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${testimonialsAnim.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="section-label mb-6">Наши клиенты</p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-foreground/90">
              Голоса <span className="gold-gradient italic">тех, кто знает</span>
            </h2>
            <div className="gold-line w-20 mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i}
                className={`card-premium p-10 flex flex-col justify-between transition-all duration-1000 ${testimonialsAnim.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${i * 150}ms` }}>
                <div>
                  <div className="font-cormorant text-5xl text-gold/30 leading-none mb-6">"</div>
                  <p className="font-montserrat text-sm text-foreground/65 leading-relaxed font-light italic">
                    {t.text}
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gold/10">
                  <div className="w-10 h-10 flex items-center justify-center bg-gold-dim border border-gold/20">
                    <span className="font-cormorant text-gold text-sm">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-montserrat text-xs text-foreground/80 font-medium">{t.author}</p>
                    <p className="font-montserrat text-xs text-foreground/40 font-light mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="контакты" className="py-28 md:py-36 px-6 md:px-16" style={{ background: 'linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(20,16,8,0.4) 100%)' }}>
        <div ref={contactAnim.ref} className="max-w-2xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${contactAnim.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="section-label mb-6">Связаться с нами</p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-foreground/90 mb-6">
              Начните своё<br />
              <span className="gold-gradient italic">путешествие</span>
            </h2>
            <p className="font-montserrat text-sm text-foreground/50 leading-relaxed font-light">
              Оставьте заявку — наш менеджер свяжется с вами в течение 2 часов для согласования первой встречи.
            </p>
            <div className="gold-line w-20 mx-auto mt-8" />
          </div>

          <div className={`card-premium p-10 md:p-14 transition-all duration-1000 delay-200 ${contactAnim.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="section-label block mb-2">Имя</label>
                  <input type="text" placeholder="Ваше имя"
                    className="w-full bg-transparent border border-gold/20 px-4 py-3 font-montserrat text-sm text-foreground/80 placeholder:text-foreground/25 focus:outline-none focus:border-gold/50 transition-colors" />
                </div>
                <div>
                  <label className="section-label block mb-2">Телефон</label>
                  <input type="tel" placeholder="+7 (___) ___-__-__"
                    className="w-full bg-transparent border border-gold/20 px-4 py-3 font-montserrat text-sm text-foreground/80 placeholder:text-foreground/25 focus:outline-none focus:border-gold/50 transition-colors" />
                </div>
              </div>
              <div>
                <label className="section-label block mb-2">Email</label>
                <input type="email" placeholder="your@email.com"
                  className="w-full bg-transparent border border-gold/20 px-4 py-3 font-montserrat text-sm text-foreground/80 placeholder:text-foreground/25 focus:outline-none focus:border-gold/50 transition-colors" />
              </div>
              <div>
                <label className="section-label block mb-2">Интересующая услуга</label>
                <select className="w-full bg-obsidian border border-gold/20 px-4 py-3 font-montserrat text-sm text-foreground/60 focus:outline-none focus:border-gold/50 transition-colors appearance-none">
                  <option value="">Выберите направление</option>
                  <option>Персональное консультирование</option>
                  <option>Эксклюзивные тренинги</option>
                  <option>Консьерж-сервис</option>
                </select>
              </div>
              <div>
                <label className="section-label block mb-2">Сообщение</label>
                <textarea rows={4} placeholder="Расскажите о вашем запросе..."
                  className="w-full bg-transparent border border-gold/20 px-4 py-3 font-montserrat text-sm text-foreground/80 placeholder:text-foreground/25 focus:outline-none focus:border-gold/50 transition-colors resize-none" />
              </div>
              <button className="btn-gold w-full mt-2">Отправить заявку</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-gold/10">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (495) 000-00-00" },
                { icon: "Mail", label: "Email", value: "club@fulleren.ru" },
                { icon: "MapPin", label: "Адрес", value: "Москва, Пресненская наб." },
              ].map((c) => (
                <div key={c.label} className="flex flex-col items-center text-center gap-2">
                  <Icon name={c.icon} fallback="Star" size={16} className="text-gold/60" />
                  <p className="section-label">{c.label}</p>
                  <p className="font-montserrat text-xs text-foreground/50 font-light">{c.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gold/10 py-10 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-cormorant text-lg tracking-widest text-gold/60 font-light">
            FULLEREN CLUB
          </div>
          <p className="font-montserrat text-xs text-foreground/25 tracking-widest">
            © 2024 Fulleren Club. Все права защищены.
          </p>
          <div className="flex gap-6">
            {["ВКонтакте", "Telegram", "WhatsApp"].map((s) => (
              <a key={s} href="#" className="font-montserrat text-xs text-foreground/30 hover:text-gold transition-colors tracking-widest">
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}