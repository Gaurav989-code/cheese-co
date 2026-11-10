import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Menu,
  X,
  Check,
  Sparkles,
  ArrowUpRight,
  Phone,
  Clock,
  Navigation,
  MessageCircle,
  Mail,
  Star,
  Quote,
  Images,
} from "lucide-react";

import cafe1 from "./assets/images/cafe-1.jpg";
import cafe2 from "./assets/images/cafe-2.jpg";
import cafe3 from "./assets/images/cafe-3.jpg";
import cafe4 from "./assets/images/cafe-4.jpg";
import cafe5 from "./assets/images/cafe-5.jpg";
import cafe6 from "./assets/images/cafe-1.jpg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedReviewPhoto, setSelectedReviewPhoto] = useState(null);
  const [activeSection, setActiveSection] = useState("Home");

  const navItems = ["Home", "Menu", "About", "Gallery", "Reviews", "Contact"];

  const foodCategories = [
    {
      name: "Pizza",
      subtitle: "Hot & cheesy",
      target: "pizza",
      image: "/images/pizza.jpg",
    },
    {
      name: "Burgers",
      subtitle: "Big & juicy",
      target: "burgers",
      image: "/images/burger.png",
    },
    {
      name: "Pasta",
      subtitle: "Italian vibes",
      target: "pasta",
      image: "/images/pasta.webp",
    },
    {
      name: "Sandwiches",
      subtitle: "Fresh bites",
      target: "sandwiches",
      image: "/images/sandwich.webp",
    },
    {
      name: "Garlic Bread",
      subtitle: "Cheesy & toasted",
      target: "garlic-bread",
      image: "/images/garlic.jpg",
    },
    {
      name: "Momo's",
      subtitle: "Hot & tasty",
      target: "momos",
      image: "/images/momos.jpeg",
    },
    {
      name: "Cold Coffee",
      subtitle: "Cool & creamy",
      target: "cold-coffee",
      image: "/images/cold.jpg",
    },
    {
      name: "Milkshakes",
      subtitle: "Thick & delicious",
      target: "milkshakes",
      image: "/images/milk.jpg",
    },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Classic Cheese Pizza",
      category: "Pizza",
      price: "₹249",
      description: "Loaded with mozzarella cheese and our signature sauce.",
      image: "🍕",
      popular: true,
    },
    {
      id: 2,
      name: "Farm Fresh Pizza",
      category: "Pizza",
      price: "₹299",
      description: "Fresh vegetables, herbs and lots of delicious cheese.",
      image: "🍕",
      popular: false,
    },
    {
      id: 3,
      name: "Classic Cheese Burger",
      category: "Burgers",
      price: "₹179",
      description:
        "A juicy patty with cheese, fresh veggies and special sauce.",
      image: "🍔",
      popular: true,
    },
    {
      id: 4,
      name: "Loaded Burger",
      category: "Burgers",
      price: "₹229",
      description: "Extra cheese, crispy toppings and bold flavours.",
      image: "🍔",
      popular: false,
    },
    {
      id: 5,
      name: "Creamy White Pasta",
      category: "Pasta",
      price: "₹199",
      description: "Creamy, cheesy and perfectly seasoned pasta.",
      image: "🍝",
      popular: true,
    },
    {
      id: 6,
      name: "Spicy Red Pasta",
      category: "Pasta",
      price: "₹199",
      description: "Rich tomato sauce with herbs and a spicy kick.",
      image: "🍝",
      popular: false,
    },
    {
      id: 7,
      name: "Cold Coffee",
      category: "Drinks",
      price: "₹129",
      description: "Chilled, creamy and refreshing coffee.",
      image: "🥤",
      popular: true,
    },
    {
      id: 8,
      name: "Signature Mocktail",
      category: "Drinks",
      price: "₹149",
      description: "Refreshing flavours made for good vibes.",
      image: "🍹",
      popular: false,
    },
  ];

  const galleryImages = [
    {
      id: 1,
      image: cafe1,
      title: "The Perfect Vibe",
      size: "large",
    },
    {
      id: 2,
      image: cafe2,
      title: "Beautiful Interiors",
      size: "normal",
    },
    {
      id: 3,
      image: cafe3,
      title: "Good Times Together",
      size: "normal",
    },
    {
      id: 4,
      image: cafe4,
      title: "Your Favourite Corner",
      size: "wide",
    },
    {
      id: 5,
      image: cafe5,
      title: "Made For Memories",
      size: "normal",
    },
    {
      id: 6,
      image: cafe6,
      title: "The Cheese & Co. Experience",
      size: "normal",
    },
  ];

  const menuCategories = [
    {
      id: "cold-coffee",
      title: "Cold Coffee",
      subtitle: "Cool, creamy & refreshing",
      image: "/images/cold.jpg",

      items: [
        ["Cold Coffee (Thick)", "₹50"],
        ["Cold Coffee with Chocolate Crush", "₹80"],
        ["Cold Coffee with Rose Flavour", "₹90"],
        ["Hazelnut Cold Coffee", "₹100"],
        ["Thin Cold Coffee", "₹100"],
        ["Cold Coffee with Ice Cream", "₹100"],
      ],
    },

    {
      id: "milkshakes",
      title: "Milkshakes",
      subtitle: "Thick & delicious",

      image: "/images/milk.jpg",

      items: [
        ["Mango Milkshake", "₹80"],
        ["Strawberry Milkshake", "₹80"],
        ["Chocolate Milkshake", "₹100"],
        ["Pista Milkshake", "₹120"],
        ["Badam Milkshake", "₹120"],
        ["Oreo Milkshake", "₹120"],
        ["Brownie Shake", "₹150"],
      ],
    },

    {
      id: "pizza",
      title: "Pizza",
      subtitle: "Cheesy favourites",

      image: "/images/pizza.jpg",

      items: [
        ["Margherita Pizza", "₹150"],
        ["Corn & Cheese Pizza", "₹170"],
        ["Garlic Cheese Pizza", "₹170"],
        ["Veg Cheese Pizza", "₹190"],
        ["BBQ Paneer Pizza", "₹220"],
        ["Onion & Paprika Pizza", "₹200"],
        ["Paneer Tikka Pizza", "₹220"],
      ],
    },

    {
      id: "pasta",
      title: "Pasta",
      subtitle: "Italian comfort food",

      image: "/images/pasta.webp",

      items: [
        ["Alfredo White Sauce", "₹220"],
        ["Arrabbiata (Red Sauce)", "₹200"],
        ["Mac N Cheese (Bake)", "₹250"],
        ["Mac N Cheese (Red Sauce Bake)", "₹260"],
        ["Aglio e Olio", "₹260"],
        ["Spaghetti with Garlic & Olive Oil", "₹250"],
      ],
    },
  ];

  const cafeInfo = {
    name: "Cheese & Co. Cafe",

    rating: "4.3",

    totalReviews: 67,

    priceRange: "₹200–400",

    category: "Cafe",

    address:
      "Top 10, Imperial Shopping Hub, near Reliance Digital, Suyog Colony, Sangamner, Maharashtra 422605",

    phone: "919860600656",

    displayPhone: "098606 00656",

    // Replace with the official Instagram if available
    instagram: "https://instagram.com/",

    // WhatsApp can use the same number if WhatsApp is active on it
    whatsapp: "919860600656",

    openingHours: "Check Google for latest opening hours",

    // Search query used for Google Maps directions
    mapQuery:
      "Cheese & Co. Cafe, Top 10, Imperial Shopping Hub, near Reliance Digital, Suyog Colony, Sangamner, Maharashtra 422605",
  };

  const reviews = [
    {
      id: 1,
      name: "Prasad kale",
      rating: 5,
      date: "7 months ago",
      type: "Dine in | Brunch",
      text: "The ambience is wonderful and the place feels very comfortable. The food tastes great.",
      initial: "P",
    },
    {
      id: 2,
      name: "Laasya",
      rating: 5,
      date: "7 months ago",
      type: "Dine in | ₹200–400",
      text: "Food n ambience was 10/10. Pizza was really good, but waiting time after ordering was 45 mins.",
      initial: "L",
    },
    {
      id: 3,
      name: "Pradnya Kachale",
      rating: 5,
      date: "4 months ago",
      type: "Dine in | Breakfast | ₹200–400",
      text: "I had a wonderful experience at this cafeteria. From the moment I walked in, I was impressed by the warm and welcoming atmosphere. The place is clean, well-maintained, and has a comfortable ambiance.",
      initial: "P",
    },
  ];

  const reviewPhotos = [
    {
      id: 1,
      image: "/images/cafefood.jpg",
      alt: "Food at Cheese & Co. Cafe",
    },
    {
      id: 2,
      image: "/images/costomer.jpg",
      alt: "Customer food experience",
    },
    {
      id: 3,
      image: "/images/review-food-1.avif",
      alt: "Pizza at Cheese & Co. Cafe",
    },
    {
      id: 4,
      image: "/images/cafe-5.jpg",
      alt: "Cheese & Co. Cafe ambience",
    },
    {
      id: 5,
      image: "/images/cafe-1.jpg",
      alt: "Cafe interior",
    },
    {
      id: 6,
      image: "/images/momos.jpeg",
      alt: "Food review",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  // const handleNavigation = (target) => {
  //   const targetElement = document.querySelector(target);

  //   // Close mobile menu first
  //   setMenuOpen(false);

  //   if (!targetElement) return;

  //   // Small delay allows mobile menu animation to finish
  //   setTimeout(() => {
  //     window.lenis?.scrollTo(targetElement, {
  //       offset: -90,
  //       duration: 2.2,
  //       easing: (t) => 1 - Math.pow(1 - t, 4),
  //     });
  //   }, 350);
  // };

  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.8,
  //     smoothWheel: true,
  //     wheelMultiplier: 0.8,
  //     touchMultiplier: 1.3,
  //   });

  //   let animationFrameId;

  //   const raf = (time) => {
  //     lenis.raf(time);
  //     animationFrameId = requestAnimationFrame(raf);
  //   };

  //   animationFrameId = requestAnimationFrame(raf);

  //   // Smooth navigation for all # links
  //   const handleAnchorClick = (event) => {
  //     const link = event.target.closest('a[href^="#"]');

  //     if (!link) return;

  //     const target = link.getAttribute("href");

  //     if (!target || target === "#") return;

  //     const targetElement = document.querySelector(target);

  //     if (!targetElement) return;

  //     event.preventDefault();

  //     lenis.scrollTo(targetElement, {
  //       offset: -90,
  //       duration: 2.5, // slower navigation
  //       easing: (t) => 1 - Math.pow(1 - t, 4),
  //     });

  //     window.history.pushState(null, "", target);
  //   };

  //   document.addEventListener("click", handleAnchorClick);

  //   return () => {
  //     cancelAnimationFrame(animationFrameId);
  //     document.removeEventListener("click", handleAnchorClick);
  //     lenis.destroy();
  //   };
  // }, []);

  useEffect(() => {
  const lenis = new Lenis({
    duration: 1.8,
    smoothWheel: true,
    wheelMultiplier: 0.8,
    touchMultiplier: 1.3,
  });

  let animationFrameId;

  const raf = (time) => {
    lenis.raf(time);
    animationFrameId = requestAnimationFrame(raf);
  };

  animationFrameId = requestAnimationFrame(raf);

  // Smooth navigation for all internal links
  const handleAnchorClick = (event) => {
    const link = event.target.closest('a[href^="#"]');

    if (!link) return;

    const target = link.getAttribute("href");

    if (!target || target === "#") return;

    const targetElement = document.querySelector(target);

    if (!targetElement) return;

    event.preventDefault();

    // Close mobile menu safely
    setMenuOpen(false);

    // Small delay only when mobile menu may be open
    setTimeout(() => {
      lenis.scrollTo(targetElement, {
        offset: -80,
        duration: 2.8,
        easing: (t) => 1 - Math.pow(1 - t, 4),
      });

      window.history.pushState(null, "", target);
    }, 150);
  };

  document.addEventListener("click", handleAnchorClick);

  return () => {
    cancelAnimationFrame(animationFrameId);
    document.removeEventListener("click", handleAnchorClick);
    lenis.destroy();
  };
}, []);


  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.toLowerCase()),
      );

      const scrollPosition = window.scrollY + 180;

      let currentSection = "Home";

      sections.forEach((section) => {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          currentSection =
            section.id.charAt(0).toUpperCase() + section.id.slice(1);
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#06120f] text-white">
      {/* ================= NAVBAR ================= */}
      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 top-0 z-50 w-full">
        {/* ================= MAIN NAVBAR ================= */}
        <div className="border-b border-[#123c30]/40 bg-[#dfeeda]/90 shadow-[0_8px_30px_rgba(18,60,48,0.04)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
            {/* ================= LOGO ================= */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);

                requestAnimationFrame(() => {
                  window.lenis?.scrollTo("#home", {
                    duration: 2.2,
                    offset: -80,
                  });
                });
              }}
              className="group flex items-center gap-3"
            >
              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#123c30]/15 bg-white shadow-sm transition duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
                <img
                  src="/images/logo.jpg"
                  alt="Cheese & Co. Cafe"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="leading-tight">
                <h1 className="font-display text-lg font-bold tracking-wide text-[#123c30] sm:text-xl">
                  CHEESE & CO.
                </h1>

                <p className="mt-0.5 text-[8px] font-bold tracking-[0.35em] text-[#123c30]/50 sm:text-[9px]">
                  CAFE
                </p>
              </div>
            </a>

            {/* ================= DESKTOP NAVIGATION ================= */}
            <nav className="hidden items-center rounded-full border border-[#123c30]/10 bg-white/50 p-1.5 lg:flex">
              {navItems.map((item) => {
                const isMenu = item === "Menu";

                return (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();

                      const target = `#${item.toLowerCase()}`;

                      window.lenis?.scrollTo(target, {
                        duration: 2.2,
                        offset: -85,
                      });
                    }}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                      isMenu
                        ? "bg-[#d7f72a] text-[#07120e] shadow-md hover:scale-105 hover:bg-[#c7e91f]"
                        : "text-[#123c30]/65 hover:bg-[#123c30] hover:text-[#d7f72a]"
                    }`}
                  >
                    {item}
                  </a>
                );
              })}
            </nav>

            {/* ================= DESKTOP CTA ================= */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();

                window.lenis?.scrollTo("#contact", {
                  duration: 2.2,
                  offset: -85,
                });
              }}
              className="hidden items-center gap-2 rounded-full bg-[#123c30] px-5 py-3 text-sm font-bold text-[#d7f72a] shadow-lg transition duration-300 hover:scale-105 hover:bg-[#07120e] lg:flex"
            >
              <CalendarDays size={17} />
              Visit Us
              <ArrowRight size={17} />
            </a>

            {/* ================= MOBILE MENU BUTTON ================= */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className={`relative z-[60] flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 lg:hidden ${
                menuOpen
                  ? "border-[#123c30] bg-[#123c30] text-[#d7f72a] shadow-lg"
                  : "border-[#123c30]/15 bg-white/70 text-[#123c30]"
              }`}
            >
              <motion.div
                initial={false}
                animate={{
                  rotate: menuOpen ? 180 : 0,
                  scale: menuOpen ? 1.05 : 1,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
              >
                <AnimatePresence mode="wait">
                  {menuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={21} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={21} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* ================= OVERLAY ================= */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 top-[73px] z-40 bg-[#123c30]/10 backdrop-blur-[2px] lg:hidden"
              />

              {/* ================= MOBILE MENU PANEL ================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: -20,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-0 top-full z-50 w-full overflow-hidden border-b border-[#123c30]/10 bg-[#dfeeda]/95 shadow-2xl backdrop-blur-2xl lg:hidden"
              >
                {/* Decorative Background */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#d7f72a]/30 blur-[70px]" />

                <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#8eb69b]/20 blur-[70px]" />

                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: {
                      opacity: 0,
                    },
                    visible: {
                      opacity: 1,
                      transition: {
                        delayChildren: 0.08,
                        staggerChildren: 0.07,
                      },
                    },
                  }}
                  className="relative mx-auto max-w-7xl px-5 py-6"
                >
                  {/* ================= MOBILE BRAND ================= */}
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: -10,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    className="mb-5 flex items-center gap-3"
                  >
                    <div className="h-10 w-10 overflow-hidden rounded-full border border-[#123c30]/10 bg-white">
                      <img
                        src="/images/logo.jpg"
                        alt="Cheese & Co."
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div>
                      <p className="font-display text-lg font-bold text-[#123c30]">
                        CHEESE & CO.
                      </p>

                      <p className="text-[8px] font-bold tracking-[0.3em] text-[#123c30]/45">
                        GOOD FOOD • GOOD VIBES
                      </p>
                    </div>
                  </motion.div>

                  {/* ================= MOBILE NAVIGATION ================= */}
                  <div className="flex flex-col gap-2">
                    {navItems.map((item, index) => {
                      const isMenu = item === "Menu";

                      return (
                        <motion.a
                          key={item}
                          href={`#${item.toLowerCase()}`}
                          onClick={(e) => {
                            e.preventDefault();

                            const target = `#${item.toLowerCase()}`;

                            // Close menu first
                            setMenuOpen(false);

                            // Wait for menu closing animation
                            setTimeout(() => {
                              if (window.lenis) {
                                window.lenis.start();

                                window.lenis.scrollTo(target, {
                                  duration: 2.2,
                                  offset: -85,
                                  lock: false,
                                  immediate: false,
                                });
                              } else {
                                document.querySelector(target)?.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                              }
                            }, 350);
                          }}
                          variants={{
                            hidden: {
                              opacity: 0,
                              x: -25,
                            },
                            visible: {
                              opacity: 1,
                              x: 0,
                            },
                          }}
                          whileTap={{ scale: 0.98 }}
                          className={`group flex items-center justify-between rounded-2xl border px-5 py-4 text-base font-semibold transition-all duration-300 ${
                            isMenu
                              ? "border-[#d7f72a] bg-[#d7f72a] text-[#07120e] shadow-md"
                              : "border-[#123c30]/10 bg-white/55 text-[#123c30] hover:bg-[#123c30] hover:text-[#d7f72a]"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <span
                              className={`text-xs font-bold ${
                                isMenu
                                  ? "text-[#07120e]/50"
                                  : "text-[#123c30]/35 group-hover:text-[#d7f72a]/60"
                              }`}
                            >
                              0{index + 1}
                            </span>

                            <span>{item}</span>
                          </div>

                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full border transition duration-300 ${
                              isMenu
                                ? "border-[#07120e]/15 bg-[#123c30] text-[#d7f72a]"
                                : "border-[#123c30]/10 group-hover:border-[#d7f72a]/30 group-hover:bg-[#d7f72a] group-hover:text-[#123c30]"
                            }`}
                          >
                            <ArrowRight
                              size={16}
                              className="transition-transform duration-300 group-hover:translate-x-0.5"
                            />
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>

                  {/* ================= MOBILE CTA ================= */}
                  <motion.a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();

                      setMenuOpen(false);

                      setTimeout(() => {
                        window.lenis?.start();

                        window.lenis?.scrollTo("#contact", {
                          duration: 2.2,
                          offset: -85,
                          lock: false,
                        });
                      }, 350);
                    }}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 20,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="group mt-5 flex items-center justify-center gap-3 rounded-full bg-[#123c30] px-6 py-4 font-bold text-[#d7f72a] shadow-lg transition duration-300"
                  >
                    <CalendarDays size={18} />

                    <span>Visit Cheese & Co.</span>

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </motion.a>

                  {/* ================= BOTTOM TAGLINE ================= */}
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                      },
                      visible: {
                        opacity: 1,
                      },
                    }}
                    className="mt-5 flex items-center justify-center gap-2 text-center"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d7f72a]" />

                    <p className="text-[10px] font-bold tracking-[0.2em] text-[#123c30]/45">
                      FOOD • VIBES • MEMORIES
                    </p>

                    <span className="h-1.5 w-1.5 rounded-full bg-[#d7f72a]" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#d9e8d6] pt-24"
      >
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#8ab69c]/30 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[#f4d9a6]/30 blur-3xl" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-10 px-5 pb-12 pt-8 lg:grid-cols-2 lg:px-8">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#315b48]/20 bg-white/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#315b48] backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#315b48]" />
              Cheese & Co. Cafe
            </div>

            {/* Main heading */}
            <h1 className="mt-7 font-display text-5xl font-bold leading-[0.95] tracking-tight text-[#173d31] sm:text-6xl md:text-7xl lg:text-8xl">
              Pizza that brings
              <br />
              <span className="font-hand text-[#c68a38]">
                everyone together.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-relaxed text-[#315b48]/75 sm:text-lg">
              Fresh flavours, cheesy moments and a warm place made for
              conversations, memories and everyone you love.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#173d31] px-7 py-4 font-semibold text-white transition hover:scale-105"
              >
                Explore Menu
                <span>→</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#173d31]/20 bg-white/40 px-7 py-4 font-semibold text-[#173d31] backdrop-blur-md transition hover:bg-white"
              >
                Visit Us
              </a>
            </div>

            {/* Bottom mini stats */}
            <div className="mt-12 flex flex-wrap gap-7 border-t border-[#315b48]/15 pt-7">
              <div>
                <p className="font-display text-2xl font-bold text-[#173d31]">
                  4.3 ★
                </p>
                <p className="mt-1 text-xs text-[#315b48]/70">Google Rating</p>
              </div>

              <div>
                <p className="font-display text-2xl font-bold text-[#173d31]">
                  67+
                </p>
                <p className="mt-1 text-xs text-[#315b48]/70">Happy Reviews</p>
              </div>

              <div>
                <p className="font-display text-2xl font-bold text-[#173d31]">
                  ₹200–400
                </p>
                <p className="mt-1 text-xs text-[#315b48]/70">Average Cost</p>
              </div>
            </div>
          </motion.div>

          {/* ================= HERO IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="relative"
          >
            {/* Image shape */}
            <div className="relative overflow-hidden rounded-[40px] shadow-[0_30px_100px_rgba(23,61,49,0.25)]">
              <img
                src="/images/pizza.jpg"
                alt="Fresh pizza"
                className="h-[500px] w-full object-cover sm:h-[620px] lg:h-[720px]"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#173d31]/70 via-transparent to-transparent" />

              {/* Floating label */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute bottom-7 left-7 rounded-3xl bg-white/90 p-5 backdrop-blur-xl"
              >
                <p className="font-hand text-2xl font-bold text-[#c68a38]">
                  Made with love ❤️
                </p>

                <p className="mt-1 text-sm text-[#315b48]/70">
                  Fresh. Cheesy. Unforgettable.
                </p>
              </motion.div>
            </div>

            {/* Decorative circle */}
            <div className="absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full bg-[#f1c56b]/40 blur-2xl" />
          </motion.div>
        </div>
      </section>
      {/* ================= FOOD CATEGORIES ================= */}
      <section
        id="categories"
        className="relative overflow-hidden bg-[#06120f] px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        {/* Background ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#173d31]/30 blur-[130px]" />

        <div className="relative mx-auto max-w-[1600px]">
          {/* ================= HEADING ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-6xl text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#d7f72a] sm:text-sm">
              Explore Our Favorites
            </p>

            <h2 className="mt-5 font-display text-4xl font-bold uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Something for{" "}
              <span className="text-[#d7f72a]">every craving.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base lg:text-lg">
              From cheesy pizzas and juicy burgers to refreshing drinks and
              delicious bites — there is something waiting for you.
            </p>
          </motion.div>

          {/* ================= CATEGORY CARDS ================= */}
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {foodCategories.map((category, index) => (
              <motion.button
                key={category.target}
                type="button"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  document.getElementById(category.target)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="group relative min-h-[350px] overflow-hidden rounded-[28px] border border-white/10 text-left shadow-2xl"
              >
                {/* FULL CARD BACKGROUND IMAGE */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06120f] via-[#06120f]/60 to-[#06120f]/10" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#d7f72a]/0 transition duration-500 group-hover:bg-[#06120f]/10" />

                {/* Top category number */}
                <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-bold tracking-[0.2em] text-white backdrop-blur-md">
                  0{index + 1}
                </div>

                {/* CONTENT */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="mb-2 text-sm text-white/60">
                    {category.subtitle}
                  </p>

                  <div className="flex items-end justify-between gap-4">
                    <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
                      {category.name}
                    </h3>

                    {/* Arrow Button */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d7f72a]/70 bg-[#06120f]/60 text-[#d7f72a] backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:scale-110 group-hover:bg-[#d7f72a] group-hover:text-[#06120f]">
                      <ArrowUpRight size={22} />
                    </div>
                  </div>

                  {/* Animated bottom line */}
                  <div className="mt-5 h-[2px] w-full overflow-hidden bg-white/20">
                    <div className="h-full w-0 bg-[#d7f72a] transition-all duration-700 group-hover:w-full" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* ================= VIEW FULL MENU ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 flex justify-center"
          >
            <button
              type="button"
              onClick={() => {
                document.getElementById("menu")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="group inline-flex items-center gap-4 rounded-full border border-[#d7f72a]/60 bg-[#0b1d18] px-7 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-[#d7f72a] hover:text-[#06120f]"
            >
              View Full Menu
              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </motion.div>
        </div>
      </section>
      {/* ================= ABOUT SECTION ================= */}
      <section
        id="about"
        className="relative overflow-hidden bg-[#dcebd8] px-5 py-24 text-[#123f35] lg:px-8"
      >
        {/* Background effects */}
        <div className="absolute left-[-150px] top-[20%] h-[400px] w-[400px] rounded-full bg-[#31c48d]/10 blur-[150px]" />

        <div className="absolute bottom-0 right-[-100px] h-[350px] w-[350px] rounded-full bg-[#d7f72a]/20 blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* ================= IMAGE COLLAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[520px]"
          >
            {/* Main Image */}
            <div className="absolute left-0 top-0 h-[390px] w-[70%] overflow-hidden rounded-[32px] border border-[#123f35]/10">
              <img
                src={cafe1}
                alt="Cheese & Co. Cafe interior"
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            {/* Top Right Image */}
            <div className="absolute right-0 top-10 h-[200px] w-[45%] overflow-hidden rounded-[26px] border border-[#123f35]/10 shadow-2xl">
              <img
                src={cafe4}
                alt="Cafe seating"
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            {/* Bottom Right Image */}
            <div className="absolute bottom-0 right-0 h-[240px] w-[55%] overflow-hidden rounded-[28px] border border-[#123f35]/10 shadow-2xl">
              <img
                src={cafe5}
                alt="Cheese and Co Cafe vibe"
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            {/* Experience Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-10 left-[38%] z-20 flex h-32 w-32 -translate-x-1/2 flex-col items-center justify-center rounded-full border-4 border-[#d7f72a] bg-[#123f35] text-center shadow-[0_0_50px_rgba(18,63,53,0.15)]"
            >
              <span className="text-3xl font-bold text-[#d7f72a]">5+</span>

              <span className="mt-1 text-xs text-white/70">
                Years
                <br />
                Experience
              </span>

              <span className="mt-1 text-[#d7f72a]">♥</span>
            </motion.div>

            {/* Small decorative label */}
            <div className="absolute bottom-5 left-0 rounded-full border border-[#123f35]/15 bg-white/70 px-4 py-2 text-xs tracking-widest text-[#123f35]/70 backdrop-blur-xl">
              CHEESE & CO. CAFE
            </div>
          </motion.div>

          {/* ================= ABOUT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#c98b2e]">
              About Our Cafe
            </p>

            <h2 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
              COME FOR THE FOOD.
              <br />
              STAY FOR THE <span className="text-[#c98b2e]">VIBE.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-[#123f35]/70">
              At Cheese & Co. Cafe, we believe great food tastes even better in
              a great atmosphere. From cheesy comfort food to refreshing drinks,
              every visit is made for delicious moments and unforgettable
              memories.
            </p>

            {/* Features */}
            <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-5">
              {[
                "Quality Ingredients",
                "Freshly Prepared",
                "Great Atmosphere",
                "Made With Love",
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#123f35] text-[#d7f72a]">
                    <Check size={14} strokeWidth={3} />
                  </div>

                  <span className="text-sm font-semibold text-[#123f35]/80">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Button */}
            <a
              href="#gallery"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#123f35] px-7 py-4 font-bold text-white transition hover:scale-105 hover:bg-[#0b2c24]"
            >
              Explore Our Cafe
              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            {/* Bottom line */}
            <div className="mt-12 h-px w-full bg-gradient-to-r from-[#123f35]/30 via-[#123f35]/10 to-transparent" />
          </motion.div>
        </div>
      </section>
      {/* ================= LET'S GET CHEESY ================= */}
      <section className="relative overflow-hidden bg-[#d7f72a] px-5 py-24 text-[#07120e] lg:px-8 lg:py-32">
        {/* ================= DECORATIVE BACKGROUND ================= */}

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-10 h-[300px] w-[300px] rounded-full border border-[#07120e]/10" />

          <div className="absolute -right-20 bottom-[-100px] h-[380px] w-[380px] rounded-full border border-[#07120e]/10" />

          <div className="absolute bottom-[8%] left-[35%] h-28 w-28 rounded-full bg-[#07120e]/5 blur-sm" />

          {/* Soft background glow */}
          <div className="absolute right-[10%] top-[20%] h-[450px] w-[450px] rounded-full bg-[#07120e]/5 blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* ================= TOP LABEL ================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-3"
          >
            <Sparkles size={18} />

            <span className="text-center text-sm font-bold uppercase tracking-[0.35em]">
              Our Cheesy Promise
            </span>

            <Sparkles size={18} />
          </motion.div>

          {/* ================= MAIN CONTENT ================= */}

          <div className="relative mt-12 grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            {/* ================= LEFT CONTENT ================= */}

            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-5 text-lg font-medium italic sm:text-xl"
              >
                Warning: Serious cravings ahead 😋
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display text-7xl font-black leading-[0.8] tracking-[-0.06em] sm:text-8xl md:text-9xl lg:text-[8.5rem]"
              >
                LET'S
                <br />
                GET
                <br />
                <span className="font-hand font-bold tracking-normal">
                  CHEESY!
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-10 max-w-md text-base leading-relaxed text-[#07120e]/70 sm:text-lg"
              >
                Extra cheese. Extra flavour. Extra happiness. From our kitchen
                straight to your table — every bite is made to make you smile.
              </motion.p>

              <motion.a
                href="#menu-preview"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#07120e] px-7 py-4 font-bold text-[#d7f72a] shadow-xl transition"
              >
                Explore The Menu
                <ArrowUpRight size={19} />
              </motion.a>
            </div>

            {/* ================= RIGHT VISUAL ================= */}

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 80,
              }}
              className="relative flex min-h-[460px] items-center justify-center sm:min-h-[540px]"
            >
              {/* ================= BACKGROUND CIRCLE ================= */}

              <div className="absolute h-[320px] w-[320px] rounded-full bg-[#07120e]/10 shadow-[0_0_100px_rgba(7,18,14,0.08)] sm:h-[430px] sm:w-[430px]" />

              {/* ================= OUTER CIRCLE ================= */}

              <div className="absolute h-[390px] w-[390px] rounded-full border border-[#07120e]/15 sm:h-[510px] sm:w-[510px]" />

              {/* ================= CIRCULAR ROTATING TEXT ================= */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute z-20 h-[390px] w-[390px] sm:h-[510px] sm:w-[510px]"
              >
                <svg
                  viewBox="0 0 500 500"
                  className="h-full w-full overflow-visible"
                >
                  <defs>
                    {/* Perfect circular path */}
                    <path
                      id="cheeseCircleText"
                      d="
                  M 250,250
                  m -210,0
                  a 210,210 0 1,1 420,0
                  a 210,210 0 1,1 -420,0
                "
                      fill="none"
                    />
                  </defs>

                  {/* Text following the FULL circular path */}
                  <text
                    fill="#07120e"
                    fontSize="17"
                    fontWeight="900"
                    letterSpacing="2.5"
                  >
                    <textPath href="#cheeseCircleText" startOffset="0%">
                      CHEESE • FOOD • LOVE • VIBES • CHEESE • FOOD • LOVE •
                      VIBES • CHEESE • FOOD • LOVE • VIBES • CHEESE • FOOD •
                      LOVE • VIBES •
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* ================= MAIN BURGER ================= */}

              <motion.div
                animate={{
                  y: [0, -18, 0],
                  rotate: [0, 1, 0, -1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 flex flex-col items-center"
              >
                {/* Burger image */}

                <div className="relative">
                  <div className="absolute inset-0 scale-110 rounded-full bg-[#d7f72a]/30 blur-3xl" />

                  <img
                    src="/images/burger.png"
                    alt="Delicious Cheese Burger"
                    className="relative h-[240px] w-[240px] object-contain drop-shadow-2xl sm:h-[340px] sm:w-[340px]"
                  />
                </div>

                {/* Burger Label */}

                <div className="relative z-30 mt-[-5px] rounded-full bg-[#07120e] px-7 py-3 shadow-2xl">
                  <p className="text-center text-xs font-bold tracking-[0.25em] text-[#d7f72a] sm:text-sm">
                    EXTRA CHEESE PLEASE 🧀
                  </p>
                </div>
              </motion.div>

              {/* ================= FLOATING CHEESE ================= */}

              <motion.div
                animate={{
                  y: [0, -18, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-[2%] top-[20%] z-30"
              >
                <div className="text-5xl drop-shadow-lg sm:text-6xl">🧀</div>
              </motion.div>

              {/* ================= FLOATING PIZZA ================= */}

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[8%] right-[2%] z-30"
              >
                <div className="text-5xl drop-shadow-lg sm:text-6xl">🍕</div>
              </motion.div>
            </motion.div>
          </div>

          {/* ================= BOTTOM MARQUEE ================= */}

          <div className="mt-16 overflow-hidden border-y border-[#07120e]/15 py-5 sm:mt-20">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max gap-10 whitespace-nowrap font-display text-3xl font-black tracking-tight sm:gap-14 sm:text-5xl"
            >
              <span>MORE CHEESE</span>
              <span>•</span>
              <span>MORE FLAVOUR</span>
              <span>•</span>
              <span>MORE HAPPINESS</span>
              <span>•</span>

              {/* Duplicate for seamless animation */}

              <span>MORE CHEESE</span>
              <span>•</span>
              <span>MORE FLAVOUR</span>
              <span>•</span>
              <span>MORE HAPPINESS</span>
              <span>•</span>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ================= MENU ================= */}
      <section
        id="menu"
        className="relative overflow-hidden bg-[#f5eddf] px-5 py-24 text-[#173d31] lg:px-8 lg:py-32"
      >
        {/* ================= DECORATIVE BACKGROUND ================= */}
        <div className="pointer-events-none absolute -left-20 top-32 h-72 w-72 rounded-full bg-[#8ab69c]/20 blur-3xl" />

        <div className="pointer-events-none absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-[#d5a85e]/20 blur-3xl" />

        <div className="pointer-events-none absolute left-[8%] top-[15%] h-32 w-32 rounded-full border border-[#315b48]/10" />

        <div className="pointer-events-none absolute bottom-[8%] right-[10%] h-20 w-20 rounded-full border border-[#c68a38]/20" />

        <div className="relative mx-auto max-w-7xl">
          {/* ================= HEADING ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            {/* Handwritten Label */}
            <p className="font-hand text-2xl font-bold text-[#c68a38] sm:text-3xl">
              Made fresh for you
            </p>

            {/* Main Title */}
            <h2 className="mt-2 font-menu text-6xl leading-none tracking-wide text-[#315b48] sm:text-7xl md:text-8xl">
              OUR MENU
            </h2>

            {/* Accent Line */}
            <div className="mx-auto mt-5 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-[#c68a38]/50" />

              <span className="h-2 w-2 rotate-45 bg-[#c68a38]" />

              <div className="h-px w-12 bg-[#c68a38]/50" />
            </div>

            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-[#315b48]/70">
              From cheesy pizzas to refreshing coffees, there's something
              delicious waiting for everyone.
            </p>
          </motion.div>

          {/* ================= MENU GRID ================= */}
          <div className="mt-14 grid gap-7 lg:mt-16 lg:grid-cols-2">
            {menuCategories.map((category, index) => (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[32px] border border-[#315b48]/10 bg-[#5d907c] shadow-[0_20px_60px_rgba(23,61,49,0.12)]"
              >
                {/* ================= CARD CONTENT ================= */}
                <div className="grid h-full md:grid-cols-[1.05fr_0.95fr]">
                  {/* ================= MENU DETAILS ================= */}
                  <div className="relative z-10 flex flex-col p-6 sm:p-8">
                    {/* Category Number */}
                    <span className="mb-3 font-menu text-sm tracking-[0.3em] text-[#f1c56b]">
                      {String(index + 1).padStart(2, "0")} / CATEGORY
                    </span>

                    {/* Title */}
                    <div className="border-b border-[#f5eddf]/25 pb-5">
                      <h3 className="font-menu text-4xl leading-none tracking-wide text-white sm:text-5xl">
                        {category.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-white/65">
                        {category.subtitle}
                      </p>
                    </div>

                    {/* ================= MENU ITEMS ================= */}
                    <div className="mt-6 space-y-4">
                      {category.items.map(([name, price]) => (
                        <div
                          key={name}
                          className="group/item flex items-end gap-3"
                        >
                          <span className="text-sm font-medium text-white sm:text-base">
                            {name}
                          </span>

                          <div className="mb-[5px] flex-1 border-b border-dotted border-white/30 transition group-hover/item:border-[#f1c56b]" />

                          <span className="shrink-0 font-bold text-[#f5eddf]">
                            {price}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Small Bottom Text */}
                    <p className="mt-auto pt-7 text-xs font-medium tracking-wide text-white/40">
                      MADE FRESH • SERVED WITH LOVE
                    </p>
                  </div>

                  {/* ================= IMAGE ================= */}
                  <div className="relative min-h-[280px] overflow-hidden md:min-h-full">
                    <img
                      src={category.image}
                      alt={category.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#173d31]/70 via-[#173d31]/10 to-transparent" />

                    {/* Category Label */}
                    <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#173d31]/60 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                      Cheese & Co.
                    </div>

                    {/* Large Number */}
                    <div className="pointer-events-none absolute bottom-[-10px] right-4 font-menu text-8xl leading-none text-white/20 sm:text-9xl">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Hover View */}
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-between bg-[#173d31]/90 p-5 text-white transition duration-500 group-hover:translate-y-0">
                      <span className="text-sm font-bold">
                        Fresh & Delicious
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1c56b] text-[#173d31]">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* ================= BOTTOM CTA ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative mt-16 overflow-hidden rounded-[35px] bg-[#173d31] p-8 text-center text-white shadow-2xl sm:p-12"
          >
            {/* Background Decoration */}
            <div className="pointer-events-none absolute left-1/2 top-[-150px] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#d9e8d6]/5 blur-[100px]" />

            <div className="relative">
              <p className="font-hand text-3xl text-[#f1c56b] sm:text-4xl">
                Hungry already?
              </p>

              <h3 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-5xl">
                COME, EAT & MAKE MEMORIES.
              </h3>

              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/50">
                Bring your friends, bring your appetite and leave with a smile.
              </p>

              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#d9e8d6] px-7 py-4 font-bold text-[#173d31] transition duration-300 hover:scale-105 hover:bg-white"
              >
                Visit Cheese & Co. Cafe
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ================= GALLERY ================= */}
      <section
        id="gallery"
        className="relative overflow-hidden bg-[#0b2a21] px-5 py-24 lg:px-8 lg:py-32"
      >
        {/* ================= BACKGROUND EFFECTS ================= */}
        <div className="pointer-events-none absolute right-[-180px] top-[5%] h-[500px] w-[500px] rounded-full bg-[#31c48d]/10 blur-[170px]" />

        <div className="pointer-events-none absolute bottom-[-220px] left-[-180px] h-[500px] w-[500px] rounded-full bg-[#d7f72a]/10 blur-[180px]" />

        {/* Decorative Circles */}
        <div className="pointer-events-none absolute left-[5%] top-[20%] h-40 w-40 rounded-full border border-[#d7f72a]/10" />

        <div className="pointer-events-none absolute right-[8%] bottom-[12%] h-24 w-24 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-7xl">
          {/* ================= HEADING ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
          >
            <div className="max-w-3xl">
              {/* Small Label */}
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-[#d7f72a]" />

                <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#d7f72a]">
                  Step Inside
                </p>
              </div>

              <h2 className="mt-5 font-display text-4xl font-bold leading-[0.95] sm:text-5xl md:text-6xl">
                MORE THAN JUST
                <br />A PLACE TO <span className="text-[#d7f72a]">EAT.</span>
              </h2>
            </div>

            {/* Description Card */}
            <div className="max-w-md rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
              <p className="leading-relaxed text-white/60">
                A space created for good food, good conversations, great
                pictures and unforgettable memories.
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#d7f72a]">
                <span className="h-2 w-2 rounded-full bg-[#d7f72a]" />
                FOOD • VIBES • MEMORIES
              </div>
            </div>
          </motion.div>

          {/* ================= GALLERY GRID ================= */}
          <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-4">
            {galleryImages.map((item, index) => {
              const sizeClasses =
                item.size === "large"
                  ? "col-span-2 row-span-2"
                  : item.size === "wide"
                    ? "col-span-2"
                    : "";

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  initial={{
                    opacity: 0,
                    y: 35,
                    scale: 0.96,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                  }}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedImage(item)}
                  className={`group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#10261f] text-left shadow-2xl ${sizeClasses}`}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07120e]/95 via-[#07120e]/20 to-transparent opacity-80 transition duration-500 group-hover:opacity-95" />

                  {/* Lime Border Effect */}
                  <div className="absolute inset-0 rounded-[24px] border border-transparent transition duration-500 group-hover:border-[#d7f72a]/60" />

                  {/* Image Number */}
                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#07120e]/70 text-xs font-bold text-white/70 backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* View Button */}
                  <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-[-10px] items-center justify-center rounded-full bg-[#d7f72a] text-[#07120e] opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    ↗
                  </div>

                  {/* Text */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#d7f72a] opacity-0 transition duration-300 group-hover:opacity-100">
                      Cheese & Co. Moment
                    </p>

                    <h3 className="translate-y-4 font-display text-xl font-bold text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#d7f72a] transition-all duration-500 group-hover:w-full" />
                </motion.button>
              );
            })}
          </div>

          {/* ================= GALLERY INFO ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-12 grid gap-5 md:grid-cols-[1.2fr_0.8fr]"
          >
            {/* Quote */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#07120e]/50 p-7 sm:p-10">
              {/* Quote decoration */}
              <span className="absolute right-6 top-[-20px] font-serif text-[130px] leading-none text-[#d7f72a]/10">
                “
              </span>

              <p className="relative max-w-2xl font-display text-2xl italic leading-relaxed text-white/90 sm:text-3xl">
                “Good food tastes even better when shared with good company.”
              </p>

              <div className="relative mt-6 flex items-center gap-3">
                <div className="h-px w-10 bg-[#d7f72a]" />

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d7f72a]">
                  Cheese & Co. Cafe
                </p>
              </div>
            </div>

            {/* CTA Card */}
            <div className="flex flex-col justify-between rounded-[28px] bg-[#d7f72a] p-7 text-[#07120e] sm:p-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-60">
                  Come Create Memories
                </p>

                <h3 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
                  YOUR NEXT
                  <br />
                  FAVOURITE
                  <br />
                  MEMORY STARTS
                  <br />
                  HERE.
                </h3>
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#07120e] px-6 py-4 text-sm font-bold text-[#d7f72a] transition duration-300 hover:scale-105"
              >
                Visit Cheese & Co.
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= GALLERY LIGHTBOX ================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#06120f]/95 p-4 backdrop-blur-xl sm:p-8"
          >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7f72a]/10 blur-[180px]" />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 22,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0b2a21] shadow-2xl"
            >
              {/* ================= TOP BAR ================= */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d7f72a]">
                    Cheese & Co. Moment
                  </p>

                  <h3 className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
                    {selectedImage.title}
                  </h3>
                </div>

                {/* Close */}
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[#d7f72a] hover:bg-[#d7f72a] hover:text-[#07120e]"
                  aria-label="Close image"
                >
                  <X size={20} />
                </button>
              </div>

              {/* ================= IMAGE ================= */}
              <div className="relative flex min-h-0 flex-1 items-center justify-center bg-[#06120f]">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[65vh] w-full object-contain"
                />

                {/* Image gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#06120f]/50 to-transparent" />
              </div>

              {/* ================= BOTTOM INFO ================= */}
              <div className="flex flex-col gap-3 border-t border-white/10 bg-[#0b2a21] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <p className="text-sm text-white/55">
                  Good food • Good vibes • Great memories
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#d7f72a] transition hover:text-white"
                >
                  Close Gallery
                  <X size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ================= GOOGLE REVIEWS ================= */}
      <section
        id="reviews"
        className="relative overflow-hidden bg-[#f3ead8] px-5 py-24 text-[#12352b] lg:px-8 lg:py-32"
      >
        {/* ================= DECORATIVE BACKGROUND ================= */}

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[#b8d6bd]/40 blur-[100px]" />

          <div className="absolute -right-32 bottom-10 h-[450px] w-[450px] rounded-full bg-[#d7f72a]/20 blur-[120px]" />

          <div className="absolute left-[8%] top-[12%] h-40 w-40 rounded-full border border-[#12352b]/10" />

          <div className="absolute right-[6%] top-[28%] h-64 w-64 rounded-full border border-[#12352b]/10" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* ================= HEADING ================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#12352b]/15 bg-white/50 px-5 py-2">
              <Sparkles size={16} />

              <span className="text-xs font-bold uppercase tracking-[0.3em]">
                Google Reviews
              </span>
            </div>

            <h2 className="mt-6 font-display text-5xl font-bold leading-[0.95] sm:text-6xl md:text-7xl">
              THEY CAME.
              <br />
              <span className="font-hand text-[#c9872d]">THEY LOVED IT.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#12352b]/60 sm:text-lg">
              Real stories, real smiles and delicious memories shared by our
              wonderful guests.
            </p>
          </motion.div>

          {/* ================= RATING FEATURE ================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto mt-16 overflow-hidden rounded-[40px] border border-[#12352b]/10 bg-[#12352b] p-7 text-white shadow-2xl sm:p-10"
          >
            {/* Background decoration */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d7f72a]/10 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr_1fr]">
              {/* Big Rating */}

              <div className="border-b border-white/10 pb-8 text-center lg:border-b-0 lg:border-r lg:pb-0">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d7f72a]">
                  Overall Rating
                </p>

                <div className="mt-3 font-display text-8xl leading-none text-white">
                  {cafeInfo.rating}
                </div>

                <div className="mt-4 flex justify-center gap-1 text-[#f5c518]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={21} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-4 text-sm text-white/50">
                  Based on {cafeInfo.totalReviews} happy guests
                </p>
              </div>

              {/* Rating Bars */}

              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
                  Guest Ratings
                </p>

                {[
                  { stars: 5, width: "100%" },
                  { stars: 4, width: "8%" },
                  { stars: 3, width: "4%" },
                  { stars: 2, width: "2%" },
                  { stars: 1, width: "3%" },
                ].map((item) => (
                  <div key={item.stars} className="flex items-center gap-4">
                    <span className="flex w-7 items-center gap-1 text-sm text-white/60">
                      {item.stars}
                      <Star size={12} fill="currentColor" />
                    </span>

                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: item.width }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.2,
                        }}
                        className="h-full rounded-full bg-[#d7f72a]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Message */}

              <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-6 text-center backdrop-blur-xl">
                <div className="text-5xl">♥</div>

                <h3 className="mt-4 font-display text-3xl text-[#d7f72a]">
                  MADE WITH LOVE
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  Every plate, every drink and every moment is made to give you
                  something worth remembering.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================= REVIEW CARDS ================= */}

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.article
                key={review.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  rotate: index % 2 === 0 ? -1 : 1,
                }}
                className="group relative flex min-h-[330px] flex-col rounded-[32px] border border-[#12352b]/10 bg-[#fffaf0] p-7 shadow-[0_20px_60px_rgba(18,53,43,0.08)] transition"
              >
                {/* Quote decoration */}

                <Quote
                  size={58}
                  className="absolute right-6 top-5 text-[#d7f72a]/70"
                />

                {/* Top */}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d7f72a] font-bold text-[#12352b]">
                      {review.initial}
                    </div>

                    <div>
                      <h3 className="font-bold text-[#12352b]">
                        {review.name}
                      </h3>

                      <p className="mt-1 text-xs text-[#12352b]/45">
                        {review.date}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stars */}

                <div className="mt-7 flex gap-1 text-[#c9872d]">
                  {Array.from({
                    length: review.rating,
                  }).map((_, i) => (
                    <Star key={i} size={17} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#12352b]/40">
                  {review.type}
                </p>

                {/* Review Text */}

                <p className="mt-5 flex-1 text-base leading-relaxed text-[#12352b]/70">
                  “{review.text}”
                </p>

                {/* Footer */}

                <div className="mt-7 flex items-center justify-between border-t border-[#12352b]/10 pt-5">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#12352b]/50">
                    Google Review
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-[#c9872d] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </motion.article>
            ))}
          </div>

          {/* ================= REVIEW PHOTOS ================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-28"
          >
            {/* Photo Heading */}

            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#c9872d]">
                  <Images size={18} />

                  <span className="text-sm font-bold uppercase tracking-[0.25em]">
                    From Our Guests
                  </span>
                </div>

                <h3 className="mt-4 font-display text-4xl leading-none sm:text-5xl">
                  FOOD, VIBES &
                  <br />
                  <span className="font-hand text-[#c9872d]">MEMORIES.</span>
                </h3>
              </div>

              <p className="max-w-sm text-sm leading-relaxed text-[#12352b]/55">
                Real moments shared by the people who make Cheese & Co. Cafe
                feel like home.
              </p>
            </div>

            {/* ================= PHOTO GRID ================= */}

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
              {reviewPhotos.map((photo, index) => (
                <motion.button
                  key={photo.id}
                  type="button"
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  onClick={() => setSelectedReviewPhoto(photo)}
                  className={`group relative overflow-hidden rounded-[28px] border border-[#12352b]/10 bg-[#12352b]/5 shadow-lg ${
                    index === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <img
                    src={photo.image}
                    alt={photo.alt}
                    className={`h-full w-full object-cover transition duration-700 group-hover:scale-110 ${
                      index === 0 ? "min-h-[420px]" : "aspect-square"
                    }`}
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#12352b]/80 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* View Button */}

                  <div className="absolute bottom-5 left-5 flex translate-y-4 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#12352b] opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Images size={16} />
                    View photo
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#123c30] px-5 py-20 text-white lg:px-8 lg:py-24"
      >
        {/* Background Effects */}
        <div className="pointer-events-none absolute bottom-[-180px] left-[-150px] h-[420px] w-[420px] rounded-full bg-[#d7f72a]/10 blur-[150px]" />

        <div className="pointer-events-none absolute right-[-150px] top-[-100px] h-[350px] w-[350px] rounded-full bg-[#8eb69b]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* ================= HEADING ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#d7f72a]">
              Visit Us
            </p>

            <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              FIND YOUR WAY TO
              <br />
              <span className="text-[#d7f72a]">CHEESE & CO.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/60">
              Good food, great ambience and good memories are waiting for you.
            </p>
          </motion.div>

          {/* ================= MAIN LAYOUT ================= */}
          <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            {/* ================= MAP ================= */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="relative h-[280px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0d2b22] sm:h-[340px] lg:h-[400px]"
            >
              {/* Map Label */}
              <div className="pointer-events-none absolute left-4 top-4 z-10 rounded-full bg-[#123c30]/90 px-4 py-2 text-xs font-bold tracking-wide text-[#d7f72a] shadow-lg backdrop-blur-md">
                📍 CHEESE & CO. CAFE
              </div>

              <iframe
                title="Cheese & Co. Cafe Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  cafeInfo.mapQuery,
                )}&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Bottom Gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#123c30]/30 to-transparent" />
            </motion.div>

            {/* ================= CONTACT DETAILS ================= */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="rounded-[28px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm lg:p-7"
            >
              {/* Cafe Name + Rating */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d7f72a]">
                    Cheese & Co. Cafe
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-bold text-white">
                    COME HUNGRY.
                    <br />
                    LEAVE HAPPY.
                  </h3>
                </div>

                <div className="rounded-2xl border border-[#d7f72a]/20 bg-[#d7f72a]/10 px-4 py-3 text-center">
                  <div className="text-lg font-bold text-[#d7f72a]">
                    ⭐ {cafeInfo.rating}
                  </div>

                  <p className="mt-1 text-[10px] text-white/50">
                    {cafeInfo.totalReviews} reviews
                  </p>
                </div>
              </div>

              <div className="my-6 h-px bg-white/10" />

              {/* ================= INFO ================= */}
              <div className="space-y-5">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d7f72a] text-[#123c30]">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">Address</h3>

                    <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                      {cafeInfo.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#d7f72a]">
                    <Phone size={19} />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">Phone</h3>

                    <a
                      href={`tel:+${cafeInfo.phone}`}
                      className="mt-1.5 block text-sm text-white/60 transition hover:text-[#d7f72a]"
                    >
                      {cafeInfo.displayPhone}
                    </a>
                  </div>
                </div>

                {/* Price */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lg font-bold text-[#d7f72a]">
                    ₹
                  </div>

                  <div>
                    <h3 className="font-bold text-white">Average Cost</h3>

                    <p className="mt-1.5 text-sm text-white/60">
                      {cafeInfo.priceRange} per person
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= BUTTONS ================= */}
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {/* Directions */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    cafeInfo.mapQuery,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#d7f72a] px-4 py-3.5 text-sm font-bold text-[#123c30] transition duration-300 hover:scale-[1.02] hover:bg-white"
                >
                  <Navigation size={17} />
                  Directions
                </a>

                {/* Call */}
                <a
                  href={`tel:+${cafeInfo.phone}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3.5 text-sm font-bold text-white transition duration-300 hover:border-[#d7f72a] hover:text-[#d7f72a]"
                >
                  <Phone size={17} />
                  Call
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${cafeInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3.5 text-sm font-bold text-white transition duration-300 hover:border-[#d7f72a] hover:text-[#d7f72a]"
                >
                  <MessageCircle size={17} />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* ================= QUICK MESSAGE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-8 flex flex-col items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] px-6 py-5 sm:flex-row"
          >
            <div>
              <p className="font-bold text-white">
                Ready for some cheesy goodness? 🧀
              </p>

              <p className="mt-1 text-sm text-white/55">
                Find us, call us or send us a message anytime.
              </p>
            </div>

            <a
              href="#menu"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#d7f72a]/40 px-5 py-3 text-sm font-bold text-[#d7f72a] transition hover:bg-[#d7f72a] hover:text-[#123c30]"
            >
              Explore Menu
              <ArrowRight size={17} />
            </a>
          </motion.div>
        </div>
      </section>
      {/* ================= FOOTER ================= */}
      <footer className="relative overflow-hidden border-t border-[#123c30]/10 bg-[#dfeeda] px-5 pt-20 text-[#123c30] lg:px-8">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#d7f72a]/40 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[#8eb69b]/20 blur-[100px]" />

        {/* Background text */}
        <div className="pointer-events-none absolute -bottom-[5px] lg-bottom-[-25px] left-1/2 -translate-x-1/2 whitespace-nowrap font-serif text-[14vw] font-black leading-none tracking-[-0.08em] text-[#123c30]/8">
          CHEESE & CO.
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* ================= TOP ================= */}
          <div className="grid gap-12 border-b border-[#123c30]/10 pb-14 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">
            {/* ================= BRAND ================= */}
            <div>
              <div className="flex items-center gap-4">
                {/* Real Logo */}
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-[#123c30]/15 bg-white shadow-sm">
                  <img
                    src="/images/logo.jpg"
                    alt="Cheese & Co. Cafe"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-[#123c30]">
                    CHEESE & CO.
                  </h2>

                  <p className="mt-1 text-[10px] font-bold tracking-[0.35em] text-[#123c30]/50">
                    CAFE
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-sm leading-relaxed text-[#123c30]/65">
                Good food. Good vibes. Great memories. Your favourite place to
                eat, relax and make unforgettable memories.
              </p>

              {/* Social Buttons */}
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={cafeInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#123c30]/15 bg-white/60 text-[#123c30] transition duration-300 hover:scale-110 hover:border-[#123c30] hover:bg-[#123c30] hover:text-[#d7f72a]"
                >
                  <Clock size={18} />
                </a>

                <a
                  href={`https://wa.me/${cafeInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#123c30]/15 bg-white/60 text-[#123c30] transition duration-300 hover:scale-110 hover:border-[#123c30] hover:bg-[#123c30] hover:text-[#d7f72a]"
                >
                  <MessageCircle size={18} />
                </a>

                <a
                  href={`tel:+${cafeInfo.phone}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#123c30]/15 bg-white/60 text-[#123c30] transition duration-300 hover:scale-110 hover:border-[#123c30] hover:bg-[#123c30] hover:text-[#d7f72a]"
                >
                  <Phone size={18} />
                </a>

                <a
                  href={`mailto:${cafeInfo.email}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#123c30]/15 bg-white/60 text-[#123c30] transition duration-300 hover:scale-110 hover:border-[#123c30] hover:bg-[#123c30] hover:text-[#d7f72a]"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* ================= EXPLORE ================= */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#123c30]">
                Explore
              </h3>

              <div className="mt-6 flex flex-col gap-4">
                {[
                  ["Home", "#home"],
                  ["Menu", "#menu"],
                  ["About Us", "#about"],
                  ["Gallery", "#gallery"],
                ].map(([label, link]) => (
                  <a
                    key={label}
                    href={link}
                    className="group flex items-center gap-2 text-sm font-medium text-[#123c30]/60 transition hover:text-[#123c30]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d7f72a] transition group-hover:scale-150" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* ================= CONTACT ================= */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#123c30]">
                Contact
              </h3>

              <div className="mt-6 flex flex-col gap-4">
                <a
                  href={`tel:+${cafeInfo.phone}`}
                  className="text-sm font-medium text-[#123c30]/60 transition hover:text-[#123c30]"
                >
                  +{cafeInfo.phone}
                </a>

                <a
                  href={`mailto:${cafeInfo.email}`}
                  className="break-all text-sm font-medium text-[#123c30]/60 transition hover:text-[#123c30]"
                >
                  {cafeInfo.email}
                </a>

                <span className="max-w-xs text-sm leading-relaxed text-[#123c30]/60">
                  {cafeInfo.address}
                </span>
              </div>
            </div>

            {/* ================= CTA ================= */}
            <div className="relative overflow-hidden rounded-[30px] bg-[#123c30] p-7 text-white shadow-xl">
              {/* Glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#d7f72a]/20 blur-2xl" />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d7f72a]">
                  Hungry?
                </p>

                <h3 className="mt-4 font-display text-3xl font-bold leading-tight">
                  LET'S GET
                  <br />
                  <span className="text-[#d7f72a]">CHEESY.</span>
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  Come hungry. Leave happy. We’ll take care of the rest.
                </p>

                <a
                  href="#contact"
                  className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#d7f72a] px-5 py-3 text-sm font-bold text-[#07120e] transition duration-300 hover:scale-105 hover:bg-white"
                >
                  Visit Us
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM ================= */}
          <div className="relative flex flex-col gap-5 py-8 text-center text-xs text-[#123c30]/50 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p>
              © {new Date().getFullYear()} Cheese & Co. Cafe. All rights
              reserved.
            </p>

            <div className="flex justify-center gap-6">
              <a href="#" className="transition hover:text-[#123c30]">
                Privacy
              </a>

              <a href="#" className="transition hover:text-[#123c30]">
                Terms
              </a>
            </div>

            <p className="font-medium text-[#123c30]/40">
              Made with ♥ & lots of cheese
            </p>
          </div>
        </div>
      </footer>
      {/* ================= REVIEW PHOTO LIGHTBOX ================= */}
      <AnimatePresence>
        {selectedReviewPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedReviewPhoto(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 backdrop-blur-md"
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedReviewPhoto(null)}
              className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur-xl transition hover:bg-[#d7f72a] hover:text-[#07120e]"
            >
              ×
            </button>

            {/* Image */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              src={selectedReviewPhoto.image}
              alt={selectedReviewPhoto.alt}
              className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
