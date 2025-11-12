export const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section class="bg-gradient-to-r from-gray-900 to-primary text-white py-16">
        <div class="container mx-auto px-6">
          <div class="text-center">
            <h1 class="text-5xl font-bold mb-6">About PT Sumur Batu</h1>
            <p class="text-xl text-blue-100 max-w-3xl mx-auto">
              Leading automation and drives system engineering company in Indonesia, 
              serving industries with excellence since 2007
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-4xl font-bold text-gray-800 mb-6">Our Company Story</h2>
              <div class="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Established in 2007 and headquartered in Surabaya, East Java, PT Sumur Batu has grown 
                  to become a trusted name in automation and drives system engineering throughout Indonesia.
                </p>
                <p>
                  As an official <strong class="text-primary">Silver System Integrator Partner</strong> of 
                  Rockwell Automation, we bring world-class automation solutions to diverse industries, 
                  combining global expertise with local understanding.
                </p>
                <p>
                  Our journey began with a simple mission: to provide the best engineering solutions and 
                  services for our customers. Today, with over 17 years of experience and a team of 30 
                  skilled professionals, we continue to push the boundaries of what's possible in 
                  industrial automation.
                </p>
              </div>
            </div>
            <div class="relative">
              <div class="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <div class="grid grid-cols-2 gap-6 text-center">
                  <div class="bg-white rounded-lg p-6 shadow-lg">
                    <div class="text-3xl font-bold text-primary mb-2">2007</div>
                    <div class="text-sm text-gray-600">Founded</div>
                  </div>
                  <div class="bg-white rounded-lg p-6 shadow-lg">
                    <div class="text-3xl font-bold text-secondary mb-2">17+</div>
                    <div class="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div class="bg-white rounded-lg p-6 shadow-lg">
                    <div class="text-3xl font-bold text-accent mb-2">30+</div>
                    <div class="text-sm text-gray-600">Team Members</div>
                  </div>
                  <div class="bg-white rounded-lg p-6 shadow-lg">
                    <div class="text-3xl font-bold text-green-600 mb-2">500+</div>
                    <div class="text-sm text-gray-600">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-800 mb-4">Vision & Mission</h2>
            <p class="text-xl text-gray-600">Guiding principles that drive our commitment to excellence</p>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            {/* Vision */}
            <div class="bg-white rounded-xl p-8 shadow-lg">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-eye text-primary text-2xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p class="text-gray-600 text-lg leading-relaxed">
                To become one of the best companies in the field of Automation and Drives System Engineering 
                in Indonesia, regionally, and globally, setting the standard for excellence in industrial automation solutions.
              </p>
            </div>

            {/* Mission */}
            <div class="bg-white rounded-xl p-8 shadow-lg">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <i class="fas fa-bullseye text-secondary text-2xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p class="text-gray-600 text-lg leading-relaxed">
                To be an engineering company that provides the best solutions and services for customers, 
                delivering innovative, reliable, and cost-effective automation systems that enhance 
                operational efficiency and drive business success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rockwell Automation Partnership */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-800 mb-4">Rockwell Automation Partnership</h2>
            <p class="text-xl text-gray-600">Certified expertise in cutting-edge automation technology</p>
          </div>

          <div class="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div class="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
                  <i class="fas fa-award text-primary mr-2"></i>
                  <span class="text-primary font-semibold">Silver System Integrator</span>
                </div>
                <h3 class="text-3xl font-bold text-gray-800 mb-6">Official Partnership Status</h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  Our Silver System Integrator status with Rockwell Automation demonstrates our 
                  commitment to excellence and expertise in implementing Allen-Bradley automation solutions. 
                  This partnership ensures access to the latest technology, training, and support.
                </p>
                <div class="space-y-3">
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-600 mr-3"></i>
                    <span class="text-gray-700">Certified technical expertise and training</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-600 mr-3"></i>
                    <span class="text-gray-700">Access to latest Rockwell Automation technology</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-600 mr-3"></i>
                    <span class="text-gray-700">Quality assurance and reliability guarantee</span>
                  </div>
                </div>
              </div>
              
              <div class="bg-white rounded-xl p-8 shadow-lg">
                <h4 class="text-xl font-bold text-gray-800 mb-6">Program Disciplines</h4>
                <div class="overflow-x-auto">
                  <table class="w-full">
                    <thead>
                      <tr class="border-b border-gray-200">
                        <th class="text-left py-3 px-2 font-semibold text-gray-700">Discipline</th>
                        <th class="text-center py-3 px-2 font-semibold text-gray-700">Status</th>
                      </tr>
                    </thead>
                    <tbody class="space-y-2">
                      <tr class="border-b border-gray-100">
                        <td class="py-3 px-2 text-gray-600">Control</td>
                        <td class="py-3 px-2 text-center">
                          <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            <i class="fas fa-check mr-1"></i>Certified
                          </span>
                        </td>
                      </tr>
                      <tr class="border-b border-gray-100">
                        <td class="py-3 px-2 text-gray-600">Visualization</td>
                        <td class="py-3 px-2 text-center">
                          <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            <i class="fas fa-check mr-1"></i>Certified
                          </span>
                        </td>
                      </tr>
                      <tr class="border-b border-gray-100">
                        <td class="py-3 px-2 text-gray-600">Low Voltage Drives</td>
                        <td class="py-3 px-2 text-center">
                          <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            <i class="fas fa-check mr-1"></i>Certified
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td class="py-3 px-2 text-gray-600">CUBIC Modular Assemblies</td>
                        <td class="py-3 px-2 text-center">
                          <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            <i class="fas fa-check mr-1"></i>Certified
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expert Team */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-800 mb-4">Our Expert Team</h2>
            <p class="text-xl text-gray-600">30 skilled professionals dedicated to automation excellence</p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div class="bg-white rounded-xl p-8 shadow-lg text-center">
              <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-user-tie text-primary text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">Senior Automation Engineers</h3>
              <div class="text-3xl font-bold text-primary mb-2">3</div>
              <p class="text-gray-600">Over 20 years of experience</p>
              <div class="mt-4 flex justify-center">
                <div class="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i class="fas fa-star text-yellow-400 text-sm"></i>
                  ))}
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg text-center">
              <div class="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-users text-secondary text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">Experienced Engineers</h3>
              <div class="text-3xl font-bold text-secondary mb-2">8</div>
              <p class="text-gray-600">3-10 years of experience</p>
              <div class="mt-4 flex justify-center">
                <div class="flex space-x-1">
                  {[1, 2, 3, 4].map((star) => (
                    <i class="fas fa-star text-yellow-400 text-sm"></i>
                  ))}
                  <i class="far fa-star text-yellow-400 text-sm"></i>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg text-center">
              <div class="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-graduation-cap text-accent text-3xl"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">Junior Engineers</h3>
              <div class="text-3xl font-bold text-accent mb-2">7</div>
              <p class="text-gray-600">1-3 years of experience</p>
              <div class="mt-4 flex justify-center">
                <div class="flex space-x-1">
                  {[1, 2, 3].map((star) => (
                    <i class="fas fa-star text-yellow-400 text-sm"></i>
                  ))}
                  {[1, 2].map((star) => (
                    <i class="far fa-star text-yellow-400 text-sm"></i>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white rounded-xl p-8 shadow-lg text-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-drafting-compass text-green-600 text-2xl"></i>
              </div>
              <h3 class="text-lg font-bold text-gray-800 mb-2">Control System Designers</h3>
              <div class="text-2xl font-bold text-green-600">3</div>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-tools text-blue-600 text-2xl"></i>
              </div>
              <h3 class="text-lg font-bold text-gray-800 mb-2">Electricians</h3>
              <div class="text-2xl font-bold text-blue-600">6</div>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg text-center">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-clipboard-list text-purple-600 text-2xl"></i>
              </div>
              <h3 class="text-lg font-bold text-gray-800 mb-2">Admin & Logistics</h3>
              <div class="text-2xl font-bold text-purple-600">3</div>
            </div>
          </div>

          <div class="text-center mt-12">
            <div class="bg-white rounded-xl p-8 shadow-lg inline-block">
              <h3 class="text-xl font-bold text-gray-800 mb-4">Continuous Learning & Development</h3>
              <p class="text-gray-600 mb-4 max-w-2xl">
                Our team is committed to continuous skill improvement through comprehensive internal and external training programs, 
                ensuring we stay at the forefront of automation technology and industry best practices.
              </p>
              <div class="flex flex-wrap justify-center gap-4">
                <span class="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <i class="fas fa-certificate mr-1"></i>Rockwell Training
                </span>
                <span class="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                  <i class="fas fa-book mr-1"></i>Technical Workshops
                </span>
                <span class="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                  <i class="fas fa-users mr-1"></i>Industry Conferences
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section class="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold mb-4">Ready to Work with Our Expert Team?</h2>
          <p class="text-xl mb-8 text-blue-100">
            Experience the difference that certified expertise and proven experience can make for your automation projects
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
              <i class="fas fa-handshake mr-2"></i>
              Start Your Project
            </a>
            <a href="/services" class="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center">
              <i class="fas fa-cogs mr-2"></i>
              Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}