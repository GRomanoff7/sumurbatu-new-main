// Product showcase data for parallax effect
const products = [
  {
    title: "Control System Design",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "PLC Programming",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Water Treatment Solutions",
    link: "/industries",
    thumbnail: "https://images.unsplash.com/photo-1581092918484-8313e1f7e8c4?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Industrial Automation",
    link: "/products",
    thumbnail: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "HMI/SCADA Systems",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Control Panel Manufacturing",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "PowerFlex Drives",
    link: "/products",
    thumbnail: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Pulp and Paper Industry",
    link: "/industries",
    thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Mining Solutions",
    link: "/industries",
    thumbnail: "https://images.unsplash.com/photo-1581094488634-1d82e0c3e00c?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Process Plants",
    link: "/industries",
    thumbnail: "https://images.unsplash.com/photo-1581094488634-1d82e0c3e00c?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "ControlLogix Systems",
    link: "/products",
    thumbnail: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Technical Support",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1581093458791-9d42e1d94c93?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Training Services",
    link: "/services",
    thumbnail: "https://images.unsplash.com/photo-1581093458791-9d42e1d94c93?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Material Handling",
    link: "/industries",
    thumbnail: "https://images.unsplash.com/photo-1581093458791-9d42e1d94c93?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Power Plant Systems",
    link: "/industries",
    thumbnail: "https://images.unsplash.com/photo-1581093804475-577d72e38aa0?w=800&auto=format&fit=crop&q=80",
  },
];

export const HeroParallax = () => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  return (
    <div class="hero-parallax-container min-h-screen relative overflow-hidden">
      {/* Background Image with Blur Effect */}
      <div 
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style="background-image: url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80');"
      >
        {/* Overlay with gradient and blur effect */}
        <div class="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/80 to-slate-950/85 backdrop-blur-md"></div>
      </div>

      <style>{`
        .hero-parallax-container {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        
        .parallax-content {
          transition: transform 0.1s ease-out;
          will-change: transform;
        }
        
        .parallax-row {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
          animation: slideLeft 40s linear infinite;
        }
        
        .parallax-row-reverse {
          animation: slideRight 40s linear infinite;
        }
        
        @keyframes slideLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes slideRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .parallax-row:hover,
        .parallax-row-reverse:hover {
          animation-play-state: paused;
        }
        
        .product-card {
          min-width: 28rem;
          height: 20rem;
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }
        
        .product-card:hover {
          transform: translateY(-1rem) scale(1.02);
          z-index: 10;
        }
        
        .product-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .product-card:hover img {
          transform: scale(1.1);
        }
        
        .product-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .product-card:hover .product-overlay {
          opacity: 1;
        }
        
        .product-title {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          right: 1rem;
          color: white;
          font-size: 1.25rem;
          font-weight: 600;
          opacity: 0;
          transform: translateY(1rem);
          transition: all 0.3s ease;
        }
        
        .product-card:hover .product-title {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Header Section */}
      <div class="relative z-20 max-w-7xl mx-auto py-20 md:py-32 px-6">
        <div class="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
          <i class="fas fa-award text-yellow-400 mr-2"></i>
          <span class="text-sm font-medium text-white">
            Silver System Integrator Partner
          </span>
        </div>
        <h1 class="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Your Partner in <br /> Automation Engineering
        </h1>
        <p class="max-w-2xl text-lg md:text-xl text-neutral-200 mb-8">
          Official Silver System Integrator for Rockwell Automation. Delivering
          cutting-edge control systems, PLC programming, and industrial automation
          solutions since 2007.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a
            href="/contact"
            class="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
          >
            <i class="fas fa-phone mr-2"></i>
            Get Free Consultation
          </a>
          <a
            href="/about"
            class="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center"
          >
            <i class="fas fa-info-circle mr-2"></i>
            Learn More
          </a>
        </div>
      </div>

      {/* Parallax Images Section */}
      <div class="parallax-content relative z-10 pb-20">
        {/* First Row - Moves Right */}
        <div class="parallax-row-reverse parallax-row mb-8" style="display: flex;">
          {[...firstRow, ...firstRow].map((product, index) => (
            <a href={product.link} class="product-card" key={`first-${index}`}>
              <img src={product.thumbnail} alt={product.title} loading="lazy" />
              <div class="product-overlay"></div>
              <h3 class="product-title">{product.title}</h3>
            </a>
          ))}
        </div>

        {/* Second Row - Moves Left */}
        <div class="parallax-row mb-8" style="display: flex;">
          {[...secondRow, ...secondRow].map((product, index) => (
            <a href={product.link} class="product-card" key={`second-${index}`}>
              <img src={product.thumbnail} alt={product.title} loading="lazy" />
              <div class="product-overlay"></div>
              <h3 class="product-title">{product.title}</h3>
            </a>
          ))}
        </div>

        {/* Third Row - Moves Right */}
        <div class="parallax-row-reverse parallax-row" style="display: flex;">
          {[...thirdRow, ...thirdRow].map((product, index) => (
            <a href={product.link} class="product-card" key={`third-${index}`}>
              <img src={product.thumbnail} alt={product.title} loading="lazy" />
              <div class="product-overlay"></div>
              <h3 class="product-title">{product.title}</h3>
            </a>
          ))}
        </div>
      </div>

      {/* Additional Gradient Overlay for depth */}
      <div class="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950 pointer-events-none z-0"></div>
    </div>
  );
};
