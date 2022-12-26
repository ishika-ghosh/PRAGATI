// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import React, { useState } from "react";
import "./Teachers.css";
import Heading from "./../Heading/index";
import GoToTop from "./../GoToTop";
import Card from "../Event_Details/Card";
import contact_data from "./Model.js";
// import Card from "./Card";
// import UnderCunstruction from "../../resources/UnderCunstruction";

function Teachers() {
  // const [data, setData] = useState(Data);
  // const responsive = {
  //   desktop: {
  //     breakpoint: {
  //       max: 3000,
  //       min: 1024,
  //     },
  //     items: 5,
  //     partialVisibilityGutter: 40,
  //   },
  //   mobile: {
  //     breakpoint: {
  //       max: 464,
  //       min: 0,
  //     },
  //     items: 1,
  //     partialVisibilityGutter: 0,
  //   },
  //   tablet: {
  //     breakpoint: {
  //       max: 1024,
  //       min: 464,
  //     },
  //     items: 3,
  //     partialVisibilityGutter: 30,
  //   },
  // };
  return (
    <>
      <div id="contact">
        <Heading title="CONTACT" />
        <div className="eventContact_container_T">
          <div className="contact-container">
            {contact_data.map((m, i) => (
              <Card key={i} details={m} />
            ))}
          </div>
        </div>

        {/* <UnderCunstruction /> */}
        {/* <div className="carousel-container">
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={1000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            customTransition="all 0.5s linear"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={3}
            swipeable
            transitionDuration={1000}
          >
            {data.map((teacher) => (
              <Card key={teacher.id} teacher={teacher} />
            ))}
          </Carousel>
        </div> */}
      </div>
        <GoToTop />
    </>
  );
}

export default Teachers;
