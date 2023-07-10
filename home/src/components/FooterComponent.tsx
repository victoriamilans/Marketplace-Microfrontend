const FooterComponent = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="shadow-inner h-24  p-8 flex justify-between bg-white items-center border-solid border-t-2 border-primary2 absolute bottom-0 right-0 left-0">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-2 text-white bg-primary w-12 h-12 hover:bg-primary-hover"
        onClick={() => handleScrollToTop()}
      >
        <svg
          xmlns='"http://www.w3.org/2000/svg"'
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.9}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>

      <div className="flex justify-between items-center">
        <span className="text-xs m-2 text-center">
          © 2023 Your Company, Inc. All rights reserved.
        </span>
        <img
          className=" h-16 w-auto "
          src="https://i.imgur.com/T4OvStk.png"
          alt="logo"
        />
      </div>
    </footer>
  );
};

export default FooterComponent;
