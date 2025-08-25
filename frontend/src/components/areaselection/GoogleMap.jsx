import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { GOOGLE_MAPS_CONFIG, SETUP_INSTRUCTIONS } from '../../config/googleMaps';

export default function GoogleMap({ selectedArea, onAreaChange }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);
  const circleRef = useRef(null);
  const googleRef = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

    // Effect to load the map when the component mounts and ref is available
  useEffect(() => {
    console.log('useEffect triggered, mapRef.current:', mapRef.current);
    
    // Use a longer delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      if (!mapRef.current) {
        console.log('Map ref still not available after delay, retrying in 500ms...');
        // Retry after another 500ms
        setTimeout(() => {
          if (mapRef.current) {
            console.log('Map ref now available on retry, starting map loading...');
            loadMap();
          } else {
            console.error('Map ref still not available after retry');
            setIsLoading(false);
          }
        }, 500);
        return;
      }

      console.log('Map ref is available, starting map loading...');
      const loadMap = async () => {
        try {
          console.log('Starting map loading process...');
          setIsLoading(true);
          
          const loader = new Loader({
            apiKey: GOOGLE_MAPS_CONFIG.API_KEY,
            version: 'weekly',
            libraries: ['places', 'geometry']
          });

          console.log('Loading Google Maps API...');
          // Add timeout to prevent hanging
          const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Google Maps API loading timeout')), 15000)
          );
          const google = await Promise.race([loader.load(), timeoutPromise]);
          console.log('Google Maps API loaded successfully');
          googleRef.current = google;
          
          // Double-check the DOM element still exists
          if (!mapRef.current) {
            console.log('Map ref no longer available');
            setIsLoading(false);
            return;
          }
          
          // Default center (New York City)
          const defaultCenter = GOOGLE_MAPS_CONFIG.DEFAULT_CENTER;
          
          console.log('Creating map instance...');
          // Create map instance
          const map = new google.maps.Map(mapRef.current, {
            center: defaultCenter,
            zoom: GOOGLE_MAPS_CONFIG.DEFAULT_ZOOM,
            styles: GOOGLE_MAPS_CONFIG.MAP_STYLES
          });
          console.log('Map instance created successfully');

          mapInstanceRef.current = map;

          // Create marker
          const marker = new google.maps.Marker({
            position: defaultCenter,
            map: map,
            draggable: true,
            title: 'Selected Area',
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: GOOGLE_MAPS_CONFIG.MARKER_STYLE.fillColor,
              fillOpacity: GOOGLE_MAPS_CONFIG.MARKER_STYLE.fillOpacity,
              strokeColor: GOOGLE_MAPS_CONFIG.MARKER_STYLE.strokeColor,
              strokeWeight: GOOGLE_MAPS_CONFIG.MARKER_STYLE.strokeWeight
            }
          });

          markerRef.current = marker;

          // Create circle for radius
          const circle = new google.maps.Circle({
            strokeColor: GOOGLE_MAPS_CONFIG.CIRCLE_STYLE.strokeColor,
            strokeOpacity: GOOGLE_MAPS_CONFIG.CIRCLE_STYLE.strokeOpacity,
            strokeWeight: GOOGLE_MAPS_CONFIG.CIRCLE_STYLE.strokeWeight,
            fillColor: GOOGLE_MAPS_CONFIG.CIRCLE_STYLE.fillColor,
            fillOpacity: GOOGLE_MAPS_CONFIG.CIRCLE_STYLE.fillOpacity,
            map: map,
            center: defaultCenter,
            radius: parseInt(selectedArea.radius) * 1000 // Convert km to meters
          });

          circleRef.current = circle;

          // Add event listeners
          marker.addListener('dragend', () => {
            const position = marker.getPosition();
            const newArea = {
              city: `${position.lat().toFixed(4)}, ${position.lng().toFixed(4)}`,
              radius: selectedArea.radius
            };
            onAreaChange(newArea);
            
            // Update circle position
            circle.setCenter(position);
          });

          // Add click listener to map to add new markers
          map.addListener('click', (event) => {
            const position = event.latLng;
            marker.setPosition(position);
            circle.setCenter(position);
            
            const newArea = {
              city: `${position.lat().toFixed(4)}, ${position.lng().toFixed(4)}`,
              radius: selectedArea.radius
            };
            onAreaChange(newArea);
          });

          setIsMapLoaded(true);
          setIsLoading(false);
        } catch (error) {
          console.error('Error loading Google Maps:', error);
          console.error('Error details:', {
            message: error.message,
            stack: error.stack,
            name: error.name
          });
          setIsLoading(false);
        }
      };

      if (GOOGLE_MAPS_CONFIG.API_KEY && GOOGLE_MAPS_CONFIG.API_KEY !== 'YOUR_GOOGLE_MAPS_API_KEY') {
        console.log('Loading Google Maps with API key:', GOOGLE_MAPS_CONFIG.API_KEY.substring(0, 10) + '...');
        console.log('Full API key length:', GOOGLE_MAPS_CONFIG.API_KEY.length);
        loadMap();
      } else {
        console.warn('Please add your Google Maps API key to use the map functionality');
        setIsLoading(false);
      }
    }, 300); // Increased delay to ensure DOM is fully rendered

    return () => clearTimeout(timer);
  }, [selectedArea.radius, onAreaChange]); // Remove mapRef.current from dependencies

  // Additional effect to ensure map loads after DOM is painted
  useLayoutEffect(() => {
    if (mapRef.current && !isMapLoaded && !isLoading) {
      console.log('useLayoutEffect: Map ref available, triggering map load...');
      const loadMap = async () => {
        try {
          console.log('Starting map loading process from useLayoutEffect...');
          setIsLoading(true);
          
          const loader = new Loader({
            apiKey: GOOGLE_MAPS_CONFIG.API_KEY,
            version: 'weekly',
            libraries: ['places', 'geometry']
          });

          console.log('Loading Google Maps API...');
          // Add timeout to prevent hanging
          const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Google Maps API loading timeout')), 15000)
          );
          const google = await Promise.race([loader.load(), timeoutPromise]);
          console.log('Google Maps API loaded successfully');
          googleRef.current = google;
          
          // Double-check the DOM element still exists
          if (!mapRef.current) {
            console.log('Map ref no longer available');
            setIsLoading(false);
            return;
          }
          
          // Default center (New York City)
          const defaultCenter = GOOGLE_MAPS_CONFIG.DEFAULT_CENTER;
          
          console.log('Creating map instance...');
          // Create map instance
          const map = new google.maps.Map(mapRef.current, {
            center: defaultCenter,
            zoom: GOOGLE_MAPS_CONFIG.DEFAULT_ZOOM,
            styles: GOOGLE_MAPS_CONFIG.MAP_STYLES
          });
          console.log('Map instance created successfully');

          mapInstanceRef.current = map;

          // Create marker
          const marker = new google.maps.Marker({
            position: defaultCenter,
            map: map,
            draggable: true,
            title: 'Selected Area',
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: GOOGLE_MAPS_CONFIG.MARKER_STYLE.fillColor,
              fillOpacity: GOOGLE_MAPS_CONFIG.MARKER_STYLE.fillOpacity,
              strokeColor: GOOGLE_MAPS_CONFIG.MARKER_STYLE.strokeColor,
              strokeWeight: GOOGLE_MAPS_CONFIG.MARKER_STYLE.strokeWeight
            }
          });

          markerRef.current = marker;

          // Create circle for radius
          const circle = new google.maps.Circle({
            strokeColor: GOOGLE_MAPS_CONFIG.CIRCLE_STYLE.strokeColor,
            strokeOpacity: GOOGLE_MAPS_CONFIG.CIRCLE_STYLE.strokeOpacity,
            strokeWeight: GOOGLE_MAPS_CONFIG.CIRCLE_STYLE.strokeWeight,
            fillColor: GOOGLE_MAPS_CONFIG.CIRCLE_STYLE.fillColor,
            fillOpacity: GOOGLE_MAPS_CONFIG.CIRCLE_STYLE.fillOpacity,
            map: map,
            center: defaultCenter,
            radius: parseInt(selectedArea.radius) * 1000 // Convert km to meters
          });

          circleRef.current = circle;

          // Add event listeners
          marker.addListener('dragend', () => {
            const position = marker.getPosition();
            const newArea = {
              city: `${position.lat().toFixed(4)}, ${position.lng().toFixed(4)}`,
              radius: selectedArea.radius
            };
            onAreaChange(newArea);
            
            // Update circle position
            circle.setCenter(position);
          });

          // Add click listener to map to add new markers
          map.addListener('click', (event) => {
            const position = event.latLng;
            marker.setPosition(position);
            circle.setCenter(position);
            
            const newArea = {
              city: `${position.lat().toFixed(4)}, ${position.lng().toFixed(4)}`,
              radius: selectedArea.radius
            };
            onAreaChange(newArea);
          });

          setIsMapLoaded(true);
          setIsLoading(false);
        } catch (error) {
          console.error('Error loading Google Maps:', error);
          console.error('Error details:', {
            message: error.message,
            stack: error.stack,
            name: error.name
          });
          setIsLoading(false);
        }
      };

      if (GOOGLE_MAPS_CONFIG.API_KEY && GOOGLE_MAPS_CONFIG.API_KEY !== 'YOUR_GOOGLE_MAPS_API_KEY') {
        console.log('Loading Google Maps with API key from useLayoutEffect:', GOOGLE_MAPS_CONFIG.API_KEY.substring(0, 10) + '...');
        loadMap();
      }
    }
  }, [mapRef.current, isMapLoaded, isLoading, selectedArea.radius, onAreaChange]);

  // Update circle radius when selectedArea.radius changes
  useEffect(() => {
    if (circleRef.current && selectedArea.radius) {
      circleRef.current.setRadius(parseInt(selectedArea.radius) * 1000);
    }
  }, [selectedArea.radius]);

  // Geocode city name to coordinates
  const geocodeCity = async (cityName) => {
    if (!mapInstanceRef.current || !googleRef.current) return;

    const geocoder = new googleRef.current.maps.Geocoder();
    
    try {
      const result = await geocoder.geocode({ address: cityName });
      if (result.results[0]) {
        const position = result.results[0].geometry.location;
        
        // Update map center
        mapInstanceRef.current.setCenter(position);
        mapInstanceRef.current.setZoom(10);
        
        // Update marker position
        markerRef.current.setPosition(position);
        
        // Update circle position
        circleRef.current.setCenter(position);
        
        // Update selected area
        const newArea = {
          city: cityName,
          radius: selectedArea.radius
        };
        onAreaChange(newArea);
      }
    } catch (error) {
      console.error('Geocoding error:', error);
    }
  };

  // Expose geocodeCity function to parent component
  useEffect(() => {
    if (window) {
      window.geocodeCity = geocodeCity;
    }
  }, []);

  // Note: Do not early-return on isLoading — we keep the map container mounted

  if (!GOOGLE_MAPS_CONFIG.API_KEY || GOOGLE_MAPS_CONFIG.API_KEY === 'YOUR_GOOGLE_MAPS_API_KEY') {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[var(--bg-input)] border border-[var(--border-input)] rounded-lg">
        <div className="text-center p-6">
          <div className="text-6xl mb-4">🗺️</div>
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{SETUP_INSTRUCTIONS.title}</h3>
          <p className="text-[var(--text-secondary)] mb-4">
            Please add your Google Maps API key to enable map functionality.
          </p>
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-input)] rounded-lg p-4 text-left text-sm">
            <p className="text-[var(--text-primary)] font-medium mb-2">To enable maps:</p>
            <ol className="text-[var(--text-secondary)] list-decimal list-inside space-y-1">
              {SETUP_INSTRUCTIONS.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <div ref={mapRef} className="w-full h-full rounded-lg" />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--accent-primary)] mx-auto mb-4"></div>
            <p className="text-[var(--text-secondary)]">Loading map...</p>
          </div>
        </div>
      )}
      
      {/* Map Controls Overlay */}
      <div className="absolute top-4 right-4 bg-[var(--bg-secondary)] border border-[var(--border-input)] rounded-lg p-3 text-xs text-[var(--text-secondary)]">
        <div className="font-medium mb-2">Map Controls</div>
        <div>• Drag marker to move area</div>
        <div>• Click map to set location</div>
        <div>• Scroll to zoom</div>
      </div>
      
      {/* Instructions Overlay */}
      <div className="absolute bottom-4 left-4 bg-[var(--bg-secondary)] border border-[var(--border-input)] rounded-lg px-3 py-2 text-xs text-[var(--text-secondary)]">
        Drag to refine · Click pin to remove
      </div>
    </div>
  );
}
