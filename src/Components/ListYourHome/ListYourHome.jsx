import React, { useState } from 'react';
import './ListYourHome.css';

function ListYourHome() {
    const [formData, setFormData] = useState({ title: '', description: '', price: '', location: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Home listing submitted: ' + JSON.stringify(formData));
    };

    return (
        <div className="list-home-container">
            <h2>List Your Home</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Property Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price per night"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                />
                <button type="submit">List Home</button>
            </form>
        </div>
    );
}

export default ListYourHome;
