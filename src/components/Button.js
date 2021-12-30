import React, { forwardRef } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components/macro";
import { color } from "variable/variable";

const Button = forwardRef((props) => {
  const { className, style, children, infos } = props;

  return (
    <Container className={className} style={style} fluid>
      <Wrap selected={infos.selected}>{children}</Wrap>
    </Container>
  );
});

const Wrap = styled.div`
  color: ${color.__141414__()};

  background-color: ${(props) =>
    props.selected ? color.__F8F8F8__() : "transparent"};

  padding: 13px 10px;
  border-radius: 10px;
  line-height: 17px;
`;

const Container = styled.button`
  padding: 0px 0px;
`;

export default withRouter(Button);
