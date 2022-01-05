import { useState, useEffect } from 'react';
import '../styles/Cart.css';

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(false);
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    );

    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
    }, [total]);

    function removeFromCart(name){
        const plantToRemove = cart.find((plant) => plant.name === name);
        if (plantToRemove) {
            const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name);
            updateCart([...cartFilteredCurrentPlant]);
        }
    }

    return isOpen ? (
        <div className='cart'>
            <button className="cart-toggle-button" onClick={() => setIsOpen(false)}>Fermer</button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`}>
                                {name} {price}€ x {amount}
                                <button onClick={() => removeFromCart(name)}>Supprimer</button>
                            </div>
                        ))}
                    </ul>
                    <p>Total : {total}€</p>
                    <button onClick={() => updateCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}
        </div>
    ) : (
        <div className="cart-closed">
            <button className="cart-toggle-button" onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
        </div>
    );
}

export default Cart;