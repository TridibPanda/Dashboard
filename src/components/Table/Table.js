import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

import TablePagination from "@material-ui/core/TablePagination";

const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [startPoint, setStartPoint] = React.useState(0);
  const [endPoint, setEndPoint] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    console.log(newPage, "newPage of handleChangePage");
    setStartPoint(newPage * rowsPerPage);
    setEndPoint(newPage * rowsPerPage + rowsPerPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log(+event.target.value, "event of handleChangeRowsPerPage");
    setStartPoint(0);
    setEndPoint(+event.target.value);
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor, customStyle } = props;
  // const customStyle = {
  //   fontSize: "20px",
  //   fontWeight: "bold !important"
  // }
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead
            style={customStyle}
            className={classes[tableHeaderColor + "TableHeader"]}
          >
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.slice(startPoint, endPoint).map((prop, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                {prop.map((prop, key) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
