
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

export const Header = () => {
    const { isSignedIn } = useUser();
  return (
    <div className='p-3 px-24 flex justify-between items-center shadow-md'>
        <img src="/LOGO.png" alt="logo" className='w-14 h-14 rounded-full'/>
        {isSignedIn ?
        <div className='flex gap-2 items-center'>
            <Link to={'/dashboard'}>
                <Button variant="outline" >Dashboard</Button>
            </Link>
            <UserButton />
        </div> : 
        <Link to={'/auth/sign-in'}>
            <Button>Get Started</Button>
        </Link>
        }
    </div>
  )
}
