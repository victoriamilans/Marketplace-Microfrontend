import React from 'react';

interface Item {
  name: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem extends Item {
  qtd: number;
  total: number;
}

const ItemCard: React.FC<Item> = (item) => {
  const addToList = () => {
    const list: CartItem[] = JSON.parse(localStorage.getItem('list') || '[]');

    const filtered = list.find((oldItem) => oldItem.name === item.name);
    if(filtered){
        filtered.qtd += 1;
        filtered.total = filtered.qtd * filtered.price;
    }else{
        const newItem: CartItem = { ...item, qtd: 1, total: item.price};
        list.push(newItem)
    }

    localStorage.setItem('list', JSON.stringify(list));
  };

  return (
    <article className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 flex flex-wrap justify-around">
      <div className="bg-white shadow-md shadow-gray-400 p-5 w-full">
        <img src={item.image} alt="Imagem do produto" className="w-full mb-4" />
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-500">{item.category}</p>
        <p className="text-lg mt-2 font-semibold">
          {item.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
        <button
          onClick={addToList}
          className="w-full bg-[#E48403] text-white text-lg font-semibold px-4 py-2 mt-4 rounded"
        >
          Adicionar à lista
        </button>
      </div>
    </article>
  );
};

export default ItemCard;

