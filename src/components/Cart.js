import CartItem from './CartItem';
import '../styles/Cart.css';

function Cart() {
    const monsteraPrice = 8;
    const lierrePrice = 10;
    const bouquetPrice = 15;
    return (
        <div className='cart'>
            <h2>Panier</h2>
            <ul>
                <CartItem name='Monstera' price={monsteraPrice} />
                <CartItem name='Lierre' price={lierrePrice} />
                <CartItem name='Bouquet de fleurs' price={bouquetPrice} />
            </ul>
            <p>Total : {monsteraPrice + lierrePrice + bouquetPrice}€</p>
        </div>
    );
}

export default Cart;