import React from "react";
import styled from "styled-components/macro";
import { color } from "variable/variable";

const IconButton = (props) => {
  const { className, style, children } = props;
  return (
    <Container style={style} className={className}>
      <Wrap className="d-flex justify-content-center align-items-center">
        {children}
      </Wrap>
    </Container>
  );
};

const Wrap = styled.div`
  background-color: ${color.__F25C54__()};
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

const Container = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
`;

export default IconButton;
