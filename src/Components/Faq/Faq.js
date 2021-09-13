import './Faq.scss';
import faqcontent from './Faq.json';
import faqbg from './faqbg2.png';

function Faq() {

  const faqarray = Array.from(faqcontent);

  const Faqmap = faqarray.map((question, index) =>
    <div className="question">
      <div className="questionq">{question.question}</div>
      <div className="questiona">{question.answer}</div>
    </div>
  );

  return(
    <div id="faq" style={{backgroundImage:`url(${faqbg})`}}>
      <div className="faqbody">
        <h2 className="faqhead">We've got answers!</h2>
        <div id="faqblock">
          {Faqmap}
        </div>
      </div>
    </div>
  )
};

export default Faq;
