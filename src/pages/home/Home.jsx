import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import {userData} from '../../dummyData'
import WidgetSmall from '../../components/widgetSmall/WidgetSmall'
import WidgetLarge from '../../components/widgetLarge/WidgetLarge'

import './home.css'

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo/>
      <Chart chartData={userData} title="User Analytics" grid dataKey="ActiveUser"/>
      <div className="homeWidgets">
        <WidgetSmall/>
        <WidgetLarge/>
      </div>
    </div>
  )
}
