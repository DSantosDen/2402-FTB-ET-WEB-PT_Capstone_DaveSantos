import { Link } from "react-router-dom";
import Logo from "../../assets/img/Junk_Vault_Logo_White.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
const socialLinks = [
  {
    href: "https://www.facebook.com/",
    ariaLabel: "Facebook page",
    svg: <FaFacebook className="text-2xl" />,
  },
  {
    href: "https://www.instagram.com/",
    ariaLabel: "Instagram page",
    svg: <FaInstagram className="text-2xl" />,
  },
  {
    href: "https://x.com/",
    ariaLabel: "X page",
    svg: <FaTwitter className="text-2xl" />,
  },
  {
    href: "https://www.pinterest.com/",
    ariaLabel: "Pinterest account",
    svg: <FaPinterest className="text-2xl" />,
  },
];

const Footer = () => {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          to="/"
          className="flex w-max mx-auto justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img src={Logo} alt="Junk Vault Logo" className="mr-2 h-8" />
          Junk Vault
        </Link>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          &quot;Because you definitely need more stuff you’ll never use.&quot;
        </p>

        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <Link to="/help" className="mr-4 hover:underline md:mr-6">
              Help
            </Link>
          </li>
          <li>
            <Link to="/terms_of_use" className="mr-4 hover:underline md:mr-6">
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link to="/faqs" className="mr-4 hover:underline md:mr-6">
              FAQs
            </Link>
          </li>
          <li>
            <Link to="/contactus" className="mr-4 hover:underline md:mr-6">
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center justify-center">
          <div className="flex space-x-9 mb-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white hover:text-gray-400"
              >
                {link.svg}
              </a>
            ))}
          </div>
        </div>

        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023-2024{" "}
          <a href="#" className="hover:underline">
            Vault Junk™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
