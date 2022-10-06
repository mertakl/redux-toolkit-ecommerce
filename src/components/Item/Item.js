import './Item.css'
import {useDispatch} from 'react-redux';
import {addToCart} from '../../state/cartSlice';

export const Item = ({id, title, image, price}) => {

    const dispatch = useDispatch()

    return (
        <div className="item">
            <div className="item__info">
                <p className="item__title">{title}</p>
                <p className="item__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <img
                src={image}
                alt="item"
            />
            <button
                onClick={() =>
                    dispatch(addToCart({
                        id, title, image, price
                    }))
                }>Add to Cart
            </button>
        </div>
    )
}