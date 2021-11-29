import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'

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
                    <li key={plant.id} className='plant-item'>
                        {plant.name}
                        {plant.isSpecialOffer && <p className='sales'>Soldes</p>}
                        {plant.isBestSale && <span>🔥</span>}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList;