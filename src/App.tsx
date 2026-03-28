import React, { useState, useEffect } from 'react';
import { 
  Car, 
  Smile, 
  Award, 
  Gauge, 
  Fuel, 
  Settings, 
  Tag, 
  CheckCircle, 
  FileSignature, 
  Headset, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Menu,
  X,
  MessageCircle
} from 'lucide-react';
import { motion } from 'motion/react';

// --- Data ---

const CARS = [
  {
    id: 1,
    title: "2022 BMW 3 Series M-Sport",
    price: "$42,500",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
    badge: "Great Deal",
    specs: { mileage: "15k mi", fuel: "Gas", transmission: "Auto" }
  },
  {
    id: 2,
    title: "2021 Mercedes-Benz C-Class",
    price: "$38,900",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
    badge: "Pristine",
    specs: { mileage: "22k mi", fuel: "Hybrid", transmission: "Auto" }
  },
  {
    id: 3,
    title: "2020 Audi A4 Premium Plus",
    price: "$31,200",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80",
    badge: "Low Mileage",
    specs: { mileage: "18k mi", fuel: "Gas", transmission: "Auto" }
  },
  {
    id: 4,
    title: "2023 Porsche 911 Carrera",
    price: "$115,000",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
    badge: "Best Seller",
    specs: { mileage: "5k mi", fuel: "Gas", transmission: "Auto PDK" }
  },
  {
    id: 5,
    title: "2021 Toyota Camry SE",
    price: "$22,500",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80",
    badge: "Reliable",
    specs: { mileage: "35k mi", fuel: "Gas", transmission: "Auto" }
  },
  {
    id: 6,
    title: "2020 Range Rover Velar",
    price: "$48,900",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
    badge: "Family SUV",
    specs: { mileage: "28k mi", fuel: "Diesel", transmission: "Auto" }
  }
];

const FEATURES = [
  {
    icon: <Tag className="w-8 h-8" />,
    title: "Best Price Guarantee",
    description: "We match or beat any competitor's written offer on identical vehicles."
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Verified Cars",
    description: "Every vehicle passes a strict 150-point inspection for quality and safety."
  },
  {
    icon: <FileSignature className="w-8 h-8" />,
    title: "Fast Paperwork",
    description: "Get approved and finish your paperwork in less than 45 minutes."
  },
  {
    icon: <Headset className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Our dedicated team is always available to help you after your purchase."
  }
];

const REVIEWS = [
  {
    id: 1,
    name: "John Doe",
    initials: "JD",
    text: "\"I bought my BMW 3 Series from AutoDrive. The process was incredibly smooth, and they gave me the best rate possible. Highly recommended!\"",
    stars: 5
  },
  {
    id: 2,
    name: "Sarah Allen",
    initials: "SA",
    text: "\"Fast, transparent, and honest. I requested a quote online and drove away with my dream car the exact same day. Amazing team.\"",
    stars: 5
  },
  {
    id: 3,
    name: "Michael Ross",
    initials: "MR",
    text: "\"I appreciated the no-pressure sales environment. They let me test drive multiple cars and answered all my questions patiently.\"",
    stars: 5
  }
];

// --- Components ---

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  key?: React.Key;
}

const FadeUp = ({ children, delay = 0 }: FadeUpProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const car = formData.get('carInterest');

    setIsSubmitting(true);
    setTimeout(() => {
      alert(`Thank you, ${name}! We have received your request for the ${car}. One of our agents will call you at ${phone} shortly.`);
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 ${
          isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className={`text-2xl font-extrabold flex items-center gap-2 ${isScrolled ? 'text-primary-dark' : 'text-white'}`}>
            <Car className="text-accent-orange" /> AutoDrive
          </a>
          
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#inventory" className={`font-medium transition-colors hover:text-accent-orange ${isScrolled ? 'text-primary-dark' : 'text-white'}`}>Browse Cars</a>
            <a href="#why-us" className={`font-medium transition-colors hover:text-accent-orange ${isScrolled ? 'text-primary-dark' : 'text-white'}`}>Why Us</a>
            <a href="#reviews" className={`font-medium transition-colors hover:text-accent-orange ${isScrolled ? 'text-primary-dark' : 'text-white'}`}>Reviews</a>
            <a href="#contact" className="bg-accent-orange hover:bg-accent-hover text-white px-6 py-2 rounded-lg font-semibold transition-all shadow-lg shadow-orange-500/40">Get Quote</a>
          </nav>

          <button 
            className={`lg:hidden text-2xl ${isScrolled ? 'text-primary-dark' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[60] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-0 right-0 w-64 h-full bg-white shadow-2xl p-8 transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button className="absolute top-6 right-6 text-primary-dark" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={28} />
          </button>
          <div className="flex flex-col gap-6 mt-12">
            <a href="#inventory" className="text-xl font-semibold text-primary-dark border-b pb-2" onClick={() => setIsMobileMenuOpen(false)}>Browse Cars</a>
            <a href="#why-us" className="text-xl font-semibold text-primary-dark border-b pb-2" onClick={() => setIsMobileMenuOpen(false)}>Why Us</a>
            <a href="#reviews" className="text-xl font-semibold text-primary-dark border-b pb-2" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
            <a href="#contact" className="text-xl font-semibold text-accent-orange" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-[url('https://images.unsplash.com/photo-1503376712351-46bb6ccda4d4?auto=format&fit=crop&w=1920&q=80')] bg-center bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary-dark/40" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeUp>
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">Find Your Perfect Car Today</h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-10">Best deals. Verified sellers. Lightning-fast paperwork. Drive home your dream car in under 24 hours.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#inventory" className="inline-flex items-center justify-center gap-2 bg-accent-orange hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl shadow-orange-500/40 transform hover:-translate-y-1">
                  <Car size={20} /> Browse Cars
                </a>
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white text-primary-dark hover:bg-transparent hover:text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
                  <Phone size={20} /> Contact Us
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Trust Stats */}
      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <FadeUp>
          <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center border border-slate-100">
            <div className="flex flex-col items-center">
              <Car className="text-accent-orange w-12 h-12 mb-4" />
              <h3 className="text-3xl font-bold text-primary-dark">500+</h3>
              <p className="text-slate-500 font-medium">Cars Sold</p>
            </div>
            <div className="flex flex-col items-center">
              <Smile className="text-accent-orange w-12 h-12 mb-4" />
              <h3 className="text-3xl font-bold text-primary-dark">1,000+</h3>
              <p className="text-slate-500 font-medium">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="text-accent-orange w-12 h-12 mb-4" />
              <h3 className="text-3xl font-bold text-primary-dark">100%</h3>
              <p className="text-slate-500 font-medium">Trusted & Verified</p>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Featured Inventory */}
      <section id="inventory" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <FadeUp>
            <h2 className="text-4xl font-bold text-center text-primary-dark mb-4">Featured Inventory</h2>
            <p className="text-center text-slate-500 text-lg mb-16 max-w-2xl mx-auto">Hand-picked premium cars at unbeatable prices.</p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CARS.map((car, idx) => (
              <FadeUp key={car.id} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-slate-200 group">
                  <div className="relative h-64 overflow-hidden">
                    <span className="absolute top-4 left-4 z-10 bg-accent-orange text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      {car.badge}
                    </span>
                    <img 
                      src={car.image} 
                      alt={car.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary-dark mb-2">{car.title}</h3>
                    <p className="text-2xl font-extrabold text-accent-orange mb-6">{car.price}</p>
                    <div className="flex justify-between items-center py-4 border-y border-slate-100 mb-6 text-sm text-slate-500 font-medium">
                      <span className="flex items-center gap-1.5"><Gauge className="w-4 h-4 text-primary-dark" /> {car.specs.mileage}</span>
                      <span className="flex items-center gap-1.5"><Fuel className="w-4 h-4 text-primary-dark" /> {car.specs.fuel}</span>
                      <span className="flex items-center gap-1.5"><Settings className="w-4 h-4 text-primary-dark" /> {car.specs.transmission}</span>
                    </div>
                    <a href="#contact" className="block w-full text-center bg-accent-orange hover:bg-accent-hover text-white py-3 rounded-xl font-bold transition-all shadow-lg shadow-orange-500/20">
                      View Details
                    </a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          
          <FadeUp>
            <div className="text-center mt-12">
              <a href="#contact" className="inline-block px-8 py-3 border-2 border-primary-dark text-primary-dark font-bold rounded-xl hover:bg-primary-dark hover:text-white transition-all">
                View All Inventory
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeUp>
            <h2 className="text-4xl font-bold text-center text-primary-dark mb-4">Why Buy From AutoDrive?</h2>
            <p className="text-center text-slate-500 text-lg mb-16 max-w-2xl mx-auto">We redefine the car buying experience.</p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <FadeUp key={idx} delay={idx * 0.1}>
                <div className="p-8 bg-white rounded-2xl text-center border border-slate-100 shadow-sm hover:border-accent-orange transition-colors group">
                  <div className="w-16 h-16 bg-orange-50 text-accent-orange rounded-full flex items-center justify-center mx-auto mb-6 transition-colors group-hover:bg-accent-orange group-hover:text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <FadeUp>
            <h2 className="text-4xl font-bold text-center mb-4">What Our Customers Say</h2>
            <p className="text-center text-slate-300 text-lg mb-16 max-w-2xl mx-auto">Over 1,000+ 5-star reviews from happy drivers.</p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <FadeUp key={review.id} delay={idx * 0.1}>
                <div className="bg-primary-light p-8 rounded-2xl relative h-full flex flex-col">
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    {[...Array(review.stars)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-200 italic mb-8 flex-grow leading-relaxed">{review.text}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center font-bold text-lg">
                      {review.initials}
                    </div>
                    <span className="font-bold text-lg">{review.name}</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Form */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <FadeUp>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 border border-slate-100">
              {/* Contact Info */}
              <div className="lg:col-span-2 bg-primary-dark text-white p-12">
                <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
                <p className="text-slate-300 mb-10">Ready to upgrade your ride? Call us, message us, or visit our showroom.</p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-accent-orange">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-bold">Location</p>
                      <p className="text-slate-300">123 Auto Parkway, Motor City, NY 10001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-accent-orange">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-bold">Phone</p>
                      <a href="tel:+1234567890" className="text-slate-300 hover:text-accent-orange transition-colors">+1 (234) 567-890</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-accent-orange">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <p className="font-bold">WhatsApp</p>
                      <a href="https://wa.me/1234567890" target="_blank" className="text-slate-300 hover:text-accent-orange transition-colors">Chat with us directly</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-accent-orange">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-bold">Email</p>
                      <a href="mailto:sales@autodrive.com" className="text-slate-300 hover:text-accent-orange transition-colors">sales@autodrive.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3 p-12">
                <h3 className="text-3xl font-bold text-primary-dark mb-2">Get Your Dream Car Today</h3>
                <p className="text-slate-500 mb-8">Fill out the form below and our agents will contact you within 15 minutes.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Your Full Name" 
                      required 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-orange focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Phone Number" 
                      required 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-orange focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      name="carInterest" 
                      placeholder="Which car are you interested in? (e.g. BMW 3 Series)" 
                      required 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-orange focus:bg-white transition-all"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-accent-orange hover:bg-accent-hover text-white py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-orange-500/30 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2 animate-pulse"><Send size={20} /> Sending...</span>
                    ) : (
                      <span className="flex items-center gap-2"><Send size={20} /> Submit Request</span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-slate-300 pt-20 pb-10 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <a href="#" className="text-3xl font-extrabold text-white flex items-center gap-2 mb-6">
                <Car className="text-accent-orange" /> AutoDrive
              </a>
              <p className="max-w-md mb-8 leading-relaxed">Your premium car buying destination. Quality cars, transparent pricing, and exceptional customer service.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent-orange transition-all"><Facebook size={20} /></a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent-orange transition-all"><Instagram size={20} /></a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent-orange transition-all"><Twitter size={20} /></a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent-orange transition-all"><Youtube size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-xl mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#home" className="hover:text-accent-orange transition-colors">Home</a></li>
                <li><a href="#inventory" className="hover:text-accent-orange transition-colors">Inventory</a></li>
                <li><a href="#why-us" className="hover:text-accent-orange transition-colors">Why Choose Us</a></li>
                <li><a href="#reviews" className="hover:text-accent-orange transition-colors">Testimonials</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-xl mb-6">Business Hours</h4>
              <ul className="space-y-4">
                <li>Mon - Fri: 9:00 AM - 8:00 PM</li>
                <li>Saturday: 10:00 AM - 6:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} AutoDrive. All Rights Reserved. Built for Conversions.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center text-3xl shadow-2xl z-50 animate-bounce hover:scale-110 transition-transform"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
