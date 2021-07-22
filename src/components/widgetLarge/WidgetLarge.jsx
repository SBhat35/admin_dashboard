import "./widgetLarge.css"

export default function WidgetLarge() {

const Button = ({type}) =>{
  return <button className={"widgetLgButton " + type}>{type}</button>
}

  return (
    <div className="widgetLarge">
      <h3 className="widgetLgTitle">
        Latest Transactions
      </h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">
            Customer
          </th>
          <th className="widgetLgTh">
            Date
          </th><th className="widgetLgTh">
            Amount
          </th><th className="widgetLgTh">
            Status
          </th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg"></img>
              <span className="widgetLgName">John Doe</span>
          </td>
          <td className="widgetLgDate">
            18 May 2021
          </td>
          <td className="widgetLgAmount">
            $ 148.00
          </td>
          <td className="widgetLgstatus">
            <Button type= "Approved"></Button>

          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg"></img>
              <span className="widgetLgName">Mark Smith</span>
          </td>
          <td className="widgetLgDate">
            2 December 2023
          </td>
          <td className="widgetLgAmount">
            $ 14.00
          </td>
          <td className="widgetLgstatus">
            <Button type= "Declined"></Button>

          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg"></img>
              <span className="widgetLgName">Mike Dobson</span>
          </td>
          <td className="widgetLgDate">
            11 August 2020
          </td>
          <td className="widgetLgAmount">
            $ 390.00
          </td>
          <td className="widgetLgstatus">
            <Button type= "Pending"></Button>

          </td>
        </tr>
      </table>
    </div>
  )
}
