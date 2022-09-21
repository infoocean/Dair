import React, { useState, useEffect } from 'react';
import './style.css';

export default function Test() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    mydata();
  }, []);
  function mydata() {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://103.127.29.85:4000/ndhs-master/governance-stats/1/103/2021',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        setdata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const result = "Present Development";
  const res  = "Healthcare Governance";

  result = JSON.parse(result);
  console.log(typeof result)

  console.log("data",result);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}