export const IndustriesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section class="bg-gradient-to-br from-gray-900 to-primary text-white py-16">
        <div class="container mx-auto px-6">
          <div class="text-center">
            <h1 class="text-5xl font-bold mb-6">Industries We Serve</h1>
            <p class="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive automation solutions across diverse industrial sectors with proven expertise and results
            </p>
          </div>
        </div>
      </section>

      {/* Water Treatment */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
                <i class="fas fa-tint text-blue-600 mr-2"></i>
                <span class="text-blue-600 font-semibold">Water Treatment</span>
              </div>
              <h2 class="text-4xl font-bold text-gray-800 mb-6">Water & Wastewater Treatment</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Advanced automation solutions for water and wastewater treatment facilities, ensuring efficient 
                operations, regulatory compliance, and optimal resource utilization. Our systems provide real-time 
                monitoring and control of critical processes.
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <i class="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <h4 class="font-semibold text-gray-800">Process Control Systems</h4>
                    <p class="text-gray-600 text-sm">Automated control of filtration, chemical dosing, and treatment processes</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <h4 class="font-semibold text-gray-800">SCADA Integration</h4>
                    <p class="text-gray-600 text-sm">Centralized monitoring and control of multiple treatment facilities</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                  <div>
                    <h4 class="font-semibold text-gray-800">Compliance Reporting</h4>
                    <p class="text-gray-600 text-sm">Automated data collection and reporting for regulatory compliance</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-white rounded-lg p-6 shadow-lg text-center">
                  <i class="fas fa-filter text-blue-600 text-3xl mb-3"></i>
                  <h4 class="font-bold text-gray-800">Filtration Systems</h4>
                </div>
                <div class="bg-white rounded-lg p-6 shadow-lg text-center">
                  <i class="fas fa-flask text-blue-600 text-3xl mb-3"></i>
                  <h4 class="font-bold text-gray-800">Chemical Dosing</h4>
                </div>
                <div class="bg-white rounded-lg p-6 shadow-lg text-center">
                  <i class="fas fa-chart-line text-blue-600 text-3xl mb-3"></i>
                  <h4 class="font-bold text-gray-800">Quality Monitoring</h4>
                </div>
                <div class="bg-white rounded-lg p-6 shadow-lg text-center">
                  <i class="fas fa-recycle text-blue-600 text-3xl mb-3"></i>
                  <h4 class="font-bold text-gray-800">Waste Management</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pulp and Paper */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Process Control Areas</h3>
                <div class="space-y-4">
                  <div class="bg-white rounded-lg p-4 shadow-md flex items-center">
                    <i class="fas fa-tree text-green-600 mr-4 text-xl"></i>
                    <div>
                      <h4 class="font-semibold text-gray-800">Wood Preparation</h4>
                      <p class="text-sm text-gray-600">Chipping and screening automation</p>
                    </div>
                  </div>
                  <div class="bg-white rounded-lg p-4 shadow-md flex items-center">
                    <i class="fas fa-industry text-green-600 mr-4 text-xl"></i>
                    <div>
                      <h4 class="font-semibold text-gray-800">Pulp Processing</h4>
                      <p class="text-sm text-gray-600">Digester and bleaching control</p>
                    </div>
                  </div>
                  <div class="bg-white rounded-lg p-4 shadow-md flex items-center">
                    <i class="fas fa-scroll text-green-600 mr-4 text-xl"></i>
                    <div>
                      <h4 class="font-semibold text-gray-800">Paper Machine</h4>
                      <p class="text-sm text-gray-600">Formation and pressing systems</p>
                    </div>
                  </div>
                  <div class="bg-white rounded-lg p-4 shadow-md flex items-center">
                    <i class="fas fa-boxes text-green-600 mr-4 text-xl"></i>
                    <div>
                      <h4 class="font-semibold text-gray-800">Finishing & Packaging</h4>
                      <p class="text-sm text-gray-600">Winding and cutting control</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="order-1 lg:order-2">
              <div class="inline-flex items-center bg-green-100 rounded-full px-6 py-2 mb-6">
                <i class="fas fa-leaf text-green-600 mr-2"></i>
                <span class="text-green-600 font-semibold">Pulp and Paper</span>
              </div>
              <h2 class="text-4xl font-bold text-gray-800 mb-6">Pulp & Paper Manufacturing</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Comprehensive automation solutions for pulp and paper production facilities, from wood preparation 
                to final product packaging. Our systems optimize production efficiency, quality control, and 
                resource utilization while ensuring environmental compliance.
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <i class="fas fa-cogs text-green-600 mt-1 mr-3"></i>
                  <div>
                    <h4 class="font-semibold text-gray-800">Production Optimization</h4>
                    <p class="text-gray-600 text-sm">Maximizing throughput while maintaining quality standards</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-thermometer-half text-green-600 mt-1 mr-3"></i>
                  <div>
                    <h4 class="font-semibold text-gray-800">Process Control</h4>
                    <p class="text-gray-600 text-sm">Temperature, pressure, and flow control systems</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-leaf text-green-600 mt-1 mr-3"></i>
                  <div>
                    <h4 class="font-semibold text-gray-800">Environmental Controls</h4>
                    <p class="text-gray-600 text-sm">Emission monitoring and waste reduction systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metal Industry */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <div class="inline-flex items-center bg-gray-100 rounded-full px-6 py-2 mb-6">
              <i class="fas fa-hammer text-gray-600 mr-2"></i>
              <span class="text-gray-600 font-semibold">Metal Industry</span>
            </div>
            <h2 class="text-4xl font-bold text-gray-800 mb-4">Metal Processing & Manufacturing</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced automation for steel, aluminum, and other metal processing operations
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
              <i class="fas fa-fire text-red-600 text-4xl mb-6"></i>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Smelting & Refining</h3>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <i class="fas fa-check text-red-600 mr-2 text-sm"></i>
                  Furnace temperature control
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check text-red-600 mr-2 text-sm"></i>
                  Alloy composition monitoring
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check text-red-600 mr-2 text-sm"></i>
                  Safety interlock systems
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check text-red-600 mr-2 text-sm"></i>
                  Emission control systems
                </li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <i class="fas fa-compress-arrows-alt text-blue-600 text-4xl mb-6"></i>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Rolling & Forming</h3>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <i class="fas fa-check text-blue-600 mr-2 text-sm"></i>
                  Roll gap positioning
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check text-blue-600 mr-2 text-sm"></i>
                  Speed synchronization
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check text-blue-600 mr-2 text-sm"></i>
                  Thickness control
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check text-blue-600 mr-2 text-sm"></i>
                  Quality inspection
                </li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
              <i class="fas fa-cut text-green-600 text-4xl mb-6"></i>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Cutting & Finishing</h3>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <i class="fas fa-check text-green-600 mr-2 text-sm"></i>
                  Precision cutting systems
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check text-green-600 mr-2 text-sm"></i>
                  Surface treatment control
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check text-green-600 mr-2 text-sm"></i>
                  Packaging automation
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check text-green-600 mr-2 text-sm"></i>
                  Inventory management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mining */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-flex items-center bg-yellow-100 rounded-full px-6 py-2 mb-6">
                <i class="fas fa-mountain text-yellow-600 mr-2"></i>
                <span class="text-yellow-600 font-semibold">Mining Industry</span>
              </div>
              <h2 class="text-4xl font-bold text-gray-800 mb-6">Mining & Mineral Processing</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Robust automation systems designed for harsh mining environments, from extraction to processing. 
                Our solutions enhance safety, productivity, and operational efficiency while meeting stringent 
                environmental and safety standards.
              </p>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-4">
                  <div class="flex items-center">
                    <i class="fas fa-shield-alt text-yellow-600 mr-3"></i>
                    <span class="font-semibold text-gray-800">Safety Systems</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-truck text-yellow-600 mr-3"></i>
                    <span class="font-semibold text-gray-800">Material Handling</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-cogs text-yellow-600 mr-3"></i>
                    <span class="font-semibold text-gray-800">Crushing & Grinding</span>
                  </div>
                </div>
                <div class="space-y-4">
                  <div class="flex items-center">
                    <i class="fas fa-filter text-yellow-600 mr-3"></i>
                    <span class="font-semibold text-gray-800">Separation Systems</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-tint text-yellow-600 mr-3"></i>
                    <span class="font-semibold text-gray-800">Dewatering</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-chart-line text-yellow-600 mr-3"></i>
                    <span class="font-semibold text-gray-800">Process Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8">
              <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Mining Applications</h3>
              <div class="space-y-4">
                <div class="bg-white rounded-lg p-4 shadow-md">
                  <h4 class="font-bold text-gray-800 mb-2">Extraction & Transportation</h4>
                  <p class="text-sm text-gray-600">Conveyor systems, crushers, and material handling automation</p>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-md">
                  <h4 class="font-bold text-gray-800 mb-2">Processing & Refining</h4>
                  <p class="text-sm text-gray-600">Flotation, grinding, and separation process control</p>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-md">
                  <h4 class="font-bold text-gray-800 mb-2">Environmental Control</h4>
                  <p class="text-sm text-gray-600">Dust suppression, water treatment, and waste management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Industries Grid */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-800 mb-4">Additional Industries</h2>
            <p class="text-xl text-gray-600">Expanding our expertise across diverse industrial sectors</p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <i class="fas fa-flask text-purple-600 text-4xl mb-4"></i>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Process Plants</h3>
              <p class="text-gray-600 mb-4">Chemical, food, and pharmaceutical processing automation</p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Batch processing control</li>
                <li>• Recipe management</li>
                <li>• Quality assurance systems</li>
                <li>• Regulatory compliance</li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <i class="fas fa-conveyor-belt text-orange-600 text-4xl mb-4"></i>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Material Handling</h3>
              <p class="text-gray-600 mb-4">Warehouse and distribution center automation</p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Conveyor systems</li>
                <li>• Sorting and routing</li>
                <li>• Inventory tracking</li>
                <li>• Automated storage</li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <i class="fas fa-cog text-indigo-600 text-4xl mb-4"></i>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Consumer Goods</h3>
              <p class="text-gray-600 mb-4">Manufacturing machinery automation for consumer products</p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Production line control</li>
                <li>• Quality inspection</li>
                <li>• Packaging automation</li>
                <li>• Traceability systems</li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <i class="fas fa-bolt text-red-600 text-4xl mb-4"></i>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Power Plant</h3>
              <p class="text-gray-600 mb-4">Power generation and distribution system automation</p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Turbine control systems</li>
                <li>• Load dispatch automation</li>
                <li>• Protection systems</li>
                <li>• Grid synchronization</li>
              </ul>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            <div class="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <i class="fas fa-print text-teal-600 text-4xl mb-4"></i>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Printing Industry</h3>
              <p class="text-gray-600 mb-4">Modern printing press automation and control systems</p>
              <div class="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>• Web tension control</div>
                <div>• Registration systems</div>
                <div>• Color management</div>
                <div>• Quality monitoring</div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <i class="fas fa-utensils text-pink-600 text-4xl mb-4"></i>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Food & Beverage</h3>
              <p class="text-gray-600 mb-4">Hygienic automation solutions for food processing</p>
              <div class="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>• CIP systems</div>
                <div>• Temperature control</div>
                <div>• Batch tracking</div>
                <div>• Safety compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Benefits */}
      <section class="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold mb-4">Why Industries Choose Us</h2>
            <p class="text-xl text-blue-100">Proven expertise and results across all industrial sectors</p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-award text-white text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-4">Certified Expertise</h3>
              <p class="text-blue-100">Rockwell Automation Silver System Integrator with proven industry knowledge</p>
            </div>

            <div class="text-center">
              <div class="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-users text-white text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-4">Experienced Team</h3>
              <p class="text-blue-100">30+ professionals with deep understanding of industrial processes</p>
            </div>

            <div class="text-center">
              <div class="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-handshake text-white text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-4">Long-term Partnership</h3>
              <p class="text-blue-100">Committed to ongoing support and system optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Ready to Automate Your Industry?</h2>
          <p class="text-xl text-gray-600 mb-8">
            Contact our industry experts to discuss your specific automation requirements
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
              <i class="fas fa-phone mr-2"></i>
              Discuss Your Project
            </a>
            <a href="/services" class="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center">
              <i class="fas fa-cogs mr-2"></i>
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}