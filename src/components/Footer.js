import { useState } from 'react';
import '../styles/Footer.css';

function Footer() {
    const [inputValue, setInputValue] = useState('');
    
    function handleBlur(){
        if (!inputValue.includes('@')){
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.");
        }
    }

	return (
		<footer className='footer'>
			<div className='footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='footer-elem'>
                <span>Laissez-nous votre mail : </span>
                <input 
                    placeholder='Entrez votre mail'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={handleBlur}
                />
            </div>
		</footer>
	);
}

export default Footer;