import React, { useState } from "react";

const AddProductModal = ({ show, onClose, onAdd }) => { const [form, setForm] = useState({ name: "", quantity: "", serial_number: "", expiration_date: "", image: null, });

if (!show) return null;

const handleChange = (e) => { const { name, value, files } = e.target; setForm((prev) => ({ ...prev, [name]: files ? files[0] : value, })); };

const handleSubmit = async (e) => { e.preventDefault(); const data = new FormData(); Object.entries(form).forEach(([key, value]) => data.append(key, value)); const res = await fetch("http://localhost:5000/add_product", { method: "POST", body: data, }); if (res.ok) { const product = await res.json(); onAdd(product); } onClose(); };

return ( <div className="modal" style={{ display: "flex" }}> <div className="modal-content"> <span className="close-btn" onClick={onClose}>×</span> <h2>Adicionar Produto</h2> <form onSubmit={handleSubmit}> <label>Nome do Produto:</label> <input type="text" name="name" required onChange={handleChange} /> <label>Quantidade:</label> <input type="number" name="quantity" required onChange={handleChange} /> <label>Número de Série:</label> <input type="text" name="serial_number" required onChange={handleChange} /> <label>Data de Expiração:</label> <input type="date" name="expiration_date" required onChange={handleChange} /> <label>Imagem do Produto:</label> <input type="file" name="image" accept="image/*" required onChange={handleChange} /> <button type="submit">Adicionar Produto</button> </form> </div> </div> ); };

export default AddProductModal;