import React from 'react'
import { Marker } from 'react-map-gl'
import { isVaccine } from 'utils/utils'

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`

const vaccineColor = '#2C56DD'
const nonVaccineColor = '#00a661'

const SIZE = 20

// Important for perf: the markers never change, avoid rerender when the map viewport changes
export default ({ data, onClick }) => {
  if (data) {
    return data.map(product =>
      product.siteLocations.map((location, index) => (
        <Marker
          key={`marker-${product.productId}-${index}`}
          longitude={location.lng}
          latitude={location.lat}
        >
          <svg
            height={SIZE}
            viewBox='0 0 24 24'
            style={{
              cursor: 'pointer',
              fill: isVaccine(product) ? vaccineColor : nonVaccineColor,
              stroke: 'none',
              transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
            }}
            // set clickedLocation since the click was on one of the locations from the array.
            onClick={() => onClick({ ...product, clickedLocation: location })}
          >
            <path d={ICON} />
          </svg>
        </Marker>
      ))
    )
  }
  return null
}
