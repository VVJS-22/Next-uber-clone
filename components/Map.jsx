import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react';

mapboxgl.accessToken = 'pk.eyJ1IjoianN3aXRoanMiLCJhIjoiY2t2bjl2cXE3OW81MjJuczdnbTdoa2tnNyJ9.vyi3KY_FqFWSAdpuR-qTzQ';

const Map = (props) => {

    const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map)
    }
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [78.1271, 11.6569],
            zoom: 6
        })

        if (props.pickupCoordinates) {
            addToMap(map, props.pickupCoordinates)
        }

        if (props.dropoffCoordinates) {
            addToMap(map, props.dropoffCoordinates)
        }

        if (props.pickupCoordinates && props.dropoffCoordinates) {
            map.fitBounds([
                props.dropoffCoordinates,
                props.pickupCoordinates
            ], {
                padding: 60
            })
        }
    }, [props.pickupCoordinates, props.dropoffCoordinates])

    return (
        <Wrapper id="map"></Wrapper>
    )
}

export default Map

const Wrapper = tw.div `
    flex-1 h-1/2
`