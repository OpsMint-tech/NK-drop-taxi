import React, { useState, useCallback } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { FiX, FiMapPin } from 'react-icons/fi';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const defaultCenter = {
  lat: 11.1271,
  lng: 78.6569,
};

export default function MapPickerModal({ isOpen, onClose, onSelectLocation, title = "Select Location" }) {
  const [selectedPos, setSelectedPos] = useState(null);
  const [address, setAddress] = useState('');
  const [isGeocoding, setIsGeocoding] = useState(false);

  const handleMapClick = useCallback((e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setSelectedPos({ lat, lng });

    // Reverse geocode
    if (window.google) {
      setIsGeocoding(true);
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        setIsGeocoding(false);
        if (status === 'OK' && results[0]) {
          setAddress(results[0].formatted_address);
        } else {
          setAddress(`${lat.toFixed(6)}, ${lng.toFixed(6)}`);
        }
      });
    }
  }, []);

  const handleConfirm = () => {
    if (selectedPos && address) {
      onSelectLocation({ lat: selectedPos.lat, lng: selectedPos.lng, address });
      setSelectedPos(null);
      setAddress('');
      onClose();
    }
  };

  const handleClose = () => {
    setSelectedPos(null);
    setAddress('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-[#1a1a1a] rounded-2xl shadow-2xl border border-white/10 w-full max-w-2xl overflow-hidden z-10">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <FiMapPin className="text-[#E18B1C]" size={20} />
            <h3 className="text-white font-bold text-lg">{title}</h3>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Map */}
        <div className="w-full h-[350px] md:h-[400px]">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={selectedPos || defaultCenter}
            zoom={selectedPos ? 15 : 7}
            onClick={handleMapClick}
            options={{
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
          >
            {selectedPos && <Marker position={selectedPos} />}
          </GoogleMap>
        </div>

        {/* Selected Address */}
        <div className="px-6 py-4 border-t border-white/10">
          {isGeocoding ? (
            <p className="text-gray-400 text-sm animate-pulse">Getting address...</p>
          ) : address ? (
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Selected Location</p>
              <p className="text-white text-sm font-medium">{address}</p>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">Click on the map to select a location</p>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3 px-6 pb-5">
          <button
            onClick={handleConfirm}
            disabled={!selectedPos || !address}
            className="flex-1 bg-[#B27E36] hover:bg-[#9a6a2a] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-sm tracking-wide"
          >
            Confirm Location
          </button>
          <button
            onClick={handleClose}
            className="px-6 py-3 text-gray-400 hover:text-white text-sm font-semibold transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
