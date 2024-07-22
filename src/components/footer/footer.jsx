import Logo from "../../assets/img/Junk_Vault_Logo_White.png";

const Footer = () => {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="https://fakestoreapi.com/"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img src={Logo} alt="Junk Vault Logo" className="mr-2 h-8" />
          Junk Vault
        </a>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          "Because you definitely need more stuff you’ll never use."
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Help
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Terms and Conditions
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2021-2022{" "}
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
