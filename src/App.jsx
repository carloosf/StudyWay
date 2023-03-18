import { Outlet } from 'react-router-dom'
import SideBarComponent from './components/SideBar'
import styled from "styled-components";

const AppComponent = styled.div`
  display: flex;
  height: 100vh;
  
`

const App = () => {

  return (
    <AppComponent>
      <SideBarComponent />
      <Outlet />
    </AppComponent>
  )
}

export default App
