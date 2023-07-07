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
                        <div className="flex flex-col sm:!flex-row justify-between items-center h-full items-center  ">
                            <div className="flex items-center h-full flex-col sm:!flex-row gap-2">
                                <img src={item.image} alt="Imagem do Produto" className="h-20 sm:h-30"/>
                                <div className="flex flex-col items-center sm:!items-start">
                                    <h3 className="font-semibold text-center sm:text-left">{item.name}</h3>
                                    <p className="text-left">{item.category}</p>
                                </div>
                            </div>
                            <div className=" flex justify-end flex-col items-center gap-4 md:!flex-row">
                                <p className="font-semibold text-center">Total: {item.total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL',})}</p>
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
            <section className="">{renderList()}</section>
        </>
    )
}

export default ItemList