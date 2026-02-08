export const metadata = {
  title: "Abhinaya Publisher - Journal System & Scientific Publishing",
  description: "Building credible scientific ecosystems with professional journal systems, peer review, global indexing, and international collaborations for research visibility.",
};

import Link from "next/link";
import Image from "next/image";
import GetStartedButton from "@/components/GetStartedButton";

export default function AbhinayaPublisherPage() {
  const packages = [
    {
      name: "Basic Journal",
      price: "Rp 5 Juta",
      period: "per journal",
      features: [
        "Instalasi OJS",
        "Setup website journal",
        "Template jurnal",
        "Struktur editorial",
        "Konfigurasi workflow submission",
        "Pembinaan ISSN",
        "Training editor",
        "3 bulan support"
      ],
      highlighted: false
    },
    {
      name: "Professional Journal",
      price: "Rp 8 Juta",
      period: "per website",
      features: [
        "OJS full setup",
        "3+ Journal installation",
        "Fullset Management journal",
        "Advanced peer-review workflow",
        "DOI registration",
        "Crossref integration",
        "Indexing preparation",
        "Plagiarism checking system",
        "Layout & template journal profesional",
        "12 bulan support"
      ],
      highlighted: true
    },
    {
      name: "Premium Publisher",
      price: "Custom",
      period: "contact for pricing",
      features: [
        "Multi-journal management",
        "Journal platform terintegrasi",
        "Portal publisher",
        "Strategi indexing nasional & internasional",
        "Scopus preparation system",
        "International partnership support",
        "Editorial management system",
        "Analytics & reporting",
        "Dedicated publishing team"
      ],
      highlighted: false
    }
  ];

  const journals = [
    {
      title: "Indonesian Journal of Modern Science and Technology",
      acronym: "IJMST",
      issn: "ISSN: 3090-3831",
      description: "Indonesian academic journal with three issues per year (January, May, September) specializing in various modern research in science and technology including artificial intelligence, IoT, information technology, robotics, electrical, biotechnology, engineering, and environmental technology.",
      frequency: "3 Issues per year (January, May, September)",
      collaboration: "CV. Abhinaya Indo Group in collaboration with Universitas Qamarul Huda Badaruddin",
      indexing: "Google Scholar | Garuda | Crossref | Dimensions",
      doi: "https://doi.org/10.64021/ijmst",
      status: "Active",
      color: "from-blue-600 to-cyan-600",
      coverImage: "/images/journal-covers/IJMST.png",
      journalLink: "https://journal.abhinaya.co.id/index.php/ijmst"
    },
    {
      title: "Journal of Social Growth and Development Studies",
      acronym: "JSGDS",
      issn: "ISSN: 3090-126X",
      description: "Academic journal focusing on community empowerment, regional development, and social policy. Published three times per year (March, July, November) to encourage knowledge sharing between academics, scholars, and practitioners in social development.",
      frequency: "3 Issues per year (March, July, November)",
      collaboration: "CV. Abhinaya Indo Group in collaboration with Universitas Muhammadiyah Mataram",
      indexing: "Google Scholar | ResearchGate | Garuda",
      doi: "https://doi.org/10.64021/jsgds",
      status: "Active",
      color: "from-green-600 to-emerald-600",
      coverImage: "/images/journal-covers/JGDS.png",
      journalLink: "https://journal.abhinaya.co.id/index.php/jsgds"
    },
    {
      title: "Civic Governance and Public Administration",
      acronym: "CGPA",
      issn: "Coming Soon",
      description: "Scholarly publication facilitating research findings, conceptual studies, and best practices in government, public administration, and civil society governance. Focuses on strategic issues involving interaction between government, society, and private sector in building sustainable governance.",
      frequency: "Periodic Publication",
      collaboration: "CV. Abhinaya Indo Group",
      indexing: "Coming Soon",
      doi: "Coming Soon",
      status: "Call for Papers",
      color: "from-red-600 to-orange-600",
      coverImage: "/images/journal-covers/CIVIC.png",
      journalLink: "https://journal.abhinaya.co.id/index.php/cgpa"
    },
    {
      title: "Journal of Public Health and Nursing",
      acronym: "JPHN",
      issn: "Coming Soon",
      description: "Peer-reviewed, open-access scientific journal dedicated to advancing knowledge in public health and nursing. Publishes original research articles, literature reviews, and case studies that contribute to evidence-based practices, health policies, and community-based interventions.",
      frequency: "Regular Publication",
      collaboration: "CV. Abhinaya Indo Group",
      indexing: "Coming Soon",
      doi: "Coming Soon",
      status: "Call for Papers",
      color: "from-teal-600 to-cyan-600",
      coverImage: "/images/journal-covers/JPHN.png",
      journalLink: "https://journal.abhinaya.co.id/index.php/jphn"
    },
    {
      title: "Journal of Accounting, Management, and Economic Development",
      acronym: "JAMED",
      issn: "ISSN: 3109-5070",
      description: "Journal covering accounting, management, banking and finance, monetary economics, international trade, public economics, environmental economics, and energy economics. Published twice a year (March and September) through double blind review process.",
      frequency: "2 Issues per year (March and September)",
      collaboration: "CV. Abhinaya Indo Group in collaboration with Universitas Mataram",
      indexing: "Google Scholar | Garuda | Crossref",
      doi: "Coming Soon",
      status: "Call for Papers",
      color: "from-yellow-600 to-orange-600",
      coverImage: "/images/journal-covers/JAMED.png",
      journalLink: "https://journal.abhinaya.co.id/index.php/jamed"
    },
    {
      title: "Jurnal Pengabdian : Abhinaya",
      acronym: "JPA",
      issn: "Coming Soon",
      description: "Community service journal published by Abhinaya Publisher from CV. Abhinaya Indo Group. Aims to be a communication and information platform for community service results conducted by lecturers, researchers, and practitioners focusing on community empowerment and technology-based solutions.",
      frequency: "Regular Publication",
      collaboration: "CV. Abhinaya Indo Group",
      indexing: "Coming Soon",
      doi: "Coming Soon",
      status: "Call for Papers",
      color: "from-purple-600 to-pink-600",
      coverImage: "/images/journal-covers/jurnal-pengabdian.png",
      journalLink: "https://journal.abhinaya.co.id/index.php/jpa"
    },
    {
      title: "Journal of Digital Learning and Literacy Innovation",
      acronym: "JDLLI",
      issn: "Coming Soon",
      description: "Scientific journal publishing research results, theoretical studies, and developments in education, technology development, literacy, and technology-based learning innovation. Focuses on digital learning and literacy innovation at various education levels.",
      frequency: "4 Issues per year (Quarterly)",
      collaboration: "Educational Institutions Welcome",
      indexing: "Google Scholar | SINTA (Targeted)",
      doi: "Coming Soon",
      status: "Call for Papers",
      color: "from-teal-600 to-cyan-600",
      coverImage: "/images/journal-covers/JDLLI.png",
      journalLink: "https://journal.abhinaya.co.id/index.php/jdlli"
    }
  ];

  const team = [
    {
      name: "Muhajir Yunus S.Kom., M.Kom",
      position: "Journal Editorial",
      expertise: "Academic Publishing, Journal Management",
      image: "/images/Abhinaya Publisher/Muhajir Yunus, S.Kom., M.Kom.jpg"
    },
    {
      name: "Cahyadi Kurniawan, M.IP.",
      position: "Journal Editorial",
      expertise: "Editorial Standards, Peer Review",
      image: "/images/Abhinaya Publisher/Cahyadi Kurniawan S.IP., M.IP.jpg"
    },
    {
      name: "Ikmal Maulana S.Sos",
      position: "Journal Editorial",
      expertise: "Publication Management, Quality Control",
      image: "/images/Abhinaya Publisher/Ikmal Maulana, S.Sos..jpg"
    },
    {
      name: "Mazraaten Thoyyibah S.E., M.SE",
      position: "Journal Editorial",
      expertise: "Economic Publishing, Research Analysis",
      image: "/images/Abhinaya Publisher/Mazraaten Thoyyibah, S.E., M.SE.jpg"
    },
    {
      name: "Reza Indra Wiguna NS., M.Kep",
      position: "Journal Editorial",
      expertise: "Health Publishing, Medical Research",
      image: "/images/Abhinaya Publisher/Reza Indra Wiguna, Ns, M.Kep.JPG"
    }
  ];

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Crect x='5' y='5' width='50' height='50'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        {/* Navigation Bar - Ultra Professional */}
        <div className="relative z-10">
          {/* Clean Glass Background */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border-b border-white/10"></div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-6">
            {/* Current Division Indicator */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/30 rounded-full">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-purple-300 text-sm font-medium">Currently viewing: Abhinaya Publisher</span>
              </div>
            </div>

            {/* Division Cards Slider */}
            <div className="relative">
              {/* Cards Container */}
              <div className="flex items-center justify-center gap-6 overflow-x-auto scrollbar-hide py-2">
                {/* Abhinaya Publisher - Current */}
                <div className="flex-shrink-0 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 border border-purple-400/30">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center relative">
                        <Image
                          src="/images/3.png"
                          alt="Abhinaya Publisher logo"
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">Abhinaya Publisher</div>
                        <div className="text-purple-200 text-sm">Current Division</div>
                      </div>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Abhinaya Techno */}
                <a 
                  href="/abhinaya-techno" 
                  className="flex-shrink-0 relative group block"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-75 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-2xl p-6 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-500 transform hover:scale-105">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-500 relative">
                        <Image
                          src="/images/1.png"
                          alt="Abhinaya Techno logo"
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg group-hover:text-blue-300 transition-all duration-500">Abhinaya Techno</div>
                        <div className="text-blue-300 text-sm">IT Solutions & Technology</div>
                      </div>
                      <svg className="w-5 h-5 text-pink-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </a>

                {/* Abhinaya Creative */}
                <a 
                  href="/abhinaya-creative" 
                  className="flex-shrink-0 relative group block"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-75 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center group-hover:bg-pink-500/30 transition-all duration-500 relative">
                        <Image
                          src="/images/2.png"
                          alt="Abhinaya Creative logo"
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg group-hover:text-pink-300 transition-all duration-500">Abhinaya Creative</div>
                        <div className="text-pink-300 text-sm">Branding & Design</div>
                      </div>
                      <svg className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Explore More Text */}
            <div className="text-center mt-6">
              <div className="inline-flex items-center text-gray-400 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Explore our complete ecosystem of digital solutions
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center min-h-[calc(90vh-80px)]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-6 border border-purple-500/30">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                Journal System & Scientific Publishing
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Abhinaya
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300">
                Publisher
              </span>
            </h1>
            <div className="mb-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/30 rounded-full">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-purple-300 text-lg font-medium">Building Credible Scientific Ecosystems</span>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Publish high-quality scientific journals with us, supported by rigorous peer review, 
              global indexing, and international collaborations to enhance research visibility.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GetStartedButton 
                text="Start Publishing"
                messageKey="publisher"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              />
              <Link
                href="#portfolio"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                View Our Journals
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Publishing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive publishing solutions for academic and research excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scientific Journals</h3>
                <p className="text-gray-600 leading-relaxed">
                  High-quality scientific journal publishing with rigorous peer review process and international standards.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Indexing</h3>
                <p className="text-gray-600 leading-relaxed">
                  International indexing and abstracting services to maximize research visibility and impact worldwide.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">International Collaboration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Partnerships with universities and research institutions globally to foster academic excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Publishing Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible publishing plans tailored to your journal needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${pkg.highlighted ? 'ring-2 ring-purple-500 ring-offset-4 transform scale-105' : ''}`}>
                {pkg.highlighted && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600">/{pkg.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <GetStartedButton 
                    text="Get Started"
                    messageKey="publisher"
                    className={`w-full block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      pkg.highlighted 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Journals Showcase */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Premium Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/30 rounded-full backdrop-blur-sm mb-6">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-purple-700 text-sm font-medium">Published Journals</span>
            </div>
            
            <h2 className="pb-6 font-nacelle text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-blue-900 bg-clip-text text-transparent">
                Our Academic Journals
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Explore our portfolio of internationally recognized academic journals and research publications
            </p>
          </div>

          {/* Journals Grid - Floating Book Covers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {journals.map((journal, index) => (
              <div key={index} className="group relative">
                {/* Floating Book Container */}
                <div className="relative perspective-1000">
                  {/* Book Shadow */}
                  <div className="absolute -bottom-6 left-4 right-4 h-12 bg-black/15 rounded-full blur-2xl transform scale-y-50 group-hover:scale-y-75 transition-transform duration-500"></div>
                  
                  {/* Book Cover */}
                  <div className="relative bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-3 overflow-hidden">
                    {/* Book Spine Effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
                    
                    {/* Book Cover Content */}
                    <div className="relative aspect-[3/4] overflow-hidden">
                      {/* Journal Cover Image - Full Image Only */}
                      <div className="relative w-full h-full">
                        <Image
                          src={journal.coverImage}
                          alt={`${journal.title} Cover`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        
                        {/* Subtle Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                      
                      {/* Book Cover Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                  </div>
                </div>

                {/* Journal Information Card */}
                <div className="mt-12 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 border border-gray-100 hover:border-red-200">
                  {/* Title and ISSN */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {journal.title}
                    </h3>
                    <div className="text-sm text-gray-600 font-medium">{journal.issn}</div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {journal.description}
                  </p>

                  {/* Journal Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {journal.frequency}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {journal.collaboration}
                    </div>
                  </div>

                  {/* Indexing Badges */}
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-2">Academic Indexing:</div>
                    <div className="flex flex-wrap gap-1">
                      {journal.indexing.split(' | ').map((index, idx) => (
                        <span key={idx} className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-xs rounded-md border border-gray-200">
                          {index}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* DOI Link */}
                  {journal.doi !== "Coming Soon" && (
                    <div className="mb-4">
                      <a 
                        href={journal.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-blue-600 hover:text-blue-700 transition-colors font-medium"
                      >
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        DOI: {journal.doi.replace('https://doi.org/', '')}
                      </a>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {journal.status === 'Active' ? (
                      <>
                        <a 
                          href={journal.journalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View Journal
                        </a>
                        <GetStartedButton 
                          text="Submit"
                          messageKey="publisher"
                          className="inline-flex items-center px-4 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-300"
                        />
                      </>
                    ) : (
                      <a 
                        href={journal.journalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Journal
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/30 rounded-full backdrop-blur-sm">
              <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-purple-700 font-medium">2 Active Journals • 4 Launching Soon • Global Indexing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Publishing Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts behind our academic publishing excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center relative">
                {/* Animated Background Orb */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-2xl group-hover:scale-150 transition-all duration-1000 ease-out"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-purple-400/5 to-blue-400/5 rounded-full blur-xl group-hover:scale-125 transition-all duration-1000 ease-out delay-100"></div>
                </div>
                
                <div className="relative mb-6 animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
                  {/* Floating Ring Animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-36 h-36 border-2 border-purple-200/20 rounded-full animate-pulse-slow"></div>
                    <div className="absolute w-40 h-40 border border-blue-300/10 rounded-full animate-pulse-slower"></div>
                  </div>
                  
                  {/* Avatar Container with 3D Effect */}
                  <div className="relative w-32 h-32 mx-auto transform-gpu transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-600 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500 scale-110"></div>
                    
                    {/* Main Avatar */}
                    {member.image && member.image.includes("Abhinaya Publisher") ? (
                      <div className="relative w-32 h-32">
                        <Image 
                          src={member.image} 
                          alt={member.name} 
                          width={128} 
                          height={128} 
                          className="w-32 h-32 mx-auto rounded-full object-cover shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-500"
                        />
                        {/* Inner Ring for Real Images */}
                        <div className="absolute inset-0 border-2 border-white/20 rounded-full"></div>
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-full"></div>
                      </div>
                    ) : (
                      <div className="relative w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-500">
                        {/* Inner Ring */}
                        <div className="absolute inset-2 border-2 border-white/20 rounded-full"></div>
                        
                        {/* Icon */}
                        <svg className="w-16 h-16 text-white relative z-10 transform transition-all duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-full"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Animated Bottom Accent */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-pulse-slow"></div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-purple-400/50 to-blue-400/50 rounded-full blur-sm"></div>
                </div>
                
                {/* Text Content with Animation */}
                <div className="space-y-2 animate-fade-in-up" style={{animationDelay: `${index * 150 + 200}ms`}}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 transform transition-all duration-500 group-hover:scale-105">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-2 transform transition-all duration-500 group-hover:scale-105">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-600 transform transition-all duration-500 group-hover:scale-105">
                    {member.expertise}
                  </p>
                </div>
                
                {/* Hover Particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-float-up delay-100"></div>
                  <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-float-up delay-200"></div>
                  <div className="absolute bottom-6 left-8 w-2.5 h-2.5 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 animate-float-up delay-300"></div>
                  <div className="absolute bottom-4 right-4 w-1 h-1 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 animate-float-up delay-400"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Publish Your Research?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our publishing solutions can help enhance your research visibility and academic impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              Start Your Journal
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/divisions"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              View Other Divisions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
