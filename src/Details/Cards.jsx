import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const Cards = () => {
  const [showForm, setShowForm] = useState(false);
  const [cards, setCards] = useState([]);
  const [menuIndex, setMenuIndex] = useState(null);
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    month: '',
    year: '',
    cvv: '',
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...cards];
      updated[editIndex] = cardData;
      setCards(updated);
      setEditIndex(null);
    } else {
      setCards([...cards, cardData]);
    }
    setCardData({ number: '', name: '', month: '', year: '', cvv: '' });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setCardData(cards[index]);
    setEditIndex(index);
    setShowForm(true);
    setMenuIndex(null);
  };

  const handleDelete = (index) => {
    const updated = [...cards];
    updated.splice(index, 1);
    setCards(updated);
    setMenuIndex(null);
  };

  const maskCardNumber = (num) =>
    '**** **** **** ' + num.slice(-4);

  return (
    <div className="p-4">
      <div className="flex flex-col gap-3">
        <p className="font-bold text-[#505050]">Manage Save Cards</p>
        <button
          className="py-3 px-5 text-sm bg-[#333087] text-white flex gap-2 items-center font-bold rounded-xl w-fit"
          onClick={() => {
            setShowForm(!showForm);
            setCardData({ number: '', name: '', month: '', year: '', cvv: '' });
            setEditIndex(null);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
          <span>{showForm ? 'Cancel' : 'Add New Card'}</span>
        </button>

        {showForm && (
          <div className="bg-[#fafafa] p-5 rounded-xl border mt-3">
            <p className="text-sm font-bold text-[#505050] mb-4">Add New Address</p>
            <form onSubmit={handleSave} className="flex flex-col gap-3">
              <input
                type="text"
                name="number"
                value={cardData.number}
                onChange={handleChange}
                placeholder="Enter Card Number"
                className="p-3 border rounded-md focus:outline-none"
                required
              />
              <div className="flex gap-3">
                <select
                  name="month"
                  value={cardData.month}
                  onChange={handleChange}
                  className="p-3 border rounded-md w-1/3"
                  required
                >
                  <option value="">MM</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1}>{String(i + 1).padStart(2, '0')}</option>
                  ))}
                </select>
                <select
                  name="year"
                  value={cardData.year}
                  onChange={handleChange}
                  className="p-3 border rounded-md w-1/3"
                  required
                >
                  <option value="">YYYY</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i}>{2025 + i}</option>
                  ))}
                </select>
                <input
                  type="password"
                  name="cvv"
                  maxLength={3}
                  value={cardData.cvv}
                  onChange={handleChange}
                  placeholder="CVV"
                  className="p-3 border rounded-md w-1/3"
                  required
                />
              </div>
              <input
                type="text"
                name="name"
                value={cardData.name}
                onChange={handleChange}
                placeholder="Name on Card"
                className="p-3 border rounded-md"
                required
              />
              <div className="flex gap-3">
                <button type="submit" className="bg-[#333087] text-white px-6 py-2 rounded-md">
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setCardData({ number: '', name: '', month: '', year: '', cvv: '' });
                    setEditIndex(null);
                  }}
                  className="border border-[#333087] text-[#333087] px-6 py-2 rounded-md"
                >
                  Cancel
                </button>
              </div>
              <p className="text-xs text-gray-500">
                • Your card details would be securely saved for faster payments. Your CVV will not be stored
              </p>
            </form>
          </div>
        )}

        <div className="flex flex-col gap-2 mt-5">
          {cards.map((card, index) => (
            <div key={index} className="bg-[#fafafa] rounded-xl border relative px-5 py-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded-md font-semibold text-gray-700">
                    {card.name || 'Saved Card'}
                  </span>
                  <p className="text-lg tracking-wider mt-2 font-semibold">
                    {maskCardNumber(card.number)}
                  </p>
                </div>
                <div className="relative">
                  <button onClick={() => setMenuIndex(menuIndex === index ? null : index)}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
                  {menuIndex === index && (
                    <div className="absolute right-0 top-5 bg-white shadow rounded-md w-20 text-sm">
                      <button onClick={() => handleEdit(index)} className="block px-3 py-2 w-full text-left hover:bg-gray-100">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(index)} className="block px-3 py-2 w-full text-left hover:bg-gray-100">
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
