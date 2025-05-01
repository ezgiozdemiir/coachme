import "./Home.scss";
import {
  MAIN_PAGE_APP_STEPS,
  MAIN_PAGE_SUMMARY,
} from "../../data/main-page-data";
import arrow from "../../assets/icons/arrow-right-solid.svg";

export default function Home() {
  //Application Steps Card Structure
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
      <div className="explanations">
        <h1>{MAIN_PAGE_SUMMARY.title}</h1>
        <p>{MAIN_PAGE_SUMMARY.summaryTextp1}</p>
        <a>DAHA FAZLASI</a>
      </div>
      <div className="summary">
        <h1>Biz Kimiz?</h1>
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
