import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project';

function App() {

  // state value
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  // fetch function
  const fetchJobs = async () => {
    const response = await fetch(url);
    // turn data into json method
    const newJobs = await response.json();
  }

  return <h2>tabs project setup</h2>
}

export default App
