import React from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  img: {
    height: "70px",
    width: "70px",
    borderRadius: "5px",
  },
}));

function CandidateCard({ data }) {
  const styles = useStyles();
  const history = useHistory();

  return (
    <Card
      className="border border-secondary cursor-pointer"
      onClick={(_) => history.push(`/${data.id}`, { data })}
    >
      <CardContent className="d-flex">
        <Box className="me-4">
          <img
            className={styles.img}
            src={data.Image}
            alt={`${data.name}'s image`}
          />
        </Box>
        <Box>
          <Typography variant="h5">{data.name}</Typography>
          <Typography>ID: {data.id}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CandidateCard;
