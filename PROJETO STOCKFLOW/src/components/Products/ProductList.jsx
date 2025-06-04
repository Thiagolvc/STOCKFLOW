import React, { useEffect, useState } from "react"; import ProductCard from "./ProductCard"; import AddProductModal from "./AddProductModal"; import EditProductModal from "./EditProductModal";

const ProductList = () => { const [products, setProducts] = useState([]); const [showAdd, setShowAdd] = useState(false); const [editProduct, setEditProduct] = useState(null);

useEffect(() => { fetch("http://localhost:5000/products") .then((res) => res.json()) .then((data) => setProducts(data.products || [])); }, []);

const handleAdd = (product) => { setProducts([...products, product]); setShowAdd(false); };

const handleEdit = (updatedProduct) => { setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p)); setEditProduct(null); };

const handleDelete = (id) => { setProducts(products.filter(p => p.id !== id)); };

return ( <div className="product-list"> <button onClick={() => setShowAdd(true)}>Adicionar Produto</button> {products.map((product) => ( <ProductCard key={product.id} product={product} onEdit={() => setEditProduct(product)} onDelete={handleDelete} /> ))} <AddProductModal show={showAdd} onClose={() => setShowAdd(false)} onAdd={handleAdd} /> <EditProductModal product={editProduct} onClose={() => setEditProduct(null)} onEdit={handleEdit} /> </div> ); };

export default ProductList;