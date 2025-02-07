import { useState } from "react";
import axios from "axios";

const useGeocodeAddress = () => {
  const [coordinates, setCoordinates] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getCoordinates = async (address) => {
    if (!address) return;
    
    setLoading(true);
    setError("");

    const apiKey = "AIzaSyCRh3XfyH83ETdeX6qw1WlZ6l0IvW8fzMg";
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      if (response.data.status === "OK") {
        const location = response.data.results[0].geometry.location;
        setCoordinates(location);
      } else {
        setError("Address not found. Please try again.");
      }
    } catch (err) {
      setError("Error fetching coordinates.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { coordinates, getCoordinates, loading, error };
};

export default useGeocodeAddress;
