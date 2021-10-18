import React, { useState, useEffect } from "react";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Table from "components/Table/Table.js";
import XLSX from 'xlsx';

const EXTENSIONS = ['xlsx', 'xls', 'csv'];

function Chart(props) {

  const [list, setList] = useState([]);
  const [headers, setHeaders] = useState([]);

  // Extensions
  const getExention = (file) => {
    const parts = file.name.split('.');
    const extension = parts[parts.length - 1];
    return EXTENSIONS.includes(extension); // return boolean
  };

  useEffect(() => {
    let login = window.localStorage.getItem("loggedin");
    if (login !== "Dashboard") {
      props.history.push("/login");
    }
  }, []);

  const importExcel = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      //parse data

      const bstr = event.target.result;
      const workBook = XLSX.read(bstr, { type: "binary" });

      //get first sheet
      const workSheetName = workBook.SheetNames[0];
      const workSheet = workBook.Sheets[workSheetName];

      //convert to array
      const fileData = XLSX.utils.sheet_to_txt(workSheet, { header: 1 });
      // console.log(fileData)

      //Headers
      const headers = fileData[0];
      setHeaders(headers);

      //removing header
      fileData.splice(0, 1);
      setList(fileData);

    };

    if (file && getExention(file)) {
      reader.readAsBinaryString(file);
    }
    else {
      setList([]);
      setHeaders([]);
    }
  };

  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <input type="file" style={{ fontSize: 15 }} onChange={importExcel} />
              </div>
            </CardHeader>
            <CardBody>
              {list.length ? <Table
                tableHeaderColor="info"
                tableHead={headers}
                tableData={list}
              /> :
                <div style={{ justifyContent: "center", alignItems: "center" }}>
                  <h3>Select Excel, CSV file</h3>
                </div>
              }
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </>
  );
}

export default Chart;
