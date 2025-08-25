# Google Maps API Integration Setup

This guide will help you set up Google Maps API integration for the Area Selection page in your LeadHarvest AI application.

## Prerequisites

- A Google account
- Access to Google Cloud Console

## Step-by-Step Setup

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" at the top of the page
3. Click "New Project"
4. Enter a project name (e.g., "LeadHarvest AI")
5. Click "Create"

### 2. Enable Required APIs

1. In your project, go to "APIs & Services" > "Library"
2. Search for and enable the following APIs:
   - **Maps JavaScript API** - For interactive maps
   - **Geocoding API** - For converting addresses to coordinates
   - **Places API** (optional) - For enhanced location features

### 3. Create API Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the generated API key

### 4. Restrict API Key (Recommended for Security)

1. Click on the created API key
2. Under "Application restrictions", select "HTTP referrers (web sites)"
3. Add your domain(s) where the app will be hosted
4. Under "API restrictions", select "Restrict key"
5. Select the APIs you enabled in Step 2
6. Click "Save"

### 5. Update Configuration File

1. Open `src/config/googleMaps.js`
2. Replace `'YOUR_GOOGLE_MAPS_API_KEY'` with your actual API key:

```javascript
export const GOOGLE_MAPS_CONFIG = {
  API_KEY: 'AIzaSyB...', // Your actual API key here
  // ... rest of the configuration
};
```

### 6. Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the Area Selection page
3. You should see an interactive Google Map instead of the placeholder

## Features

Once configured, the Google Maps integration provides:

- **Interactive Map**: Full Google Maps with dark theme styling
- **Area Selection**: Click anywhere on the map to set a location
- **Draggable Marker**: Drag the marker to fine-tune location
- **Radius Visualization**: Circle showing the selected radius
- **Geocoding**: Type a city name to automatically center the map
- **Responsive Design**: Works on both desktop and mobile

## Map Controls

- **Zoom**: Scroll wheel or +/- buttons
- **Pan**: Click and drag to move around
- **Location Selection**: Click anywhere on the map
- **Marker Movement**: Drag the purple marker
- **Radius Adjustment**: Use the radius input field

## Customization

You can customize the map appearance by modifying the `MAP_STYLES` array in `src/config/googleMaps.js`. The current configuration provides a dark theme that matches your application's design.

## Troubleshooting

### Map Not Loading
- Check if your API key is correct
- Verify that the required APIs are enabled
- Check browser console for error messages
- Ensure your domain is allowed in API key restrictions

### Geocoding Not Working
- Verify Geocoding API is enabled
- Check if you've exceeded API quotas
- Ensure your API key has access to Geocoding API

### Styling Issues
- The map uses custom dark theme styling
- If styles don't apply, check the `MAP_STYLES` configuration
- Ensure the Google Maps JavaScript API is properly loaded

## Cost Considerations

Google Maps API has usage-based pricing:
- **Maps JavaScript API**: $7 per 1,000 map loads
- **Geocoding API**: $5 per 1,000 requests
- **Places API**: $17 per 1,000 requests

For development and small-scale usage, Google provides a generous free tier:
- $200 monthly credit
- Typically covers thousands of map loads and geocoding requests

## Security Best Practices

1. **Restrict API Key**: Limit to specific domains and APIs
2. **Monitor Usage**: Set up billing alerts in Google Cloud Console
3. **Regular Review**: Periodically review and rotate API keys
4. **Environment Variables**: Consider using environment variables for production

## Support

If you encounter issues:
1. Check the [Google Maps JavaScript API documentation](https://developers.google.com/maps/documentation/javascript)
2. Review the [Google Cloud Console](https://console.cloud.google.com/) for API status
3. Check browser console for detailed error messages
4. Verify your API key and project settings

---

**Note**: Keep your API key secure and never commit it to public repositories. For production deployments, use environment variables or secure configuration management systems.
