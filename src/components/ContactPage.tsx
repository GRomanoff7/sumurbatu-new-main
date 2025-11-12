export const ContactPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our automation experts for consultation, support, or project inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-map-marker-alt text-primary text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Office Address</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Rungkut Megah Raya N33<br />
                        Jl. Raya Kalirungkut No. 5<br />
                        Surabaya, Jawa Timur, Indonesia<br />
                        60293
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-phone text-secondary text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Phone & Fax</h3>
                      <div className="space-y-1 text-gray-600">
                        <p>
                          <span className="font-medium">Phone:</span> 
                          <a href="tel:+6231879168" className="text-primary hover:text-secondary transition-colors">
                            +62-31-879.8168
                          </a>
                        </p>
                        <p>
                          <span className="font-medium">Fax:</span> +62-31-870.0875
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-envelope text-accent text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:SumurBatu@gmail.com" className="text-primary hover:text-secondary transition-colors">
                          SumurBatu@gmail.com
                        </a> 
                      </p> 
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-clock text-green-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Business Hours</h3>
                      <div className="space-y-1 text-gray-600 text-sm">
                        <p><span className="font-medium">Monday - Friday:</span> 8:00 AM - 5:00 PM</p>
                        <p><span className="font-medium">Saturday:</span> 8:00 AM - 12:00 PM</p>
                        <p><span className="font-medium">Sunday:</span> Closed</p>
                        <p className="text-xs text-gray-500 mt-2">* Emergency support available 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Send us a Message</h2>
              <form id="contactForm" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Select your industry</option>
                    <option value="water-treatment">Water Treatment</option>
                    <option value="pulp-paper">Pulp and Paper</option>
                    <option value="metal">Metal Industry</option>
                    <option value="mining">Mining</option>
                    <option value="process-plant">Process Plant (Food, Chemical)</option>
                    <option value="material-handling">Material Handling</option>
                    <option value="consumer-goods">Consumer Goods Machinery</option>
                    <option value="power-plant">Power Plant</option>
                    <option value="printing">Printing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="new-installation">New Installation</option>
                    <option value="system-upgrade">System Upgrade</option>
                    <option value="maintenance-support">Maintenance & Support</option>
                    <option value="consultation">Consultation</option>
                    <option value="training">Training</option>
                    <option value="emergency-repair">Emergency Repair</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details / Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical"
                    placeholder="Please describe your project requirements, timeline, or any specific questions..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                    I agree to PT Sumur Batu's privacy policy and consent to being contacted regarding my inquiry. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Send Message
                </button>

                <div id="formMessage" className="hidden p-4 rounded-lg"></div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Our Office</h2>
            <p className="text-xl text-gray-600">Located in the heart of Surabaya's industrial district</p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Strategic Location</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="fas fa-building text-primary mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-semibold text-gray-800">Industrial Hub</h4>
                      <p className="text-gray-600 text-sm">Located in Surabaya's major industrial area with easy access to manufacturing facilities</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-car text-primary mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-semibold text-gray-800">Easy Access</h4>
                      <p className="text-gray-600 text-sm">Convenient location with parking facilities and main road connectivity</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-plane text-primary mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-semibold text-gray-800">Transport Links</h4>
                      <p className="text-gray-600 text-sm">Close to Juanda International Airport and major transportation networks</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                  <h4 className="font-bold text-gray-800 mb-23">Directions</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Our office is located on Jl. Raya Kalirungkut, easily accessible from central Surabaya. 
                    Look for the Rungkut Megah Raya complex.
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Rungkut+Megah+Raya+N33,+Jl.+Raya+Kalirungkut+No.+5,+Surabaya,+Jawa+Timur+60293"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-secondary font-medium transition-colors"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <i className="fas fa-map-marked-alt text-4xl mb-2"></i>
                    <p className="text-sm">Interactive Map</p>
                    <p className="text-xs">Click below to view location</p>
                  </div>
                </div>
                <div className="text-center">
                  <a 
                    href="https://maps.google.com/?q=Rungkut+Megah+Raya+N33,+Jl.+Raya+Kalirungkut+No.+5,+Surabaya,+Jawa+Timur+60293"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                  >
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Contact Options</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach our automation experts</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-phone text-green-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Call Us Now</h3>
              <p className="text-gray-600 mb-6">
                Speak directly with our technical team for immediate assistance and consultation
              </p>
              <a
                href="tel:+6231879168"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                <i className="fas fa-phone mr-2"></i>
                +62-31-879.8168
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-envelope text-blue-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-6">
                Send detailed project requirements and receive comprehensive technical proposals
              </p>
              <a
                href="mailto:SumurBatu@gmail.com?subject=Automation Project Inquiry"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                <i className="fas fa-envelope mr-2"></i>
                Send Email
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-calendar-alt text-purple-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Schedule Visit</h3>
              <p className="text-gray-600 mb-6">
                Arrange an on-site consultation to discuss your automation requirements in detail
              </p>
              <a
                href="mailto:SumurBatu@gmail.com?subject=Schedule Site Visit&body=I would like to schedule a site visit to discuss our automation requirements."
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                <i className="fas fa-calendar-plus mr-2"></i>
                Schedule Meeting
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-exclamation-triangle text-white text-2xl"></i>
              </div>
              <h2 className="text-3xl font-bold">Emergency Support Available</h2>
            </div>
            <p className="text-xl text-red-100 mb-8">
              System down? Critical automation failure? Our emergency response team is available 24/7 
              to get your operations back online quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+6231879168"
                className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                <i className="fas fa-phone mr-2"></i>
                Emergency Hotline: +62-31-879.8168
              </a>
              <a
                href="mailto:SumurBatu@gmail.com?subject=EMERGENCY: System Failure"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center"
              >
                <i className="fas fa-envelope mr-2"></i>
                Emergency Email
              </a>
            </div>
            <p className="text-sm text-red-200 mt-4">
              * Emergency support charges may apply for after-hours service
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}