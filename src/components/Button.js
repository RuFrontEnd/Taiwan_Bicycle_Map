import React, { forwardRef } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components/macro";
import {
  __m__,
  __FFF__,
  __000__,
  __F8F8F8__,
  __141414__,
} from "variable/variable";

const Button = forwardRef((props) => {
  const { className, style, children, selected } = props;

  return (
    <Container className={className} style={style} fluid>
      <Wrap selected={selected}>{children}</Wrap>
    </Container>
  );
});

const Wrap = styled.div`
  color: ${__141414__()};
  background-color: ${(props) =>
    props.selected ? __F8F8F8__() : "transparent"};
  padding: 13px 10px;
  border-radius: 10px;
  line-height: 17px;
`;

const Container = styled.button`
  padding: 0px 0px;
`;

export default withRouter(Button);
