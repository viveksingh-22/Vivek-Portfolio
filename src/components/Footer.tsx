import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full py-6"
      style={{
        backgroundColor: "var(--card-background-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <ul className="flex flex-col md:flex-row md:space-x-3">
              <li className="mb-2 md:mb-0">
                <a
                  href="#"
                  className="hover:text-indigo-500 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li className="mb-2 md:mb-0">
                <a
                  href="#about"
                  className="hover:text-indigo-500 transition duration-300"
                >
                  About
                </a>
              </li>
              <li className="mb-2 md:mb-0">
              </li>
              <li className="mb-2 md:mb-0">
                <a
                  href="#skills"
                  className="hover:text-indigo-500 transition duration-300"
                >
                  Skills
                </a>
              </li>
              <li className="mb-2 md:mb-0">
              </li>
            </ul>
          </div>

          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://twitter.com/vivek_sing53300"
                  target="_blank"
                  className="hover:text-indigo-500 transition duration-300"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/viveksingh-22"
                  target="_blank"
                  className="hover:text-indigo-500 transition duration-300"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/vivek-singh-597890298/"
                  target="_blank"
                  className="hover:text-indigo-500 transition duration-300"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="mb-0">
              © {new Date().getFullYear()} Vivek. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
