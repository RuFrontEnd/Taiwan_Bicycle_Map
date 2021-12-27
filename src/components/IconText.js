import React from "react";
import styled from "styled-components/macro";
import { __16__ } from "variable/variable";

const IconText = (props) => {
  const { className, style, icon, text } = props;
  return (
    <Container style={style} className={className}>
      <Wrap>
        <Icon fill={icon.color}>{icon.svg}</Icon>
        <Text color={text.color}>{text.content}</Text>
      </Wrap>
    </Container>
  );
};

const Text = styled.p`
  font-size: ${__16__()};
`;

const Icon = styled.div`
  & svg {
    fill: ${(props) => props.fill && props.fill};
  }
`;

const Wrap = styled.div`
  display: flex;
`;

const Container = styled.section``;

export default IconText;
