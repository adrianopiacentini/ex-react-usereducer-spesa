import { useState } from "react";

function ProductsList() {
    const [addedProducts, setAddedProducts] = useState([])

    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];

    const addToCart = (product) => {
        const isAlreadyAdded = addedProducts.some((addedProduct) => addedProduct.name === product.name
        )

        if (!isAlreadyAdded) {
            setAddedProducts([...addedProducts, {
                name: product.name, price: product.price, quantity: 1
            }])
        } else {
            alert(`${product.name} è già nel carrello!`)
        }
    }

    return (
        <>
            <h1>Lista di prodotti</h1>
            <ul>
                {products.map(product => (
                    <li key={product.name}>
                        <p>Nome: {product.name}, Prezzo: {product.price}</p>
                        <button onClick={() => addToCart(product)}>Aggiungi al carrello</button>
                    </li>
                ))}

                <h2>Carrello della spesa</h2>
                {addedProducts.length === 0 ? (
                    <p>Il tuo carrello della spesa è vuoto!</p>
                ) : (
                    <ul>
                        {addedProducts.map(product => (
                            <li key={product.name}>
                                <p>Nome: {product.name}, Prezzo: {product.price}, Quantità: {product.quantity}</p>
                            </li>
                        ))}
                    </ul>
                )

                }

            </ul>
        </>
    )
}

export default ProductsList