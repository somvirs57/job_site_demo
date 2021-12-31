import "./Homepage.css";
import heroMain from "../../assets/hero-main.jpg";
import companyLogo from "../../assets/company-logo.png";
import Navbar from "../../Containers/Navbar/Navbar";
import { Fragment } from "react";

const whyUsList = [
  {
    title: "Get More Visibility",
    text: `Lorem ipsum dolor sit amet. Ut maxime illo ab esse 
    doloribus ab suscipit quis quo iste similique non molestiae veritatis.`,
  },
  {
    title: "Organize Your Candidates",
    text: `Lorem ipsum dolor sit amet. Ut maxime illo ab esse 
    doloribus ab suscipit quis quo iste similique non molestiae veritatis.`,
  },
  {
    title: "Verify Their Abilities",
    text: `Lorem ipsum dolor sit amet. Ut maxime illo ab esse 
    doloribus ab suscipit quis quo iste similique non molestiae veritatis.`,
  },
];

let brandList = [];
for (let i = 1; i < 10; i++) {
  brandList.push(companyLogo);
}

function Homepage() {
  return (
    <Fragment>
      <Navbar />
      <div className="container2">
        {/* hero section */}
        <section className="hero-section">
          <div className="text-hero">
            <p className="home-heading h-fit">
              Welcome to My<span className="nav-head-span">Jobs</span>
            </p>
            <button className="btn btn-filled hero-btn">
              <strong>Get Started</strong>
            </button>
          </div>
          <div className="img-hero">
            <img src={heroMain} alt="" />
          </div>
        </section>

        {/* why us section */}
        <section className="section-gap">
          <p className="h-fit section-heading">Why Us</p>
          <div className="why-us-cards">
            {whyUsList.map((item, i) => {
              return (
                <div className="why-us-card" key={i}>
                  <div className="why-uscard-contents">
                    <p className="section-heading card-title">{item.title}</p>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* companies who trust us section */}
        <section className="section-gap">
          <p className="h-fit section-heading">Companies Who Trust Us</p>
          <div className="brand-pics">
            {brandList.map((item, i) => {
              return (
                <img className="brand-pic" src={`${item}`} key={i} alt="" />
              );
            })}
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default Homepage;
