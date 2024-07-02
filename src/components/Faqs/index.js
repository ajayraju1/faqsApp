// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="faqs-bg-con">
      <div className="faqs-card-con">
        <h1 className="faqs-heading">FAQs</h1>
        <ul className="faqs-list-con">
          {faqsList.map(eachObject => (
            <FaqItem faqItem={eachObject} key={eachObject.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
