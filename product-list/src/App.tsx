import { useEffect, useState } from "react";
import client from "./utils/client";
import ItemCard from "./components/itemCard/index.tsx";
import ItemList from "./components/itemList/index.tsx";
import Modal from "./components/itemModal/index.tsx";
import Overlay from "./components/Overlay/index.tsx";
import HeaderComponent from "homepage/HeaderComponent";
import FooterComponent from "homepage/FooterComponent";

interface IProduct {
  name: string;
  price: number;
  image: string;
  category: string;
}

interface CartProduct extends IProduct {
  qtd: number;
}

interface IProductResponse {
  name: string;
  price: number;
  image: string;
  category: string;
  _id: string;
  __v: number;
  map: any;
}

function App() {
  const [products, setProducts] = useState<CartProduct[]>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const request = async () => {
      const response = await client.get<IProductResponse>("/products");
      if (response.data) {
        const convertedProducts: CartProduct[] = response.data.map(
          (product: IProduct) => ({ ...product, qtd: 0 })
        );
        setProducts(convertedProducts);
      }
    };
    request();
  }, []);

  return (
    <>
      <HeaderComponent />
      <main className="flex flex-col items-center mt-28">
        <section className="flex justify-end w-11/12 ">
          <button className="pr-4 mt-8" onClick={openModal}>
            Ver Minha Lista
          </button>
        </section>
        <section className="flex flex-wrap justify-between max-w-full py-4 px-14 pt-2">
          {products &&
            products.map((item) => <ItemCard key={item.name} {...item} />)}
        </section>
      </main>
      <FooterComponent />
      {isModalOpen && <Overlay />}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ItemList />
      </Modal>
    </>
  );
}

export default App;
