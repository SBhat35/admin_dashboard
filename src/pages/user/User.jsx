import React from 'react'
import './user.css'
import {PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish} from '@material-ui/icons'
import {Link} from 'react-router-dom'

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className='userAddButton'>Create</button>
        </Link>
      </div>
      <div className="usercontainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://images.pexels.com/photos/8129903/pexels-photo-8129903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="userShowImg"></img>
          <div className="userShowTopTitle">
            <span className="userShowUsername">Abby Pinson</span>
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
              <span className= "userShowTitle">Contact Details</span>

              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon"/>
                <span className="userShowInfoTitle">+1 313 656 8898</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon"/>
                <span className="userShowInfoTitle">ap@gmail.com</span>
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
          <div className="userUpdateWrapper">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input className="userUpdateInput" type='text' placeholder="annabeck99"></input>
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input className="userUpdateInput" type='text' placeholder="Anna Becker"></input>
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                   <input className="userUpdateInput" type='text' placeholder="annabeck@gmail.com"></input>
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input className="userUpdateInput" type='text' placeholder="+1 3136568898"></input>
                </div>
                <div className="userUpdateItem">
                  <label>Location</label>
                  <input className="userUpdateInput" type='text' placeholder="New York: USA"></input>
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img className="userUpdateImg" alt="" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
                  <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                  <input style={{display: "none"}}type="file" id="file"/>
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
