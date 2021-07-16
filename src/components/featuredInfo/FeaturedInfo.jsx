import './featuredInfo.css'
import { ArrowDownward,ArrowUpward } from '@material-ui/icons'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featuredMoneyRate">-1.4 <ArrowDownward className="featuredIcon negative" /></span>
        </div>
        <span className="featuredSub">Compared to Last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featureMoney">$4,457</span>
          <span className="featuredMoneyRate">-11.6 <ArrowDownward className="featuredIcon negative" /></span>
        </div>
        <span className="featuredSub">Compared to Last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featuredMoneyRate">24.6 <ArrowUpward className="featuredIcon positive"/></span>
        </div>
        <span className="featuredSub">Compared to Last Month</span>
      </div>
    </div>
  )
}
