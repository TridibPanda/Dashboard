import React, { useEffect } from "react";
import { Bar } from 'react-chartjs-2';

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";


function Chart(props) {

  useEffect(() => {
    let login = window.localStorage.getItem("loggedin");
    if (login !== "Dashboard") {
      props.history.push("/login");
    }
  }, []);

  const options = {
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15','16','17','18','19','20','21','22','23','24','25','26','27','28'],
    datasets: [
      {
        label: 'Posts',
        data: [2, 3, 20, 5, 1, 4, 4, 8, 70, 100, 11, 45, 85, 45, 79,44,78,5,12,25,3,18,9,23,11,20,14,7],
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: 'Videos',
        data: [3, 10, 13, 15, 22, 30, 4, 8, 70, 10, 11, 25, 85, 45, 79,6,9,7,3,10,4,8,3,1,0,12,0,2],
        backgroundColor: 'rgb(16, 175, 18)',
      },
    ],
  };

  return (
    <>
    <text>Chart</text>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
          <Bar data={data} options={options} />
          </Card>
        </GridItem>
      </GridContainer>
    </>
  );
}

export default Chart;
