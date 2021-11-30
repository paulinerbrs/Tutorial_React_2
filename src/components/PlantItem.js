import CareScale from './CareScale';
import '../styles/PlantItem.css'

function PlantItem(props) {
    return (
        <li key={props.id} className='plant-item'>
            <img className='plant-item-cover' src={props.cover} alt={`${props.name} cover`} />
            {/* {props.isSpecialOffer && <p className='sales'>Soldes</p>} */}
            {props.name}
            {props.isBestSale && '🔥'}
            <CareScale careType='light' scaleValue={props.light} />
            <CareScale careType='water' scaleValue={props.water} />
        </li>
    );
}
    
export default PlantItem;