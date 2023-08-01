import Cart from "./components/Cart";
import Counter from "./components/Counter";
import ProductList from "./components/ProductList";
import {RouterProvider }from 'react-router-dom';
import{router}from './routes'

const App = () => {
    return (
<div><RouterProvider router={router}/>
<div>
            <h2>Counter</h2>    
            <Counter />
            <hr className="my-4" />
            <h2>Products</h2>
            <ProductList />

            <hr className="my-4" />
            <h2 className="font-bold text-2xl">Cart</h2>
            <Cart />
</div>
</div>);

};

export default App;
