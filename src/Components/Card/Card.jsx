import React from 'react'
import "./Card.css"
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
import pool1 from '../../assets/pool/pool1.jpeg'
import pool2 from '../../assets/pool/pool2.jpeg'
import pool3 from '../../assets/pool/pool3.jpeg'
import room1 from '../../assets/rooms/123.jpeg'
import room2 from '../../assets/rooms/230.jpeg'
import room3 from '../../assets/rooms/231.jpeg'
import room4 from '../../assets/rooms/321.jpeg'
import farm1 from  '../../assets/farm/32.jpeg'
import farm2 from  '../../assets/farm/33.jpeg'
import farm3 from  '../../assets/farm/39.jpeg'
import forest1 from '../../assets/forest/3.jpeg'
import forest2 from '../../assets/forest/12.jpeg'
import forest3 from '../../assets/forest/WhatsApp Image 2025-09-13 at 1.55.23 PM.jpeg'
import shop1 from '../../assets/shops/rain.jpeg'
import shop2 from '../../assets/shops/rutu.jpeg'
import shop3 from '../../assets/shops/solder.jpeg'
import tent1 from '../../assets/tent/hi.jpeg'
import tent2 from '../../assets/tent/rutui.jpeg'
import tent3 from '../../assets/tent/titu.jpeg'
import cabin1 from '../../assets/cabin/11.jpeg'
import cabin2 from '../../assets/cabin/12.jpeg'
import cabin3 from '../../assets/cabin/21.jpeg'
import cabin4 from '../../assets/cabin/22.jpeg'

// Property images for different categories
const propertyImages = {
    'trending': [
        { src: p1, alt: "Luxury Villa", price: "$299/night", location: "Malibu, CA" },
        { src: p2, alt: "Modern Apartment", price: "$199/night", location: "Downtown LA" },
        { src: p3, alt: "Beach House", price: "$399/night", location: "Santa Monica" }
    ],
    'houses': [
        { src: p1, alt: "Family House", price: "$250/night", location: "Suburban Area" },
        { src: p2, alt: "Townhouse", price: "$180/night", location: "City Center" },
        { src: p3, alt: "Victorian Home", price: "$320/night", location: "Historic District" }
    ],
    'rooms': [
        { src: room1, alt: "Master Bedroom", price: "$89/night", location: "Shared House" },
        { src: room2, alt: "Studio Room", price: "$120/night", location: "Apartment Complex" },
        { src: room3, alt: "Guest Room", price: "$75/night", location: "Private Home" },
        { src: room4, alt: "Deluxe Room", price: "$150/night", location: "City Center" }
    ],
    'farm-houses': [
        { src: farm1, alt: "Rustic Farmhouse", price: "$180/night", location: "Countryside" },
        { src: farm2, alt: "Barn Conversion", price: "$220/night", location: "Farm Estate" },
        { src: farm3, alt: "Country Cottage", price: "$160/night", location: "Rural Area" }
    ],
    'pool-houses': [
        { src: pool1, alt: "Pool Villa", price: "$450/night", location: "Resort Area" },
        { src: pool2, alt: "Pool House", price: "$380/night", location: "Luxury Complex" },
        { src: pool3, alt: "Poolside Retreat", price: "$520/night", location: "Exclusive Area" }
    ],
    'tent-houses': [
        { src: tent1, alt: "Glamping Tent", price: "$95/night", location: "Campground" },
        { src: tent2, alt: "Safari Tent", price: "$110/night", location: "Nature Reserve" },
        { src: tent3, alt: "Luxury Tent", price: "$140/night", location: "Scenic View" }
    ],
    'cabins': [
        { src: cabin1, alt: "Log Cabin", price: "$200/night", location: "Mountain Area" },
        { src: cabin2, alt: "Wooden Cabin", price: "$240/night", location: "Forest Edge" },
        { src: cabin3, alt: "Rustic Cabin", price: "$180/night", location: "Lakefront" },
        { src: cabin4, alt: "Cozy Cabin", price: "$220/night", location: "Woodland" }
    ],
    'shops': [
        { src: shop1, alt: "Retail Space", price: "$50/sq ft", location: "Shopping District" },
        { src: shop2, alt: "Boutique Store", price: "$75/sq ft", location: "Fashion Street" },
        { src: shop3, alt: "Commercial Shop", price: "$60/sq ft", location: "Business Area" }
    ],
    'forest-houses': [
        { src: forest1, alt: "Treehouse", price: "$280/night", location: "Forest Canopy" },
        { src: forest2, alt: "Woodland Retreat", price: "$320/night", location: "Deep Forest" },
        { src: forest3, alt: "Nature Lodge", price: "$260/night", location: "Wilderness" }
    ],
    'poll': [
        { src: pool1, alt: "Poll Property 1", price: "$150/night", location: "Poll Area" },
        { src: pool2, alt: "Poll Property 2", price: "$200/night", location: "Poll District" },
        { src: pool3, alt: "Poll Property 3", price: "$180/night", location: "Poll Location" }
    ]
};

function Card({ selectedCategory = 'trending' }) {
    const images = propertyImages[selectedCategory] || propertyImages['trending'];

    return(
        <div className='card'>
            <h2 className="category-title">{selectedCategory.replace('-', ' ').toUpperCase()}</h2>
            <div className="card-grid">
                {images.map((property, index) => (
                    <div key={index} className="property-card">
                        <img src={property.src} alt={property.alt} />
                        <div className="property-info">
                            <h3>{property.alt}</h3>
                            <p className="price">{property.price}</p>
                            <p className="location">{property.location}</p>
                            <button className="book-now">Book Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card
