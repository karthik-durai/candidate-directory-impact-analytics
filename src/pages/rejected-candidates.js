import React from "react";
import { connect } from "react-redux";
import { styled, Box } from "@material-ui/core";
import CandidateCard from "../components/candidate-card";

const CandidatesContainer = styled(Box)({});

function RejectedCandidates(props) {
  return (
    <CandidatesContainer className="p-3 w-100">
      {props.rejected.map((item) => (
        <CandidateCard key={item.id} data={item} />
      ))}
    </CandidatesContainer>
  );
}

export default connect((state) => state)(RejectedCandidates);
