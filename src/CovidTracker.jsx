import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import lottie from "lottie-web";
import { Alert } from "react-bootstrap";
import Login from "./auth/Login";
import Logout from "./auth/Logout";

const CovidTracker = () => {
  const [covidData, setCovidData] = useState([]);
  const [covidStats, setCovidStats] = useState([]);

  const element = useRef(null);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://corona-virus-world-and-india-data.p.rapidapi.com/api",
        {
          headers: {
            "x-rapidapi-host":
              "corona-virus-world-and-india-data.p.rapidapi.com",
            "x-rapidapi-key":
              "08295af6edmsh25c9fc24b3b7d6fp1b591ejsn18d6e7fda81d",
          },
        }
      );

      const responce = res.data;
      setCovidData(responce.countries_stat);
      setCovidStats(responce.world_total);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  });

  useEffect(() => {
    lottie.loadAnimation({
      container: element.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./lotties/17902-covid19.json"),
    });
  }, []);

  return (
    <>
      <Alert variant="danger text-center fw-bold overflow-hidden">
        Refresh page for updates!
        {localStorage.getItem("login") ? <Logout /> : <Login />}
      </Alert>

      <div className="container mx-auto overflow-hidden">
        <header className="d-flex justify-content-center align-items-center overflow-hidden">
          <div style={{ "max-width": "200px" }} ref={element}></div>
          <p className="fw-bold display-6">COVID TRACKER</p>
        </header>

        <div className="text-white fw-bold my-5 text-uppercase responsiveCards">
          <div
            className="card bg-primary mx-2 sm:col-6 overflow-hidden"
            style={{ width: "17rem" }}
          >
            <div className="card-body">
              <p className="card-text">Active Cases</p>
              <p className="card-text display-5">{covidStats?.active_cases}</p>
            </div>
          </div>
          <div className="card bg-warning mx-2" style={{ width: "17rem" }}>
            <div className="card-body">
              <p className="card-text">Total Cases</p>
              <p className="card-text display-5">{covidStats?.total_cases}</p>
            </div>
          </div>
          <div className="card bg-danger mx-2" style={{ width: "17rem" }}>
            <div className="card-body">
              <p className="card-text">Total Deaths</p>
              <p className="card-text display-5">{covidStats?.total_deaths}</p>
            </div>
          </div>
          <div className="card bg-success mx-2" style={{ width: "18rem" }}>
            <div className="card-body">
              <p className="card-text">Recovered Cases</p>
              <p className="card-text display-5">
                {covidStats?.total_recovered}
              </p>
            </div>
          </div>
        </div>

        <div className="w-100 overflow-scroll">
          <table className="table table-hover text-uppercase rowScroll">
            <thead className="bg-secondary text-white">
              <tr>
                <th scope="col">Country</th>
                <th scope="col">active_cases</th>
                <th scope="col">cases</th>
                <th scope="col">deaths</th>
                <th scope="col">total_recovered</th>
                <th scope="col">total_tests</th>
              </tr>
            </thead>

            <tbody>
              {covidData.map((stats, id) => {
                const {
                  active_cases,
                  cases,
                  country_name,
                  deaths,
                  total_recovered,
                  total_tests,
                } = stats;

                return (
                  <tr key={id} className="text-uppercase fw-bold">
                    <th scope="row">{country_name}</th>
                    <td className="text-primary">{active_cases}</td>
                    <td className="text-warning">{cases}</td>
                    <td className="text-danger">{deaths}</td>
                    <td className="text-success">{total_recovered}</td>
                    <td className="text-info">{total_tests}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CovidTracker;
