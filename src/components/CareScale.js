import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';

function handleClick(careType, scaleValue){
    const quantityLabel = {
        1: 'peu',
        2: 'modérément',
        3: 'beaucoup'
    };
    const type = careType === 'light' ? "de lumière" : "d'arrosage";
    alert(`Cette plante requiert ${quantityLabel[scaleValue]} ${type}`);
}

function CareScale({scaleValue, careType}) {
    const range = [1, 2, 3];
    const scaleType = careType === 'light' ? (
        <img src={Sun} alt='sun-icon' />
    ) : (
        <img src={Water} alt='water-icon' />
    );

    return (
        <div onClick={() => handleClick(careType, scaleValue)}>
            {range.map((rangeElem) => 
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    );
}
    
export default CareScale;