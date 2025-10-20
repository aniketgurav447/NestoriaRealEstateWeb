import React from "react";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const { id, name, builder, price, location, image } = property;
  const navigate = useNavigate();

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

  const handleClick = () => {
    navigate(`/listing/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      <div className="w-full h-48 sm:h-56 md:h-64 lg:h-52 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">Builder: {builder}</p>
        <p className="text-sm text-gray-500">Location: {location}</p>
        <p className="text-md font-bold text-secondary">{formattedPrice}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
