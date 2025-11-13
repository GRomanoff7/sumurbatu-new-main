export const Layout = ({ children }: { children: any }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PT Sumur Batu - Automation & Drives System Engineering</title>
        <meta
          name="description"
          content="PT Sumur Batu - Official Silver System Integrator for Rockwell Automation. Specialists in Control System Design, PLC Programming, and Industrial Automation Solutions."
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"
          rel="stylesheet"
        />
        <link href="/static/style.css" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'rockwell-red': '#E31937',
                    'rockwell-blue': '#004C97',
                    'primary': '#004C97',
                    'secondary': '#E31937',
                    'accent': '#F39200'
                  }
                }
              }
            }
          `,
          }}
        ></script>
      </head>
      <body class="bg-gray-50 font-sans">
        <header class="bg-white shadow-lg sticky top-0 z-50">
          <nav class="container mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
              {/* Logo */}
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <i class="fas fa-cogs text-white text-xl"></i>
                </div>
                <div>
                  <h1 class="text-xl font-bold text-gray-800">PT Sumur Batu</h1>
                  <p class="text-sm text-gray-600">Automation Engineering</p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div class="hidden lg:block">
                <div class="nav-animated">
                  <div class="nav-container">
                    <a href="/" class="nav-btn">
                      Home
                    </a>
                    <a href="/about" class="nav-btn">
                      About Us
                    </a>
                    <a href="/services" class="nav-btn">
                      Services
                    </a>
                    <a href="/industries" class="nav-btn">
                      Industries
                    </a>
                    <a href="/products" class="nav-btn">
                      Products
                    </a>
                    <a href="/contact" class="nav-btn">
                      Contact Us
                    </a>
                    <svg
                      class="nav-outline"
                      overflow="visible"
                      width="700"
                      height="60"
                      viewBox="0 0 700 60"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        class="nav-rect"
                        pathLength="100"
                        x="0"
                        y="0"
                        width="700"
                        height="60"
                        fill="transparent"
                        stroke-width="2"
                      ></rect>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Mobile menu button */}
              <button id="mobile-menu-button" class="lg:hidden p-2">
                <i class="fas fa-bars text-gray-700 text-xl"></i>
              </button>
            </div>

            {/* Mobile Navigation */}
            <div
              id="mobile-menu"
              class="hidden lg:hidden mt-4 pb-4 border-t border-gray-200"
            >
              <div class="flex flex-col space-y-3 pt-4">
                <a
                  href="/"
                  class="text-gray-700 hover:text-primary font-medium transition-colors"
                >
                  Home
                </a>
                <a
                  href="/about"
                  class="text-gray-700 hover:text-primary font-medium transition-colors"
                >
                  About Us
                </a>
                <a
                  href="/services"
                  class="text-gray-700 hover:text-primary font-medium transition-colors"
                >
                  Services
                </a>
                <a
                  href="/industries"
                  class="text-gray-700 hover:text-primary font-medium transition-colors"
                >
                  Industries
                </a>
                <a
                  href="/products"
                  class="text-gray-700 hover:text-primary font-medium transition-colors"
                >
                  Products
                </a>
                <a
                  href="/contact"
                  class="text-gray-700 hover:text-primary font-medium transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer class="bg-gray-900 text-white py-12">
          <div class="container mx-auto px-6">
            <div class="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div class="md:col-span-2">
                <div class="flex items-center space-x-3 mb-4">
                  <div class="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <i class="fas fa-cogs text-white"></i>
                  </div>
                  <h3 class="text-xl font-bold">PT Sumur Batu</h3>
                </div>
                <p class="text-gray-300 mb-4">
                  Official Silver System Integrator for Rockwell Automation.
                  Your partner in automation and drives system engineering since
                  2007.
                </p>
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="text-gray-400 hover:text-white transition-colors"
                  >
                    <i class="fab fa-linkedin text-xl"></i>
                  </a>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-white transition-colors"
                  >
                    <i class="fab fa-facebook text-xl"></i>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                <ul class="space-y-2">
                  <li>
                    <a
                      href="/about"
                      class="text-gray-300 hover:text-white transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      class="text-gray-300 hover:text-white transition-colors"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/products"
                      class="text-gray-300 hover:text-white transition-colors"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      class="text-gray-300 hover:text-white transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
                <div class="space-y-2 text-gray-300">
                  <p>
                    <i class="fas fa-map-marker-alt mr-2"></i>Surabaya, East
                    Java
                  </p>
                  <p>
                    <i class="fas fa-phone mr-2"></i>+62-31-879.8168
                  </p>
                  <p>
                    <i class="fas fa-envelope mr-1"></i>SumurBatu@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>
                &copy; 2024 PT Sumur Batu. All rights reserved. | Silver System
                Integrator Partner of Rockwell Automation
              </p>
            </div>
          </div>
        </footer>

        <script src="/static/app.js"></script>
      </body>
    </html>
  );
};
