import React from "react";
import { Card, Box, Typography, makeStyles, Button } from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../store/reducer";

const useStyles = makeStyles(() => ({
  img: {
    height: "200px",
    width: "200px",
    borderRadius: "5px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    border: "1px solid black",
    height: "300px",
    width: "70%",
    padding: "10px",
    marginTop: "100px",
  },
}));

function Candidate(props) {
  const location = useLocation();
  const styles = useStyles();
  const history = useHistory();

  const {
    state: { data },
  } = location;

  function onCTAClick(action) {
    if (action === "shortlist") {
      props.addShotlisted(data);
    } else if (action === "rejected") {
      props.addRejected(data);
    }
    console.log(props, "onCTAClick");
    history.push("/");
  }

  return (
    <Card className={styles.container}>
      <Box className="d-flex justify-content-between align-items-center w-100">
        <Box>
          <Typography variant="h3">{data.name}</Typography>
          <Typography variant="body1">ID: {data.id}</Typography>
        </Box>
        <Box>
          <img
            src={data.Image}
            alt={`${data.name}'s image`}
            className={styles.img}
          />
        </Box>
      </Box>
      <Box className="w-100 d-flex align-items-center justify-content-around">
        <Button variant="outlined" onClick={(_) => onCTAClick("shortlist")}>
          Shortlist
        </Button>
        <Button variant="outlined" onClick={(_) => onCTAClick("rejected")}>
          Reject
        </Button>
      </Box>
    </Card>
  );
}

export default connect((state) => state, actions)(Candidate);
