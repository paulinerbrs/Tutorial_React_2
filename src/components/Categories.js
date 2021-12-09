import '../styles/Categories.css';

function Categories({ categories, activeCategory, setActiveCategory }) {
    return (
        <div className='categories'>            
            <select className='categories-select' value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}>
                <option value=''>---</option>
                {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    );
}

export default Categories;