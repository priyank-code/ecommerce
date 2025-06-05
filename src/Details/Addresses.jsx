import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faPlus } from "@fortawesome/free-solid-svg-icons";

const Addresses = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [formData, setFormData] = useState({
    type: "Home",
    name: "",
    phone: "",
    address: "",
  });

  const toggleMenu = (id) => {
    setIsOpen(isOpen === id ? null : id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // update
      const updated = [...addresses];
      updated[editIndex] = { ...formData, id: updated[editIndex].id };
      setAddresses(updated);
    } else {
      // add new
      const newEntry = { ...formData, id: Date.now() };
      setAddresses([...addresses, newEntry]);
    }

    // Reset
    setFormData({ type: "Home", name: "", phone: "", address: "" });
    setShowForm(false);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    const item = addresses[index];
    setFormData({ type: item.type, name: item.name, phone: item.phone, address: item.address });
    setEditIndex(index);
    setShowForm(true);
    setIsOpen(null);
  };

  const handleDelete = (index) => {
    const updated = [...addresses];
    updated.splice(index, 1);
    setAddresses(updated);
    setIsOpen(null);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Header and Add Button */}
      <div className="flex flex-col gap-3">
        <p className="text-[#505050] font-bold">Add New Addresses</p>
        <div>
          <button
          onClick={() => {
            setShowForm(!showForm);
            setFormData({ type: "Home", name: "", phone: "", address: "" });
            setEditIndex(null);
          }}
          className="flex gap-2 items-center font-bold text-white bg-[#333087] text-sm p-3 rounded-xl"
        >
          <FontAwesomeIcon icon={faPlus} className="text-sm" />
          {showForm ? "Cancel" : "Add New Address"}
        </button>
        </div>
      </div>

      {/* Address Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="p-5 bg-white rounded-xl shadow border">
          <div className="flex flex-col gap-3">
            <label>
              Address Type:
              <select name="type" value={formData.type} onChange={handleInputChange} className="border p-2 rounded w-full">
                <option>Home</option>
                <option>Office</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="border p-2 rounded w-full" />
            </label>
            <label>
              Phone:
              <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} required className="border p-2 rounded w-full" />
            </label>
            <label>
              Address:
              <textarea name="address" value={formData.address} onChange={handleInputChange} required className="border p-2 rounded w-full"></textarea>
            </label>
            <button type="submit" className="bg-[#333087] text-white p-2 rounded font-bold">
              {editIndex !== null ? "Update Address" : "Save Address"}
            </button>
          </div>
        </form>
      )}

      {/* Address List */}
      <div className="bg-[#FAFAFA] border-2 border-gray-100 rounded-xl mb-5">
        {addresses.map((item, index) => (
          <div key={item.id} className="p-5 flex flex-col gap-3 border-b">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-xs shadow-sm p-0.5 bg-gray-100 font-bold">{item.type}</span>
              <button onClick={() => toggleMenu(item.id)} className="relative p-3">
                <FontAwesomeIcon icon={faEllipsisVertical} />
                {isOpen === item.id && (
                  <div className="absolute top-1 right-5 bg-white p-3 shadow-sm rounded-xl z-10">
                    <div className="text-sm grid gap-1">
                      <button onClick={() => handleEdit(index)} className="text-left">Edit</button>
                      <span className="border-t border-gray-300 my-1"></span>
                      <button onClick={() => handleDelete(index)} className="text-left">Delete</button>
                    </div>
                  </div>
                )}
              </button>
            </div>
            <div className="flex flex-col gap-1 text-[#505050] font-bold text-sm">
              <p>{item.name} {item.phone}</p>
              <p className="w-1/2">{item.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addresses;
