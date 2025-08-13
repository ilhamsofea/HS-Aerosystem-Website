import "./Header.css";
import { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Journey from "./Journey";
import Mission from "./Mission";
import Certification from "./Certification";
import Team from "./Team";
import Customer from "./Customer";
import News from "./News";
import NewsDetail from "./NewsDetail";
import Activity from "./Activity";
import ProductApp from "./ProductApp";
import ProcessCap from "./ProcessCap";
import Recognition from "./Recognition";
import Csr from "./Csr";
import Hear from "./Hear";
import Career from "./Career";
import LogoWhite from "./Logo";
import ScrollToHash from "./ScrollToHash";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setShowNavbar(!(y > lastScrollY.current && y > 100));
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", sidebarOpen);
  }, [sidebarOpen]);

  const toggleExpand = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  return (
    <>
      <header
        className={`topbar ${scrolled ? "scrolled" : ""} ${
          showNavbar ? "visible" : "hidden"
        }`}
      >
        <div className="left-section">
          <div
            className="desktop-hamburger"
            onClick={() => setSidebarOpen(true)}
          >
            ☰ Menu
          </div>
          <div className="logo">
            <Link
              to="/home"
              onClick={() => {
                setSidebarOpen(false);
                setExpandedMenu(null);
              }}
            >
              {scrolled ? (
                <img
                  className="topbar-logo"
                  src="/assets/Hs_Logo_dark.png"
                  alt="HS Logo Dark"
                />
              ) : (
                <LogoWhite />
              )}
            </Link>
          </div>
        </div>

        <nav className="global-nav">
          <Link to="/career">Career</Link>
          <Link to="/home#contact-us">Contact Us</Link>
        </nav>

        {/* Mobile Sidebar */}
        <div
          className="mobile-hamburger"
          onClick={() => setMobileNavOpen(true)}
        >
          ☰
        </div>

        <nav className={`mobile-nav ${mobileNavOpen ? "open" : ""}`}>
          <div className="mobile-close" onClick={() => setMobileNavOpen(false)}>
            ✕
          </div>
          <ul>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/product">Core Capabilities</Link>
            </li>
            <li>
              <Link to="/process">News & Updates</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Desktop Sidebar */}
      <aside className={`desktop-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="logo">
            <Link
              to="/home"
              onClick={() => {
                setSidebarOpen(false);
                setExpandedMenu(null);
              }}
            >
              <img src="/assets/Hs_Logo_dark.png" />
            </Link>
          </div>
          <div className="sidebar-close" onClick={() => setSidebarOpen(false)}>
            ✕
          </div>
        </div>

        <div className="sidebar-body">
          {!expandedMenu && (
            <ul className="sidebar-menu">
              <li onClick={() => toggleExpand("about")}>
                <span>
                  About Us <span>›</span>
                </span>
              </li>
              <li onClick={() => toggleExpand("people")}>
                <span>
                  Our People <span>›</span>
                </span>
              </li>
              <li onClick={() => toggleExpand("capabilities")}>
                <span>
                  Core Capabilities <span>›</span>
                </span>
              </li>
              <li onClick={() => toggleExpand("updates")}>
                <span>
                  News & Updates <span>›</span>
                </span>
              </li>
            </ul>
          )}

          {expandedMenu && (
            <div className="submenu-view">
              <div
                className="submenu-back"
                onClick={() => setExpandedMenu(null)}
              >
                ‹ Back
              </div>

              {expandedMenu === "about" && (
                <>
                  <h3 className="expanded-title">About Us</h3>
                  <ul className="submenu-list">
                    <li>
                      <Link
                        to="/aboutus"
                        onClick={() => {
                          setSidebarOpen(false);
                          setExpandedMenu(null);
                        }}
                      >
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/journey"
                        onClick={() => {
                          setSidebarOpen(false);
                          setExpandedMenu(null);
                        }}
                      >
                        Our Journey
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/mission"
                        onClick={() => {
                          setSidebarOpen(false);
                          setExpandedMenu(null);
                        }}
                      >
                        Vision, Mission, Value
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/team"
                        onClick={() => {
                          setSidebarOpen(false);
                          setExpandedMenu(null);
                        }}
                      >
                        Leadership & Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/certification"
                        onClick={() => {
                          setSidebarOpen(false);
                          setExpandedMenu(null);
                        }}
                      >
                        Approvals & Certification
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/customer"
                        onClick={() => {
                          setSidebarOpen(false);
                          setExpandedMenu(null);
                        }}
                      >
                        Our Customers
                      </Link>
                    </li>
                  </ul>
                </>
              )}

              {expandedMenu === "people" && (
                <>
                  <h3 className="expanded-title">Our People</h3>
                  <ul className="submenu-list">
                    <li>
                      <Link
                        to="/recognition"
                        onClick={() => {
                          setSidebarOpen(false);
                          setExpandedMenu(null);
                        }}
                      >
                        Employee Recognition
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/csr"
                        onClick={() => {
                          setSidebarOpen(false);
                          setExpandedMenu(null);
                        }}
                      >
                        Corporate Social Responsibility
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/hear"
                        onClick={() => {
                          setSidebarOpen(false);
                          setExpandedMenu(null);
                        }}
                      >
                        Hear From Our Employees
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/career"
                        onClick={() => {
                          setSidebarOpen(false);
                          setExpandedMenu(null);
                        }}
                      >
                        Career
                      </Link>
                    </li>
                  </ul>
                </>
              )}

              {expandedMenu === "capabilities" && (
                <>
                  <h3 className="expanded-title">Core Capabilities</h3>
                  <ul className="submenu-list">
                    <li>
                      <Link
                        to="/process"
                        onClick={() => {
                          setSidebarOpen(false);
                          setExpandedMenu(null);
                        }}
                      >
                        Process Capability
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/product"
                        onClick={() => {
                          setSidebarOpen(false);
                          setExpandedMenu(null);
                        }}
                      >
                        Sample Products
                      </Link>
                    </li>
                  </ul>
                </>
              )}

              {expandedMenu === "updates" && (
                <>
                  <h3 className="expanded-title">News & Updates</h3>
                  <ul className="submenu-list">
                    <li>
                      <Link
                        to="/news"
                        onClick={() => {
                          setSidebarOpen(false);
                          setExpandedMenu(null);
                        }}
                      >
                        News
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/activity"
                        onClick={() => {
                          setSidebarOpen(false);
                          setExpandedMenu(null);
                        }}
                      >
                        Employee Activities
                      </Link>
                    </li>
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
        <div className="sidebar-footer">
          <p>© 2025 Sofea</p>
          <p>
            <Link to="/privacy">Privacy Policy</Link>
          </p>
        </div>
      </aside>

      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/team" element={<Team />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/process" element={<ProcessCap />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/product" element={<ProductApp />} />
        <Route path="/recognition" element={<Recognition />} />
        <Route path="/csr" element={<Csr />} />
        <Route path="/hear" element={<Hear />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </>
  );
}

export default Header;
