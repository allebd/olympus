import { ProtectedLayout } from '../ProtectedLayout';

export const Referrals = () => (
  <div>
    <ProtectedLayout
      content={
        <div className="dashboard-content">
          <h3>Referrals</h3>
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
                <p>Active Referrals</p>
              </div>
              <div className="dashboard-box-value">
                <p>N60</p>
              </div>
            </div>
            <div className="dashboard-box">
              <div className="dashboard-box-title">
                <p>Referrals Earnings</p>
              </div>
              <div className="dashboard-box-value">
                <p>N50,000</p>
              </div>
            </div>
          </div>
          <div className="referral-section" />
        </div>
      }
    />
  </div>
);
