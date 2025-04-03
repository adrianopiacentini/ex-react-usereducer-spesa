

function ProductsList() {
    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];

    return (
        <>
            <h1>Lista di prodotti</h1>
            <ul>
                {products.map(product => (
                    <li key={product.name}>Nome: {product.name}, Prezzo: {product.price}</li>
                ))}
            </ul>
        </>
    )
}

export default ProductsList