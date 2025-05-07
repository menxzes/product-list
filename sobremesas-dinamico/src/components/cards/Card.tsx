import { motion } from "framer-motion"

interface CardProps {
    image: {
        thumbnail: string
        mobile: string
        tablet: string
        desktop: string
    }
    name: string
    category: string
    price: number
    onAddToCart?: () => void
}

function Card({ image, name, category, price, onAddToCart }: CardProps) {
    return (
        <motion.div
            className="product-card"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <img
                src={image.thumbnail}
                srcSet={`
                    ${image.mobile} 480w,
                    ${image.tablet} 768w,
                    ${image.desktop} 1200w
                `}
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt={name}
            />
            <h3>{name}</h3>
            <p className="category">{category}</p>
            <p className="price">{price.toFixed(2)}</p>
            <button onClick={onAddToCart}>Add to Cart</button>
        </motion.div>
    )
}

export default Card