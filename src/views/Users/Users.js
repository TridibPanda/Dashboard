import React, { useState, useEffect } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Select from "@material-ui/core/Select";
import GetAppIcon from '@material-ui/icons/GetApp';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Table from "components/Table/Table.js";
import defaultUser from "assets/img/default-user.png";
// import { db } from "components/url";
import XLSX from 'xlsx';

const styles = {
  SmallIcon: {
    width: 30,
    height: 30,
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    overflow: "scroll",
    paddingTop: "30px",
  },
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    fontWeight: "bold",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);



function Users(props) {

  const Data = [
    {
      image: '',
      name: 'Tridib Panda',
      email: 'tridib@gmail.com',
      phone: '9875627840',
      timeStamp: '10/10/2021',
      description: 'Hi,how are you?'
    },
    {
      image: '',
      name: 'Subho',
      email: 'subho@gmail.com',
      phone: '9875627840',
      timeStamp: '10/10/2021',
      description: 'Hi,how are you?'
    },
    {
      image: '',
      name: 'Mijan',
      email: 'Mijan@gmail.com',
      phone: '9875627841',
      timeStamp: '10/10/2021',
      description: 'Hi,how are you?'
    },
    {
      image: '',
      name: 'Sudip',
      email: 'Sudip@gmail.com',
      phone: '9875627845',
      timeStamp: '10/10/2021',
      description: 'Hi,how are you?'
    },
    {
      image: '',
      name: 'Moumita',
      email: 'Moumita@gmail.com',
      phone: '9875627840',
      timeStamp: '05/07/2021',
      description: 'Hi, you can help me'
    },
  ];

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([]);
  const [description, setDescription] = useState("");
  const [excelData, setExcelData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (des) => {
    setOpen(true);
    setDescription(des);
  };


  const handleClose = () => {
    setOpen(false);
  };


  var handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      console.log("Bottom");
    }
  };
  // Total Users
  // const listData = () => {
  //   db.collection("users")
  //     .onSnapshot(function (querySnapshot) {
  //       if (!querySnapshot.empty) {
  //         var sortedArray = [];
  //         var tempArray = [];
  //         var list = [];
  //         querySnapshot.forEach(async(doc)=> {
  //           tempArray = [];
  //           const data = {
  //             Name: doc.data().fullName,
  //             Email: doc.data().email,
  //             Phone: doc.data().phone,
  //             Created: doc.data().timestamp ? `${doc.data().timestamp.toDate()}` : `${new Date()}`,
  //             About: doc.data().about,
  //           };
  //           doc.data().profileImage
  //             ? tempArray.push(
  //               <img
  //                 style={{
  //                   height: "50px",
  //                   width: "50px",
  //                   borderRadius: "50%",
  //                 }}
  //                 src={doc.data().profileImage}
  //               />
  //             )
  //             : tempArray.push(
  //               <img
  //                 style={{
  //                   height: "50px",
  //                   width: "50px",
  //                   borderRadius: "50%",
  //                 }}
  //                 src={defaultUser}
  //               />
  //             );
  //           tempArray.push(doc.data().fullName);
  //           tempArray.push(doc.data().email);
  //           tempArray.push(doc.data().phone);
  //           doc.data().timestamp
  //             ? tempArray.push(`${doc.data().timestamp.toDate()}`)
  //             : tempArray.push(`${new Date()}`);
  //           tempArray.push(doc.data().about);
  //            tempArray.push(
  //             <Button
  //               variant="contained"
  //               size="small"
  //               color="primary"
  //               className={classes.margin}
  //               onClick={() => handleOpen(doc.id)}
  //             >
  //               View
  //             </Button>
  //           );
  //           sortedArray.push(tempArray);
  //           list.push(data);
  //         });
  //         setUser(sortedArray);
  //         setExcelData(list);
  //       } else {
  //         setUser([[" ", "No data found", " ", " ", " ", " "]]);
  //       }
  //     });
  // }

  const handleChange = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "Date") {
      console.log('Data')
    } else if (filterValue === "Name") {
      console.log('Name')
    } else {
      console.log('Modified')
    }
  }

  useEffect(() => {
    let login = window.localStorage.getItem("loggedin");
    if (login !== "Dashboard") {
      props.history.push("/login");
    }
    var sortedArray = [];
    var tempArray = [];
    var list = [];
    Data.forEach(async (doc) => {
      tempArray = [];
      const data = {
        ProfileImage: doc.image,
        Name: doc.name,
        Email: doc.email,
        Phone: doc.phone,
        Created: doc.timeStamp,
        Description: doc.description,
      };

      doc.image
        ? tempArray.push(
          <img
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
            }}
            src={doc.image}
          />
        )
        : tempArray.push(
          <img
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
            }}
            src={defaultUser}
          />
        );
      tempArray.push(doc.name);
      tempArray.push(doc.email);
      tempArray.push(doc.phone);
      doc.timeStamp
        ? tempArray.push(`${new Date(doc.timeStamp)}`)
        : tempArray.push(`${new Date()}`);
      tempArray.push(
        <Button
          variant="contained"
          size="small"
          color="primary"
          className={classes.margin}
          onClick={() => handleOpen(doc.description)}
        >
          View
        </Button>
      );
      sortedArray.push(tempArray);
      list.push(data);
    });
    setUser(sortedArray);
    setExcelData(list);
    // listData();
  }, []);

  const downloadExcel = (filetype) => {
    const workSheet = XLSX.utils.json_to_sheet(excelData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "Users List");
    //Buffer xlsx
    let buf = XLSX.write(workBook, { bookType: filetype, type: "buffer" });
    //Binary string
    XLSX.write(workBook, { bookType: filetype, type: "binary" });
    //Download
    XLSX.writeFile(workBook, `Users List.${filetype}`);
    setAnchorEl(null);
  }


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  // text to speak
  const Speak = () => {
    const s = new SpeechSynthesisUtterance(description);
    [s.voice] = speechSynthesis.getVoices();
    speechSynthesis.speak(s);
  };

  //search
  const search = (e) => {
    var val = e.target.value;
    let s = Data.filter((t) => t['name'].toLowerCase().indexOf(val.toLowerCase()) > -1 || t['email'].toLowerCase().indexOf(val.toLowerCase()) > -1 || t['phone'].toLowerCase().indexOf(val.toLowerCase()) > -1 || t['timeStamp'].toLowerCase().indexOf(val.toLowerCase()) > -1);

    var sortedArray = [];
    var tempArray = [];
    var list = [];
    s.forEach(async (doc) => {
      tempArray = [];
      const data = {
        ProfileImage: doc.image,
        Name: doc.name,
        Email: doc.email,
        Phone: doc.phone,
        Created: doc.timeStamp,
        Description: doc.description,
      };

      doc.image
        ? tempArray.push(
          <img
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
            }}
            src={doc.image}
          />
        )
        : tempArray.push(
          <img
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
            }}
            src={defaultUser}
          />
        );
      tempArray.push(doc.name);
      tempArray.push(doc.email);
      tempArray.push(doc.phone);
      doc.timeStamp
        ? tempArray.push(`${new Date(doc.timeStamp)}`)
        : tempArray.push(`${new Date()}`);
      tempArray.push(
        <Button
          variant="contained"
          size="small"
          color="primary"
          className={classes.margin}
          onClick={() => handleOpen(doc.description)}
        >
          View
        </Button>
      );
      sortedArray.push(tempArray);
      list.push(data);
    });
    setUser(sortedArray);
    setExcelData(list);
  };

  return (
    <>
      <div>
        <Modal style={styles.modal} open={open} onClose={handleClose}>
          <GridContainer style={{ width: "60%", height: "50%" }}>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader color="info">
                  <div style={{ display: "flex", }}>
                    <h3 className={classes.cardTitleWhite}>Descriptions</h3>
                    <GridContainer style={{ paddingLeft: "45%", }}>
                      <GridItem xs={12} sm={12} md={7}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={Speak}
                          size="large"
                        >
                          Speak
                        </Button>
                      </GridItem>
                    </GridContainer>
                    <GridContainer style={{ paddingLeft: "3%" }}>
                      <GridItem xs={12} sm={12} md={7}>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={handleClose}
                          size="large"
                        >
                          Cancel
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </div>
                </CardHeader>
                <CardBody onScroll={handleScroll}>
                  <div>
                    <div style={{ alignContent: "space-between" }}>
                      <text style={{ fontSize: 20, padding: 10 }}>{description}</text>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </Modal>
      </div>

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4 className={classes.cardTitleWhite}>Users</h4>
                <input placeholder='Search' style={{ height: 30, width: 500, fontSize: 16, alignSelf: 'center', paddingLeft: 10 }} onChange={search} />
                <div>
                  <Select
                    style={{ color: "white", fontSize: 16, fontWeight: 'bold' }}
                    className={classes.flex}
                    onChange={handleChange}
                    native="true"
                  // value = {data.filter}

                  >
                    <option value={"Modified"} style={{ fontSize: 16, color: "black" }}>Modified</option>
                    <option value={"Name"} style={{ fontSize: 16, color: "black" }}>Name</option>
                    <option value={"Date"} style={{ fontSize: 16, color: "black" }}>Date</option>
                  </Select>
                  <Tooltip title="Download" onClick={handleClick}>
                    <IconButton aria-label="Download">
                      <GetAppIcon style={{ color: "white" }} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                  >
                    <MenuItem onClick={() => downloadExcel("csv")}>Export to CSV</MenuItem>
                    <MenuItem onClick={() => downloadExcel("xlsx")}>Export to Excel</MenuItem>
                  </Menu>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableHead={[
                  "Profile image",
                  "Name",
                  "Email",
                  "Phone",
                  "Created",
                  "Description",
                ]}
                tableData={user}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </>
  );
}

export default Users;
