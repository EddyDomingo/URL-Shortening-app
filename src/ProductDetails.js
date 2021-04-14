const ProductDetails = ({ ProductData }) => {
    return ( 
        <main>
            { ProductData.map ( product =>(
                <section className="white-card" key={product.id}>
                    <div>
                        <object data={product.icon} ></object>
                        <h2>{product.title}</h2>
                        <p>{product.text}</p>
                    </div>
                </section>
           ))}
        </main>
     );
}
 
export default ProductDetails;