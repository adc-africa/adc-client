import styles from "./plans.module.scss"
import SingleInvestmentCard from "./SingleInvestmentCard"

const Plans = () => {
  return (
    <div className={ styles["plans"] }>
        <div className={ styles["plans__header"] }>
            <h3>Get a share of the pie too!</h3>
        </div>
        <div className={ styles["plans__grid"] }>
          <SingleInvestmentCard duration="Six months" minAmount="100,000" roi={20}  />
          <SingleInvestmentCard duration="Twelve months" minAmount="100,000" roi={20}  />
          <SingleInvestmentCard duration="Eighteen months" minAmount="100,000" roi={20}  />
          {/* <SingleInvestmentCard duration="Six months" minAmount="100,000" roi={20}  />
          <SingleInvestmentCard duration="Six months" minAmount="100,000" roi={20}  />
          <SingleInvestmentCard duration="Six months" minAmount="100,000" roi={20}  /> */}
        </div>
    </div>
  )
}

export default Plans