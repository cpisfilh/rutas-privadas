import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <div>
        <h1>Esto es el AuthLayout</h1>
        <Outlet />
    </div>
  )
}
export default AuthLayout