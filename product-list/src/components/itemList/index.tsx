import { useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";

interface CartItem {
  name: string;
  price: number;
  image: string;
  category: string;
  qtd: number;
  total: number;
}

const ItemList = () => {
const [reload, setReload] = useState(false)

useEffect(() => {},[reload])

    const listOfProducts = () =>{
        const list = localStorage.getItem("list");
        if(list){
            const listProducts: CartItem[] = JSON.parse(list);
            return listProducts
        }
        return []
    }

    const deleteItem = (item: CartItem) => {
        const updatedList = listOfProducts().filter((product) => product.name !== item.name);
        localStorage.setItem('list', JSON.stringify(updatedList))
        setReload(!reload)
    }

    const renderList = () => {
        const productsList = listOfProducts();
        return(
            <ul className="w-full">
                {productsList.map((item, index) => (
                    <li key={index} className="border-solid border-b-2 border-color-[#C6C2C2] p-2">
                        <div className="flex justify-between items-center h-full flex-col sm:flex-row">
                            <div className="flex items-center h-full flex-col md:flex-row">
                                <img src={item.image} alt="Imagem do Produto" className="h-20 sm:h-32"/>
                                <div className="ml-4">
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p>{item.category}</p>
                                </div>
                            </div>
                            <div className=" flex justify-end flex-col items-center gap-4 md:flex-row">
                                <p className="font-semibold mr-4">Total: {item.total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL',})}</p>
                                <button onClick={() => deleteItem(item)} > <BsFillTrashFill size="1.5rem" /> </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }

    return(
        <>
            <section className=" flex justify-center">{renderList()}</section>
        </>
    )
}

export default ItemList