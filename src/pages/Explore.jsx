import React, { useEffect, useState } from "react";
import SubHeader from "../images/subheader.jpg";
import ExploreItems from "../components/explore/ExploreItems";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Explore() {
  useEffect(() => {
    window.scrollTo(0, 0);

       // ✅ Initialize AOS
        AOS.init({
          duration: 3000, // animation duration (ms)
          once: true,     // whether animation should happen only once
          easing: "ease-in-out",
        })
    
          // Optional: refresh AOS if content updates dynamically
        AOS.refresh();
  }, []);

  const [explore, setExplore] = useState([])

  async function FetchExploreData() {
    const {data} = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/explore`)
    console.log(data)
    setExplore(data)
  } 

  useEffect(() => {
    FetchExploreData()
  },[])


  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {/* ✅ Add data-aos attributes wherever you want animations */}
  <section data-aos="fade-up">
        <section
          id="subheader"
          className="text-light"
          style={{ background: `url("${SubHeader}") top` }}
        >
          <div className="center-y relative text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1>Explore</h1>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </section>
        </section>
       <section data-aos="zoom-in">
        <section aria-label="section">
          <div className="container">
            <div className="row">
             
              <ExploreItems explore={explore} />
             
            </div>
          </div>
        </section>
         </section>
      </div>
    </div>
  );
};

export default Explore;
