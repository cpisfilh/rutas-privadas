import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <div>
        <h1>Esto es el AppLayout</h1>
        <Outlet />
    </div>
  )
}
export default AppLayout