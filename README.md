# PT Sumur Batu Website

## Project Overview
- **Name**: PT Sumur Batu - Automation & Drives System Engineering
- **Goal**: Professional corporate website showcasing automation services and Rockwell Automation partnership
- **Features**: Complete company presentation, service portfolio, industry expertise, product catalog, and contact system

## URLs
- **Local Development**: http://localhost:3000
- **Sandbox Public**: https://3000-i7pkz5dutvdby5ds16uri-b237eb32.sandbox.novita.ai
- **Production**: Ready for Cloudflare Pages deployment

## Data Architecture
- **Data Models**: Static content with JSX components, contact form data structure
- **Storage Services**: Frontend-focused with API endpoint for contact form
- **Data Flow**: Server-side rendered JSX components with client-side interactivity

## Website Structure

### Pages Implemented
1. **Homepage (/)** - Hero section, company overview, services preview, industries served
2. **About Us (/about)** - Company story, vision/mission, team details, Rockwell partnership
3. **Services (/services)** - Detailed service breakdown with engineering capabilities
4. **Industries (/industries)** - Market sectors served with specific applications
5. **Products (/products)** - Complete Rockwell Automation product catalog
6. **Contact Us (/contact)** - Contact information, forms, maps, emergency support

### Key Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Professional Branding**: Rockwell Automation color scheme and corporate identity
- **Contact System**: Working contact form with API endpoint
- **Mobile Navigation**: Collapsible menu for mobile devices
- **Interactive Elements**: Hover effects, animations, and smooth scrolling
- **SEO Optimized**: Meta tags, semantic HTML structure

## Technical Stack
- **Framework**: Hono v4 (Cloudflare Workers compatible)
- **Frontend**: JSX with Tailwind CSS
- **Icons**: FontAwesome 6.4.0
- **Build System**: Vite
- **Deployment**: Cloudflare Pages ready
- **Development**: PM2 process manager

## API Endpoints
- `POST /api/contact` - Contact form submission
  - **Request**: JSON with form fields (firstName, lastName, email, etc.)
  - **Response**: Success/error message
  - **Features**: Form validation, CORS enabled

## Company Information
- **Founded**: 2007
- **Location**: Surabaya, East Java, Indonesia
- **Address**: Rungkut Megah Raya N33, Jl. Raya Kalirungkut No. 5, Surabaya 60293
- **Phone**: +62-31-879.8168
- **Fax**: +62-31-870.0875
- **Email**: SumurBatu@gmail.com

## Services Highlighted
1. **Control System Design** - Custom automation architecture
2. **PLC & HMI/SCADA Programming** - Allen-Bradley platform expertise
3. **Control Panel & MCC Manufacturing** - Cubic Modular and custom panels
4. **Technical Support & Commissioning** - Complete system support
5. **Training Services** - Operator and maintenance training

## Industries Served
- Water Treatment
- Pulp and Paper
- Metal Industry
- Mining
- Process Plants (Food, Chemical)
- Material Handling
- Consumer Goods Machinery
- Power Plant
- Printing

## Products Featured
- **Controllers**: ControlLogix, CompactLogix, Micro800
- **Drives**: PowerFlex 525, 753, 755, 755T, DC drives
- **Motion Control**: Kinetix servo systems
- **HMI/SCADA**: PanelView operators, FactoryTalk View SE
- **Networking**: Stratix Ethernet switches

## Development Commands
```bash
# Install dependencies
npm install

# Development (Vite)
npm run dev

# Development (Wrangler sandbox)
npm run dev:sandbox

# Build for production
npm run build

# Start with PM2
pm2 start ecosystem.config.cjs

# Deploy to Cloudflare Pages
npm run deploy
```

## Current Status
- ✅ **Active** - All pages functional with complete content
- ✅ **Responsive Design** - Mobile and desktop optimized
- ✅ **Contact System** - Form processing and validation
- ✅ **Professional Content** - Comprehensive company information
- ✅ **SEO Ready** - Meta tags and structured content

## Deployment Status
- **Platform**: Ready for Cloudflare Pages
- **Build Status**: ✅ Successfully builds with Vite
- **API Status**: ✅ Contact form API functional
- **Static Assets**: ✅ CSS and JavaScript properly served
- **Last Updated**: 2024-10-08

## User Guide

### Navigation
- Use the main navigation menu to explore different sections
- Mobile users can tap the hamburger menu for navigation
- All pages are interconnected with relevant call-to-action buttons

### Contact Options
1. **Phone**: +62-31-879.8168 for immediate assistance
2. **Email**: SumurBatu@gmail.com for detailed inquiries
3. **Contact Form**: Fill out the form on the contact page
4. **Emergency**: 24/7 emergency support available

### Key Sections to Explore
- **About Us**: Learn about company history and Rockwell partnership
- **Services**: Detailed technical capabilities and service process
- **Industries**: Industry-specific applications and expertise
- **Products**: Complete Rockwell Automation product portfolio
- **Contact**: Multiple ways to reach the company

## Technical Notes
- Built with Hono framework for optimal Cloudflare Pages performance
- Uses modern web standards and responsive design principles
- Contact form includes validation and user-friendly error handling
- All images use placeholder content - can be replaced with actual company assets
- SEO-optimized with proper meta tags and structured content