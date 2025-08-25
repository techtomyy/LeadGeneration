// Google Maps API Configuration
// Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual API key from Google Cloud Console

export const GOOGLE_MAPS_CONFIG = {
  API_KEY: 'AIzaSyBvFzhNoi6rqFFQnDN7SUMO1v_OqYFoE_k', // Replace with your actual API key
  
  // Default map settings
  DEFAULT_CENTER: { lat: 40.7128, lng: -74.0060 }, // New York City
  DEFAULT_ZOOM: 10,
  
  // Map styling: empty array uses the default (light) Google Maps theme
  MAP_STYLES: [],
  
  // Marker and circle styling
  MARKER_STYLE: {
    fillColor: '#7C5CFF',
    fillOpacity: 1,
    strokeColor: '#FFFFFF',
    strokeWeight: 2
  },
  
  CIRCLE_STYLE: {
    strokeColor: '#7C5CFF',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#7C5CFF',
    fillOpacity: 0.1
  }
};

// Instructions for setting up Google Maps API
export const SETUP_INSTRUCTIONS = {
  title: 'Google Maps API Setup Required',
  steps: [
    'Go to Google Cloud Console (https://console.cloud.google.com/)',
    'Create a new project or select an existing one',
    'Enable the following APIs:',
    '  • Maps JavaScript API',
    '  • Geocoding API',
    '  • Places API (optional, for enhanced features)',
    'Create credentials (API Key)',
    'Restrict the API key to your domain for security',
    'Replace "YOUR_GOOGLE_MAPS_API_KEY" in src/config/googleMaps.js with your actual API key'
  ]
};
