import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project';

function App() {

  // state value
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  // value needed to access the attribute within the array
  const [value, setValue] = useState(0);

  // fetch function
  const fetchJobs = async () => {
    const response = await fetch(url);
    // turn data into json method
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }

  // useEffect to run the function, empty array at the end to run once
  useEffect(() => {
    // invoked the function
    fetchJobs();
  }, []);

  // setup the return condition
  if(loading) {
    return(
      <section className ="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  // after loading, destructure coming from the "jobs" state with "value"
  const {company, dates, duties, title } = jobs[value];
  // console.log(jobs[value])

  return(
    <>
      <section className ="section">
        <div className ="title">
          <h2>Experience</h2>
          <div className ="underline"></div>      
        </div>
        <div className ="jobs-center">
        {/* btn container */}
        {/* job info */}
          <article className ="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className ="job-date">{dates}</p>
            {/* iterate over duties which is an array AND pass in index cause it's a list*/}
            {duties.map((duty, index) => {
              return(
                <div key ={index} className ="job-desc">
                  <FaAngleDoubleRight
                    className ="job-icon"
                  >
                  </FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>  
              )
            })}
          </article>
        </div>
      </section>
    </>    
  ); 
}

export default App
