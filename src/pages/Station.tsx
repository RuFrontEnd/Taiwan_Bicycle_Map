import React from "react";
import styled from "styled-components/macro";
import SearchBar from "components/SearchBar";

const Station = (props: { className: any; style: any }) => {
  const { className, style } = props;
  return (
    <Container style={style} className={className}>
      <Wrap>
        <SearchBar />
      </Wrap>
    </Container>
  );
};

const Wrap = styled.div``;

const Container = styled.section``;

export default Station;
