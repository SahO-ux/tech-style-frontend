import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Navbar from './Components/Navbar'
import Routes from './Routes'

function App() {
  const user = useSelector(state => state.user.userInfo)

  return (
    <>
      {/* {true && <Navbar />} */}
      {/* Your routes/pages go here */}
      <Routes />
    </>
  )
}

export default App;

