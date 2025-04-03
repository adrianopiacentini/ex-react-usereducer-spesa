import { useState, useEffect } from "react";

function ProductsList() {
    const [addedProducts, setAddedProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

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
            updateProductQuantity(product)
        }
    }

    const removeFromCart = (product) => {
        setAddedProducts((prevProducts) => prevProducts.filter((addedProducts) => addedProducts.name !== product.name))
    }

    const updateProductQuantity = (product) => {
        setAddedProducts((prevProducts) => prevProducts.map((addedProduct) => addedProduct.name === product.name
            ? { ...addedProduct, quantity: addedProduct.quantity++ }
            : addedProduct
        ))
    }

    useEffect(() => {
        const calcPrice = () => {
            let newPrice = 0;
            addedProducts.forEach((product) => {
                newPrice += (product.price * product.quantity)
            })
            setTotalPrice(newPrice.toFixed(2))
        }

        calcPrice()
    }, [addedProducts])



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
                                <button onClick={() => removeFromCart(product)}>Rimuovi dal carrello</button>
                            </li>
                        ))}
                    </ul>
                )

                }

                <h2>Totale da pagare: {totalPrice}</h2>

            </ul>
        </>
    )
}

export default ProductsList