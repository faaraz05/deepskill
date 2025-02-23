"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var embla_carousel_react_1 = require("embla-carousel-react");
function App() {
    var _a = (0, embla_carousel_react_1.default)({
        align: 'start',
        containScroll: 'trimSnaps',
    }), emblaRef = _a[0], emblaApi = _a[1];
    var scrollPrev = react_1.default.useCallback(function () {
        if (emblaApi)
            emblaApi.scrollPrev();
    }, [emblaApi]);
    var scrollNext = react_1.default.useCallback(function () {
        if (emblaApi)
            emblaApi.scrollNext();
    }, [emblaApi]);
    var simulations = [
        {
            company: "Goldman Sachs",
            title: "Investment Banking",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
            category: "Banking & Financial Services",
            level: "Advanced",
            duration: "4-5 hours",
            badge: "TALENT NETWORK OPEN"
        },
        {
            company: "Microsoft",
            title: "Software Development",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            category: "Technology",
            level: "Intermediate",
            duration: "3-4 hours",
            badge: "FEATURED"
        },
        {
            company: "Deloitte",
            title: "Management Consulting",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
            category: "Consulting",
            level: "Intermediate",
            duration: "5-6 hours",
            badge: "MOST POPULAR"
        },
        {
            company: "Y Combinator",
            title: "Startup Fundamentals",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
            category: "Entrepreneurship",
            level: "Advanced",
            duration: "6-8 hours",
            badge: "NEW"
        }
    ];
    return (<div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <lucide_react_1.BriefcaseIcon className="h-8 w-8 text-blue-600"/>
            <span className="text-2xl font-bold text-gray-900">SimuWork</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#simulations" className="text-gray-600 hover:text-gray-900">Simulations</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Courses</a>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Experience Real Work,<br />Before Real Work
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Bridge the gap between theory and practice with our virtual job simulations. 
              Get hands-on experience in your dream career path.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg">
                Try Free Simulation
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-gray-400 transition-colors text-lg">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-20" id="features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose SimuWork?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <lucide_react_1.GraduationCapIcon className="h-8 w-8 text-blue-600"/>
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-World Experience</h3>
                <p className="text-gray-600">Practice with industry-standard tools and scenarios</p>
              </div>
              <div className="text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <lucide_react_1.TrendingUpIcon className="h-8 w-8 text-blue-600"/>
                </div>
                <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
                <p className="text-gray-600">Track your progress and improve your capabilities</p>
              </div>
              <div className="text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <lucide_react_1.UsersIcon className="h-8 w-8 text-blue-600"/>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Feedback</h3>
                <p className="text-gray-600">Get insights from industry professionals</p>
              </div>
            </div>
          </div>
        </section>

        {/* Simulations Section */}
        <section className="py-20 bg-gray-50" id="simulations">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Popular Simulations</h2>
              <span className="inline-flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
                View all simulations <lucide_react_1.ArrowRight className="ml-2 h-4 w-4"/>
              </span>
            </div>
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-4">
                  {simulations.map(function (sim, index) { return (<div key={index} className="min-w-[calc(33.333%-16px)] pl-4">
                      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden h-full flex flex-col">
                        <div className="relative h-48">
                          <img src={sim.image} alt={sim.title} className="w-full h-full object-cover"/>
                          <div className="absolute top-4 left-4">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded">
                              {sim.badge}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex-1">
                            <h4 className="text-sm text-gray-500 mb-1">{sim.company}</h4>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{sim.title}</h3>
                            <div className="flex items-center text-sm text-gray-500">
                              <lucide_react_1.BookOpen className="h-4 w-4 mr-1"/>
                              {sim.category}
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-4">
                            <div className="flex items-center text-sm text-gray-500">
                              <div className="flex items-center mr-4">
                                <lucide_react_1.Clock className="h-4 w-4 mr-1"/>
                                {sim.duration}
                              </div>
                              <span className="px-2 py-1 bg-gray-100 rounded text-gray-600">
                                {sim.level}
                              </span>
                            </div>
                            <button className="text-blue-600 hover:text-blue-700 font-medium">
                              Start
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>); })}
                </div>
              </div>
              <button onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors">
                <lucide_react_1.ChevronLeft className="h-6 w-6 text-gray-600"/>
              </button>
              <button onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors">
                <lucide_react_1.ChevronRight className="h-6 w-6 text-gray-600"/>
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students and professionals who are preparing for their dream careers with SimuWork.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-lg font-semibold">
              Get Started Now
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <lucide_react_1.BriefcaseIcon className="h-8 w-8 text-blue-500"/>
                <span className="text-2xl font-bold text-white">SimuWork</span>
              </div>
              <p>Bridging the gap between education and employment through virtual job simulations.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Simulations</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Software Development</a></li>
                <li><a href="#" className="hover:text-white">Digital Marketing</a></li>
                <li><a href="#" className="hover:text-white">Project Management</a></li>
                <li><a href="#" className="hover:text-white">Data Analysis</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; 2025 SimuWork. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>);
}
exports.default = App;
