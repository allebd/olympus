import { FiPlus } from 'react-icons/fi';
import { Layout } from '../Layout';
import { Navigation } from '../Layout/Navigation';

export const Faq = () => (
  <div>
    <Layout
      content={
        <div>
          <div className="hero">
            <Navigation />
          </div>
          <div>
            <h1>FAQs</h1>
          </div>
          <div className="faq-details">
            <div className="faq-container">
              <div className="faq-question-section">
                <div className="faq-question">
                  Do I have to pay to join the team?
                </div>
                <div className="faq-show">
                  <FiPlus />
                </div>
              </div>
            </div>
            <div className="faq-container">
              <div className="faq-question-section">
                <div className="faq-question">
                  How can I connect to the team?
                </div>
                <div className="faq-show">
                  <FiPlus />
                </div>
              </div>
            </div>
            <div className="faq-container">
              <div className="faq-question-section">
                <div className="faq-question">
                  At what point do I have to spend money?
                </div>
                <div className="faq-show">
                  <FiPlus />
                </div>
              </div>
            </div>
            <div className="faq-container">
              <div className="faq-question-section">
                <div className="faq-question">
                  Does your business opportunity require money?
                </div>
                <div className="faq-show">
                  <FiPlus />
                </div>
              </div>
            </div>
            <div className="faq-container">
              <div className="faq-question-section">
                <div className="faq-question">
                  What's the minimum investment on your investment opportunity?
                </div>
                <div className="faq-show">
                  <FiPlus />
                </div>
              </div>
            </div>
            <div className="faq-container">
              <div className="faq-question-section">
                <div className="faq-question">
                  Can I take out my investment at any time?
                </div>
                <div className="faq-show">
                  <FiPlus />
                </div>
              </div>
            </div>
            <div className="faq-container">
              <div className="faq-question-section">
                <div className="faq-question">
                  Do I need to refer people to make money?
                </div>
                <div className="faq-show">
                  <FiPlus />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  </div>
);
