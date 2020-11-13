import { ProtectedLayout } from '../ProtectedLayout';

export const News = () => (
  <div>
    <ProtectedLayout
      content={
        <div className="news-content">
          <h3>News &amp; Updates</h3>
          <div className="dashboard-news">
            <ul>
              <li>N10,000 was withdrawn on October 1st 2020 at 2:54pm</li>
              <li>N10,000 was withdrawn on October 1st 2020 at 2:54pm</li>
              <li>N10,000 was withdrawn on October 1st 2020 at 2:54pm</li>
              <li>N10,000 was withdrawn on October 1st 2020 at 2:54pm</li>
              <li>N10,000 was withdrawn on October 1st 2020 at 2:54pm</li>
            </ul>
          </div>
        </div>
      }
    />
  </div>
);
