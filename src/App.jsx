import { Outlet } from 'react-router-dom'
import SideBarComponent from './components/SideBar'
const App = () => {

  return (
    <div className="App">
      <SideBarComponent />

      <Outlet />
    </div>
  )
}

export default App
