import React from "react";

const ProductCard = ({ product, onEdit, onDelete }) => ( <div className="product-card"> <img src={product.image_path} alt={product.name} /> <div className="product-info"> <h3>{product.name}</h3> <p>ID: {product.id}</p> <p>Número de Série: {product.serial_number}</p> <p>Quantidade: {product.quantity}</p> <p>Data de Expiração: {product.expiration_date}</p> <button className="edit-btn" onClick={onEdit}>Editar</button> <button className="delete-btn" onClick={() => onDelete(product.id)}>Excluir</button> </div> </div> );

export default ProductCard;