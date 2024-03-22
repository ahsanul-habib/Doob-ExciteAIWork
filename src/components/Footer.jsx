const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-10">
      <div className="w-10/12 flex flex-row justify-between self-center">
        <div>
          <a
            className="text-gray-400 hover:text-black dark:hover:text-white"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="border-x-2 px-2 border-gray-300 text-gray-400 hover:text-black dark:hover:text-white"
            href="#"
          >
            Terms And Condition
          </a>
          <a
            className="text-gray-400 hover:text-black dark:hover:text-white"
            href="#"
          >
            Contact Us
          </a>
        </div>
        <div>
          <span className="dark:text-white">
            Copyright @ 2024 Doob Wordpress Theme
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
