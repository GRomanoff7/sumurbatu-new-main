export const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section class="bg-gradient-to-br from-primary to-rockwell-blue text-white py-20">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center">
            <div class="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <i class="fas fa-award text-accent mr-2"></i>
              <span class="text-sm font-medium">
                Silver System Integrator Partner
              </span>
            </div>
            <h1 class="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Partner in
              <span class="text-accent block">Automation</span>
              Engineering
            </h1>
            <p class="text-xl mb-8 text-blue-100 leading-relaxed">
              Official Silver System Integrator for Rockwell Automation.
              Delivering cutting-edge control systems, PLC programming, and
              industrial automation solutions since 2007.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                class="bg-secondary hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                <i class="fas fa-phone mr-2"></i>
                Get Free Consultation
              </a>
              <a
                href="/about"
                class="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center"
              >
                <i class="fas fa-info-circle mr-2"></i>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with CountUp Animation */}
      <section class="py-20 bg-white relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 opacity-60"></div>
        <div class="container mx-auto px-6 relative z-10">
          <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Proven Track Record of Excellence
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Numbers that speak for our commitment to quality and innovation
            </p>
          </div>

          <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div
              class="stats-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-primary"
              data-testid="stat-years"
            >
              <div class="flex flex-col items-center text-center">
                <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <i class="fas fa-calendar-check text-primary text-2xl"></i>
                </div>
                <div class="text-5xl font-bold text-primary mb-2">
                  <span class="countup" data-target="17" data-suffix="+">
                    0
                  </span>
                </div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">
                  Years Experience
                </div>
              </div>
            </div>

            <div
              class="stats-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-secondary"
              data-testid="stat-engineers"
            >
              <div class="flex flex-col items-center text-center">
                <div class="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <i class="fas fa-users text-secondary text-2xl"></i>
                </div>
                <div class="text-5xl font-bold text-secondary mb-2">
                  <span class="countup" data-target="30" data-suffix="+">
                    0
                  </span>
                </div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">
                  Expert Engineers
                </div>
              </div>
            </div>

            <div
              class="stats-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-accent"
              data-testid="stat-projects"
            >
              <div class="flex flex-col items-center text-center">
                <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <i class="fas fa-project-diagram text-accent text-2xl"></i>
                </div>
                <div class="text-5xl font-bold text-accent mb-2">
                  <span class="countup" data-target="500" data-suffix="+">
                    0
                  </span>
                </div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">
                  Projects Completed
                </div>
              </div>
            </div>

            <div
              class="stats-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-green-600"
              data-testid="stat-industries"
            >
              <div class="flex flex-col items-center text-center">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <i class="fas fa-industry text-green-600 text-2xl"></i>
                </div>
                <div class="text-5xl font-bold text-green-600 mb-2">
                  <span class="countup" data-target="8" data-suffix="+">
                    0
                  </span>
                </div>
                <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">
                  Industries Served
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Business Introduction */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-800 mb-4">
              Leading Automation & Drives System Engineering
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              PT Sumur Batu specializes in comprehensive automation solutions,
              from control system design to complete system integration and
              support services.
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-certificate text-primary text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">
                Certified Partnership
              </h3>
              <p class="text-gray-600">
                Official Silver System Integrator status with Rockwell
                Automation ensures quality and reliability.
              </p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-users text-secondary text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">
                Expert Team
              </h3>
              <p class="text-gray-600">
                30 skilled professionals including senior engineers with over 20
                years of experience.
              </p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-tools text-accent text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">
                Complete Solutions
              </h3>
              <p class="text-gray-600">
                End-to-end automation services from design and programming to
                manufacturing and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Overview */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-800 mb-4">
              Our Core Services
            </h2>
            <p class="text-xl text-gray-600">
              Comprehensive automation solutions tailored to your industry needs
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <i class="fas fa-drafting-compass text-primary text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-4">
                Control System Design
              </h3>
              <p class="text-gray-600 mb-4">
                Custom control system architecture and engineering design for
                optimal performance.
              </p>
              <a
                href="/services"
                class="text-primary font-medium inline-flex items-center"
              >
                Learn More <i class="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <i class="fas fa-code text-secondary text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-4">
                PLC & HMI/SCADA Programming
              </h3>
              <p class="text-gray-600 mb-4">
                Advanced programming solutions for Allen-Bradley controllers and
                visualization systems.
              </p>
              <a
                href="/services"
                class="text-primary font-medium inline-flex items-center"
              >
                Learn More <i class="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <i class="fas fa-industry text-accent text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-4">
                Control Panel & MCC Manufacturing
              </h3>
              <p class="text-gray-600 mb-4">
                Cubic Modular Systems and custom panel fabrication with quality
                assurance.
              </p>
              <a
                href="/services"
                class="text-primary font-medium inline-flex items-center"
              >
                Learn More <i class="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <i class="fas fa-wrench text-green-600 text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-4">
                Technical Support & Commissioning
              </h3>
              <p class="text-gray-600 mb-4">
                Comprehensive support services including troubleshooting and
                system commissioning.
              </p>
              <a
                href="/services"
                class="text-primary font-medium inline-flex items-center"
              >
                Learn More <i class="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-800 mb-4">
              Industries We Serve
            </h2>
            <p class="text-xl text-gray-600">
              Expertise across diverse industrial sectors
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <i class="fas fa-tint text-blue-600 text-3xl mb-4"></i>
              <h3 class="font-semibold text-gray-800">Water Treatment</h3>
            </div>

            <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <i class="fas fa-leaf text-green-600 text-3xl mb-4"></i>
              <h3 class="font-semibold text-gray-800">Pulp and Paper</h3>
            </div>

            <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <i class="fas fa-hammer text-gray-600 text-3xl mb-4"></i>
              <h3 class="font-semibold text-gray-800">Metal Industry</h3>
            </div>

            <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <i class="fas fa-mountain text-yellow-600 text-3xl mb-4"></i>
              <h3 class="font-semibold text-gray-800">Mining</h3>
            </div>

            <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <i class="fas fa-flask text-purple-600 text-3xl mb-4"></i>
              <h3 class="font-semibold text-gray-800">Process Plants</h3>
            </div>

            <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <i class="fas fa-conveyor-belt text-orange-600 text-3xl mb-4"></i>
              <h3 class="font-semibold text-gray-800">Material Handling</h3>
            </div>

            <div class="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <i class="fas fa-bolt text-red-600 text-3xl mb-4"></i>
              <h3 class="font-semibold text-gray-800">Power Plant</h3>
            </div>

            <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <i class="fas fa-print text-indigo-600 text-3xl mb-4"></i>
              <h3 class="font-semibold text-gray-800">Printing</h3>
            </div>
          </div>

          <div class="text-center mt-8">
            <a
              href="/industries"
              class="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Explore All Industries <i class="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Our Valued Customers */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-800 mb-4">
              Our Valued Customers
            </h2>
            <p class="text-xl text-gray-600">
              Trusted by leading companies across Indonesia
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div class="h-16 flex items-center justify-center">
                <div class="w-full h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span class="text-gray-500 text-sm font-medium">
                    Client Logo
                  </span>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div class="h-16 flex items-center justify-center">
                <div class="w-full h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span class="text-gray-500 text-sm font-medium">
                    Client Logo
                  </span>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div class="h-16 flex items-center justify-center">
                <div class="w-full h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span class="text-gray-500 text-sm font-medium">
                    Client Logo
                  </span>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div class="h-16 flex items-center justify-center">
                <div class="w-full h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span class="text-gray-500 text-sm font-medium">
                    Client Logo
                  </span>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div class="h-16 flex items-center justify-center">
                <div class="w-full h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span class="text-gray-500 text-sm font-medium">
                    Client Logo
                  </span>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div class="h-16 flex items-center justify-center">
                <div class="w-full h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span class="text-gray-500 text-sm font-medium">
                    Client Logo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section class="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold mb-4">
            Ready to Automate Your Operations?
          </h2>
          <p class="text-xl mb-8 text-blue-100">
            Get expert consultation from our certified automation engineers
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              class="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <i class="fas fa-phone mr-2"></i>
              Contact Us Today
            </a>
            <a
              href="/services"
              class="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center"
            >
              <i class="fas fa-cogs mr-2"></i>
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
