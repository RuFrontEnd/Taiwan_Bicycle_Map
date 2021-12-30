import React from "react";
import styled from "styled-components/macro";
import Searchbar from "components/Searchbar";

const Station = (props) => {
  const { className, style } = props;
  return (
    <Container style={style} className={className}>
      <Wrap>
        <Searchbar />
      </Wrap>
    </Container>
  );
};

const Wrap = styled.div``;

const Container = styled.section``;

export default Station;
