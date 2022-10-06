import './Home.css'


import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux';
import {Item} from "../../components/Item/Item";
import { ShoppingCart } from '@mui/icons-material'

export const Home = () => {

    const navigate = useNavigate()
    const cart = useSelector((state) => state.cart)

    const totalQuantity = () => {
        let total = 0
        cart.forEach(item => {
            total += item.quantity
        })
        return total
    }

    const products = [
        {
            id: 1,
            title: "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
            price: 98,
            image: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        },
        {
            id: 2,
            title: "The Lean Startup: How Constant Innovation Create Radically Successful Businesses Paperback",
            price: 29,
            image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.SX325_B01,204,203,200_.jpg"
        },
        {
            id: 3,
            title: "Samsung LC49RG90SSUXEN 49 Curve Led Gaming Monitor",
            price: 199,
            image: "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        },
        {
            id: 4,
            title: "New Apple iPad Pro (12.9-inch, Wi-fi, 128GB) - Siver (4th Generation)",
            price: 598,
            image: "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        },
        {
            id: 5,
            title: "Kenwood kMix Stand Miser for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk",
            price: 200,
            image: "https://st.depositphotos.com/1765561/4857/i/450/depositphotos_48579839-stock-photo-opened-blue-stand-mixer.jpg"
        }
    ]

    return (
        <div className="home">
            <div className="home__container">
                <div className="home__row">
                    {products.map((product, index) => {
                        return <Item
                            key={index}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                        />
                    })}
                </div>
            </div>
            <div className='shopping-cart' onClick={() => navigate('/cart')}>
                <ShoppingCart id='cartIcon'/>
                <p>{totalQuantity() || 0}</p>
            </div>
        </div>
    )
}