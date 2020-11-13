import { ProtectedLayout } from '../ProtectedLayout';

export const Dashboard = () => (
  <div>
    <ProtectedLayout
      content={
        <div className="dashboard-content">
          <h3>Account Overview</h3>
          <div className="dashboard-summary">
            <div className="dashboard-box">
              <div className="dashboard-box-title">
                <p>
                  Total
                  <br /> Earnings
                </p>
              </div>
              <div className="dashboard-box-value">
                <p>N100,000</p>
              </div>
            </div>
            <div className="dashboard-box">
              <div className="dashboard-box-title">
                <p>
                  Total
                  <br /> Referrals
                </p>
              </div>
              <div className="dashboard-box-value">
                <p>70</p>
              </div>
            </div>
            <div className="dashboard-box">
              <div className="dashboard-box-title">
                <p>Current Balance</p>
              </div>
              <div className="dashboard-box-value">
                <p>N50,000</p>
              </div>
            </div>
            <div className="dashboard-box">
              <div className="dashboard-box-title">
                <p>Total Withdrawals</p>
              </div>
              <div className="dashboard-box-value">
                <p>N50,000</p>
              </div>
            </div>
          </div>
          <div className="dashboard-section">
            <div className="dashboard-performance">
              <h3>Performance</h3>
            </div>
            <div className="dashboard-news">
              <h3>News &amp; Updates</h3>
              <ul>
                <li>N10,000 was withdrawn on October 1st 2020 at 2:54pm</li>
                <li>N10,000 was withdrawn on October 1st 2020 at 2:54pm</li>
                <li>N10,000 was withdrawn on October 1st 2020 at 2:54pm</li>
                <li>N10,000 was withdrawn on October 1st 2020 at 2:54pm</li>
                <li>N10,000 was withdrawn on October 1st 2020 at 2:54pm</li>
              </ul>
            </div>
          </div>
        </div>
      }
    />
  </div>
);
