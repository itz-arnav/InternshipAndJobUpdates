import React, { useState } from 'react';
import './Popup.css';

const Popup = () => {
  const [activeFilter, setActiveFilter] = useState('Internships');
  const [activeSort, setActiveSort] = useState('Today');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <div className="container">
        <div className="title">Placify</div>
        <div className="sortArea">
          <div className="filterButton" onClick={() => setIsOpen(true)}>
            Filter
          </div>

          {isOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={() => setIsOpen(false)}>
                  &times;
                </span>

                <div className="headingModal">Filter By Category</div>
                <div class="categories">
                  <div class="box">Internships</div>
                  <div class="box">Jobs</div>
                  <div class="box">Hackathons</div>
                  <div class="box">Coding Contests</div>
                </div>
                <div className="headingModal">Filter By Website</div>
                <div class="website">
                  <div class="box">HackerEarth</div>
                  <div class="box">HackerRank</div>
                  <div class="box">Unstop</div>
                  <div class="box">GeeksForGeeks</div>
                  <div class="box">Codechef</div>
                  <div class="box">Codeforces</div>
                  <div class="box">LeetCode</div>
                  <div class="box">Atcoder</div>
                  <div class="box">Topcoder</div>
                </div>
              </div>
            </div>
          )}

          <div className="sortSection">
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
        </div>
        <div className="scrollArea">
          <div className="dataContainer">
            {/* Mock Data */}

            <div className="data">
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
