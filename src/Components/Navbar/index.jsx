import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../Store/Reducers/userReducer'
import Toast from 'react-bootstrap/Toast'
import { displayName } from '../../services/Common.services'

export default function Navbar() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.userInfo)
  const [showToast, setShowToast] = useState(false)

  const handleLogout = () => {
    dispatch(logout())
    setShowToast(true)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <a className="navbar-brand fw-bold text-primary" href="#">TechStyle</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          {true && (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown">
                  <div className="rounded-circle bg-primary text-white text-center me-2" style={{ width: 32, height: 32, lineHeight: '32px' }}>
                    {displayName("Sahil")}
                  </div>
                  {/* {user.name} */}
                  Sahil
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item text-danger" onClick={handleLogout}>Logout</button></li>
                </ul>
              </li>
            </ul>
          )}
        </div>
      </nav>

      {/* Toast */}
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 9999 }}>
        <Toast show={showToast} onClose={() => setShowToast(false)} bg="success" delay={2000} autohide>
          <Toast.Body className="text-white">Logged out successfully!</Toast.Body>
        </Toast>
      </div>
    </>
  )
}
