import Select from 'react-select';
import '../styles/Categories.css';

function Categories({ categories, setActiveCategory }) {
    const options = [];
    categories.forEach(function(option) {
        options.push({ label: option, value: option })
    });

    return (
        <div className='categories'>
            <Select options={options} placeholder='Categories' isMulti onChange={(values) => setActiveCategory(values.map(v => v.value))}/>
        </div>
    );
}

export default Categories;