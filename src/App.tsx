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
  X,
  DollarSign,
  Timer,
  AlertCircle
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
      title: "Easy Input",
      description: "Upload requests via simple form or Excel file"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Auto Quotes",
      description: "AI automatically collects quotes from suppliers"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Smart Compare",
      description: "AI scoring shows you the best deals instantly"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Track Orders",
      description: "Monitor your orders in real-time"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "See Savings",
      description: "Visual reports show spending and savings"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Process",
      description: "All data encrypted and safely stored"
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Submit Request",
      description: "Form or Excel Upload",
      icon: <Upload className="w-8 h-8" />
    },
    {
      step: 2,
      title: "AI Collects Quotes",
      description: "Compare Suppliers",
      icon: <Search className="w-8 h-8" />
    },
    {
      step: 3,
      title: "Approve",
      description: "Start Order",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      step: 4,
      title: "Track & Save",
      description: "See Your Savings",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/50">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00A9FF]/10 via-transparent to-[#89CFF3]/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#CDF5FD]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#A0E9FF]/20 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-white/20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] rounded-lg flex items-center justify-center shadow-lg">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Kaptanos</span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                  activeSection === 'home' 
                    ? 'text-[#00A9FF] bg-[#CDF5FD]/30' 
                    : 'text-gray-600 hover:text-[#00A9FF] hover:bg-white/50'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('problem')}
                className={`text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                  activeSection === 'problem' 
                    ? 'text-[#00A9FF] bg-[#CDF5FD]/30' 
                    : 'text-gray-600 hover:text-[#00A9FF] hover:bg-white/50'
                }`}
              >
                Solution
              </button>
              <button
                onClick={() => scrollToSection('workflow')}
                className={`text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                  activeSection === 'workflow' 
                    ? 'text-[#00A9FF] bg-[#CDF5FD]/30' 
                    : 'text-gray-600 hover:text-[#00A9FF] hover:bg-white/50'
                }`}
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className={`text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                  activeSection === 'features' 
                    ? 'text-[#00A9FF] bg-[#CDF5FD]/30' 
                    : 'text-gray-600 hover:text-[#00A9FF] hover:bg-white/50'
                }`}
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className={`text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                  activeSection === 'testimonials' 
                    ? 'text-[#00A9FF] bg-[#CDF5FD]/30' 
                    : 'text-gray-600 hover:text-[#00A9FF] hover:bg-white/50'
                }`}
              >
                Reviews
              </button>
            </div>

            {/* Demo Button */}
            <div className="hidden md:block">
              <button 
                onClick={() => setShowDemoModal(true)}
                className="bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:from-[#89CFF3] hover:to-[#A0E9FF] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setShowDemoModal(true)}
                className="bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg"
              >
                Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden pt-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] rounded-xl flex items-center justify-center shadow-xl">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-bold text-gray-900">BuildFlow</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Automate your construction{' '}
              <span className="bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] bg-clip-text text-transparent">
                material purchases
              </span>{' '}
              in minutes
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Submit request → AI collects quotes → quick approval → order placed. 
              Save time, reduce costs, eliminate paperwork.
            </p>
            
            <button 
              onClick={() => setShowDemoModal(true)}
              className="bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-[#89CFF3] hover:to-[#A0E9FF] transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              See How It Works
            </button>
          </div>

          {/* Hero Visual */}
          <div className="mt-16">
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
                <div className="bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <span className="text-white/90 text-sm ml-4">BuildFlow Dashboard</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900">Pending Requests</h3>
                      <div className="space-y-2">
                        <div className="bg-[#CDF5FD]/50 backdrop-blur-sm p-3 rounded-lg text-sm border border-white/20">Cement - 50 tons</div>
                        <div className="bg-[#A0E9FF]/50 backdrop-blur-sm p-3 rounded-lg text-sm border border-white/20">Steel - 100 kg</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900">Quote Comparison</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center bg-green-50/70 backdrop-blur-sm p-3 rounded-lg text-sm border border-white/20">
                          <span>Supplier A</span>
                          <span className="text-green-600 font-semibold">15% savings</span>
                        </div>
                        <div className="bg-gray-50/70 backdrop-blur-sm p-3 rounded-lg text-sm flex justify-between border border-white/20">
                          <span>Supplier B</span>
                          <span>Standard</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold text-gray-900">This Month's Savings</h3>
                      <div className="bg-gradient-to-r from-[#CDF5FD]/50 to-[#A0E9FF]/50 backdrop-blur-sm p-4 rounded-lg text-center border border-white/20">
                        <div className="text-2xl font-bold text-[#00A9FF]">$47,500</div>
                        <div className="text-sm text-gray-600">Total saved</div>
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
      <section id="problem" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Current problems you face
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100/70 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 mt-1 border border-white/20">
                    <Timer className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Time Wasted</h3>
                    <p className="text-gray-600">Manual quote collection takes hours of your day</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100/70 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 mt-1 border border-white/20">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Costly Mistakes</h3>
                    <p className="text-gray-600">Excel sheets and manual entry lead to errors and overpaying</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100/70 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 mt-1 border border-white/20">
                    <DollarSign className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Hidden Costs</h3>
                    <p className="text-gray-600">No visibility into spending patterns or savings opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Our <span className="text-[#00A9FF]">solution</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#CDF5FD]/70 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 mt-1 border border-white/20">
                    <Zap className="w-5 h-5 text-[#00A9FF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Instant Process</h3>
                    <p className="text-gray-600">AI system collects and compares quotes in minutes, not hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#CDF5FD]/70 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 mt-1 border border-white/20">
                    <CheckCircle className="w-5 h-5 text-[#00A9FF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Error-Free</h3>
                    <p className="text-gray-600">Integrated system eliminates manual errors and ensures best prices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#CDF5FD]/70 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 mt-1 border border-white/20">
                    <TrendingUp className="w-5 h-5 text-[#00A9FF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Full Visibility</h3>
                    <p className="text-gray-600">Real-time reports show exactly where you're saving money</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              4 simple steps to automate your material purchasing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 text-center group hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="w-8 h-8 bg-[#00A9FF] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold shadow-lg">
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
      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features designed specifically for construction companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-white/30 hover:border-[#89CFF3]/50 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-[#CDF5FD]/70 to-[#A0E9FF]/70 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 text-[#00A9FF] group-hover:scale-110 transition-transform duration-300 border border-white/20">
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
      <section id="testimonials" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What our customers say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/30">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "We cut our supplier process time by 70%. No more manual quote collection - it's all automated now."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] rounded-full flex items-center justify-center text-white font-semibold">
                  JS
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">John Smith</div>
                  <div className="text-sm text-gray-600">Procurement Manager</div>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/30">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "We're saving 25% on monthly material costs. The reporting feature shows exactly where the savings come from."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] rounded-full flex items-center justify-center text-white font-semibold">
                  MJ
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Mike Johnson</div>
                  <div className="text-sm text-gray-600">Finance Director</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">Trusted by construction companies nationwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="w-24 h-12 bg-white/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                <Building2 className="w-8 h-8 text-gray-400" />
              </div>
              <div className="w-24 h-12 bg-white/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                <Building2 className="w-8 h-8 text-gray-400" />
              </div>
              <div className="w-24 h-12 bg-white/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                <Building2 className="w-8 h-8 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Automate your construction{' '}
                <span className="bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] bg-clip-text text-transparent">
                  material purchases
                </span>{' '}
                in minutes
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Submit request → AI collects quotes → quick approval → order placed. 
                Save time, reduce costs, eliminate paperwork.
              </p>
              
              <button 
                onClick={() => setShowDemoModal(true)}
                className="bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-[#89CFF3] hover:to-[#A0E9FF] transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                See How It Works
              </button>
            </div>
            {/* Right side - Dashboard */}
            <div className="relative">
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <span className="text-white/90 text-sm ml-4">BuildFlow Dashboard</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900 text-sm">Pending Requests</h3>
                      <div className="space-y-2">
                        <div className="bg-[#CDF5FD]/50 backdrop-blur-sm p-3 rounded-lg text-sm border border-white/20 flex justify-between items-center">
                          <span>Cement - 50 tons</span>
                          <span className="text-orange-600 text-xs">Collecting quotes</span>
                        </div>
                        <div className="bg-[#A0E9FF]/50 backdrop-blur-sm p-3 rounded-lg text-sm border border-white/20 flex justify-between items-center">
                          <span>Steel - 100 kg</span>
                          <span className="text-blue-600 text-xs">Ready to approve</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900 text-sm">Quote Comparison</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center bg-green-50/70 backdrop-blur-sm p-3 rounded-lg text-sm border border-white/20">
                          <span>Supplier A</span>
                          <span className="text-green-600 font-semibold">15% savings</span>
                        </div>
                        <div className="bg-gray-50/70 backdrop-blur-sm p-3 rounded-lg text-sm flex justify-between border border-white/20">
                          <span>Supplier B</span>
                          <span className="text-gray-500">Standard</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900 text-sm">This Month's Savings</h3>
                      <div className="bg-gradient-to-r from-[#CDF5FD]/50 to-[#A0E9FF]/50 backdrop-blur-sm p-4 rounded-lg text-center border border-white/20">
                        <div className="text-2xl font-bold text-[#00A9FF]">$47,500</div>
                        <div className="text-sm text-gray-600">Total saved</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#89CFF3]/30 rounded-full blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#A0E9FF]/40 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Kaptanos</span>
              </div>
              <p className="text-gray-400">
                Automate your construction material purchases with AI-powered quote collection and comparison.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>hello@kaptanos.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Kaptanos. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl max-w-md w-full p-6 relative border border-white/30 shadow-2xl">
            <button 
              onClick={() => setShowDemoModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Demo</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A9FF] focus:border-transparent bg-white/80 backdrop-blur-sm"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A9FF] focus:border-transparent bg-white/80 backdrop-blur-sm"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A9FF] focus:border-transparent bg-white/80 backdrop-blur-sm"
                />
              </div>
              
              <div>
                <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Size *
                </label>
                <select
                  id="employees"
                  name="employees"
                  required
                  value={formData.employees}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A9FF] focus:border-transparent bg-white/80 backdrop-blur-sm"
                >
                  <option value="">Select size</option>
                  <option value="1-49">1-49 employees</option>
                  <option value="50-99">50-99 employees</option>
                  <option value="100-249">100-249 employees</option>
                  <option value="250+">250+ employees</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Info
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={3}
                  value={formData.comment}
                  onChange={handleInputChange}
                  placeholder="Tell us about your specific needs..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A9FF] focus:border-transparent bg-white/80 backdrop-blur-sm"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00A9FF] to-[#89CFF3] text-white py-3 rounded-lg font-semibold hover:from-[#89CFF3] hover:to-[#A0E9FF] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Demo
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;