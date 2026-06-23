/** Madhav Pandey — studio / work location (Delhi NCR) */
export const LOCATION = {
  lat: 28.5895833,
  lng: 77.3181944,
  mapsUrl: 'https://maps.app.goo.gl/8rEkFhX75DVXBy229',
  coordinatesLabel: '28°35\'22.5"N 77°19\'05.5"E',
  areaLabel: 'Noida, Delhi NCR, India',
} as const

export function googleMapsEmbedUrl(lat: number, lng: number, zoom = 16) {
  const q = `${lat},${lng}`
  return `https://maps.google.com/maps?q=${encodeURIComponent(q)}&z=${zoom}&hl=en&output=embed`
}
