import React from 'react';

const FAQ = () => {
  return (
    <div className="faq-questions">
      <div className="faq-item">
        <div className="question">Is any of my personal information stored in the App?</div>
        <img
          className="circle-arrow"
          src="/images/icons/arrow.svg"
          alt="Expand question"
        />
      </div>
      <div className="faq-item">
        <div className="question">What formats can I download my transaction history in?</div>
        <img
          className="circle-arrow"
          src="/images/icons/arrow.svg"
          alt="Expand question"
        />
      </div>
      <div className="faq-item open">
        <div className="question">Can I schedule future transfers?</div>
        <img
          className="circle-arrow-purp"
          src="/images/icons/arrow-purp.svg"
          alt="Expand question"
        />
        <div className="answer">
          Yes, you can schedule transfers for future dates. Simply select the desired date in the app during the transfer process.
        </div>
      </div>
      <div className="faq-item">
        <div className="question">When can I use Banking App services?</div>
        <img
          className="circle-arrow"
          src="/images/icons/arrow.svg"
          alt="Expand question"
        />
      </div>
      <div className="faq-item">
        <div className="question">
          Can I create my own password that is easy for me to remember?
        </div>
        <img
          className="circle-arrow"
          src="/images/icons/arrow.svg"
          alt="Expand question"
        />
      </div>
      <div className="faq-item">
        <div className="question">What happens if I forget or lose my password?</div>
        <img
          className="circle-arrow"
          src="/images/icons/arrow.svg"
          alt="Expand question"
        />
      </div>
    </div>
  );
};



// src/FAQ.jsx
import { useEffect, useState } from 'react';

function FAQ() {
  const [faq, setFaq] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch('https://win24-assignment.azurewebsites.net/faq')
      .then((response) => response.json())
      .then((data) => setFaq(data))
      .catch((error) => console.error('Error fetching FAQ:', error));
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <h2>FAQ</h2>
      <ul>
        {faq.map((item, index) => (
          <li key={item.id}>
            <button onClick={() => toggleFAQ(index)}>{item.question}</button>
            {openIndex === index && <p>{item.answer}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FAQ;