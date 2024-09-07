interface Product {
    id: number;
    name: string;
    description: string;
    realPrice: string;
    discountPrice?: string;
    discount?: string;
    newTag?: string;
    image: string;
  }
  
  export const ProductCard = ({ product }: { product: Product }) => {
    return (
      <div className="product-card">
        <img className="product-image" src={product.image} alt={product.name} />
        <div className="details">
          <h3 className="product-name">{product.name}</h3>
          <p className="description">{product.description}</p>
          <div className="price">
            <span className="real-price">{product.realPrice}</span>
            {product.discountPrice && (
              <span style={{ textDecoration: 'line-through' }} className="discount">
                {product.discountPrice}
              </span>
            )}
          </div>
          {product.discount && <div className="percents"><span>{product.discount}</span></div>}
          {product.newTag && <div className="new"><span>{product.newTag}</span></div>}
        </div>
      </div>
    );
  };
  