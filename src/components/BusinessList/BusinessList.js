import React from "react";
import Business from "../Business/Business";
import "bootstrap/dist/css/bootstrap.min.css";


function BusinessList() {
    const businesses = [
        { image: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 3.5,
        reviewCount: 90},
        { image: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90},
        { image: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90}
    ];

    return (
        <div className="container px-4">
            <div className="row gy-6">
            {businesses.map((business, index) => (
                <Business key={index} business={business} />
            ))}
        </div>
        </div>
    );
}

export default BusinessList;