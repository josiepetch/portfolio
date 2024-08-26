// import { Route, Routes } from 'react-router-dom'
import './App.scss'
// import { Layout } from './components/layout'
import { Home } from './components/home'
// import { Project } from './components/project'
// import { Booking } from './components/project/booking'
// import { Dashboard } from './components/project/dashboard'
// import { Logbook } from './components/project/logbook'

function App() {

  return (
    <Home />
    // <Routes>
    //   <Route path='/' element={<Layout />}>
    //   <Route index element={<Home />} />
    //   <Route path="/project" element={<Project />} />
    //     <Route path="/project/booking" element={<Booking />} />
    //     <Route path="/project/dashboard" element={<Dashboard />} />
    //     <Route path="/project/logbook" element={<Logbook />} />
    //   </Route>
    // </Routes>
  )
}

export default App