import Logo from "../assets/logo.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../api";
import { toast } from "react-toastify";

const RegisterProductFormComponent = () => {
  interface IProduct {
    name: string;
    price: number;
    image: string;
    category: string;
  }

  interface IProductResponse {
    name: string;
    price: number;
    image: string;
    category: string;
    _id: string;
    __v: number;
  }

  const productSchema = yup.object({
    name: yup.string().required("Insira o nome do produto"),
    price: yup.number().required("Insira o preço do produto"),
    category: yup.string().required("Insira a categoria do produto"),
    image: yup.string().required("Insira a imagem do produto"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>({ resolver: yupResolver(productSchema) });

  async function handleRegisterProduct(product: IProduct) {
    try {
      await api.post<IProductResponse>("/products/", product);
      toast.success("Produto cadastrado!", {
        autoClose: 1000,
      });
    } catch (error) {
      toast.error("Falha ao cadastrar produto, verifique as informações", {
        autoClose: 1000,
      });
    }
  }

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <form
        className="border-solid border border-#D2D2D2 rounded-lg w-96 h-auto flex flex-col p-6"
        onSubmit={handleSubmit(handleRegisterProduct)}
      >
        <img src={Logo} className="w-9 self-center mt-7" />

        <label htmlFor="productName" className="mt-5 font-medium">
          Nome
        </label>
        <input
          placeholder="Banana"
          className="border-solid border border-#D2D2D2 w-full rounded-md h-12 p-5 "
          {...register("name")}
        />
        <p className="text-xs text-red-600 self-end">{errors.name?.message}</p>

        <label htmlFor="productPrice" className="mt-5 font-medium">
          Preço
        </label>
        <input
          placeholder="R$ 5,99"
          type="number"
          className="border-solid border border-#D2D2D2 w-full rounded-md h-12 p-5 "
          {...register("price")}
        />
        <p className="text-xs text-red-600 self-end">{errors.price?.message}</p>

        <label htmlFor="productCategory" className="mt-5 font-medium">
          Categoria
        </label>
        <input
          placeholder="Hortaliças"
          className="border-solid border border-#D2D2D2 w-full rounded-md h-12 p-5 "
          data-errors={errors.category?.message}
          {...register("category")}
        />
        <p className="text-xs text-red-600 self-end">
          {errors.category?.message}
        </p>

        <label htmlFor="productImage" className="mt-5 font-medium">
          Imagem
        </label>
        <input
          placeholder="Imagem do produto"
          className="border-solid border border-#D2D2D2 w-full rounded-md h-12 p-5 "
          {...register("image")}
        />
        <p className="text-xs text-red-600 self-end">{errors.image?.message}</p>

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
