import { useState } from 'react';
import '../styles/Cart.css';

function Cart() {
    const [cart, updateCart] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const monsteraPrice = 8;

    return isOpen ? (
        <div className='cart'>
            <button className="cart-toggle-button" onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Panier</h2>
            <div>
                <p>Monstera : {monsteraPrice}€</p>
                <button className="cart-add-button" onClick={() => updateCart(cart + 1)}>
                    Ajouter
                </button>
            </div>
            <p>Total : {monsteraPrice * cart}€</p>
            <button onClick={() => updateCart(0)}>Vider le panier</button>
        </div>
    ) : (
        <div className="cart-closed">
            <button className="cart-toggle-button" onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
        </div>
    );
}

export default Cart;