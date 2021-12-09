import { useState } from 'react';
import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';
import Categories from './Categories';
import PlantItem from './PlantItem';

function ShoppingList({ cart, updateCart })  {    
    const [activeCategory, setActiveCategory] = useState('');

    const categoryList = plantList.reduce((acc, plant) => (
        acc.includes(plant.category) ? acc : acc.concat(plant.category)),
        []
    );

    function addToCart(name, price){
        const currentPlantSaved = cart.find((plant) => plant.name === name);
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name);
            updateCart([
                ...cartFilteredCurrentPlant, { name, price, amount : currentPlantSaved.amount + 1 }
            ]);
        } else {
            updateCart([...cart, { name, price, amount: 1 }]);
        }
    }

    return (
        <div className='shopping-list'>
            <Categories categories={categoryList} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>      
            <ul className='plant-list'>
                {plantList.map((plant) => 
                    !activeCategory || plant.category === activeCategory ? (
                        <div key={plant.id}>
                            <PlantItem key={plant.id} name={plant.name} cover={plant.cover} id={plant.id} 
                            light={plant.light} water={plant.water} isBestSale={plant.isBestSale} isSpecialOffer={plant.isSpecialOffer}/>
                            <button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
                        </div>
                    ) : null
                )}
            </ul>
        </div>
    );
}

export default ShoppingList;