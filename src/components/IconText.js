import React from "react";
import styled from "styled-components/macro";
import { __m__ } from "variable/variable";

const IconText = (props) => {
  const { className, style, info } = props;
  return (
    <Container style={style} className={className}>
      <Wrap className="d-flex align-items-center">
        <Icon fill={info.svgColor}>{info.svg}</Icon>
        <Text color={info.textColor}>{info.content}</Text>
      </Wrap>
    </Container>
  );
};

const Text = styled.p``;

const Icon = styled.div`
  margin-right: 10px;
  & svg {
    fill: ${(props) => props.fill && props.fill};
  }
`;

const Wrap = styled.div``;

const Container = styled.section`
  display: inline-block;
`;

export default IconText;
