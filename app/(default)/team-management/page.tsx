import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Leadership Team - Abhinaya Indo Group",
  description: "Meet our executive leadership team and division heads driving innovation across technology, creative, and publishing divisions.",
};

export default function TeamManagementPage() {
  const managementTeam = [
    {
      name: "Oky Armei Riyanto M.MInov",
      position: "Policy, Diplomacy",
      expertise: "Strategic Planning, Corporate Governance",
      image: "/images/team management/oky.png",
      division: "commissioner"
    },
    {
      name: "Abdurrahman S.M., M.M",
      position: "Management, Finance",
      expertise: "Financial Oversight, Legal Compliance",
      image: "/images/team management/abdurrahman.png",
      division: "commissioner"
    },
    {
      name: "Asno Azzawagama Firdaus, S.Kom., M.Kom",
      position: "AI, Management, IT, Academic Publishing",
      expertise: "Overall Business Strategy, Operations Management",
      image: "/images/team management/asno.png",
      division: "director"
    }
  ];

  const teamMembers = [
    {
      name: "Ayu Diana Putri S.Ak",
      position: "Corporate Secretary",
      expertise: "Corporate Governance, Legal Compliance",
      image: "/images/team management/ayu.png",
      division: "management"
    },
    {
      name: "Abdul Kholis Nawwar, S.Sos",
      position: "Manager of Abhinaya Creative",
      expertise: "Creative Design, Brand Strategy",
      image: "/images/team management/abdul.png",
      division: "creative"
    },
    {
      name: "Murni S.Kom., M.Kom",
      position: "Manager of Abhinaya Techno",
      expertise: "System Architecture, Project Management",
      image: "/images/team management/murni.png",
      division: "techno"
    },
    {
      name: "Muhajir Yunus M.Kom",
      position: "Manager of Abhinaya Publisher",
      expertise: "Academic Publishing, Research Management",
      image: "/images/team management/Muhajir Yunus, S.Kom., M.Kom.jpg",
      division: "publisher"
    },
    {
      name: "Karima Paspania, S.Pd., M.Pd.",
      position: "Supervisor",
      expertise: "Team Coordination, Quality Control",
      image: "/images/team management/karima.png",
      division: "supervisor"
    },
    {
      name: "Junaedi S.Pd., M.M.Inov",
      position: "Diplomacy, Infomacy",
      expertise: "International Relations, Information Management",
      image: "/images/team management/JUNAEDI.jpeg",
      division: "management"
    }
  ];

  const divisionTeams = [
    {
      division: "Abhinaya Techno",
      description: "IT Solutions & Digital Transformation",
      members: [
        {
          name: "Abdul Hakim, S.Kom.",
          position: "Lead Full Stack Developer",
          expertise: "React, Node.js, Cloud Architecture",
          image: "/images/team management/abdul.png"
        },
        {
          name: "Asno Wijaya, S.Kom.",
          position: "Mobile Development Lead", 
          expertise: "React Native, Flutter, iOS/Android",
          image: "/images/team management/asno.png"
        },
        {
          name: "Oky Pratama, M.Kom.",
          position: "AI & Machine Learning Specialist",
          expertise: "TensorFlow, PyTorch, Data Science",
          image: "/images/team management/oky.png"
        }
      ]
    },
    {
      division: "Abhinaya Publisher",
      description: "Scientific Publishing & Academic Services",
      members: [
        {
          name: "Prof. Dr. Ahmad Rahman",
          position: "Senior Editor",
          expertise: "Academic Research, Journal Management",
          image: "/images/team management/abdurrahman.png"
        },
        {
          name: "Dewi Lestari, M.Pd.",
          position: "Publication Coordinator",
          expertise: "Editorial Process, Quality Control",
          image: "/images/team management/ayu.png"
        },
        {
          name: "Hadi Prasetyo, S.Sos.",
          position: "Distribution Manager",
          expertise: "Logistics, Partner Relations",
          image: "/images/team management/abdul.png"
        }
      ]
    },
    {
      division: "Abhinaya Creative",
      description: "Branding & Creative Design",
      members: [
        {
          name: "Maya Putri, S.Ds.",
          position: "Creative Director",
          expertise: "Brand Strategy, Visual Design",
          image: "/images/team management/ayu.png"
        },
        {
          name: "Rizki Firmansyah, S.Ds.",
          position: "Lead Designer",
          expertise: "UI/UX Design, Digital Art",
          image: "/images/team management/asno.png"
        },
        {
          name: "Sarah Amelia, S.Kom.",
          position: "Marketing Creative",
          expertise: "Content Creation, Social Media",
          image: "/images/team management/murni.png"
        }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section - Ultra Professional */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-blue-600/10 animate-pulse"></div>
        </div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>

        {/* Professional Navigation Bar */}
        <div className="relative z-20">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border-b border-white/10"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-white/90 text-sm font-medium tracking-wide">EXECUTIVE LEADERSHIP</span>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <span className="text-white/70 text-sm">Est. 2020</span>
                <span className="text-white/70 text-sm">ISO 9001:2015</span>
                <span className="text-white/70 text-sm">Global Excellence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center min-h-[calc(100vh-100px)] px-4 sm:px-6">
          <div className="mx-auto max-w-6xl text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-full mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-white text-sm font-semibold tracking-wider uppercase">Fortune 500 Leadership Standards</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              Leadership
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 animate-gradient">
                Excellence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
              World-class executives and division leaders driving innovation across technology, creative, and publishing sectors. 
              Our leadership team brings decades of Fortune 500 experience to deliver exceptional results.
            </p>
            
            {/* Professional Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-white/70 text-sm uppercase tracking-wide">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-white/70 text-sm uppercase tracking-wide">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-white/70 text-sm uppercase tracking-wide">Industry Awards</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="#executive-team"
                className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105"
              >
                <span>Meet Executive Team</span>
                <svg className="ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center px-10 py-4 bg-white/10 backdrop-blur-xl text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white/50"
              >
                <span>Schedule Executive Briefing</span>
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership Section */}
      <section id="executive-team" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-100 to-blue-100 border border-slate-200 rounded-full mb-8">
              <div className="w-3 h-3 bg-blue-600 rounded-full mr-3 animate-pulse"></div>
              <span className="text-slate-700 text-sm font-bold tracking-wider uppercase">Executive Leadership</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Meet Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Executive Team
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              Our executive leadership team brings decades of combined experience from Fortune 500 companies, 
              driving strategic vision and operational excellence across all business divisions.
            </p>
          </div>

          <div className="space-y-24">
            {/* Board of Commissioners */}
            <div>
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 border border-purple-300/30 rounded-full mb-8">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-purple-700 text-sm font-bold tracking-wider uppercase">Board of Commissioners</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Strategic
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                    Oversight
                  </span>
                </h3>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
                  Our Board of Commissioners provides strategic governance and oversight, ensuring corporate excellence 
                  and sustainable growth across all business verticals.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {managementTeam.filter(member => member.division === 'commissioner').map((member, index) => (
                  <div key={index} className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden border border-purple-100/50 hover:border-purple-300">
                    {/* Professional Photo */}
                    <div className="relative h-[20rem] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        style={{ objectPosition: 'center' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* Expertise Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                        <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 border border-purple-100">
                          <p className="text-slate-700 font-semibold text-sm">{member.expertise}</p>
                        </div>
                      </div>
                    </div>

                    {/* Executive Information */}
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{member.name}</h4>
                      <p className="text-purple-600 font-semibold text-sm mb-4">{member.position}</p>
                      
                      {/* Professional Contact */}
                      <div className="flex items-center space-x-3">
                        <a href="#" className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </a>
                        <a href="#" className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Accent Border */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chief Executive Officer */}
            <div>
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600/10 to-cyan-600/10 border border-emerald-300/30 rounded-full mb-8">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-emerald-700 text-sm font-bold tracking-wider uppercase">Chief Executive Officer</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Visionary
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
                    Leadership
                  </span>
                </h3>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
                  Our CEO drives the company's strategic vision and operational excellence, 
                  ensuring sustainable growth and innovation across all business divisions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {managementTeam.filter(member => member.division === 'director').map((member, index) => (
                  <div key={index} className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden border border-emerald-100/50 hover:border-emerald-300">
                    {/* CEO Badge */}
                    <div className="absolute top-6 right-6 z-20">
                      <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-full text-sm font-bold shadow-lg backdrop-blur-sm">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                        CEO
                      </span>
                    </div>

                    {/* Professional Photo */}
                    <div className="relative h-[20rem] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        style={{ objectPosition: 'center' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* Expertise Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                        <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 border border-emerald-100">
                          <p className="text-slate-700 font-semibold text-sm">{member.expertise}</p>
                        </div>
                      </div>
                    </div>

                    {/* CEO Information */}
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{member.name}</h4>
                      <p className="text-emerald-600 font-semibold text-sm mb-4">{member.position}</p>
                      
                      {/* Professional Contact */}
                      <div className="flex items-center space-x-3">
                        <a href="#" className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full flex items-center justify-center hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </a>
                        <a href="#" className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Accent Border */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
                  </div>
                ))}
                
                {/* CEO Achievements Card */}
                <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-3xl p-8 border border-emerald-100">
                  <h4 className="text-xl font-bold text-slate-900 mb-6">Leadership Highlights</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-900">Strategic Vision</h5>
                        <p className="text-sm text-slate-600">Led digital transformation initiatives across 3 major divisions</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-900">Operational Excellence</h5>
                        <p className="text-sm text-slate-600">Streamlined processes resulting in 40% efficiency improvement</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-900">Industry Recognition</h5>
                        <p className="text-sm text-slate-600">Recipient of multiple innovation and leadership awards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Division Management Team */}
            <div>
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-300/30 rounded-full mb-8">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-blue-700 text-sm font-bold tracking-wider uppercase">Division Management</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  Division
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Leaders
                  </span>
                </h3>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light">
                  Our division managers lead specialized teams delivering excellence in technology, creative, and publishing solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden border border-blue-100/50 hover:border-blue-300">
                    {/* Division Badge */}
                    <div className="absolute top-6 right-6 z-20">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm shadow-lg ${
                        member.division === 'management' ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white' :
                        member.division === 'creative' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' :
                        member.division === 'techno' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white' :
                        member.division === 'publisher' ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white' :
                        'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                      }`}>
                        {member.division === 'management' ? 'Management' :
                         member.division === 'creative' ? 'Creative' :
                         member.division === 'techno' ? 'Techno' :
                         member.division === 'publisher' ? 'Publisher' : 'Supervisor'}
                      </span>
                    </div>

                    {/* Professional Photo */}
                    <div className="relative h-[20rem] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        style={{ objectPosition: 'center' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* Expertise Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                        <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 border border-blue-100">
                          <p className="text-slate-700 font-semibold text-sm">{member.expertise}</p>
                        </div>
                      </div>
                    </div>

                    {/* Member Information */}
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{member.name}</h4>
                      <p className="text-blue-600 font-semibold text-sm mb-4">{member.position}</p>
                      
                      {/* Professional Contact */}
                      <div className="flex items-center space-x-3">
                        <a href="#" className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </a>
                        <a href="#" className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Accent Border */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to-bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-full mb-8">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-white text-sm font-semibold tracking-wider uppercase">Executive Opportunities</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Join Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">
              Executive Team
            </span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Ready to lead innovation and excellence? Explore career opportunities with our world-class executive team 
            and contribute to transformative projects across technology, creative, and publishing industries.
          </p>
          
          {/* Professional Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-white/70 text-sm uppercase tracking-wide">Open Positions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-white/70 text-sm uppercase tracking-wide">Employee Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Global</div>
              <div className="text-white/70 text-sm uppercase tracking-wide">Career Growth</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105"
            >
              <span>Schedule Executive Consultation</span>
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/divisions"
              className="group inline-flex items-center px-10 py-4 bg-white/10 backdrop-blur-xl text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white/50"
            >
              <span>Explore Divisions</span>
              <svg className="ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
