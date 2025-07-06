import React, { useState, useContext, createContext, useEffect } from 'react';
import './App.css';
import { SAMPLE_USERS, SAMPLE_DATA } from './sampleData';
import { ROLES } from './roles';
import AdminDashboard from './components/admin/AdminDashboard';
import PMDashboard from './components/pm/PMDashboard';
import DesignerDashboard from './components/designer/DesignerDashboard';
import CustomerPortal from './components/customer/CustomerPortal';
import ProcurementPortal from './components/procurement/ProcurementPortal';
import VendorPortal from './components/vendor/VendorPortal';

// Auth Context
const AuthContext = createContext();

// Auth Provider Component
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('gharinto_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const foundUser = Object.values(SAMPLE_USERS).find(
      u => u.email === email && u.password === password
    );
    
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('gharinto_user', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('gharinto_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use auth
export function useAuth() {
  return useContext(AuthContext);
}

// Enhanced Landing Page Component
function LandingPage() {
  const { login } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setShowLogin={setShowLogin} />;
    }
  };

  return (
    <div className="landing-page">
      {/* Enhanced Header with Glass Effect */}
      <header className="header glass-morphism">
        <div className="container">
          <div className="nav">
            <div className="logo">
              <div className="logo-icon">🏠</div>
              <div className="logo-text">
                <h2>Gharinto</h2>
                <span className="tagline">Interior Excellence</span>
              </div>
            </div>
            
            <nav className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <button 
                className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
              >
                Home
              </button>
              <button 
                className={`nav-item ${currentPage === 'about' ? 'active' : ''}`}
                onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }}
              >
                About
              </button>
              <button 
                className={`nav-item ${currentPage === 'services' ? 'active' : ''}`}
                onClick={() => { setCurrentPage('services'); setMobileMenuOpen(false); }}
              >
                Services
              </button>
              <button 
                className={`nav-item ${currentPage === 'portfolio' ? 'active' : ''}`}
                onClick={() => { setCurrentPage('portfolio'); setMobileMenuOpen(false); }}
              >
                Portfolio
              </button>
              <button 
                className={`nav-item ${currentPage === 'contact' ? 'active' : ''}`}
                onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }}
              >
                Contact
              </button>
            </nav>

            <div className="header-actions">
              <button 
                className="login-btn gradient-btn"
                onClick={() => setShowLogin(true)}
              >
                <span>Login</span>
                <div className="btn-glow"></div>
              </button>
              <button 
                className="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      {renderPage()}

      {/* Enhanced Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <div className="logo-icon">🏠</div>
                <h3>Gharinto</h3>
              </div>
              <p>Transforming spaces with innovative interior design solutions. Your dream home is just a click away.</p>
              <div className="social-links">
                <a href="#" className="social-btn facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-btn instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-btn twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-btn linkedin">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><button onClick={() => setCurrentPage('home')}>Home</button></li>
                <li><button onClick={() => setCurrentPage('about')}>About Us</button></li>
                <li><button onClick={() => setCurrentPage('services')}>Services</button></li>
                <li><button onClick={() => setCurrentPage('portfolio')}>Portfolio</button></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>Residential Design</li>
                <li>Commercial Spaces</li>
                <li>Kitchen & Bathroom</li>
                <li>Project Management</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>info@gharinto.com</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>+91-9876543210</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Mumbai, Maharashtra</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-clock"></i>
                  <span>Mon-Sat: 9AM-7PM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2024 Gharinto. All rights reserved.</p>
              <div className="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </div>
  );
}

// Enhanced Home Page Component
function HomePage({ setShowLogin }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Homeowner",
      location: "Mumbai",
      rating: 5,
      text: "Gharinto transformed our home beyond our expectations. The process was smooth, transparent, and the final result was absolutely stunning!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Meera Patel",
      role: "Interior Designer",
      location: "Delhi",
      rating: 5,
      text: "The designer portal helped me grow my business by 300%. The lead management and digital wallet features are game-changers!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b2a90000?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Project Manager",
      location: "Bangalore",
      rating: 5,
      text: "As a project manager, Gharinto's tools have made my job so much easier. Everything is organized and client communication is seamless.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="hero" id="hero" data-animate>
        <div className="hero-background">
          <div className="hero-bg-image">
            <img src="https://images.unsplash.com/photo-1572525621554-9013384b1d36" alt="Luxury Interior" />
            <div className="hero-overlay"></div>
          </div>
          <div className="floating-elements">
            <div className="floating-element element-1"></div>
            <div className="floating-element element-2"></div>
            <div className="floating-element element-3"></div>
          </div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className={`hero-text ${isVisible.hero ? 'animate-in' : ''}`}>
              <h1 className="hero-title">
                Transform Your Space with 
                <span className="gradient-text"> Gharinto</span>
              </h1>
              <p className="hero-subtitle">
                The complete interior design platform connecting builders, designers, customers, and suppliers for seamless project execution.
              </p>
              
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Happy Customers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Expert Designers</div>
                </div>
              </div>
              
              <div className="hero-actions">
                <button 
                  className="cta-primary gradient-btn"
                  onClick={() => setShowLogin(true)}
                >
                  <span>Get Started Today</span>
                  <div className="btn-glow"></div>
                </button>
                <button className="cta-secondary">
                  <span>Watch Demo</span>
                  <i className="fas fa-play"></i>
                </button>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="hero-cards">
                <div className="floating-card card-1">
                  <div className="card-icon">🎨</div>
                  <div className="card-content">
                    <h4>Professional Design</h4>
                    <p>Expert interior solutions</p>
                  </div>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">📊</div>
                  <div className="card-content">
                    <h4>Project Management</h4>
                    <p>Seamless execution</p>
                  </div>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">⚡</div>
                  <div className="card-content">
                    <h4>Fast Delivery</h4>
                    <p>On-time completion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="features modern-section" id="features" data-animate>
        <div className="container">
          <div className={`section-header ${isVisible.features ? 'animate-in' : ''}`}>
            <h2 className="section-title">Complete Interior Design Ecosystem</h2>
            <p className="section-subtitle">Everything you need for your dream interior in one platform</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card premium-card">
              <div className="card-header">
                <div className="feature-icon customers">
                  <i className="fas fa-users"></i>
                </div>
                <h3>For Customers</h3>
              </div>
              <p className="card-description">
                Track your project progress, view designs, make payments, and communicate with your team seamlessly.
              </p>
              <ul className="feature-list">
                <li><i className="fas fa-check"></i> Real-time project tracking</li>
                <li><i className="fas fa-check"></i> 3D design visualization</li>
                <li><i className="fas fa-check"></i> Secure payment gateway</li>
                <li><i className="fas fa-check"></i> Direct team communication</li>
              </ul>
              <button className="feature-btn">
                <span>Learn More</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            
            <div className="feature-card premium-card">
              <div className="card-header">
                <div className="feature-icon designers">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3>For Designers</h3>
              </div>
              <p className="card-description">
                Manage leads, create BOQs, track projects, and grow your business with our designer portal.
              </p>
              <ul className="feature-list">
                <li><i className="fas fa-check"></i> Lead management system</li>
                <li><i className="fas fa-check"></i> Digital wallet & payments</li>
                <li><i className="fas fa-check"></i> BOQ builder tools</li>
                <li><i className="fas fa-check"></i> Portfolio showcase</li>
              </ul>
              <button className="feature-btn">
                <span>Join Network</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            
            <div className="feature-card premium-card">
              <div className="card-header">
                <div className="feature-icon managers">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>For Managers</h3>
              </div>
              <p className="card-description">
                Monitor projects, manage teams, track progress, and ensure timely delivery with powerful tools.
              </p>
              <ul className="feature-list">
                <li><i className="fas fa-check"></i> Project management dashboard</li>
                <li><i className="fas fa-check"></i> Team coordination tools</li>
                <li><i className="fas fa-check"></i> Progress monitoring</li>
                <li><i className="fas fa-check"></i> Resource allocation</li>
              </ul>
              <button className="feature-btn">
                <span>Explore Tools</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            
            <div className="feature-card premium-card">
              <div className="card-header">
                <div className="feature-icon procurement">
                  <i className="fas fa-boxes"></i>
                </div>
                <h3>For Procurement</h3>
              </div>
              <p className="card-description">
                Manage inventory, track vendors, handle logistics, and streamline material procurement.
              </p>
              <ul className="feature-list">
                <li><i className="fas fa-check"></i> Inventory management</li>
                <li><i className="fas fa-check"></i> Vendor network</li>
                <li><i className="fas fa-check"></i> Order tracking</li>
                <li><i className="fas fa-check"></i> Quality assurance</li>
              </ul>
              <button className="feature-btn">
                <span>Get Started</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Preview */}
      <section className="portfolio-preview modern-section" id="portfolio" data-animate>
        <div className="container">
          <div className={`section-header ${isVisible.portfolio ? 'animate-in' : ''}`}>
            <h2 className="section-title">Our Recent Works</h2>
            <p className="section-subtitle">Discover stunning transformations by our expert designers</p>
          </div>
          
          <div className="portfolio-grid">
            {SAMPLE_DATA.portfolioItems.slice(0, 6).map((item, index) => (
              <div key={item.id} className="portfolio-item premium-card">
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <h4>{item.title}</h4>
                      <p className="portfolio-category">{item.category}</p>
                      <p className="portfolio-location">{item.location}</p>
                      <div className="portfolio-details">
                        <span className="portfolio-area">{item.area}</span>
                        <span className="portfolio-budget">{item.budget}</span>
                      </div>
                    </div>
                    <button className="view-btn">
                      <i className="fas fa-eye"></i>
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
                <div className="portfolio-content">
                  <div className="portfolio-designer">
                    <i className="fas fa-user-tie"></i>
                    <span>by {item.designer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="cta-secondary">
              <span>View Full Portfolio</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="testimonials modern-section" id="testimonials" data-animate>
        <div className="container">
          <div className={`section-header ${isVisible.testimonials ? 'animate-in' : ''}`}>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">Real stories from satisfied customers</p>
          </div>
          
          <div className="testimonial-carousel">
            <div className="testimonial-container">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`testimonial-slide ${index === currentTestimonial ? 'active' : ''}`}
                >
                  <div className="testimonial-content">
                    <div className="testimonial-header">
                      <div className="testimonial-avatar">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className="testimonial-info">
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.role}</p>
                        <span className="testimonial-location">{testimonial.location}</span>
                      </div>
                    </div>
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                    <p className="testimonial-text">"{testimonial.text}"</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="testimonial-controls">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process modern-section" id="process" data-animate>
        <div className="container">
          <div className={`section-header ${isVisible.process ? 'animate-in' : ''}`}>
            <h2 className="section-title">Our Design Process</h2>
            <p className="section-subtitle">From concept to completion, we ensure every detail is perfect</p>
          </div>
          
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Consultation</h3>
                <p>We start with understanding your vision, requirements, and budget to create a personalized design plan.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Design & Planning</h3>
                <p>Our expert designers create detailed 3D visualizations and comprehensive project plans.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Material Selection</h3>
                <p>Choose from our curated collection of premium materials and furnishings that match your style.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Execution</h3>
                <p>Our skilled craftsmen bring your design to life with precision and attention to detail.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">05</div>
              <div className="step-content">
                <h3>Handover</h3>
                <p>Final quality checks and walkthrough to ensure your complete satisfaction with the transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section modern-section" id="cta" data-animate>
        <div className="cta-background">
          <div className="cta-pattern"></div>
        </div>
        <div className="container">
          <div className={`cta-content ${isVisible.cta ? 'animate-in' : ''}`}>
            <h2>Ready to Transform Your Space?</h2>
            <p>Join thousands of satisfied customers who chose Gharinto for their interior design needs</p>
            <div className="cta-buttons">
              <button 
                className="cta-primary gradient-btn"
                onClick={() => setShowLogin(true)}
              >
                <span>Start Your Project</span>
                <div className="btn-glow"></div>
              </button>
              <button className="cta-secondary">
                <span>Schedule Consultation</span>
                <i className="fas fa-calendar-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Enhanced About Page Component
function AboutPage() {
  return (
    <div className="page-content">
      <section className="page-hero about-hero">
        <div className="hero-background">
          <img src="https://images.pexels.com/photos/5922204/pexels-photo-5922204.jpeg" alt="About Us" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="animate-fadeInUp">About Gharinto</h1>
            <p className="animate-fadeInUp delay-1">Revolutionizing interior design with technology and expertise</p>
          </div>
        </div>
      </section>

      <section className="about-story modern-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text animate-fadeInLeft">
              <h2>Our Story</h2>
              <p>Founded in 2023, Gharinto emerged from a simple observation: the interior design industry needed a comprehensive platform that could seamlessly connect all stakeholders - from customers with dreams to designers with vision, from project managers ensuring execution to procurement teams sourcing materials.</p>
              <p>Today, we've transformed over 500 spaces and built a network of 50+ expert designers, all working together on our integrated platform to deliver exceptional interior design experiences.</p>
              <div className="achievements">
                <div className="achievement">
                  <h3>500+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="achievement">
                  <h3>50+</h3>
                  <p>Expert Designers</p>
                </div>
                <div className="achievement">
                  <h3>1000+</h3>
                  <p>Happy Customers</p>
                </div>
                <div className="achievement">
                  <h3>98%</h3>
                  <p>Satisfaction Rate</p>
                </div>
              </div>
            </div>
            <div className="story-image animate-fadeInRight">
              <img src="https://images.unsplash.com/photo-1716703373020-17ff360924ee" alt="Our Team" />
            </div>
          </div>
        </div>
      </section>

      <section className="team-section modern-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">The creative minds behind Gharinto's success</p>
          </div>
          <div className="team-grid">
            {SAMPLE_DATA.teamMembers.map((member, index) => (
              <div key={index} className={`team-card premium-card animate-fadeInUp delay-${index + 1}`}>
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-overlay">
                    <div className="social-links">
                      <a href="#" className="social-link">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#" className="social-link">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="values-section modern-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">What drives us to deliver excellence</p>
          </div>
          <div className="values-grid">
            <div className="value-card premium-card">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>We continuously innovate to provide cutting-edge design solutions and seamless user experiences.</p>
            </div>
            <div className="value-card premium-card">
              <div className="value-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3>Quality</h3>
              <p>We maintain the highest standards in design, materials, and execution to exceed client expectations.</p>
            </div>
            <div className="value-card premium-card">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Trust</h3>
              <p>Building long-term relationships through transparency, reliability, and honest communication.</p>
            </div>
            <div className="value-card premium-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Collaboration</h3>
              <p>Working together with clients, designers, and partners to create extraordinary spaces.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Enhanced Services Page Component
function ServicesPage() {
  return (
    <div className="page-content">
      <section className="page-hero services-hero">
        <div className="hero-background">
          <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" alt="Our Services" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="animate-fadeInUp">Our Services</h1>
            <p className="animate-fadeInUp delay-1">Comprehensive interior design solutions for every need</p>
          </div>
        </div>
      </section>

      <section className="services-detailed modern-section">
        <div className="container">
          {SAMPLE_DATA.services.map((service, index) => (
            <div key={index} className={`service-detail ${index % 2 === 1 ? 'reverse' : ''} animate-fadeInUp delay-${index + 1}`}>
              <div className="service-image">
                <img src={service.image} alt={service.name} />
                <div className="service-overlay">
                  <div className="service-badge">
                    <i className="fas fa-star"></i>
                    <span>Premium</span>
                  </div>
                </div>
              </div>
              <div className="service-content">
                <h2>{service.name}</h2>
                <p className="service-description">{service.description}</p>
                <ul className="features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="service-footer">
                  <div className="service-price">{service.price}</div>
                  <button className="service-btn gradient-btn">
                    <span>Get Quote</span>
                    <div className="btn-glow"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="process-section modern-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Service Process</h2>
            <p className="section-subtitle">How we deliver exceptional results</p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3>Initial Consultation</h3>
              <p>We discuss your vision, requirements, and budget to understand your needs completely.</p>
            </div>
            
            <div className="process-step">
              <div className="step-icon">
                <i className="fas fa-pencil-ruler"></i>
              </div>
              <h3>Design Development</h3>
              <p>Our designers create detailed plans and 3D visualizations of your space.</p>
            </div>
            
            <div className="process-step">
              <div className="step-icon">
                <i className="fas fa-clipboard-check"></i>
              </div>
              <h3>Approval & Planning</h3>
              <p>Review and approve designs, then we create detailed project timelines and budgets.</p>
            </div>
            
            <div className="process-step">
              <div className="step-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>Implementation</h3>
              <p>Our skilled craftsmen execute the design with precision and attention to detail.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Enhanced Portfolio Page Component
function PortfolioPage() {
  const categories = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Bathroom', 'Office'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeCategory === 'All' 
    ? SAMPLE_DATA.portfolioItems 
    : SAMPLE_DATA.portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="page-content">
      <section className="page-hero portfolio-hero">
        <div className="hero-background">
          <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7" alt="Our Portfolio" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="animate-fadeInUp">Our Portfolio</h1>
            <p className="animate-fadeInUp delay-1">Explore our stunning interior design transformations</p>
          </div>
        </div>
      </section>

      <section className="portfolio-section modern-section">
        <div className="container">
          <div className="portfolio-filters animate-fadeInUp">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`portfolio-item premium-card animate-fadeInUp delay-${index + 1}`}
                onClick={() => setSelectedItem(item)}
              >
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <h4>{item.title}</h4>
                      <p className="portfolio-category">{item.category}</p>
                      <p className="portfolio-location">{item.location}</p>
                    </div>
                    <button className="view-btn">
                      <i className="fas fa-expand"></i>
                    </button>
                  </div>
                </div>
                <div className="portfolio-content">
                  <div className="portfolio-details">
                    <div className="portfolio-info">
                      <h4>{item.title}</h4>
                      <p className="portfolio-meta">{item.area} • {item.budget}</p>
                    </div>
                    <div className="portfolio-designer">
                      <i className="fas fa-user-tie"></i>
                      <span>{item.designer}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Modal */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="portfolio-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedItem(null)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-content">
              <div className="modal-image">
                <img src={selectedItem.image} alt={selectedItem.title} />
              </div>
              <div className="modal-info">
                <h3>{selectedItem.title}</h3>
                <p className="modal-category">{selectedItem.category}</p>
                <p className="modal-description">{selectedItem.description}</p>
                <div className="modal-details">
                  <div className="detail-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{selectedItem.location}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-ruler"></i>
                    <span>{selectedItem.area}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-dollar-sign"></i>
                    <span>{selectedItem.budget}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-user-tie"></i>
                    <span>{selectedItem.designer}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Enhanced Contact Page Component
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="page-content">
      <section className="page-hero contact-hero">
        <div className="hero-background">
          <img src="https://images.unsplash.com/photo-1637665728218-9d7ed64ae6c6" alt="Contact Us" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="animate-fadeInUp">Contact Us</h1>
            <p className="animate-fadeInUp delay-1">Get in touch with our interior design experts</p>
          </div>
        </div>
      </section>

      <section className="contact-section modern-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info animate-fadeInLeft">
              <h2>Get In Touch</h2>
              <p>Ready to transform your space? Contact our team of experts today.</p>
              
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <p>info@gharinto.com</p>
                    <p>support@gharinto.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <p>+91-9876543210</p>
                    <p>+91-9876543211</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Office</h4>
                    <p>123 Design Street</p>
                    <p>Mumbai, Maharashtra 400001</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Hours</h4>
                    <p>Monday - Saturday: 9AM - 7PM</p>
                    <p>Sunday: 10AM - 5PM</p>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            <form className="contact-form animate-fadeInRight" onSubmit={handleSubmit}>
              <h3>Send us a Message</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="project">New Project</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label>Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  required
                />
              </div>
              
              <button type="submit" className="submit-btn gradient-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <i className="fas fa-paper-plane"></i>
                  </>
                )}
                <div className="btn-glow"></div>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// Enhanced Login Modal Component
function LoginModal({ onClose }) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      if (login(email, password)) {
        onClose();
      } else {
        setError('Invalid credentials. Please try demo accounts below.');
      }
      setLoading(false);
    }, 1000);
  };

  const quickLogin = (userType) => {
    const user = SAMPLE_USERS[userType];
    setEmail(user.email);
    setPassword(user.password);
    setError('');
  };

  return (
    <div className="modal-overlay animate-fadeIn" onClick={onClose}>
      <div className="login-modal animate-slideInUp" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <div className="logo-icon">🏠</div>
            <div>
              <h3>Welcome to Gharinto</h3>
              <p>Sign in to your account</p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <div className="input-group">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          
          {error && <div className="error animate-shake">{error}</div>}
          
          <button type="submit" className="login-submit gradient-btn" disabled={loading}>
            {loading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                <span>Signing In...</span>
              </>
            ) : (
              <>
                <span>Sign In</span>
                <i className="fas fa-sign-in-alt"></i>
              </>
            )}
            <div className="btn-glow"></div>
          </button>
        </form>

        <div className="demo-accounts">
          <h4>Try Demo Accounts:</h4>
          <div className="demo-grid">
            <button onClick={() => quickLogin(ROLES.ADMIN)} className="demo-card">
              <div className="demo-icon">
                <i className="fas fa-user-shield"></i>
              </div>
              <div className="demo-info">
                <h5>Admin Dashboard</h5>
                <p>Full system control</p>
              </div>
            </button>
            <button onClick={() => quickLogin(ROLES.PM)} className="demo-card">
              <div className="demo-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <div className="demo-info">
                <h5>Project Manager</h5>
                <p>Project oversight</p>
              </div>
            </button>
            <button onClick={() => quickLogin(ROLES.CUSTOMER)} className="demo-card">
              <div className="demo-icon">
                <i className="fas fa-home"></i>
              </div>
              <div className="demo-info">
                <h5>Customer Portal</h5>
                <p>Track your project</p>
              </div>
            </button>
            <button onClick={() => quickLogin(ROLES.DESIGNER)} className="demo-card">
              <div className="demo-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <div className="demo-info">
                <h5>Designer Portal</h5>
                <p>Manage designs</p>
              </div>
            </button>
            <button onClick={() => quickLogin(ROLES.PROCUREMENT)} className="demo-card">
              <div className="demo-icon">
                <i className="fas fa-boxes"></i>
              </div>
              <div className="demo-info">
                <h5>Procurement</h5>
                <p>Inventory management</p>
              </div>
            </button>
            <button onClick={() => quickLogin(ROLES.VENDOR)} className="demo-card">
              <div className="demo-icon">
                <i className="fas fa-store"></i>
              </div>
              <div className="demo-info">
                <h5>Vendor Portal</h5>
                <p>Supply chain hub</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading Gharinto...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LandingPage />;
  }

  // Return appropriate dashboard based on user role
  switch (user.role) {
    case ROLES.ADMIN:
      return <AdminDashboard />;
    case ROLES.PM:
      return <PMDashboard />;
    case ROLES.CUSTOMER:
      return <CustomerPortal />;
    case ROLES.DESIGNER:
      return <DesignerDashboard />;
    case ROLES.PROCUREMENT:
      return <ProcurementPortal />;
    case ROLES.VENDOR:
      return <VendorPortal />;
    default:
      return <LandingPage />;
  }
}


// Wrap App with AuthProvider
function AppRoot() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

export default AppRoot;