import Plant from './Plant';

function Cart() {
    const monsteraPrice = 8;
    const lierrePrice = 10;
    const bouquetPrice = 15;
    return (
        <div>
            <h2>Panier</h2>
            <ul>
                <Plant name='Monstera' price={monsteraPrice} />
                <Plant name='Lierre' price={lierrePrice} />
                <Plant name='Bouquet de fleurs' price={bouquetPrice} />
            </ul>
            <p>Total : {monsteraPrice + lierrePrice + bouquetPrice}€</p>
        </div>
    );
}

export default Cart;