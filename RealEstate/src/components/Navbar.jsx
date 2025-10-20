// // 
// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Listing", path: "/listing" },
//     { name: "Contact", path: "/" },
//   ];

//   return (
//     <nav className="flexBetween gap-8">
//       {navLinks.map((link) => (
//         <NavLink
//           key={link.name}
//           to={link.path}
//           className={({ isActive }) =>
//             `relative bold-18 text-gray-800 
//              hover:text-secondary transition-colors duration-200
//              after:content-[''] after:absolute after:w-0 after:h-[3px] 
//              after:bg-secondary after:left-0 after:-bottom-1 after:rounded-full 
//              after:transition-all after:duration-300 hover:after:w-full 
//              ${isActive ? "text-secondary after:w-full" : ""}`
//           }
//         >
//           {link.name}
//         </NavLink>
//       ))}
//     </nav>
//   );
// };

// export default Navbar;





import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const navLinks = [
    { key: "home", path: "/" },
    { key: "listing", path: "/listing" },
    { key: "contact", path: "/" },
  ];

  // const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <nav className="flexBetween gap-8">
      {navLinks.map((link) => (
        <NavLink
          key={link.key}
          to={link.path}
          className={({ isActive }) =>
            `relative bold-18 text-gray-800 hover:text-secondary transition-colors duration-200
             after:content-[''] after:absolute after:w-0 after:h-[3px] 
             after:bg-secondary after:left-0 after:-bottom-1 after:rounded-full 
             after:transition-all after:duration-300 hover:after:w-full 
             ${isActive ? "text-secondary after:w-full" : ""}`
          }
        >
          {t(link.key)}
        </NavLink>
      ))}

     
    </nav>
  );
};

export default Navbar;

