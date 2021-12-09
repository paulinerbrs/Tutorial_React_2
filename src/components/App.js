import Banner from './Banner';
import Header from './Header';
import Description from './Description';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import { useState } from 'react';
import '../styles/Layout.css';

function App() {
    const [cart, updateCart] = useState([]);

    return (
        <div>
            <Banner>        
                <Header />
                <Description />
            </Banner>
            <div className="layout-inner">
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
            <Footer />
        </div>
    );
}

export default App;