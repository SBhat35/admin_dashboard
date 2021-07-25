import "./widgetSmall.css"
import {Visibility} from '@material-ui/icons'

export default function WidgetSmall() {
  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">
        New Members
      </span>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <img src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmallImage" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Suzanne Cross</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon"/>
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <img src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmallImage" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Antonio Berry</span>
            <span className="widgetSmallUserTitle">Product Manager</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon"/>
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <img src="https://images.pexels.com/photos/2834009/pexels-photo-2834009.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmallImage" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Benjamin Lloyd</span>
            <span className="widgetSmallUserTitle">Sales Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon"/>
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <img src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmallImage" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Kyle Warner</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon"/>
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <img src="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmallImage" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Roosevelt Keller</span>
            <span className="widgetSmallUserTitle">Account Executive</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon"/>
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
