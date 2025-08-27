import React, { useState } from 'react';
import { 
  Play, 
  CheckCircle, 
  Clock, 
  FileText, 
  BarChart3, 
  Shield, 
  Users, 
  Mail, 
  Building2, 
  Star,
  Upload,
  Search,
  Zap,
  TrendingUp,
  X
} from 'lucide-react';

function App() {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    comment: ''
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Track active section on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'problem', 'workflow', 'features', 'testimonials'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setShowDemoModal(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      employees: '',
      comment: ''
    });
  };

  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Form & Excel Girişi",
      description: "Talepleri hızlıca form veya Excel dosyasıyla sisteme yükleyin"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Otomatik Teklif Toplama",
      description: "AI destekli sistem tedarikçilerden otomatik teklif toplar"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Teklif Karşılaştırma",
      description: "AI skorlama ile en iyi teklifleri anında karşılaştırın"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Sipariş Takibi",
      description: "Siparişlerinizi gerçek zamanlı olarak takip edin"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Raporlama",
      description: "Harcama, tasarruf ve KPI verilerinizi görselleştirin"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Güvenli Süreç",
      description: "Tüm verileriniz şifrelenmiş ve güvenli ortamda saklanır"
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Talep Gir",
      description: "Form veya Excel Upload",
      icon: <Upload className="w-8 h-8" />
    },
    {
      step: 2,
      title: "AI Teklif Topla",
      description: "Tedarikçi Karşılaştırması",
      icon: <Search className="w-8 h-8" />
    },
    {
      step: 3,
      title: "Onayla",
      description: "Siparişi Başlat",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      step: 4,
      title: "Raporla",
      description: "Tasarrufu Gör",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Kaptanos</span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === 'home' 
                    ? 'text-[#00A9FF]' 
                    : 'text-gray-600 hover:text-[#00A9FF]'
                }`}
              >
                Ana Sayfa
              </button>
              <button
                onClick={() => scrollToSection('problem')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === 'problem' 
                    ? 'text-[#00A9FF]' 
                    : 'text-gray-600 hover:text-[#00A9FF]'
                }`}
              >
                Çözüm
              </button>
              <button
                onClick={() => scrollToSection('workflow')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === 'workflow' 
                    ? 'text-[#00A9FF]' 
                    : 'text-gray-600 hover:text-[#00A9FF]'
                }`}
              >
                Nasıl Çalışır
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === 'features' 
                    ? 'text-[#00A9FF]' 
                    : 'text-gray-600 hover:text-[#00A9FF]'
                }`}
              >
                Özellikler
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === 'testimonials' 
                    ? 'text-[#00A9FF]' 
                    : 'text-gray-600 hover:text-[#00A9FF]'
                }`}
              >
                Referanslar
              </button>
            </div>

            {/* Demo Button */}
            <div className="hidden md:block">
              <button 
                onClick={() => setShowDemoModal(true)}
                className="bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-[#89CFF3] hover:to-[#A0E9FF] transform hover:scale-105 transition-all duration-200"
              >
                Demo Talep Et
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setShowDemoModal(true)}
                className="bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] text-white px-4 py-2 rounded-lg text-sm font-semibold"
              >
                Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-white to-gray-50 overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00A9FF]/5 to-[#CDF5FD]/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">Kaptanos</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Kaptanos ile inşaat şirketinizin{' '}
              <span className="bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] bg-clip-text text-transparent">
                rutin malzeme alımlarını
              </span>{' '}
              dakikalar içinde otomatikleştirin
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              OPEX talep girişi → AI destekli teklif toplama → hızlı onay ve sipariş. 
              Zamandan tasarruf edin, maliyetleri düşürün.
            </p>
            
            <button 
              onClick={() => setShowDemoModal(true)}
              className="bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-[#89CFF3] to-[#A0E9FF] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Demo Talep Et
            </button>
          </div>

          {/* Hero Visual */}
          <div className="mt-16">
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                    <span className="text-white/80 text-sm ml-4">Kaptanos Dashboard</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900">Bekleyen Talepler</h3>
                      <div className="space-y-2">
                        <div className="bg-[#CDF5FD] p-3 rounded-lg text-sm">Çimento - 50 ton</div>
                        <div className="bg-[#A0E9FF] p-3 rounded-lg text-sm">Demir - 100 kg</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900">Teklif Karşılaştırma</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center bg-green-50 p-3 rounded-lg text-sm">
                          <span>Tedarikçi A</span>
                          <span className="text-green-600 font-semibold">%15 tasarruf</span>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg text-sm flex justify-between">
                          <span>Tedarikçi B</span>
                          <span>Standart</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900">Bu Ay Tasarruf</h3>
                      <div className="bg-gradient-to-r from-[#CDF5FD] to-[#A0E9FF] p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-[#00A9FF]">₺47,500</div>
                        <div className="text-sm text-gray-600">Toplam tasarruf</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution Section */}
      <section id="problem" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Mevcut süreçlerinizde yaşadığınız sorunlar
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Zaman Kaybı</h3>
                    <p className="text-gray-600">Manuel teklif toplama süreçleri saatler alıyor</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <FileText className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Hatalı Veriler</h3>
                    <p className="text-gray-600">Excel tabloları ve manuel girişler hata yapma riskini artırıyor</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <BarChart3 className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Şeffaflık Eksikliği</h3>
                    <p className="text-gray-600">Harcama analizi ve tasarruf fırsatlarını göremiyor</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Kaptanos ile <span className="text-[#00A9FF]">çözüm</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#CDF5FD] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-5 h-5 text-[#00A9FF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Otomatik Süreç</h3>
                    <p className="text-gray-600">AI destekli sistem dakikalar içinde teklif toplar ve karşılaştırır</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#CDF5FD] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-[#00A9FF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Hatasız İşlem</h3>
                    <p className="text-gray-600">Form ve Excel girişleriyle entegre sistem hata riskini minimize eder</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#CDF5FD] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-5 h-5 text-[#00A9FF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tam Görünürlük</h3>
                    <p className="text-gray-600">Gerçek zamanlı raporlama ile tasarruflarınızı takip edin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nasıl Çalışır?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              4 basit adımda OPEX süreçlerinizi otomatikleştirin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {step.icon}
                  </div>
                  <div className="w-8 h-8 bg-[#00A9FF] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#89CFF3] to-[#A0E9FF] transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Özellikler
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              İnşaat şirketiniz için özel olarak tasarlanmış güçlü özellikler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#89CFF3] hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-[#CDF5FD] to-[#A0E9FF] rounded-lg flex items-center justify-center mb-4 text-[#00A9FF] group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-[#CDF5FD]/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Beta müşterilerimizin deneyimleri
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Kaptanos ile tedarikçi süreçlerimizi 70% hızlandırdık. Artık manuel teklif toplama ile uğraşmıyoruz."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] rounded-full flex items-center justify-center text-white font-semibold">
                  AY
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Ahmet Yılmaz</div>
                  <div className="text-sm text-gray-600">Satın Alma Müdürü</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Aylık malzeme harcamalarımızda %25 tasarruf sağladık. Raporlama özelliği çok kullanışlı."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] rounded-full flex items-center justify-center text-white font-semibold">
                  MK
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Mehmet Kaya</div>
                  <div className="text-sm text-gray-600">Finans Direktörü</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">Güvenilir şirketler Kaptanos'u tercih ediyor</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <Building2 className="w-8 h-8 text-gray-400" />
              </div>
              <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <Building2 className="w-8 h-8 text-gray-400" />
              </div>
              <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <Building2 className="w-8 h-8 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00A9FF] to-[#89CFF3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            OPEX süreçlerinizi bugün otomatikleştirin
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Demo talep edin ve nasıl zaman ve para tasarrufu yapabileceğinizi görün
          </p>
          <button 
            onClick={() => setShowDemoModal(true)}
            className="bg-white text-[#00A9FF] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Ücretsiz Demo Talep Et
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Kaptanos</span>
              </div>
              <p className="text-gray-400 mb-4">
                İnşaat şirketlerinin OPEX süreçlerini otomatikleştiren akıllı platform
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Şirket</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">İletişim</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@kaptanos.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Destek</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Kaptanos. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowDemoModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Demo Talep Et</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  İsim Soyisim *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A9FF] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-posta *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A9FF] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Şirket Adı *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A9FF] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-1">
                  Çalışan Sayısı *
                </label>
                <select
                  id="employees"
                  name="employees"
                  required
                  value={formData.employees}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A9FF] focus:border-transparent"
                >
                  <option value="">Seçiniz</option>
                  <option value="1-49">1-49 kişi</option>
                  <option value="50-99">50-99 kişi</option>
                  <option value="100-249">100-249 kişi</option>
                  <option value="250+">250+ kişi</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                  Ek Bilgi
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={3}
                  value={formData.comment}
                  onChange={handleInputChange}
                  placeholder="Özel ihtiyaçlarınız varsa belirtebilirsiniz..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A9FF] focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] text-white py-3 rounded-lg font-semibold hover:from-[#89CFF3] hover:to-[#A0E9FF] transition-all duration-200"
              >
                Demo Talep Et
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;