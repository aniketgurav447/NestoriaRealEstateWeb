import React from 'react'
// import villa1 from "../assets/data/";
// import villa2 from "../assets/villa2.png";
import { useState } from 'react';
import { assets } from '../assets/data';
import PropertyCard from '../components/PropertyCard';

const Listing = () => {

// import { assets } from "../assets/data";

  const [searchQuery, setSearchQuery] = useState("");

  

 const properties = [
  { id: 1, name: "Sunset Villa 1", builder: "Sunrise Builders", price: 12000000, location: "Pune, Maharashtra", image: assets.img1 },
  { id: 2, name: "Ocean Breeze Apartment 2", builder: "Bluewave Builders", price: 8500000, location: "Goa, India", image: assets.img2 },
  { id: 3, name: "Sunset Villa 3", builder: "Sunrise Builders", price: 13500000, location: "Mumbai, Maharashtra", image: assets.img1 },
  { id: 4, name: "Ocean Breeze Apartment 4", builder: "Bluewave Builders", price: 9000000, location: "Goa, India", image: assets.img2 },
  { id: 5, name: "Sunset Villa 5", builder: "Sunrise Builders", price: 14000000, location: "Pune, Maharashtra", image: assets.img1 },
  { id: 6, name: "Ocean Breeze Apartment 6", builder: "Bluewave Builders", price: 8700000, location: "Goa, India", image: assets.img2 },
  { id: 7, name: "Sunset Villa 7", builder: "Sunrise Builders", price: 12500000, location: "Mumbai, Maharashtra", image: assets.img1 },
  { id: 8, name: "Ocean Breeze Apartment 8", builder: "Bluewave Builders", price: 9500000, location: "Goa, India", image: assets.img2 },
  { id: 9, name: "Sunset Villa 9", builder: "Sunrise Builders", price: 13800000, location: "Pune, Maharashtra", image: assets.img1 },
  { id: 10, name: "Ocean Breeze Apartment 10", builder: "Bluewave Builders", price: 8800000, location: "Goa, India", image: assets.img2 },
  { id: 11, name: "Sunset Villa 11", builder: "Sunrise Builders", price: 14500000, location: "Mumbai, Maharashtra", image: assets.img1 },
  { id: 12, name: "Ocean Breeze Apartment 12", builder: "Bluewave Builders", price: 9100000, location: "Goa, India", image: assets.img2 },
  { id: 13, name: "Sunset Villa 13", builder: "Sunrise Builders", price: 13000000, location: "Pune, Maharashtra", image: assets.img1 },
  { id: 14, name: "Ocean Breeze Apartment 14", builder: "Bluewave Builders", price: 8700000, location: "Goa, India", image: assets.img2 },
  { id: 15, name: "Sunset Villa 15", builder: "Sunrise Builders", price: 14200000, location: "Mumbai, Maharashtra", image: assets.img1 },
  { id: 16, name: "Ocean Breeze Apartment 16", builder: "Bluewave Builders", price: 9000000, location: "Goa, India", image: assets.img2 },
  { id: 17, name: "Sunset Villa 17", builder: "Sunrise Builders", price: 13700000, location: "Pune, Maharashtra", image: assets.img1 },
  { id: 18, name: "Ocean Breeze Apartment 18", builder: "Bluewave Builders", price: 9200000, location: "Goa, India", image: assets.img2 },
  { id: 19, name: "Sunset Villa 19", builder: "Sunrise Builders", price: 14800000, location: "Mumbai, Maharashtra", image: assets.img1 },
  { id: 20, name: "Ocean Breeze Apartment 20", builder: "Bluewave Builders", price: 9400000, location: "Goa, India", image: assets.img2 },
];


 const filteredProperties = properties.filter((property) =>
    [property.name, property.builder, property.location].some((field) =>
      field.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="max-padd-container py-10 pt-28">
      {/* Header with search input */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Featured Properties
        </h2>

        {/* 🔍 Search input */}
        <input
          type="text"
          placeholder="Search properties..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-full text-[14px] w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No properties found.
          </p>
        )}
      </div>
    </div>
  );
};



export default Listing;