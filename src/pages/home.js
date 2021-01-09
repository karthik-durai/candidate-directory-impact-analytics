import React, { useEffect, useState } from "react";
import { styled, Box, TextField } from "@material-ui/core";
import Service from "../network";
import CandidateCard from "../components/candidate-card";
import { actions } from "../store/reducer";
import { connect } from "react-redux";

const CandidatesContainer = styled(Box)({});

function Home(props) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    getCandidates();
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  async function getCandidates() {
    setShowLoader(true);
    try {
      const { data } = await Service.get("");
      setData(data);
    } catch (e) {
      setData(data);
    }
    setShowLoader(false);
  }

  function onSearch(query) {
    setFilteredData(
      data.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.id.toLowerCase().includes(query)
      )
    );
  }

  return showLoader ? (
    <p>Loading...</p>
  ) : (
    <Box className="p-3 w-100">
      <form className="mb-3 w-100">
        <TextField
          placeholder="Search Candidates by Name or ID"
          variant="outlined"
          fullWidth
          onChange={({ target: { value } }) => onSearch(value)}
        />
      </form>
      <CandidatesContainer className="d-grid gap-3">
        {filteredData.map((item) => (
          <CandidateCard key={item.id} data={item} />
        ))}
      </CandidatesContainer>
    </Box>
  );
}

export default connect((state) => state, actions)(Home);
