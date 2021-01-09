import React, { useState, useEffect } from "react";
import { styled, Box, Typography, Select, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Container = styled(Box)({
  height: "100vh",
});

const ChildrenContainer = styled(Box)({
  margin: "0 auto",
  minHeight: "calc(100vh - 50px)",
  width: "1024px",
  display: "flex",
  justifyContent: "center",
});

const Header = styled(Box)({
  height: "50px",
  width: "100%",
  boxShadow: "1px 2px 2px 2px rgba(0,0,0,0.55)",
});

const DropDownContainer = styled(Box)({
  position: "absolute",
  right: "10px",
});

function Layout(props) {
  const [view, setView] = useState("All");

  const history = useHistory();

  useEffect(() => {
    if (view === "All") history.push("/");
    if (view === "Shortlisted") history.push("/shortlisted");
    if (view === "Rejected") history.push("/rejected");
  }, [view]);

  return (
    <Container>
      <Header className="d-flex align-items-center justify-content-center">
        <Typography variant="h5" fontWeight="fontWeightBold">
          Candidate Directory
        </Typography>
        <DropDownContainer className="d-flex align-items-center">
          <Typography className="mr-4">View: </Typography>
          <Select
            renderValue={(_) => <Typography>{view}</Typography>}
            defaultChecked={view}
            value={view}
            className="ml-2"
          >
            <MenuItem value="All" onClick={(_) => setView("All")}>
              All
            </MenuItem>
            <MenuItem
              value="Shortlisted"
              onClick={(_) => setView("Shortlisted")}
            >
              Shortlisted
            </MenuItem>
            <MenuItem value="Rejected" onClick={(_) => setView("Rejected")}>
              Rejected
            </MenuItem>
          </Select>
        </DropDownContainer>
      </Header>
      <ChildrenContainer>{props.children}</ChildrenContainer>
    </Container>
  );
}

export default Layout;
