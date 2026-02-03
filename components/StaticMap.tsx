import React from 'react'
import { Image as RNImage, StyleSheet, View } from 'react-native'

const StaticMap = () => {
  // Default view centered on Suva, Fiji
  const destination_longitude = 178.4419
  const destination_latitude = -18.1416

  // Example: Use a static map image from Geoapify (just like RideCard)
  const mapUri = `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=400&height=250&center=lonlat:${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`

  return (
    <View style={styles.container}>
      <RNImage
        source={{ uri: mapUri }}
        style={styles.map}
        resizeMode="cover"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 12,
  },
  map: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
})

export default StaticMap