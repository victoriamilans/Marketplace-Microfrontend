import Logo from "../assets/logo.png";

const RegisterProductFormComponent = () => {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <form className="border-solid border border-#D2D2D2 rounded-lg w-96 h-xl flex flex-col p-6">
        <img src={Logo} className="w-9 self-center mt-7" />

        <label htmlFor="productName" className="mt-5 font-medium">
          Nome
        </label>
        <input
          id="productName"
          placeholder="Banana"
          className="border-solid border border-#D2D2D2 w-full rounded-md h-12 p-5 "
        />

        <label htmlFor="productPrice" className="mt-5 font-medium">
          Price
        </label>
        <input
          id="productPrice"
          placeholder="R$ 5,99"
          className="border-solid border border-#D2D2D2 w-full rounded-md h-12 p-5 "
        />

        <label htmlFor="productCategory" className="mt-5 font-medium">
          Categoria
        </label>
        <input
          id="productCategory"
          placeholder="Hortaliças"
          className="border-solid border border-#D2D2D2 w-full rounded-md h-12 p-5 "
        />

        <label htmlFor="productImage" className="mt-5 font-medium">
          Imagem
        </label>
        <input
          id="productImage"
          placeholder="Imagem do produto"
          className="border-solid border border-#D2D2D2 w-full rounded-md h-12 p-5 "
        />

        <button
          type="submit"
          className="mt-10 h-10 w-64 bg-primary hover:bg-hover rounded-md text-white self-center"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default RegisterProductFormComponent;
