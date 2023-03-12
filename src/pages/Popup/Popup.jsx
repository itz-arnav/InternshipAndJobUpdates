import React from 'react';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="title">All Internship and Job Updates</div>
        <div className="filterContainer">
          <div className="filterArea">
            <button className="btnFilter">Filter</button>
            <div className="toggleArea">
            <label class="toggle">
              <input type="checkbox" />
              <span class="slider"></span>
              <span class="labels" data-on="Today" data-off="Upcoming"></span>
            </label>
            </div>
          </div>

        </div>
        <div className="scrollArea">
          <div className="dataContainer">
            
            {/* Mock Data */}

            <div className="data">
              <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png" alt="HackerRank" srcset="" />
              <div className="urlTitle">
                <a href="www.hackerrank.com" className='siteName'>HackerRank</a>
                <a href="www.hackerrank.com" className='siteAddress'>hackerrank.com</a>
              </div>
              <div className="contestName">
              <a href="www.hackerrank.com" className='siteAddress'> DTCC Code-A-Thon</a>
              </div>
              <div className="regDeadline">
                <span className='endsAt'>Ends at</span>
                <span className="endsDate">13/03/2023 - 9:30PM</span>
              </div>
            </div>

            <div className="data">
              <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png" alt="HackerRank" srcset="" />
              <div className="urlTitle">
                <a href="www.hackerrank.com" className='siteName'>HackerRank</a>
                <a href="www.hackerrank.com" className='siteAddress'>hackerrank.com</a>
              </div>
              <div className="contestName">
              <a href="www.hackerrank.com" className='siteAddress'> DTCC Code-A-Thon</a>
              </div>
              <div className="regDeadline">
                <span className='endsAt'>Ends at</span>
                <span className="endsDate">13/03/2023 - 9:30PM</span>
              </div>
            </div>

            <div className="data">
              <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png" alt="HackerRank" srcset="" />
              <div className="urlTitle">
                <a href="www.hackerrank.com" className='siteName'>HackerRank</a>
                <a href="www.hackerrank.com" className='siteAddress'>hackerrank.com</a>
              </div>
              <div className="contestName">
              <a href="www.hackerrank.com" className='siteAddress'> DTCC Code-A-Thon</a>
              </div>
              <div className="regDeadline">
                <span className='endsAt'>Ends at</span>
                <span className="endsDate">13/03/2023 - 9:30PM</span>
              </div>
            </div>


            <div className="data">
              <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png" alt="HackerRank" srcset="" />
              <div className="urlTitle">
                <a href="www.hackerrank.com" className='siteName'>HackerRank</a>
                <a href="www.hackerrank.com" className='siteAddress'>hackerrank.com</a>
              </div>
              <div className="contestName">
              <a href="www.hackerrank.com" className='siteAddress'> DTCC Code-A-Thon</a>
              </div>
              <div className="regDeadline">
                <span className='endsAt'>Ends at</span>
                <span className="endsDate">13/03/2023 - 9:30PM</span>
              </div>
            </div>



            <div className="data">
              <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png" alt="HackerRank" srcset="" />
              <div className="urlTitle">
                <a href="www.hackerrank.com" className='siteName'>HackerRank</a>
                <a href="www.hackerrank.com" className='siteAddress'>hackerrank.com</a>
              </div>
              <div className="contestName">
              <a href="www.hackerrank.com" className='siteAddress'> DTCC Code-A-Thon</a>
              </div>
              <div className="regDeadline">
                <span className='endsAt'>Ends at</span>
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
