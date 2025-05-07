interface CartItemProps {
    name: string
    price: number
    quantity: number
    onIncrease: () => void
    onDecrease: () => void
    onRemove: () => void
}

function CartItem({ name, price, quantity, onIncrease, onDecrease, onRemove }: CartItemProps) {
    return (
        <li className="cart-item">
            <div className="cart-item-info">
                <strong>{name}</strong>
                <span>{price.toFixed(2)}</span>
            </div>

            <div className="cart-controls">
                <button onClick={onDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={onIncrease}>+</button>
                <button className="remove-button" onClick={onRemove}>🗑️</button>
            </div>
        </li>
    )
}

export default CartItem