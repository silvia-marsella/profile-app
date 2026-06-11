import Image from 'next/image'

export default function ProfilePage() {
  const services = [
    { icon: '⚙️', title: 'WordPress Development', desc: 'Transforming Figma designs into functional WordPress websites' },
    { icon: '💻', title: 'Front-End Development', desc: 'Building website appearance using HTML, CSS, JavaScript, and custom styling' },
    { icon: '📱', title: 'Responsive Web', desc: 'Build a responsive website display on desktop, tablet, and mobile devices' },
  ]

  return (
    <main className="font-sans text-gray-900 bg-white">

      {/* HERO */}
<section id="home" className="header-section flex max-w-[1140px] mx-auto items-center py-16 px-10 gap-8">
  
  {/* Left Column */}
  <div className="w-1/2">
    <p className="text-[#ebb209] font-bold text-2xl mb-2 tracking-wide yellow-color">Hi There!</p>

    <h1 className="text-6xl font-extrabold leading-tight mb-4">
      I'm <span className="text-green-900">Silvia Marsella</span>
    </h1>

    <p className="text-gray-500 leading-relaxed text-sm mb-8">
      I'm a front-end WordPress developer focused on creating modern, responsive,
      and user-friendly websites. I'm experienced with WordPress, Elementor,
      WPBakery, and custom CSS and JavaScript to deliver optimal digital experiences.
    </p>
      <a href="mailto:dekyutha@gmail.com"
         className="inline-block bg-green-900 text-white font-bold text-sm px-6 py-3 rounded-full border-2 border-green-900 hover:bg-white hover:text-green-900 transition-colors no-underline"
         style={{ transition: 'all 0.3s ease' }}>
         Get In Touch
    </a>
  </div>

  {/* Right Column */}
    <div className="relative w-1/2 self-stretch flex items-center justify-center">
  <div className="profile-ring absolute w-[380px] h-[380px] rounded-full border-r-[3px] border-b-[3px] border-solid border-[#ebb209]" />
  <div className="profile-circle w-[360px] h-[360px] rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
    <Image
      src="/image/profile-silvia.webp"
      alt="Foto Silvia"
      width={360}
      height={360}
      className="w-full h-full object-cover object-top"
      priority
    />
  </div>
</div>
</section>

      {/* MARQUEE */}
      <div className="bg-[#ebb209] py-4 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
            {['Front-End WordPress Developer', 'Figma to WordPress', 'Elementor & WPBakery', 'Responsive Design', 'Custom CSS & JavaScript',
            'Front-End WordPress Developer', 'Figma to WordPress', 'Elementor & WPBakery', 'Responsive Design', 'Custom CSS & JavaScript'].map((t, i) => (
            <span key={i} className="mx-8 font-semibold">✦ {t}</span>
            ))}
        </div>
    </div>

      {/* SERVICES */}
      <section id="services" className="services py-16 px-10 max-w-[1140px] mx-auto">
        <p className="text-[#ebb209] font-bold text-2xl mb-2 tracking-wide yellow-color">Services</p>
        <h2 className="text-3xl font-extrabold mt-2 mb-12">
          Crafting Digital Experiences
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-green-900 text-white py-16 px-10 about">
        <div className="text-center max-w-[1140px] mx-auto">
          <p className="text-[#ebb209] font-bold text-2xl mb-2 tracking-wide yellow-color">About Me</p>
          <h2 className="text-3xl font-extrabold mb-4">
          From Design
         <span className="text-[#ebb209]"> To Website</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
          As a Front-End WordPress Developer, I specialize in transforming Figma designs into responsive WordPress websites. With experience in WordPress, Elementor, WPBakery, HTML, CSS, JavaScript, and PHP, I focus on creating layouts that are visually consistent, responsive, and easy to use across all devices.
          </p>
        </div>
      </section>


{/* EDUCATION & WORK */}
<section id="journey" className="max-w-[1140px] mx-auto journey items-center py-16 px-10 bg-white">
  <div className=" ">
    
    {/* Header */}
    <div className="text-center">
      <p className="text-[#ebb209] font-bold text-2xl mb-2 tracking-wide yellow-color">Education & Work
      </p>
      <h2 className="text-4xl font-extrabold">
        My <span className="text-green-900">Academic and<br />Professional</span> Journey
      </h2>
    </div>

    {/* Grid 2 kolom */}
    <div className="education grid grid-cols-2 gap-6">

      {/* Education */}
      <div className="bg-[#f4f4f4] rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#ebb209] flex items-center justify-center text-white text-lg">
            🎓
          </div>
          <h3 className="text-xl font-bold">Education</h3>
        </div>
        <div className="flex flex-col gap-6">
          {[
            { year: '2013 - 2016', name: 'SMP N 4 Amlapura', desc: 'Junior High School' },
            { year: '2016 - 2019', name: 'SMA N 1 Amlapura', desc: 'Senior High School' },
            { year: '2019 - 2023', name: 'Institut Bisnis dan Teknologi Indonesia (INSTIKI)', desc: 'Bachelor Degree in Business Accounting Computer' },
          ].map((item) => (
            <div key={item.name} className="border-l-2 border-gray-200 pl-4">
              <p className="text-xs text-gray-400 mb-1">{item.year}</p>
              <h4 className="font-bold text-gray-900">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience */}
      <div className="bg-[#f4f4f4]  rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#ebb209] flex items-center justify-center text-white text-lg">
            💼
          </div>
          <h3 className="text-xl font-bold">Work Experience</h3>
        </div>
        <div className="flex flex-col gap-6">
          {[
            { year: 'Feb 2024 – Okt 2024', name: 'Cabaretti', desc: 'Front-End WordPress Developer' },
            { year: 'Jul 2025 – Present', name: 'Jupitr Agency', desc: 'Front-End WordPress Developer' },
          ].map((item) => (
            <div key={item.name} className="border-l-2 border-gray-200 pl-4">
              <p className="text-xs text-gray-400 mb-1">{item.year}</p>
              <h4 className="font-bold text-gray-900">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer id="contact" className="text-center py-4 border-t border-gray-500">
        <p className="font-bold text-gray-900">✦ Ni Kade Silvia Yutha Marsella ✦</p>
      </footer>

    </main>
  )
}
