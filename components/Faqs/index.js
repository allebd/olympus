import { FiPlus, FiMinus } from 'react-icons/fi';
import { useEffect } from 'react';
import { Layout } from '../Layout';
import { Navigation } from '../Layout/Navigation';

export const Faq = () => {
  useEffect(() => {
    const faqshow1 = document.querySelector('.faqshow1');
    const faqshow2 = document.querySelector('.faqshow2');
    const faqshow3 = document.querySelector('.faqshow3');
    const faqshow4 = document.querySelector('.faqshow4');
    const faqshow5 = document.querySelector('.faqshow5');
    const faqshow6 = document.querySelector('.faqshow6');
    const faqshow7 = document.querySelector('.faqshow7');
    const faqhide1 = document.querySelector('.faqhide1');
    const faqhide2 = document.querySelector('.faqhide2');
    const faqhide3 = document.querySelector('.faqhide3');
    const faqhide4 = document.querySelector('.faqhide4');
    const faqhide5 = document.querySelector('.faqhide5');
    const faqhide6 = document.querySelector('.faqhide6');
    const faqhide7 = document.querySelector('.faqhide7');
    const faqanswer1 = document.querySelector('.faqanswer1');
    const faqanswer2 = document.querySelector('.faqanswer2');
    const faqanswer3 = document.querySelector('.faqanswer3');
    const faqanswer4 = document.querySelector('.faqanswer4');
    const faqanswer5 = document.querySelector('.faqanswer5');
    const faqanswer6 = document.querySelector('.faqanswer6');
    const faqanswer7 = document.querySelector('.faqanswer7');
    if (faqshow1) {
      faqshow1.addEventListener('click', () => {
        faqanswer1.style.display = 'block';
        faqhide1.style.display = 'block';
        faqshow1.style.display = 'none';
      });
    }

    if (faqhide1) {
      faqhide1.addEventListener('click', () => {
        faqanswer1.style.display = 'none';
        faqshow1.style.display = 'block';
        faqhide1.style.display = 'none';
      });
    }

    if (faqshow2) {
      faqshow2.addEventListener('click', () => {
        faqanswer2.style.display = 'block';
        faqhide2.style.display = 'block';
        faqshow2.style.display = 'none';
      });
    }

    if (faqhide2) {
      faqhide2.addEventListener('click', () => {
        faqanswer2.style.display = 'none';
        faqshow2.style.display = 'block';
        faqhide2.style.display = 'none';
      });
    }

    if (faqshow3) {
      faqshow3.addEventListener('click', () => {
        faqanswer3.style.display = 'block';
        faqhide3.style.display = 'block';
        faqshow3.style.display = 'none';
      });
    }

    if (faqhide3) {
      faqhide3.addEventListener('click', () => {
        faqanswer3.style.display = 'none';
        faqshow3.style.display = 'block';
        faqhide3.style.display = 'none';
      });
    }

    if (faqshow4) {
      faqshow4.addEventListener('click', () => {
        faqanswer4.style.display = 'block';
        faqhide4.style.display = 'block';
        faqshow4.style.display = 'none';
      });
    }

    if (faqhide4) {
      faqhide4.addEventListener('click', () => {
        faqanswer4.style.display = 'none';
        faqshow4.style.display = 'block';
        faqhide4.style.display = 'none';
      });
    }

    if (faqshow5) {
      faqshow5.addEventListener('click', () => {
        faqanswer5.style.display = 'block';
        faqhide5.style.display = 'block';
        faqshow5.style.display = 'none';
      });
    }

    if (faqhide5) {
      faqhide5.addEventListener('click', () => {
        faqanswer5.style.display = 'none';
        faqshow5.style.display = 'block';
        faqhide5.style.display = 'none';
      });
    }

    if (faqshow6) {
      faqshow6.addEventListener('click', () => {
        faqanswer6.style.display = 'block';
        faqhide6.style.display = 'block';
        faqshow6.style.display = 'none';
      });
    }

    if (faqhide6) {
      faqhide6.addEventListener('click', () => {
        faqanswer6.style.display = 'none';
        faqshow6.style.display = 'block';
        faqhide6.style.display = 'none';
      });
    }

    if (faqshow7) {
      faqshow7.addEventListener('click', () => {
        faqanswer7.style.display = 'block';
        faqhide7.style.display = 'block';
        faqshow7.style.display = 'none';
      });
    }

    if (faqhide7) {
      faqhide7.addEventListener('click', () => {
        faqanswer7.style.display = 'none';
        faqshow7.style.display = 'block';
        faqhide7.style.display = 'none';
      });
    }
  }, []);

  return (
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
                    <div>Do I have to pay to join the team?</div>
                  </div>
                  <div className="faq-show">
                    <i className="faqshow1">
                      <FiPlus />
                    </i>
                    <i className="faqhide1">
                      <FiMinus />
                    </i>
                  </div>
                  <div className="faq-answer faqanswer1">
                    No you don’t need to pay to join us at team Olympus, signing
                    up is totally free on the Olympus website.
                  </div>
                </div>
              </div>
              <div className="faq-container">
                <div className="faq-question-section">
                  <div className="faq-question">
                    How can I connect to the team?
                  </div>
                  <div className="faq-show">
                    <i className="faqshow2">
                      <FiPlus />
                    </i>
                    <i className="faqhide2">
                      <FiMinus />
                    </i>
                  </div>
                  <div className="faq-answer faqanswer2">
                    Simply sign up for free and click the Telegram and WhatsApp
                    links in your back office to join our community.
                  </div>
                </div>
              </div>
              <div className="faq-container">
                <div className="faq-question-section">
                  <div className="faq-question">
                    At what point do I have to spend money?
                  </div>
                  <div className="faq-show">
                    <i className="faqshow3">
                      <FiPlus />
                    </i>
                    <i className="faqhide3">
                      <FiMinus />
                    </i>
                  </div>
                  <div className="faq-answer faqanswer3">
                    You are only required to put in money after you have been
                    exposed to our fully transparent investment opportunity
                    which we share 4 times daily via a zoom call. Contact the
                    person who invited you to the website or join our groups in
                    your back office for more details.
                  </div>
                </div>
              </div>
              <div className="faq-container">
                <div className="faq-question-section">
                  <div className="faq-question">
                    Does your business opportunity require money?
                  </div>
                  <div className="faq-show">
                    <i className="faqshow4">
                      <FiPlus />
                    </i>
                    <i className="faqhide4">
                      <FiMinus />
                    </i>
                  </div>
                  <div className="faq-answer faqanswer4">
                    Yes every opportunity or business requires a level of
                    financial commitment which you have to make. The only good
                    thing in our case is our opportunity doesn’t require you to
                    pay a membership fee, monthly fee, withdrawal fee or package
                    fee. It’s a free opportunity but to benefit from it you need
                    to invest money.
                  </div>
                </div>
              </div>
              <div className="faq-container">
                <div className="faq-question-section">
                  <div className="faq-question">
                    What's the minimum investment on your investment
                    opportunity?
                  </div>
                  <div className="faq-show">
                    <i className="faqshow5">
                      <FiPlus />
                    </i>
                    <i className="faqhide5">
                      <FiMinus />
                    </i>
                  </div>
                  <div className="faq-answer faqanswer5">
                    You are required to have a minimum of $100 to invest.
                  </div>
                </div>
              </div>
              <div className="faq-container">
                <div className="faq-question-section">
                  <div className="faq-question">
                    Can I take out my investment at any time?
                  </div>
                  <div className="faq-show">
                    <i className="faqshow6">
                      <FiPlus />
                    </i>
                    <i className="faqhide6">
                      <FiMinus />
                    </i>
                  </div>
                  <div className="faq-answer faqanswer6">
                    Yes you can take out all of your investments and walk away
                    at any given time without penalties, our business model is
                    flexible enough to accommodate that.
                  </div>
                </div>
              </div>
              <div className="faq-container">
                <div className="faq-question-section">
                  <div className="faq-question">
                    Do I need to refer people to make money?
                  </div>
                  <div className="faq-show">
                    <i className="faqshow7">
                      <FiPlus />
                    </i>
                    <i className="faqhide7">
                      <FiMinus />
                    </i>
                  </div>
                  <div className="faq-answer faqanswer7">
                    No you do not have to refer anyone to make money, but should
                    you wise to do so, the business model would pay you
                    accordingly.
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
