import Banner from './Banner';
import Header from './Header';
import Description from './Description';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import '../styles/Layout.css';

function App() {
    return (
        <div>
            <Banner>        
                <Header />
                <Description />
            </Banner>
            <div className="layout-inner">
                <Cart />
                <ShoppingList />
            </div>
            <Footer />
        </div>
    );
}

export default App;