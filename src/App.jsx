import { useUser } from "@clerk/clerk-react"
import { Navigate, Outlet } from "react-router-dom"
import { Header } from "./components/Custom/Header";
 
export default function Home() {
  const {isLoaded, isSignIn} = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  if (!isSignIn && !isLoaded) {
    return <Navigate to={'/auth/sign-in'} />
  }
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}