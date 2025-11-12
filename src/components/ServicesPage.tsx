export const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section class="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div class="container mx-auto px-6">
          <div class="text-center">
            <h1 class="text-5xl font-bold mb-6">Our Services</h1>
            <p class="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive automation engineering services from design to deployment and ongoing support
            </p>
          </div>
        </div>
      </section>

      {/* Engineering & Design */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
                <i class="fas fa-drafting-compass text-primary mr-2"></i>
                <span class="text-primary font-semibold">Engineering & Design</span>
              </div>
              <h2 class="text-4xl font-bold text-gray-800 mb-6">Control System & Drives System Design</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Our expert engineers design comprehensive control and drives systems tailored to your specific 
                industrial requirements. We leverage cutting-edge technology and proven methodologies to deliver 
                optimal performance, reliability, and efficiency.
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                  <div>
                    <h4 class="font-semibold text-gray-800">Custom System Architecture</h4>
                    <p class="text-gray-600 text-sm">Tailored designs for optimal performance</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                  <div>
                    <h4 class="font-semibold text-gray-800">Scalable Solutions</h4>
                    <p class="text-gray-600 text-sm">Future-ready systems that grow with your business</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                  <div>
                    <h4 class="font-semibold text-gray-800">Compliance & Standards</h4>
                    <p class="text-gray-600 text-sm">Meeting all industrial safety and quality standards</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-white rounded-lg p-6 shadow-lg text-center">
                  <i class="fas fa-project-diagram text-primary text-3xl mb-3"></i>
                  <h4 class="font-bold text-gray-800">System Architecture</h4>
                </div>
                <div class="bg-white rounded-lg p-6 shadow-lg text-center">
                  <i class="fas fa-cogs text-secondary text-3xl mb-3"></i>
                  <h4 class="font-bold text-gray-800">Control Design</h4>
                </div>
                <div class="bg-white rounded-lg p-6 shadow-lg text-center">
                  <i class="fas fa-tachometer-alt text-accent text-3xl mb-3"></i>
                  <h4 class="font-bold text-gray-800">Drive Systems</h4>
                </div>
                <div class="bg-white rounded-lg p-6 shadow-lg text-center">
                  <i class="fas fa-shield-alt text-green-600 text-3xl mb-3"></i>
                  <h4 class="font-bold text-gray-800">Safety Systems</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programming & Integration */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <div class="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-8">
                <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Programming Capabilities</h3>
                <div class="space-y-4">
                  <div class="bg-white rounded-lg p-4 shadow-md">
                    <div class="flex items-center justify-between">
                      <span class="font-semibold text-gray-800">PLC Programming</span>
                      <i class="fas fa-microchip text-primary"></i>
                    </div>
                    <div class="text-sm text-gray-600 mt-1">ControlLogix, CompactLogix, Micro800</div>
                  </div>
                  <div class="bg-white rounded-lg p-4 shadow-md">
                    <div class="flex items-center justify-between">
                      <span class="font-semibold text-gray-800">HMI Development</span>
                      <i class="fas fa-desktop text-secondary"></i>
                    </div>
                    <div class="text-sm text-gray-600 mt-1">PanelView, FactoryTalk View</div>
                  </div>
                  <div class="bg-white rounded-lg p-4 shadow-md">
                    <div class="flex items-center justify-between">
                      <span class="font-semibold text-gray-800">SCADA Systems</span>
                      <i class="fas fa-chart-line text-accent"></i>
                    </div>
                    <div class="text-sm text-gray-600 mt-1">FactoryTalk View SE</div>
                  </div>
                  <div class="bg-white rounded-lg p-4 shadow-md">
                    <div class="flex items-center justify-between">
                      <span class="font-semibold text-gray-800">Motion Control</span>
                      <i class="fas fa-sync text-green-600"></i>
                    </div>
                    <div class="text-sm text-gray-600 mt-1">Kinetix Servo Systems</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="order-1 lg:order-2">
              <div class="inline-flex items-center bg-secondary/10 rounded-full px-6 py-2 mb-6">
                <i class="fas fa-code text-secondary mr-2"></i>
                <span class="text-secondary font-semibold">Programming & Integration</span>
              </div>
              <h2 class="text-4xl font-bold text-gray-800 mb-6">PLC & HMI/SCADA Programming</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Our experienced programmers develop sophisticated control logic and intuitive operator interfaces 
                using Allen-Bradley platforms. We ensure seamless integration between all system components for 
                optimal performance and user experience.
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <i class="fas fa-laptop-code text-secondary mt-1 mr-3"></i>
                  <div>
                    <h4 class="font-semibold text-gray-800">Advanced Programming</h4>
                    <p class="text-gray-600 text-sm">Ladder logic, structured text, and function blocks</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-link text-secondary mt-1 mr-3"></i>
                  <div>
                    <h4 class="font-semibold text-gray-800">System Integration</h4>
                    <p class="text-gray-600 text-sm">Seamless connectivity between all components</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-bug text-secondary mt-1 mr-3"></i>
                  <div>
                    <h4 class="font-semibold text-gray-800">Testing & Debugging</h4>
                    <p class="text-gray-600 text-sm">Comprehensive testing for reliable operation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <div class="inline-flex items-center bg-accent/10 rounded-full px-6 py-2 mb-6">
              <i class="fas fa-industry text-accent mr-2"></i>
              <span class="text-accent font-semibold">Manufacturing</span>
            </div>
            <h2 class="text-4xl font-bold text-gray-800 mb-4">Control Panel & MCC Manufacturing</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality panel fabrication using both Cubic Modular Systems and custom local panels
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-8 mb-12">
            <div class="bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl p-8">
              <h3 class="text-2xl font-bold text-gray-800 mb-6">Cubic Modular Systems</h3>
              <div class="space-y-4">
                <div class="flex items-center">
                  <i class="fas fa-cube text-accent mr-3"></i>
                  <span class="text-gray-700">Standardized modular design</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-clock text-accent mr-3"></i>
                  <span class="text-gray-700">Faster assembly and delivery</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-shield-alt text-accent mr-3"></i>
                  <span class="text-gray-700">Superior quality assurance</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-wrench text-accent mr-3"></i>
                  <span class="text-gray-700">Easy maintenance and expansion</span>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8">
              <h3 class="text-2xl font-bold text-gray-800 mb-6">Custom Local Panels</h3>
              <div class="space-y-4">
                <div class="flex items-center">
                  <i class="fas fa-tools text-primary mr-3"></i>
                  <span class="text-gray-700">Tailored to specific requirements</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-dollar-sign text-primary mr-3"></i>
                  <span class="text-gray-700">Cost-effective solutions</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-map-marker-alt text-primary mr-3"></i>
                  <span class="text-gray-700">Local sourcing and support</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-hammer text-primary mr-3"></i>
                  <span class="text-gray-700">Skilled local craftsmanship</span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Manufacturing Capabilities</h3>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="text-center">
                <i class="fas fa-bolt text-accent text-4xl mb-4"></i>
                <h4 class="font-bold text-gray-800 mb-2">Motor Control Centers</h4>
                <p class="text-gray-600">Complete MCC solutions for motor management</p>
              </div>
              <div class="text-center">
                <i class="fas fa-microchip text-primary text-4xl mb-4"></i>
                <h4 class="font-bold text-gray-800 mb-2">Control Panels</h4>
                <p class="text-gray-600">Custom control panels for automation systems</p>
              </div>
              <div class="text-center">
                <i class="fas fa-network-wired text-secondary text-4xl mb-4"></i>
                <h4 class="font-bold text-gray-800 mb-2">Distribution Panels</h4>
                <p class="text-gray-600">Power distribution and protection systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Modernization */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <div class="inline-flex items-center bg-green-100 rounded-full px-6 py-2 mb-6">
              <i class="fas fa-life-ring text-green-600 mr-2"></i>
              <span class="text-green-600 font-semibold">Support & Modernization</span>
            </div>
            <h2 class="text-4xl font-bold text-gray-800 mb-4">Technical Support & System Upgrades</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to keep your systems running optimally and up-to-date
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12">
            <div class="space-y-8">
              <div class="bg-white rounded-xl p-8 shadow-lg">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <i class="fas fa-tools text-green-600 text-xl"></i>
                  </div>
                  <h3 class="text-xl font-bold text-gray-800">Technical Support</h3>
                </div>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-center">
                    <i class="fas fa-check text-green-600 mr-2"></i>
                    Troubleshooting and diagnostics
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-check text-green-600 mr-2"></i>
                    System modifications and optimization
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-check text-green-600 mr-2"></i>
                    Commissioning and startup support
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-check text-green-600 mr-2"></i>
                    Preventive maintenance programs
                  </li>
                </ul>
              </div>

              <div class="bg-white rounded-xl p-8 shadow-lg">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <i class="fas fa-graduation-cap text-blue-600 text-xl"></i>
                  </div>
                  <h3 class="text-xl font-bold text-gray-800">Training Services</h3>
                </div>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex items-center">
                    <i class="fas fa-check text-blue-600 mr-2"></i>
                    Operator training programs
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-check text-blue-600 mr-2"></i>
                    Maintenance training courses
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-check text-blue-600 mr-2"></i>
                    Technical documentation
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-check text-blue-600 mr-2"></i>
                    On-site training sessions
                  </li>
                </ul>
              </div>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-sync-alt text-secondary text-xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800">Upgrade & Modernization</h3>
              </div>
              <p class="text-gray-600 mb-6">
                Migrate legacy systems to modern platforms for improved performance, 
                reliability, and maintainability.
              </p>
              
              <h4 class="font-bold text-gray-800 mb-4">Legacy System Migration</h4>
              <div class="space-y-3">
                <div class="bg-gray-50 rounded-lg p-4">
                  <div class="flex items-center justify-between">
                    <span class="font-medium text-gray-800">Allen-Bradley PLC-5</span>
                    <i class="fas fa-arrow-right text-secondary"></i>
                    <span class="font-medium text-primary">ControlLogix</span>
                  </div>
                </div>
                <div class="bg-gray-50 rounded-lg p-4">
                  <div class="flex items-center justify-between">
                    <span class="font-medium text-gray-800">SLC-500</span>
                    <i class="fas fa-arrow-right text-secondary"></i>
                    <span class="font-medium text-primary">CompactLogix</span>
                  </div>
                </div>
                <div class="bg-gray-50 rounded-lg p-4">
                  <div class="flex items-center justify-between">
                    <span class="font-medium text-gray-800">Reliance Electric Automax DCS</span>
                    <i class="fas fa-arrow-right text-secondary"></i>
                    <span class="font-medium text-primary">Modern DCS</span>
                  </div>
                </div>
              </div>

              <div class="mt-6 p-4 bg-blue-50 rounded-lg">
                <h5 class="font-semibold text-blue-800 mb-2">Migration Benefits</h5>
                <ul class="text-sm text-blue-700 space-y-1">
                  <li>• Improved system reliability and performance</li>
                  <li>• Enhanced cybersecurity features</li>
                  <li>• Better integration capabilities</li>
                  <li>• Reduced maintenance costs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-800 mb-4">Our Service Process</h2>
            <p class="text-xl text-gray-600">Structured approach ensuring project success from start to finish</p>
          </div>

          <div class="grid md:grid-cols-5 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white font-bold text-xl">1</span>
              </div>
              <h3 class="font-bold text-gray-800 mb-2">Consultation</h3>
              <p class="text-gray-600 text-sm">Understanding your requirements and challenges</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white font-bold text-xl">2</span>
              </div>
              <h3 class="font-bold text-gray-800 mb-2">Design</h3>
              <p class="text-gray-600 text-sm">Custom system design and engineering</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white font-bold text-xl">3</span>
              </div>
              <h3 class="font-bold text-gray-800 mb-2">Development</h3>
              <p class="text-gray-600 text-sm">Programming and panel manufacturing</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white font-bold text-xl">4</span>
              </div>
              <h3 class="font-bold text-gray-800 mb-2">Implementation</h3>
              <p class="text-gray-600 text-sm">Installation and commissioning</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-white font-bold text-xl">5</span>
              </div>
              <h3 class="font-bold text-gray-800 mb-2">Support</h3>
              <p class="text-gray-600 text-sm">Ongoing maintenance and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section class="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold mb-4">Ready to Start Your Automation Project?</h2>
          <p class="text-xl mb-8 text-blue-100">
            Let our certified engineers design the perfect automation solution for your needs
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
              <i class="fas fa-phone mr-2"></i>
              Get Free Consultation
            </a>
            <a href="/products" class="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center">
              <i class="fas fa-cube mr-2"></i>
              View Our Products
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}