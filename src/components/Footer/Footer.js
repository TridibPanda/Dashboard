/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import AndroidIcon from '@material-ui/icons/Android';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="https://play.google.com/store/apps" target="_blank" className={classes.block}>
                <AndroidIcon/>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://apps.apple.com/sg/app" target="_blank" className={classes.block}>
                <PhoneIphoneIcon/>
               
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="https://google.com/"
              target="_blank"
              className={classes.a}
            >
              Dashboard
            </a>
            , Dashboard
          </span>
        </p>
      </div>
    </footer>
  );
}
