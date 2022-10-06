import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {Cart} from "./pages/Cart/Cart";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </div>
    );
}

export default App;
