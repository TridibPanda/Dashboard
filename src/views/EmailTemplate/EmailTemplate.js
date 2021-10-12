import React, { useEffect } from "react";

// @material-ui/core components
import EmailIcon from '@material-ui/icons/Email';
import CancelIcon from '@material-ui/icons/Cancel';
import SendIcon from '@material-ui/icons/Send';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CKEditor from "ckeditor4-react";


function EmailTemplate(props) {

  useEffect(() => {
    let login = window.localStorage.getItem("loggedin");
    if (login !== "Dashboard") {
      props.history.push("/login");
    }
  }, []);


  return (
    <>
      <GridContainer >
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <EmailIcon style={{ color: "white", }} fontSize="large" />
                </div>
                <div>
                  <Tooltip title="Cancel" >
                    <IconButton aria-label="Cancel">
                      <CancelIcon style={{ color: "white", }} fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    // onChangeValue={}
                    // value={}
                    labelText="To"
                    type="text"
                    id="to"
                    name="to"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={6} sm={6} md={6}>
                  <CustomInput
                    // onChangeValue={}
                    //value={}
                    labelText="Subject"
                    type="text"
                    id="Subject"
                    name="Subject"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CKEditor
                    onBeforeLoad={CKEDITOR =>
                      (CKEDITOR.disableAutoInline = true)
                    }
                  // data={}
                  //onChange={e => console.log(e.editor.getData())}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Tooltip title="Send" >
                <Button
                  name="addEmailSubmit"
                  onClick={props.handleChange}
                  color="info"
                >
                  <SendIcon style={{ color: "white", }} fontSize="large" />
                </Button>
              </Tooltip>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </>
  );
}
export default EmailTemplate;
