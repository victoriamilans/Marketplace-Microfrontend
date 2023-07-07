import { useEffect, useState } from "react"
import client from "./utils/client";
import ItemCard from "./components/itemCard/index.tsx";
import ItemList from "./components/itemList/index.tsx";
import Modal from "./components/itemModal/index.tsx";
import Overlay from "./components/Overlay/index.tsx";

interface Product {
  name: string;
  price: number;
  image: string;
  category: string;
}

interface CartProduct extends Product {
  qtd: number;
}

function App() {
  const [products, setProducts] = useState<CartProduct[]>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  useEffect(() => {
    const request = async () => {
      const response = await client.get("/products");
      if (response.data) {
        const convertedProducts: CartProduct[] = response.data.map(
          (product: Product) => ({ ...product, qtd: 0 })
        );
        setProducts(convertedProducts);
      }
    };
    request();
  }, []);

  return (
    <>
    <main className="flex flex-col items-center">
      <section className="flex justify-end w-11/12 ">
        <button className="pr-4 mt-8" onClick={openModal}>Ver Minha Lista</button>
      </section>
      <section className="flex  flex-wrap justify-between max-w-full py-4 px-14 pt-2">
        {products &&
          products.map((item) => (         
              <ItemCard key={item.name} {...item} />
          ))}
      </section>
    </main>
    {isModalOpen && (<Overlay />)}
    
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <ItemList/>
    </Modal>
    </>
  );
}

export default App;


// function App() {
//   const [products, setProducts] = useState<any[]>();
  
//   useEffect(() =>{
//       const request = async () =>{
//         const response = await client.get("/products")
//         if (response.data) setProducts(response.data)
//       }
//       request()
//   },[])  

//   return (
//     <>
//     <section className="flex flex-wrap justify-center max-w-full mt-4 py-4 px-14 pt-8">
//         {products && products.map(item => (<ItemCard {...item} />))}
//     </section>
      
//     </>
//   )
// }

// export default App
