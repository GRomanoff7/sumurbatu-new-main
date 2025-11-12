export const ProductsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section class="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div class="container mx-auto px-6">
          <div class="text-center">
            <h1 class="text-5xl font-bold mb-6">Rockwell Automation Products</h1>
            <p class="text-xl text-blue-100 max-w-3xl mx-auto">
              High-quality Allen-Bradley automation products integrated and supported by certified professionals
            </p>
          </div>
        </div>
      </section>

      {/* Controllers (PLC) */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <div class="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
              <i class="fas fa-microchip text-primary mr-2"></i>
              <span class="text-primary font-semibold">Controllers (PLC)</span>
            </div>
            <h2 class="text-4xl font-bold text-gray-800 mb-4">Allen-Bradley Controllers</h2>
            <p class="text-xl text-gray-600">Industry-leading programmable logic controllers for all applications</p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            <div class="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div class="flex items-center justify-center mb-6">
                <div class="w-20 h-20 bg-primary/20 rounded-lg flex items-center justify-center">
                  <i class="fas fa-server text-primary text-3xl"></i>
                </div>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">ControlLogix</h3>
              <p class="text-gray-600 mb-6 text-center">
                High-performance controller for complex applications requiring advanced control capabilities
              </p>
              <div class="space-y-3">
                <div class="flex items-center">
                  <i class="fas fa-check-circle text-green-600 mr-3"></i>
                  <span class="text-gray-700">Modular architecture</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-check-circle text-green-600 mr-3"></i>
                  <span class="text-gray-700">Integrated motion control</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-check-circle text-green-600 mr-3"></i>
                  <span class="text-gray-700">Advanced networking</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-check-circle text-green-600 mr-3"></i>
                  <span class="text-gray-700">Redundancy options</span>
                </div>
              </div>
              <div class="mt-6 pt-6 border-t border-gray-200">
                <h4 class="font-semibold text-gray-800 mb-2">Ideal Applications:</h4>
                <p class="text-sm text-gray-600">Large manufacturing systems, process control, complex machinery</p>
              </div>
            </div>

            <div class="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div class="flex items-center justify-center mb-6">
                <div class="w-20 h-20 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <i class="fas fa-cube text-secondary text-3xl"></i>
                </div>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">CompactLogix</h3>
              <p class="text-gray-600 mb-6 text-center">
                Compact, all-in-one controller perfect for mid-range applications
              </p>
              <div class="space-y-3">
                <div class="flex items-center">
                  <i class="fas fa-check-circle text-green-600 mr-3"></i>
                  <span class="text-gray-700">Integrated I/O and communications</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-check-circle text-green-600 mr-3"></i>
                  <span class="text-gray-700">Built-in Ethernet networking</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-check-circle text-green-600 mr-3"></i>
                  <span class="text-gray-700">Motion control capabilities</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-check-circle text-green-600 mr-3"></i>
                  <span class="text-gray-700">Cost-effective solution</span>
                </div>
              </div>
              <div class="mt-6 pt-6 border-t border-gray-200">
                <h4 class="font-semibold text-gray-800 mb-2">Ideal Applications:</h4>
                <p class="text-sm text-gray-600">Packaging machines, material handling, small to medium systems</p>
              </div>
            </div>

            <div class="bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div class="flex items-center justify-center mb-6">
                <div class="w-20 h-20 bg-accent/20 rounded-lg flex items-center justify-center">
                  <i class="fas fa-microchip text-accent text-3xl"></i>
                </div>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">Micro800</h3>
              <p class="text-gray-600 mb-6 text-center">
                Entry-level controllers for basic automation requirements
              </p>
              <div class="space-y-3">
                <div class="flex items-center">
                  <i class="fas fa-check-circle text-green-600 mr-3"></i>
                  <span class="text-gray-700">Easy programming</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-check-circle text-green-600 mr-3"></i>
                  <span class="text-gray-700">Built-in I/O</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-check-circle text-green-600 mr-3"></i>
                  <span class="text-gray-700">Ethernet connectivity</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-check-circle text-green-600 mr-3"></i>
                  <span class="text-gray-700">Affordable pricing</span>
                </div>
              </div>
              <div class="mt-6 pt-6 border-t border-gray-200">
                <h4 class="font-semibold text-gray-800 mb-2">Ideal Applications:</h4>
                <p class="text-sm text-gray-600">Simple machinery, standalone equipment, basic process control</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drives */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <div class="inline-flex items-center bg-secondary/10 rounded-full px-6 py-2 mb-6">
              <i class="fas fa-tachometer-alt text-secondary mr-2"></i>
              <span class="text-secondary font-semibold">Motor Drives</span>
            </div>
            <h2 class="text-4xl font-bold text-gray-800 mb-4">PowerFlex Drive Series</h2>
            <p class="text-xl text-gray-600">Advanced AC and DC drives for precise motor control</p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 class="text-3xl font-bold text-gray-800 mb-8">AC Drives / Inverters</h3>
              <div class="space-y-6">
                <div class="bg-white rounded-xl p-6 shadow-md">
                  <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <i class="fas fa-bolt text-blue-600"></i>
                    </div>
                    <h4 class="text-xl font-bold text-gray-800">PowerFlex 525</h4>
                  </div>
                  <p class="text-gray-600 mb-3">
                    Compact drive for basic to advanced applications with integrated safety features
                  </p>
                  <div class="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span class="font-medium text-gray-700">Power Range:</span>
                      <br />0.4 to 22 kW
                    </div>
                    <div>
                      <span class="font-medium text-gray-700">Applications:</span>
                      <br />Pumps, fans, conveyors
                    </div>
                  </div>
                </div>

                <div class="bg-white rounded-xl p-6 shadow-md">
                  <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <i class="fas fa-cogs text-green-600"></i>
                    </div>
                    <h4 class="text-xl font-bold text-gray-800">PowerFlex 753</h4>
                  </div>
                  <p class="text-gray-600 mb-3">
                    High-performance drive with advanced control algorithms and networking
                  </p>
                  <div class="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span class="font-medium text-gray-700">Power Range:</span>
                      <br />0.4 to 2.3 MW
                    </div>
                    <div>
                      <span class="font-medium text-gray-700">Applications:</span>
                      <br />Process control, precision applications
                    </div>
                  </div>
                </div>

                <div class="bg-white rounded-xl p-6 shadow-md">
                  <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <i class="fas fa-server text-purple-600"></i>
                    </div>
                    <h4 class="text-xl font-bold text-gray-800">PowerFlex 755</h4>
                  </div>
                  <p class="text-gray-600 mb-3">
                    Modular drive system for complex applications requiring maximum flexibility
                  </p>
                  <div class="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span class="font-medium text-gray-700">Power Range:</span>
                      <br />90 kW to 5.7 MW
                    </div>
                    <div>
                      <span class="font-medium text-gray-700">Applications:</span>
                      <br />Large motors, harsh environments
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-3xl font-bold text-gray-800 mb-8">DC Drives & Special Applications</h3>
              <div class="space-y-6">
                <div class="bg-white rounded-xl p-6 shadow-md">
                  <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <i class="fas fa-battery-three-quarters text-red-600"></i>
                    </div>
                    <h4 class="text-xl font-bold text-gray-800">PowerFlex DC</h4>
                  </div>
                  <p class="text-gray-600 mb-4">
                    High-performance DC drives for applications requiring precise speed and torque control
                  </p>
                  <div class="space-y-2 text-sm text-gray-600">
                    <div class="flex items-center">
                      <i class="fas fa-check text-green-600 mr-2"></i>
                      Regenerative capabilities
                    </div>
                    <div class="flex items-center">
                      <i class="fas fa-check text-green-600 mr-2"></i>
                      Field weakening control
                    </div>
                    <div class="flex items-center">
                      <i class="fas fa-check text-green-600 mr-2"></i>
                      Advanced diagnostics
                    </div>
                  </div>
                </div>

                <div class="bg-white rounded-xl p-6 shadow-md">
                  <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                      <i class="fas fa-thermometer-half text-indigo-600"></i>
                    </div>
                    <h4 class="text-xl font-bold text-gray-800">PowerFlex 755T</h4>
                  </div>
                  <p class="text-gray-600 mb-4">
                    Total Force Technology drives designed for harsh industrial environments
                  </p>
                  <div class="space-y-2 text-sm text-gray-600">
                    <div class="flex items-center">
                      <i class="fas fa-check text-green-600 mr-2"></i>
                      Enhanced environmental protection
                    </div>
                    <div class="flex items-center">
                      <i class="fas fa-check text-green-600 mr-2"></i>
                      Reduced harmonic distortion
                    </div>
                    <div class="flex items-center">
                      <i class="fas fa-check text-green-600 mr-2"></i>
                      Extended operating temperature range
                    </div>
                  </div>
                </div>

                <div class="bg-gradient-to-br from-accent/5 to-orange-100 rounded-xl p-6">
                  <h4 class="font-bold text-gray-800 mb-4">Drive Applications</h4>
                  <div class="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <i class="fas fa-fan text-blue-600 mr-2"></i>
                      <span class="text-gray-700">HVAC Systems</span>
                    </div>
                    <div>
                      <i class="fas fa-tint text-blue-600 mr-2"></i>
                      <span class="text-gray-700">Pump Control</span>
                    </div>
                    <div>
                      <i class="fas fa-conveyor-belt text-blue-600 mr-2"></i>
                      <span class="text-gray-700">Conveyor Systems</span>
                    </div>
                    <div>
                      <i class="fas fa-compress text-blue-600 mr-2"></i>
                      <span class="text-gray-700">Compressors</span>
                    </div>
                    <div>
                      <i class="fas fa-industry text-blue-600 mr-2"></i>
                      <span class="text-gray-700">Process Control</span>
                    </div>
                    <div>
                      <i class="fas fa-cogs text-blue-600 mr-2"></i>
                      <span class="text-gray-700">Machine Tools</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motion Control */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-flex items-center bg-green-100 rounded-full px-6 py-2 mb-6">
                <i class="fas fa-sync text-green-600 mr-2"></i>
                <span class="text-green-600 font-semibold">Motion Control</span>
              </div>
              <h2 class="text-4xl font-bold text-gray-800 mb-6">Kinetix Servo Systems</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Precision servo drives and motors for demanding motion control applications. 
                The Kinetix family provides integrated motion solutions with superior performance 
                and flexibility for complex automation systems.
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <i class="fas fa-rocket text-green-600 mt-1 mr-3"></i>
                  <div>
                    <h4 class="font-semibold text-gray-800">High Performance</h4>
                    <p class="text-gray-600 text-sm">Exceptional speed, accuracy, and repeatability</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-link text-green-600 mt-1 mr-3"></i>
                  <div>
                    <h4 class="font-semibold text-gray-800">Integrated Control</h4>
                    <p class="text-gray-600 text-sm">Seamless integration with ControlLogix systems</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-tools text-green-600 mt-1 mr-3"></i>
                  <div>
                    <h4 class="font-semibold text-gray-800">Easy Configuration</h4>
                    <p class="text-gray-600 text-sm">Simple setup and commissioning tools</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gradient-to-br from-green-50 to-blue-100 rounded-2xl p-8">
              <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Kinetix Product Range</h3>
              <div class="space-y-4">
                <div class="bg-white rounded-lg p-4 shadow-md">
                  <div class="flex items-center justify-between mb-2">
                    <h4 class="font-bold text-gray-800">Servo Drives</h4>
                    <i class="fas fa-microchip text-green-600"></i>
                  </div>
                  <p class="text-sm text-gray-600">Kinetix 5700, 5500, 350 series drives</p>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-md">
                  <div class="flex items-center justify-between mb-2">
                    <h4 class="font-bold text-gray-800">Servo Motors</h4>
                    <i class="fas fa-cog text-green-600"></i>
                  </div>
                  <p class="text-sm text-gray-600">Rotary and linear servo motor options</p>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-md">
                  <div class="flex items-center justify-between mb-2">
                    <h4 class="font-bold text-gray-800">Motion Controllers</h4>
                    <i class="fas fa-gamepad text-green-600"></i>
                  </div>
                  <p class="text-sm text-gray-600">Standalone and integrated motion control</p>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-md">
                  <div class="flex items-center justify-between mb-2">
                    <h4 class="font-bold text-gray-800">Actuators</h4>
                    <i class="fas fa-expand-arrows-alt text-green-600"></i>
                  </div>
                  <p class="text-sm text-gray-600">Electric cylinders and linear actuators</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HMI & Visualization */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <div class="inline-flex items-center bg-indigo-100 rounded-full px-6 py-2 mb-6">
              <i class="fas fa-desktop text-indigo-600 mr-2"></i>
              <span class="text-indigo-600 font-semibold">Operator Interface & Visualization</span>
            </div>
            <h2 class="text-4xl font-bold text-gray-800 mb-4">PanelView & FactoryTalk Solutions</h2>
            <p class="text-xl text-gray-600">Intuitive operator interfaces and powerful visualization software</p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 class="text-3xl font-bold text-gray-800 mb-8">PanelView Operator Interfaces</h3>
              <div class="space-y-6">
                <div class="bg-white rounded-xl p-6 shadow-md">
                  <h4 class="text-xl font-bold text-gray-800 mb-3">PanelView 5000</h4>
                  <p class="text-gray-600 mb-4">
                    Advanced graphic terminals with multi-touch displays and enhanced performance
                  </p>
                  <div class="grid grid-cols-2 gap-4 text-sm">
                    <div class="space-y-2">
                      <div class="flex items-center">
                        <i class="fas fa-tv text-indigo-600 mr-2"></i>
                        <span class="text-gray-700">4" to 15" displays</span>
                      </div>
                      <div class="flex items-center">
                        <i class="fas fa-hand-pointer text-indigo-600 mr-2"></i>
                        <span class="text-gray-700">Multi-touch capability</span>
                      </div>
                    </div>
                    <div class="space-y-2">
                      <div class="flex items-center">
                        <i class="fas fa-ethernet text-indigo-600 mr-2"></i>
                        <span class="text-gray-700">Ethernet connectivity</span>
                      </div>
                      <div class="flex items-center">
                        <i class="fas fa-shield-alt text-indigo-600 mr-2"></i>
                        <span class="text-gray-700">Industrial rated</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bg-white rounded-xl p-6 shadow-md">
                  <h4 class="text-xl font-bold text-gray-800 mb-3">PanelView Plus 7</h4>
                  <p class="text-gray-600 mb-4">
                    Cost-effective terminals with built-in communication and application flexibility
                  </p>
                  <div class="space-y-2 text-sm text-gray-600">
                    <div class="flex items-center">
                      <i class="fas fa-check text-green-600 mr-2"></i>
                      Multiple screen sizes available
                    </div>
                    <div class="flex items-center">
                      <i class="fas fa-check text-green-600 mr-2"></i>
                      Web browser capabilities
                    </div>
                    <div class="flex items-center">
                      <i class="fas fa-check text-green-600 mr-2"></i>
                      Recipe management
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-3xl font-bold text-gray-800 mb-8">FactoryTalk Software</h3>
              <div class="space-y-6">
                <div class="bg-white rounded-xl p-6 shadow-md">
                  <h4 class="text-xl font-bold text-gray-800 mb-3">FactoryTalk View SE</h4>
                  <p class="text-gray-600 mb-4">
                    Scalable HMI/SCADA software for plant-wide visualization and control
                  </p>
                  <div class="space-y-2 text-sm text-gray-600">
                    <div class="flex items-center">
                      <i class="fas fa-chart-line text-indigo-600 mr-2"></i>
                      Real-time and historical trending
                    </div>
                    <div class="flex items-center">
                      <i class="fas fa-bell text-indigo-600 mr-2"></i>
                      Alarm management system
                    </div>
                    <div class="flex items-center">
                      <i class="fas fa-users text-indigo-600 mr-2"></i>
                      Multi-user security system
                    </div>
                    <div class="flex items-center">
                      <i class="fas fa-file-alt text-indigo-600 mr-2"></i>
                      Comprehensive reporting tools
                    </div>
                  </div>
                </div>

                <div class="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl p-6">
                  <h4 class="font-bold text-gray-800 mb-4">Visualization Capabilities</h4>
                  <div class="grid grid-cols-2 gap-4 text-sm">
                    <div class="space-y-3">
                      <div>
                        <i class="fas fa-palette text-purple-600 mr-2"></i>
                        <span class="text-gray-700">Rich Graphics</span>
                      </div>
                      <div>
                        <i class="fas fa-mobile-alt text-purple-600 mr-2"></i>
                        <span class="text-gray-700">Remote Access</span>
                      </div>
                      <div>
                        <i class="fas fa-database text-purple-600 mr-2"></i>
                        <span class="text-gray-700">Data Logging</span>
                      </div>
                    </div>
                    <div class="space-y-3">
                      <div>
                        <i class="fas fa-chart-pie text-purple-600 mr-2"></i>
                        <span class="text-gray-700">Analytics</span>
                      </div>
                      <div>
                        <i class="fas fa-cloud text-purple-600 mr-2"></i>
                        <span class="text-gray-700">Cloud Connectivity</span>
                      </div>
                      <div>
                        <i class="fas fa-cog text-purple-600 mr-2"></i>
                        <span class="text-gray-700">Custom Applications</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Networking */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <div class="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
              <i class="fas fa-network-wired text-blue-600 mr-2"></i>
              <span class="text-blue-600 font-semibold">Industrial Networking</span>
            </div>
            <h2 class="text-4xl font-bold text-gray-800 mb-4">Stratix Ethernet Switches</h2>
            <p class="text-xl text-gray-600">Robust industrial networking solutions for reliable communication</p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 lg:p-12">
            <div class="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 class="text-2xl font-bold text-gray-800 mb-6">Managed Switches</h3>
                <div class="space-y-4">
                  <div class="bg-white rounded-lg p-4 shadow-md">
                    <h4 class="font-bold text-gray-800 mb-2">Advanced Features</h4>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li>• VLAN support and traffic management</li>
                      <li>• Quality of Service (QoS) prioritization</li>
                      <li>• Network redundancy protocols</li>
                      <li>• SNMP monitoring and diagnostics</li>
                    </ul>
                  </div>
                  <div class="bg-white rounded-lg p-4 shadow-md">
                    <h4 class="font-bold text-gray-800 mb-2">Security Features</h4>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li>• Port-based access control</li>
                      <li>• MAC address filtering</li>
                      <li>• Industrial firewall capabilities</li>
                      <li>• Secure remote management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-2xl font-bold text-gray-800 mb-6">Unmanaged Switches</h3>
                <div class="space-y-4">
                  <div class="bg-white rounded-lg p-4 shadow-md">
                    <h4 class="font-bold text-gray-800 mb-2">Simple & Reliable</h4>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li>• Plug-and-play operation</li>
                      <li>• Industrial temperature rating</li>
                      <li>• DIN rail mounting options</li>
                      <li>• Cost-effective networking</li>
                    </ul>
                  </div>
                  <div class="bg-white rounded-lg p-4 shadow-md">
                    <h4 class="font-bold text-gray-800 mb-2">Applications</h4>
                    <ul class="text-sm text-gray-600 space-y-1">
                      <li>• Small control systems</li>
                      <li>• Device-level networking</li>
                      <li>• Machine-level communication</li>
                      <li>• Basic Ethernet connectivity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8 pt-8 border-t border-blue-200">
              <div class="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <i class="fas fa-tachometer-alt text-blue-600 text-3xl mb-2"></i>
                  <h4 class="font-bold text-gray-800">High Performance</h4>
                  <p class="text-sm text-gray-600">Gigabit Ethernet speeds</p>
                </div>
                <div>
                  <i class="fas fa-shield-alt text-blue-600 text-3xl mb-2"></i>
                  <h4 class="font-bold text-gray-800">Industrial Grade</h4>
                  <p class="text-sm text-gray-600">Harsh environment rated</p>
                </div>
                <div>
                  <i class="fas fa-link text-blue-600 text-3xl mb-2"></i>
                  <h4 class="font-bold text-gray-800">EtherNet/IP</h4>
                  <p class="text-sm text-gray-600">Native protocol support</p>
                </div>
                <div>
                  <i class="fas fa-sync text-blue-600 text-3xl mb-2"></i>
                  <h4 class="font-bold text-gray-800">Redundancy</h4>
                  <p class="text-sm text-gray-600">Network fault tolerance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Integration Benefits */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-800 mb-4">Why Choose Our Rockwell Integration?</h2>
            <p class="text-xl text-gray-600">Certified expertise ensures optimal product performance and support</p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white rounded-xl p-8 shadow-lg text-center">
              <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-certificate text-primary text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Certified Integration</h3>
              <p class="text-gray-600">
                Our Silver System Integrator status ensures proper product selection, 
                configuration, and integration for optimal performance.
              </p>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg text-center">
              <div class="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-tools text-secondary text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Complete Support</h3>
              <p class="text-gray-600">
                From initial design through commissioning and ongoing maintenance, 
                we provide comprehensive support for all Rockwell products.
              </p>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg text-center">
              <div class="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-handshake text-accent text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Warranty & Service</h3>
              <p class="text-gray-600">
                All products come with manufacturer warranty plus our additional 
                service guarantees and local technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section class="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold mb-4">Ready to Implement Rockwell Automation?</h2>
          <p class="text-xl mb-8 text-blue-100">
            Consult with our certified engineers to select the perfect products for your application
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
              <i class="fas fa-phone mr-2"></i>
              Get Product Consultation
            </a>
            <a href="/services" class="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center">
              <i class="fas fa-cogs mr-2"></i>
              Integration Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}