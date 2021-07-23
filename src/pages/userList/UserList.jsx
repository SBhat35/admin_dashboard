import './userList.css'
import {DataGrid} from '@material-ui/data-grid'
import{DeleteOutline} from '@material-ui/icons'
import {userRows} from '../../dummyData'
import {Link} from 'react-router-dom'
import React, { useState } from 'react';


export default function UserList() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id)=>{
    setData(data.filter((item) => item.id !== id));
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 300, renderCell:(params)=>{      
      return( 
        <div className="userListUser">
          <img className="userNameImage" src={params.row.avatar} alt=""/>
          {params.row.username}
        </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 300 },
    {
      field: 'status',
      headerName: 'Status',
      width: 300,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 300,
    },
    {
      field: 'action',
      hederName: 'Action',
      width: 300,
      renderCell: (params)=>{
        return(
          <>
          <Link to={"user/"+params.row.id}>
            <button className="userListEdit">
              Edit
            </button>
          </Link>

          <DeleteOutline className="userListDelete" onClick={()=> handleDelete(params.row.id)}/>
         </>
        )
      }
    }
  ];
  
  return (
    <div className="userList">
            <DataGrid disableSelectionOnClick rows={data} columns={columns} pageSize={8} checkboxSelection />

    </div>
  )
}
