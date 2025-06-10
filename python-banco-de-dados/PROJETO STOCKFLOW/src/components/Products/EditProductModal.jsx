import React, { useState, useEffect } from "react";

const EditProductModal = ({ product, onClose, onEdit }) => {
  const [form, setForm] = useState({
    name: "",
    quantity: "",
    serial_number: "",
    expiration_date: "",
    image: null,
  });

  useEffect(() => {
    if (product) {
      setForm({
        name: product.name,
        quantity: product.quantity,
        serial_number: product.serial_number,
        expiration_date: product.expiration_date,
        image: null,
      });
    }
  }, [product]);

  if (!product) return null;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => data.append(key, value));
    const res = await fetch(`http://localhost:5000/edit_product/${product.id}`, {
      method: "POST",
      body: data,
    });
    if (res.ok) {
      const updated = await res.json();
      onEdit(updated);
    }
    onClose();
  };

  return (
    <div className="edit-modal-popup active">
      <div className="edit-modal-popup-content">
        <span className="edit-close-btn" onClick={onClose}>×</span>
        <h2>Editar Produto</h2>
        <form onSubmit={handleSubmit}>
          <label>Nome do Produto:</label>
          <input type="text" name="name" value={form.name} required onChange={handleChange} />
          <label>Quantidade:</label>
          <input type="number" name="quantity" value={form.quantity} required onChange={handleChange} />
          <label>Número de Série:</label>
          <input type="text" name="serial_number" value={form.serial_number} required onChange={handleChange} />
          <label>Data de Expiração:</label>
          <input type="date" name="expiration_date" value={form.expiration_date} required onChange={handleChange} />
          <label>Imagem do Produto:</label>
          <input type="file" name="image" accept="image/*" onChange={handleChange} />
          <button type="submit">Salvar Alterações</button>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;