import React from 'react'
import './user.css'
import {PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching} from '@material-ui/icons'

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className='userAddButton'>Create</button>
      </div>
      <div className="usercontainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="userShowImg"></img>
          <div className="userShowTopTitle">
            <span className="userShowUsername">Anna Becker</span>
            <span className="userShowUserTitle">Software Engineer</span>
          </div>
          </div>

          <div className="userShowBottom">
            <span className= "userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon"/>
                <span className="userShowInfoTitle">annabeck39</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon"/>
                <span className="userShowInfoTitle">10.12.1987</span>
              </div>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon"/>
                <span className="userShowInfoTitle">+1 313 656 8898</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon"/>
                <span className="userShowInfoTitle">annabeck@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon"/>
                <span className="userShowInfoTitle">New york: USA</span>
              </div>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon"/>
                <span className="userShowInfoTitle">annabeck39</span>
              </div>

          </div>
        </div>
        <div className="userUpdate">
asf
        </div>
      </div>
    </div>
  )
}
