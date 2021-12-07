import CareScale from './CareScale';
import '../styles/PlantItem.css';

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem(props) {
    return (
        <li key={props.id} className='plant-item' onClick={() => handleClick(props.name)}>
            <img className='plant-item-cover' src={props.cover} alt={`${props.name} cover`} />
            {props.name}
            {props.isBestSale && '🔥'}
            <div>
                <CareScale careType='light' scaleValue={props.light} />
                <CareScale careType='water' scaleValue={props.water} />
            </div>
        </li>
    );
}
    
export default PlantItem;