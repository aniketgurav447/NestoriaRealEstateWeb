import React from "react";
import { useParams } from "react-router-dom";
import { propertyDetailsData } from "../assets/data";
import { FaBed, FaBath, FaCar, FaMapMarkerAlt, FaRupeeSign, FaEnvelope, FaPhone } from "react-icons/fa";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertyDetailsData.find((item) => item.id === Number(id));

  if (!property) {
    return (
      <div className="max-padd-container py-20 text-center text-2xl text-red-500">
        Property not found.
      </div>
    );
  }

  return (
    <section className="max-padd-container py-10 space-y-12 mt-25">
      {/* --- Property Header --- */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="h2 text-gray-900">{property.title}</h2>
          <p className="text-gray-500 flex items-center gap-2 mt-1">
            <FaMapMarkerAlt className="text-secondary" />
            {property.address}
          </p>
        </div>
        <div className="text-right">
          <p className="text-gray-600 text-sm">For Sale</p>
          <h3 className="bold-24 text-secondary flex items-center justify-end gap-1">
            <FaRupeeSign /> {property.price.sale.toLocaleString("en-IN")}
          </h3>
        </div>
      </div>

      {/* --- Image Gallery --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {property.images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-2xl shadow-md">
            <img
              src={img}
              alt={`${property.title}-${i}`}
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* --- Description & Details --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="bold-24 mb-2 text-gray-900">Overview</h3>
            <p className="text-gray-600 leading-relaxed">{property.description}</p>
          </div>

          {/* Facilities */}
          <div>
            <h3 className="bold-24 mb-4 text-gray-900">Facilities</h3>
            <div className="grid grid-cols-3 gap-4 text-gray-700">
              <div className="flex items-center gap-2 bg-primary p-3 rounded-lg">
                <FaBed className="text-secondary text-lg" />
                <span>{property.facilities.bedrooms} Beds</span>
              </div>
              <div className="flex items-center gap-2 bg-primary p-3 rounded-lg">
                <FaBath className="text-secondary text-lg" />
                <span>{property.facilities.bathrooms} Baths</span>
              </div>
              <div className="flex items-center gap-2 bg-primary p-3 rounded-lg">
                <FaCar className="text-secondary text-lg" />
                <span>{property.facilities.garages} Garage</span>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="bold-24 mb-4 text-gray-900">Amenities</h3>
            <div className="flex flex-wrap gap-3">
              {property.amenities.map((amenity, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary-dull text-gray-700 rounded-full text-sm font-medium"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* Property Info */}
          <div>
            <h3 className="bold-24 mb-4 text-gray-900">Property Info</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
              <p><strong>Type:</strong> {property.propertyType}</p>
              <p><strong>City:</strong> {property.city}</p>
              <p><strong>Country:</strong> {property.country}</p>
              <p><strong>Area:</strong> {property.area} sq ft</p>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Agency Info */}
        <aside className="bg-primary-dull p-6 rounded-2xl shadow-md">
          <h3 className="bold-22 mb-4 text-gray-900">Agency Details</h3>
          <div className="space-y-2 text-gray-700">
            <p><strong>Name:</strong> {property.agency.name}</p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-secondary" /> {property.agency.email}
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-secondary" /> {property.agency.phone}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button className="btn-secondary w-full">Contact Agency</button>
            <button className="btn-outline w-full">Schedule a Visit</button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default PropertyDetails;
