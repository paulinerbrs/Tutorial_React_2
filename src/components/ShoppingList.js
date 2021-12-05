import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'

function ShoppingList() {
    const categoryList = plantList.reduce((acc, plant) => (
        acc.includes(plant.category) ? acc : acc.concat(plant.category)),
        []
    );

    return (
        <div>        
            <ul>
                {categoryList.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
            <ul className='plant-list'>
                {plantList.map((plant) => (
                    <PlantItem key={plant.id} name={plant.name} cover={plant.cover} id={plant.id} light={plant.light} water={plant.water} isBestSale={plant.isBestSale} isSpecialOffer={plant.isSpecialOffer}/>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList;