import React from 'react'
import Addlog from './pages/Addlog'
import Orderpage from './pages/Orderpage'
import Adminpanel from './pages/Adminpanel'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css'
import LiquidEther from './component/LiquidEther'
import Naavbar from './component/Naavbar'
import Sidebar from './components/Sidebar'
import Apifetch from './assets/apis/Apifetch'


const App = () => {
  return (

    <div>
      <Naavbar />


      <div style={{ width: '100%', height: 600, position: 'relative', display: 'flex', flex: "wrap" }}>
        {/* <LiquidEther
    colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
    mouseForce={20}
    cursorSize={100}
    isViscous
    viscous={30}
    iterationsViscous={32}
    iterationsPoisson={32}
    resolution={0.5}
    isBounce={false}
    autoDemo
    autoSpeed={0.5}
    autoIntensity={2.2}
    takeoverDuration={0.25}
    autoResumeDelay={3000}
    autoRampDuration={0.6}
    color0="#5227FF"
    color1="#FF9FFC"
    color2="#B19EEF"
    
/> */}

      </div>




      <BrowserRouter>
        <Routes>
          <Route path='/homepage' element={<LiquidEther />} />
          <Route path='/login' element={<Addlog />} />
          <Route
            path="/Dashbord"
            element={
              <>
                <Dashboard />
                <Apifetch />
              </>
            }
          />
          <Route path='/order' element={<Orderpage />} />
          <Route path='/adminpanel' element={<Adminpanel />} />
          <Route path="data'element" element={<Apifetch />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
