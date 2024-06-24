import styles from "./analytics-card-wrapper.module.scss"
import AnalyticsCard from "../AnalyticsCard"

const AnalyticsCardWrapper = () => {
  return (
    <div className={ styles["analytics"] }>

        <AnalyticsCard 
            title="Accont Balance"
            value={1756980} 
            type="balance" 
        />
         <AnalyticsCard 
            title="Total Investments"
            value={1100550} 
            type="invest" 
        />          
        <AnalyticsCard 
            title="Total Savings"
            value={850000} 
            type="save" 
        />
        
    </div>
  )
}

export default AnalyticsCardWrapper