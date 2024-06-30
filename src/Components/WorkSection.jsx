import React, { useEffect, useState } from "react";
import styles from "./WorkSection.module.css";
import bittokwebsite from '../Images/bittokwebsite.PNG'
import ReactTodo from "../Images/reactTodo.PNG";
import ecommerce from '../Images/ecommerce.PNG'
import alfattah from '../Images/alfattah.PNG'
import calculatorjs from "../Images/calculatorjs.PNG";
import birthdaycalculator from "../Images/birthdaycalculator.PNG";
import Weatherapp from "../Images/Weatherapp.PNG";
import bmi from '../Images/bmi.PNG'




import AOS from "aos";

const WorkSection = () => {
  const projectObj = [
    {
      projectName: "Al Fattah Services",
      url: "https://al-fattah-services-frontend.vercel.app/",
      projectImg: alfattah,
      category: "React",
    },
    {
      projectName: "Bittok Website Cloning",
      url: "https://biktok-website.vercel.app/",
      projectImg: bittokwebsite,
      category: "React",
    },
    {
      projectName: "React Todo App",
      url: "https://reacttodoss.netlify.app/",
      projectImg: ReactTodo,
      category: "React",
    },
    {
      projectName: "Ecommerce Landing Page",
      url: "https://ecommerce-react02.netlify.app/",
      projectImg: ecommerce,
      category: "React",
    },
    {
      projectName: "Weather Application",
      url: "https://ahmedraza13.github.io/Weather-Application/",
      projectImg: Weatherapp,
      category: "Javascript",
    },
    {
      projectName: "Javascript Calculator",
      url: "https://ahmedraza13.github.io/Javascript-Calculator/",
      projectImg: calculatorjs,
      category: "Javascript",
    },
    {
      projectName: "Birthday Calculator",
      url: "https://ahmedraza13.github.io/Birthday-Calculator/",
      projectImg: birthdaycalculator,
      category: "Javascript",
    },
    {
      projectName: "BMI Calculator",
      url: "https://ahmedraza13.github.io/BMI-Calculator/",
      projectImg: bmi,
      category: "Javascript",
    },
    
   ];
  const [workFilter, setworkFilter] = useState("");
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={styles.workMainBox}>
      <section className={styles.headingBox} data-aos="fade-up">
        <h5>Portfolio</h5>
        <h1>Check My Recent Work</h1>
      </section>
      <section className={styles.workOption}>
        <button
          onClick={(e) => {
            setworkFilter("");
            setIsFilter(false);
          }}
        >
          all
        </button>
        <button
          onClick={(e) => {
            setworkFilter("React");
            setIsFilter(true);
          }}
        >
          React
        </button>
        <button
          onClick={(e) => {
            setworkFilter("Javascript");
            setIsFilter(true);
          }}
        >
         Javascript
        </button>
      </section>

      <section
        className={`${styles.workBox} px-5 row m-0`}

        // data-aos-duration="3000"
      >
        {projectObj.map((val, ind) => {
          return isFilter ? (
            val.category === workFilter ? (
              <div
                // style={{ border: "1px solid red" }}
                className={`col-lg-3 col-md-6 col-sm-12 p-0 p-1 ${styles.colProd} `}
                key={ind}
              >
                <div className={`${styles.cardBox} `}>
                  <div className={styles.hideBox}>
                    <h5>{val.projectName}</h5>
                    <a href={val.url} target="_blank">
                      VISIT
                    </a>
                  </div>
                  <img src={val.projectImg} width="100%" alt="" />
                </div>
              </div>
            ) : null
          ) : (
            <div
              className={`col-lg-3 col-md-6 col-sm-12 p-0 p-1 ${styles.colProd} `}
              key={ind}
            >
              <div className={`${styles.cardBox} `}>
                <div className={styles.hideBox}>
                  <h5>{val.projectName}</h5>

                  <a href={val.url} target="_blank">
                    VISIT
                  </a>
                </div>
                <img src={val.projectImg} width="100%" alt="" />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default WorkSection;
