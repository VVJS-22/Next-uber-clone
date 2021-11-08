import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'
import { useState, useEffect } from 'react'

const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {

    const [rideDuration, setRideDuration] = useState(0);

    useEffect(() => {
        if (pickupCoordinates && dropoffCoordinates) {
            fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoianN3aXRoanMiLCJhIjoiY2t2bjl2cXE3OW81MjJuczdnbTdoa2tnNyJ9.vyi3KY_FqFWSAdpuR-qTzQ`).then(res => res.json()).then(data => { 
            setRideDuration(data.routes[0].duration / 400)
        })
        }
    }, [pickupCoordinates, dropoffCoordinates])

    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <CarList>
                { carList.map((car, index) => (
                    <Car key={index}>
                        <CarImage src={car.imgUrl} />
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>{Math.floor(Math.random()*7)+2} mins away</Time>
                        </CarDetails>
                        <Price>${(rideDuration * car.multiplier).toFixed(2)}</Price>
                    </Car>
                ))}
            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`
    flex flex-col flex-1 overflow-y-auto
`
const Title = tw.div`
    text-gray-500 text-center text-xs py-2 border-b fixed transform w-full bg-white
`

const CarList = tw.div`
    mt-4
`

const Car = tw.div`
    flex p-4 items-center
`

const CarImage = tw.img`
    h-14 mr-4
`

const CarDetails = tw.div`
    flex-1
`

const Service = tw.div`
    font-medium
`

const Time  = tw.div`
    text-xs text-blue-500
`

const Price = tw.div`
    text-sm
`