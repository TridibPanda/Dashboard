import React, { useState, useEffect } from "react";
import { Bar, Pie, Doughnut, PolarArea } from 'react-chartjs-2';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Select from "@material-ui/core/Select";
import { Button } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
// @material-ui/icons
import DateRange from "@material-ui/icons/DateRange";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import Accessibility from "@material-ui/icons/Accessibility";
import UpdateIcon from "@material-ui/icons/Update";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import PageviewIcon from "@material-ui/icons/Pageview";
import SpeakerNotesOffIcon from "@material-ui/icons/SpeakerNotesOff";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Navbar from "components/Navbars/Navbar.js";
import routes from "routes.js";
// import Tasks from "components/Tasks/Tasks.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
// import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
// import { db } from "components/url";

const useStyles = makeStyles(styles);
const modalStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    overflow: "scroll",
    paddingTop: "80px",
  },
  paper: {
    position: "center",
    width: "90%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const modalClass = modalStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [allUsers, setAllUsers] = useState(0);
  const [newUsers, setNewUsers] = useState(0);
  const [posts, setPosts] = useState(0);
  const [videos, setVideos] = useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const result = () => {
    //Total Users
    // db.collection("users").onSnapshot(function (querySnapshot) {
    //   setAllUsers(querySnapshot.size);
    // });
    setAllUsers(5000);
    const event = new Date(Date.now() - 86400000);
    //New Users
    // db.collection("users")
    //   .where('timestamp', '>=', event)
    //   .onSnapshot(function (querySnapshot) {
    //     setNewUsers(querySnapshot.size)
    //   });
    setNewUsers(100);
    //posts
    // db.collection("Posts").onSnapshot(function (querySnapshot) {
    //   setPosts(querySnapshot.size);
    // });
    setPosts(708);
    //videos
    // db.collection("Videos").onSnapshot(function (querySnapshot) {
    //   setVideos(querySnapshot.size);
    // });
    setVideos(120);
  };
  useEffect(() => {
    let login = window.localStorage.getItem("loggedin");
    if (login !== "Dashboard") {
      props.history.push("/login");
    }
    result();
  }, []);

  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
    datasets: [
      {
        label: 'Posts',
        data: [2, 3, 20, 5, 1, 4, 4, 8, 70, 100, 11, 45, 85, 45, 79,],
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: 'Videos',
        data: [3, 10, 13, 15, 22, 30, 4, 8, 70, 10, 11, 25, 85, 45, 79,],
        backgroundColor: 'rgb(16, 175, 18)',
      },
    ],
  };

  const PieData = {
    labels: ['Startup', 'Company', 'Investor'],
    datasets: [
      {
        label: '# of Votes',
        data: [4000, 100, 900],
        backgroundColor: [
          'rgb(0, 255, 0)',
          'rgb(0, 0, 255)',
          'rgb(255, 245,0)',
        ],
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        // ],
        // borderWidth: 1,
      },
    ],
  };

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

  const handleChange = (e) => {
    const filterValue = e.target.value;
    const time = (filterValue * 86400000);
    const event = new Date(Date.now() - time);
    //New Users
    // db.collection("users")
    //   .where('timestamp', '>=', event)
    //   .onSnapshot(function (querySnapshot) {
    //     setNewUsers(querySnapshot.size);
    //   });
    if (filterValue == 1 || filterValue == 2) {
      setNewUsers(filterValue == 2 ? 150 : 100);
    } else {
      setNewUsers(filterValue == 7 ? 320 : 1071);;
    }

  }

  return (
    <>
      <Navbar routes={routes} handleDrawerToggle={handleDrawerToggle} />
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Total users</p>
                <h3 className={classes.cardTitle}>{allUsers}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <UpdateIcon />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>New users</p>
                <h3 className={classes.cardTitle}>{newUsers}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  <Select
                    style={{ backgroundColor: "white", fontSize: 12, paddingLeft: 5, color: "#919191" }}
                    className={classes.flex}
                    onChange={handleChange}
                    native="true"
                  >
                    <option value={1} style={{ fontSize: 15 }}>Last 24 Hours</option>
                    <option value={2} style={{ fontSize: 15 }}>Last 48 Hours</option>
                    <option value={7} style={{ fontSize: 15 }}>This Week</option>
                    <option value={30} style={{ fontSize: 15 }}>This Month</option>
                  </Select>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <VideoLibraryIcon />
                </CardIcon>
                <p className={classes.cardCategory}>Total posts</p>
                <h3 className={classes.cardTitle}>{posts}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <UpdateIcon />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <VideoLibraryIcon />
                </CardIcon>
                <p className={classes.cardCategory}>Total videos </p>
                <h3 className={classes.cardTitle}>{videos}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <UpdateIcon />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <Pie data={PieData} />
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card>
              <Bar data={data} options={options} />
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <Doughnut data={PieData} />
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <PolarArea data={PieData} />
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <MyMapComponent isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `250px`, width: `500px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
}

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 25.455, lng: 100.788 }}
  >
    {props.isMarkerShown && mapData.map((item) => {
      return (
        <Marker position={item} />
      );
    })
    }
  </GoogleMap>
));

const mapData = [
  {
    lat: 25.455,
    lng: 100.788
  },
  {
    lat: 27.405,
    lng: 100.780
  },
  {
    lat: 28.454444,
    lng: 100.7887893
  },
  {
    lat: 26.255,
    lng: 100.488
  },
];
