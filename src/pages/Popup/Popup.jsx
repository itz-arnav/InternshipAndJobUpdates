import React, { useState } from 'react';
import './Popup.css';

const Popup = () => {
  const [activeFilter, setActiveFilter] = useState('Internships');
  const [activeSort, setActiveSort] = useState('Today');
  return (
    <div className="App">
      <div className="container">
        <div className="title">Placify</div>
        <div className="filterContainer">
          <div className="filterArea">
            <div
              className={`filterButton ${
                activeFilter === 'Internships' ? 'active' : ''
              }`}
              onClick={() => setActiveFilter('Internships')}
            >
              Internships
            </div>
            <div
              className={`filterButton ${
                activeFilter === 'Jobs' ? 'active' : ''
              }`}
              onClick={() => setActiveFilter('Jobs')}
            >
              Jobs
            </div>
            <div
              className={`filterButton ${
                activeFilter === 'Hackathons' ? 'active' : ''
              }`}
              onClick={() => setActiveFilter('Hackathons')}
            >
              Hackathons
            </div>
            <div
              className={`filterButton ${
                activeFilter === 'Contests' ? 'active' : ''
              }`}
              onClick={() => setActiveFilter('Contests')}
            >
              Contests
            </div>
          </div>
        </div>

        <div className="sortArea">
          <h1>Sort By:</h1>
          <div
            className={`sortButton ${activeSort === 'Today' ? 'active' : ''}`}
            onClick={() => setActiveSort('Today')}
          >
            Today
          </div>
          <div
            className={`sortButton ${
              activeSort === 'Upcoming' ? 'active' : ''
            }`}
            onClick={() => setActiveSort('Upcoming')}
          >
            Upcoming
          </div>
        </div>
        <div className="scrollArea">
          <div className="dataContainer">
            {/* Mock Data */}

            <div className="data active">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png"
                alt="HackerRank"
                srcset=""
              />
              <div className="urlTitle">
                <a href="www.hackerrank.com" className="siteName">
                  HackerRank
                </a>
                <a href="www.hackerrank.com" className="siteAddress">
                  hackerrank.com
                </a>
              </div>
              <div className="contestName">
                <a href="www.hackerrank.com" className="siteAddress">
                  {' '}
                  DTCC Code-A-Thon
                </a>
              </div>
              <div className="regDeadline">
                <span className="endsAt">Ends at</span>
                <span className="endsDate">13/03/2023 - 9:30PM</span>
              </div>
            </div>

            <div className="data">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e8/HackerEarth_logo.png"
                alt="HackerRank"
                srcset=""
              />
              <div className="urlTitle">
                <a href="www.hackerrank.com" className="siteName">
                  HackerEarth
                </a>
                <a href="www.hackerrank.com" className="siteAddress">
                  hackerearth.com
                </a>
              </div>
              <div className="contestName">
                <a href="www.hackerrank.com" className="siteAddress">
                  {' '}
                  Tech Codeathon II
                </a>
              </div>
              <div className="regDeadline">
                <span className="endsAt">Ends at</span>
                <span className="endsDate">13/03/2023 - 9:30PM</span>
              </div>
            </div>

            <div className="data">
              <img
                src="https://play-lh.googleusercontent.com/iip5q-oY0eR0NCmMqOrnwg_EvkhFy2uWeLNpWAZFh6ygyUtnhZ6XlIuSGpUJ8Fp9bQ=w240-h480-rw"
                alt="HackerRank"
                srcset=""
              />
              <div className="urlTitle">
                <a href="www.hackerrank.com" className="siteName">
                  HackerRank
                </a>
                <a href="www.hackerrank.com" className="siteAddress">
                  hackerrank.com
                </a>
              </div>
              <div className="contestName">
                <a href="www.hackerrank.com" className="siteAddress">
                  {' '}
                  DTCC Code-A-Thon
                </a>
              </div>
              <div className="regDeadline">
                <span className="endsAt">Ends at</span>
                <span className="endsDate">13/03/2023 - 9:30PM</span>
              </div>
            </div>

            <div className="data">
              <img
                src="https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL2RhcmUyY29tcGV0ZWNvbS5qcGc.png"
                alt="HackerRank"
                srcset=""
              />
              <div className="urlTitle">
                <a href="www.hackerrank.com" className="siteName">
                  UnStop
                </a>
                <a href="www.hackerrank.com" className="siteAddress">
                  hackerrank.com
                </a>
              </div>
              <div className="contestName">
                <a href="www.hackerrank.com" className="siteAddress">
                  {' '}
                  DTCC Code-A-Thon
                </a>
              </div>
              <div className="regDeadline">
                <span className="endsAt">Ends at</span>
                <span className="endsDate">13/03/2023 - 9:30PM</span>
              </div>
            </div>

            <div className="data">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="HackerRank"
                srcset=""
              />
              <div className="urlTitle">
                <a href="www.hackerrank.com" className="siteName">
                  Github
                </a>
                <a href="www.hackerrank.com" className="siteAddress">
                  hackerrank.com
                </a>
              </div>
              <div className="contestName">
                <a href="www.hackerrank.com" className="siteAddress">
                  {' '}
                  DTCC Code-A-Thon
                </a>
              </div>
              <div className="regDeadline">
                <span className="endsAt">Ends at</span>
                <span className="endsDate">13/03/2023 - 9:30PM</span>
              </div>
            </div>

            {/* Mock Data Ends */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
