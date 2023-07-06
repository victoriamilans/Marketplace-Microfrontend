import logo from "../assets/logo.svg";

const HeaderComponent = () => {
  const url = window.location.href;

  return (
    <nav className="bg-white shadow-lg">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-24 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className=" h-auto w-auto " src={logo} alt="logo" />
            </div>
            <div className="hidden sm:ml-6 sm:flex  items-center">
              <div className="flex space-x-4">
                <a
                  href="http://localhost:5000/"
                  className={`text-center ${
                    url === "http://localhost:5000/"
                      ? "text-orange-600"
                      : "text-gray-900"
                  } rounded-md px-3 py-2 text-lg font-medium`}
                >
                  Início
                </a>
                <a
                  href="http://localhost:5001/"
                  className={`text-center ${
                    url === "http://localhost:5001/"
                      ? "text-orange-600"
                      : "text-gray-900"
                  }  hover:text-orange-600 rounded-md px-3 py-2 text-lg font-medium`}
                >
                  Lista de Produtos
                </a>
                <a
                  href="http://localhost:5002/"
                  className={`text-center ${
                    url === "http://localhost:5002/"
                      ? "text-orange-600"
                      : "text-gray-900"
                  }  hover:text-orange-600 rounded-md px-3 py-2 text-lg font-medium`}
                >
                  Cadastrar Produto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
