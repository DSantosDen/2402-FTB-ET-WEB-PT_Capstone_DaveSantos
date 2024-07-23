import { Link } from "react-router-dom";
import Logo from "../../assets/img/Junk_Vault_Logo_White.png";

const socialLinks = [
  {
    href: "https://www.facebook.com/",
    ariaLabel: "Facebook page",
    svg: (
      <svg
        className="w-8 h-8"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 8 19"
      >
        <path
          fillRule="evenodd"
          d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/",
    ariaLabel: "Instagram page",
    svg: (
      <svg
        className="w-8 h-8"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.322 3.608 1.297.975.975 1.235 2.242 1.297 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.322 2.633-1.297 3.608-.975.975-2.242 1.235-3.608 1.297-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.322-3.608-1.297-.975-.975-1.235-2.242-1.297-3.608C2.175 15.645 2.163 15.265 2.163 12s.012-3.584.07-4.849c.062-1.366.322-2.633 1.297-3.608.975-.975 2.242-1.235 3.608-1.297C8.416 2.175 8.796 2.163 12 2.163M12 0C8.741 0 8.332.015 7.052.072 5.773.13 4.675.445 3.678 1.443c-.997.997-1.312 2.095-1.371 3.374C2.015 5.668 2 6.077 2 9.333c0 3.256.015 3.665.072 4.946.059 1.279.374 2.377 1.371 3.374.997.997 2.095 1.312 3.374 1.371 1.279.057 1.688.072 4.946.072s3.665-.015 4.946-.072c1.279-.059 2.377-.374 3.374-1.371.997-.997 1.312-2.095 1.371-3.374.057-1.279.072-1.688.072-4.946s-.015-3.665-.072-4.946c-.059-1.279-.374-2.377-1.371-3.374-.997-.997-2.095-1.312-3.374-1.371-1.279-.057-1.688-.072-4.946-.072m0 5.834a6.165 6.165 0 1 0 0 12.33 6.165 6.165 0 0 0 0-12.33m0 10.166a4.001 4.001 0 1 1 0-8.002 4.001 4.001 0 0 1 0 8.002m6.406-11.451c0 .836-.677 1.512-1.512 1.512a1.514 1.514 0 0 1-1.511-1.512c0-.836.676-1.511 1.511-1.511.835 0 1.512.675 1.512 1.511" />
      </svg>
    ),
  },
  {
    href: "https://x.com/",
    ariaLabel: "X page",
    svg: (
      <svg
        className="w-10 h-10"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M22.46 6.003a.923.923 0 0 0-1.3-.05l-6.825 6.126-5.625-6.126a.922.922 0 0 0-1.3.05.922.922 0 0 0-.05 1.3l5.232 5.701-5.232 5.701a.922.922 0 0 0 1.35 1.25l5.624-6.126 6.825 6.126a.922.922 0 0 0 1.3-1.3l-5.232-5.701 5.232-5.701a.922.922 0 0 0-.05-1.3z" />
      </svg>
    ),
  },
  {
    href: "https://www.pinterest.com/",
    ariaLabel: "Pinterest account",
    svg: (
      <svg
        className="w-8 h-8"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12c0 4.326 2.642 8.033 6.427 9.681-.089-.822-.169-2.086.035-2.986.184-.793 1.172-5.035 1.172-5.035s-.299-.6-.299-1.486c0-1.394.808-2.433 1.815-2.433.856 0 1.269.642 1.269 1.409 0 .858-.547 2.144-.831 3.334-.236.996.501 1.811 1.485 1.811 1.782 0 3.151-1.879 3.151-4.589 0-2.398-1.724-4.073-4.183-4.073-2.848 0-4.519 2.134-4.519 4.34 0 .857.33 1.779.743 2.278.081.097.093.182.069.281-.076.31-.25.996-.283 1.135-.044.179-.144.219-.332.132-1.248-.58-2.031-2.396-2.031-3.861 0-3.145 2.286-6.035 6.592-6.035 3.459 0 6.148 2.466 6.148 5.768 0 3.432-2.162 6.2-5.163 6.2-1.006 0-1.954-.521-2.276-1.136l-.619 2.358c-.227.87-.839 1.956-1.25 2.62.943.292 1.937.451 2.974.451 6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          to="/"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
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
          <div className="flex space-x-9">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white hover:text-gray-400"
              >
                {link.svg}
                <span className="sr-only">{link.ariaLabel}</span>
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
