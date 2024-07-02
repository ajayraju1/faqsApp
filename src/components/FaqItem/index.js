// Write your code here.
import {Component} from 'react'
import './index.css'

const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false, site: 'https://ajayfaqs.ccbp.tech/'}

  renderFaqBtn = () => {
    const {isActive} = this.state
    const btnImg = isActive ? minusImg : plusImg
    const imgAlt = isActive ? 'minus' : 'plus'

    return <img src={btnImg} className="btn-img" alt={imgAlt} />
  }

  toggleFaqBtn = () =>
    this.setState(prevState => ({isActive: !prevState.isActive}))

  renderAnswer = ansTxt => {
    const {isActive} = this.state

    if (isActive) {
      return (
        <div className="faq-ans-con">
          <hr className="ans-hr-line" />
          <p className="faq-ans">{ansTxt}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqItem} = this.props
    const {questionText, answerText} = faqItem
    return (
      <li className="faq-list-item">
        <div className="faq-question-img-con">
          <h1 className="faq-question">{questionText}</h1>
          <button className="faq-btn" type="button" onClick={this.toggleFaqBtn}>
            {this.renderFaqBtn()}
          </button>
        </div>
        {this.renderAnswer(answerText)}
      </li>
    )
  }
}

export default FaqItem
