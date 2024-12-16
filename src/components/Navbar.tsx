import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/react", label: "React" },
    { path: "/react-native", label: "React Native" },
    { path: "/wordpress", label: "WordPress" },
  ];

  return (
    <nav className="py-4 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Shivam
          </Link>

          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="relative">
                <span
                  className={`text-${
                    location.pathname === item.path ? "blue-600" : "gray-600"
                  } hover:text-blue-600 transition-colors`}
                >
                  {item.label}
                </span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
