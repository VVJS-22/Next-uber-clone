import tw from "tailwind-styled-components"
import Map from '../components/Map';
import Link from 'next/link'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";

export default function Home() {
  const [ user, setUser ] = useState(null)
  const router = useRouter()

  useEffect(() => {
    return onAuthStateChanged( auth, user => {
      if (user) {
        console.log(user)
        setUser({
          name: user.displayName,
          photo: user.photoURL
        })
      } else {
        setUser(null)
        router.push('/login')
      }
    })
  }, [])

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" alt="Uber" />
          <Profile>
            <Name>{ user && user.name }</Name>
            <UserImage 
            src={ user && user.photo } 
            alt="User"
            onClick={() => signOut(auth)}
            />
            {console.log(user)}
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search" passHref={true}>
            <ActionButton>
              <ActionButtonImage src="/ride.png" alt="image"/>
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="/wheels.png" alt="image"/>
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="/reserve.png" alt="image"/>
            Reserve
            </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  )
}


const Wrapper = tw.div`
  flex flex-col h-screen
`

const ActionItems = tw.div`
  flex-1 p-4
`

const Header = tw.div `
  flex justify-between items-center
`

const UberLogo = tw.img`
  h-28
`

const Profile = tw.div`
  flex items-center
`

const Name = tw.div`
  mr-4 w-20 text-sm
`

const UserImage = tw.img`
  h-12 rounded-full border border-gray-200 p-px cursor-pointer
`

const ActionButtons = tw.div`
  flex
`

const ActionButton = tw.button`
  flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`
const ActionButtonImage = tw.img`
  h-3/5
`

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`