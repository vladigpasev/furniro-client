import { ProductCard } from './ProductCard';

const products = [
  // Dummy product data
  { id: 1, name: 'Syltherine', description: 'Stylish cafe chair', realPrice: 'Rp 2.500.000', discountPrice: 'Rp 3.500.000', discount: '-20%', image: '/table.svg' },
  { id: 2, name: 'Syltherine', description: 'Stylish cafe chair', realPrice: 'Rp 2.500.000', discountPrice: '', newTag: 'New', image: '/table.svg' },
  // Add more products as needed
];

export const ProductList = () => {
  return (
    <section className="products">
      <div className="container">
        <h1 className="products-heading">Our Products</h1>
        <div className="products-list">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
