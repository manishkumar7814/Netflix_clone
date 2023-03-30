import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './ProfileScreen.css';
import { auth } from '../firebase';
import Nav from '../Nav';
// import PlanScreen from './PlanScreen';
import './PlanScreen.css'

function ProfileScreen() {
const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen_body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen_info'>
          <img 
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          alt='' />
          <div className='profileScreen_details'>
            <h2>{user.email}</h2>
            <div className='profileScreen_plans'>
              {/* <h3>Plans</h3> */}

               {/* while i am not using stripe payment checkout so developing with html & css */}

              <h3>Plans(Current Plan: Premium)</h3>
              <br />
              <h4>Renewal date: new Date() </h4>
               <div className='planScreen_plan'>
               <div className='planScreen_info'>
              <h5>Premium</h5>
              <h6>4K + HDR</h6>
              </div>
              <button>Subscribe</button>
              </div>
              <div className='planScreen_plan'>
               <div className='planScreen_info'>
              <h5>Basic</h5>
              <h6>720p</h6>
              </div>
              <button>Subscribe</button>
              </div>
              <div className='planScreen_plan'>
               <div className='planScreen_info'>
              <h5>Standard</h5>
              <h6>1080p</h6>
              </div>
              <button>Subscribe</button>
              </div>

              <button className='profileScreen_signOut'>Sign Out</button>
               {/* Over */}

              {/* <PlanScreen /> */}
              
              {/* <button onClick={() => auth.signOut()}
               className='profileScreen_signOut'>Sign Out</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen