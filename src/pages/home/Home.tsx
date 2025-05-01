import React from "react";
import "./Home.scss";
import { Typography } from "@material-tailwind/react";
import { Button, Carousel } from "@material-tailwind/react";
import sliderBackground1 from "../../assets/slider/slider_background.png";
import sliderBackground2 from "../../assets/slider/slider_background_2.png";
import sliderBackground3 from "../../assets/slider/slider_background_3.png";
import {
  MAIN_PAGE_APP_STEPS,
  MAIN_PAGE_SUMMARY,
} from "../../data/main-page-data";

export default function Home() {
  const appSteps = MAIN_PAGE_APP_STEPS.map((step) => (
    <li key={step.id} className="flip-card">
      <div className="flipper">
        <div className="front">
          <img src={step.image} alt={step.title} />
          <h3>{step.title}</h3>
          <p>{step.summaryText}</p>
        </div>
        <div className="back">
          <h5>{step.title}</h5>
          <p>{step.mainText}</p>
        </div>
      </div>
    </li>
  ));
  return (
    <div className="home">
      <div className=" h-screen w-full overflow-hidden">
        <Carousel
          className="h-screen w-full carousel"
          loop
          autoplay
          transition={{ type: "tween", duration: 0.5 }}
        >
          <div className="relative h-full w-full">
            <img
              src={sliderBackground1}
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/75">
              <div className="text-center ">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Slider Title 1
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  Slider 1 text
                </Typography>
                {/* <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                  Daha fazlası
                </Button>
              </div> */}
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src={sliderBackground2}
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/75">
              <div className="text-center px-4 md:px-0">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Slider 2 Title
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  Slider 2 text
                </Typography>
                <div className="flex gap-2">
                  {/* <Button size="lg" color="white">
                Explore
              </Button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src={sliderBackground3}
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/75">
              <div className="text-center px-4 md:px-0">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Slider 3 Title
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  Slider 3 Text
                </Typography>
                <div className="flex gap-2">
                  {/* <Button size="lg" color="white">
                  Explore
                </Button> */}
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="summary">
        <h1>{MAIN_PAGE_SUMMARY.title}</h1>
        <p>{MAIN_PAGE_SUMMARY.summaryTextp1}</p>
        <p>{MAIN_PAGE_SUMMARY.summaryTextp2}</p>
        <p>{MAIN_PAGE_SUMMARY.summaryTextp3}</p>
        <p>{MAIN_PAGE_SUMMARY.summaryTextp4}</p>
      </div>
      <div className="steps">
        <ul>{appSteps}</ul>
      </div>
    </div>
  );
}
