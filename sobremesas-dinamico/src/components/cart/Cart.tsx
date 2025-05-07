import { aside } from "framer-motion/client"
import CartItem from "./CartItem"

interface CartItemData {
    name: string
    price: number
    quantity: number
}

interface CartProps {
    items: CartItemData[]
    onIncrease: (name: string) => void
    onDecrease: (name: string) => void
    onRemove: (name: string) => void
}

function Cart({ items, onIncrease, onDecrease, onRemove }: CartProps) {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <aside className="cart">
            <h2>Your Cart ({totalItems})</h2>
            <ul id="cart-items">
                {items.map((item, index) => (
                    <CartItem
                        key={index}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        onIncrease={() => onIncrease(item.name)}
                        onDecrease={() => onDecrease(item.name)}
                        onRemove={() => onRemove(item.name)}
                    />
                ))}
            </ul>
            <div className="cart-summary">
                <p>Total: <strong>${totalPrice.toFixed(2)}</strong></p>
                <button id="confirm-button">Confirm Order</button>
            </div>
        </aside>
    )
}

export default Cart