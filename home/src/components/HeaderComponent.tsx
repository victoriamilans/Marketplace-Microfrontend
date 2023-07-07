import { useState } from "react";
import logo from "../assets/logo.svg";

const HeaderComponent = () => {
  const url: string = window.location.href;
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState<boolean>(false);
  const toggleMenuMobile = () => {
    setIsMenuMobileOpen(!isMenuMobileOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixad fixed top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-24 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className=" h-auto w-auto " src={logo} alt="logo" />
            </div>
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-primary-hover hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => toggleMenuMobile()}
              >
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            {/* Menu desktop */}
            <div className="hidden sm:ml-6 sm:flex  items-center">
              <div className="flex space-x-4">
                <a
                  href="http://localhost:5001/"
                  className={`text-center ${
                    url === "http://localhost:5001/"
                      ? "text-primary"
                      : "text-gray-900"
                  } hover:text-primary-hover rounded-md px-3 py-2 text-lg font-medium`}
                >
                  Início
                </a>
                <a
                  href="http://localhost:5002/"
                  className={`text-center ${
                    url === "http://localhost:5002/"
                      ? "text-primary"
                      : "text-gray-900"
                  }  hover:text-primary-hover rounded-md px-3 py-2 text-lg font-medium`}
                >
                  Lista de Produtos
                </a>
                <a
                  href="http://localhost:5003/"
                  className={`text-center ${
                    url === "http://localhost:5003/"
                      ? "text-primary"
                      : "text-gray-900"
                  }  hover:text-primary-hover rounded-md px-3 py-2 text-lg font-medium`}
                >
                  Cadastrar Produto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Menu mobile */}
      {isMenuMobileOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col border-solid border-t-2">
            <a
              href="http://localhost:5001/"
              className={`${
                url === "http://localhost:5001/"
                  ? "text-primary"
                  : "text-gray-900"
              } hover:text-primary-hover rounded-md px-3 py-2 text-lg font-medium`}
              aria-current="page"
            >
              Início
            </a>
            <a
              href="http://localhost:5002/"
              className={`${
                url === "http://localhost:5002/"
                  ? "text-primary"
                  : "text-gray-900"
              }  hover:text-primary-hover rounded-md px-3 py-2 text-lg font-medium`}
            >
              Lista de Produtos
            </a>
            <a
              href="http://localhost:5003/"
              className={`${
                url === "http://localhost:5003/"
                  ? "text-primary"
                  : "text-gray-900"
              }  hover:text-primary-hover rounded-md px-3 py-2 text-lg font-medium`}
            >
              Cadastrar Produto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default HeaderComponent;
