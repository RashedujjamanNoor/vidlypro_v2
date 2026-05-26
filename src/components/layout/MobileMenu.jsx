import { useState } from "react";

import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const MobileMenu = ({ navLinks }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button onClick={() => setOpen(!open)}>
        {open ? (
          <HiX className="text-3xl text-white" />
        ) : (
          <HiOutlineMenuAlt3 className="text-3xl text-white" />
        )}
      </button>

      {/* Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] bg-black z-50 transition-all duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setOpen(false)}>
            <HiX className="text-3xl text-white" />
          </button>
        </div>

        <div className="flex flex-col gap-8 p-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setOpen(false)}
              className="text-2xl font-semibold text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="bg-lime-400 text-black px-5 py-3 rounded-full text-center font-semibold"
          >
            Book A Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
