import React from "react";
import styled from "styled-components/macro";
import IconButton from "components/IconButton.tsx";
import { ReactComponent as search } from "assets/svg/search.svg";
import { color, fontSize } from "variable/variable";

const SearchBar = (props) => {
  const { className, style, children } = props;
  return (
    <Container style={style} className={className}>
      <Wrap className="d-flex justify-content-center align-items-center">
        <SearchIconButton>
          <SearchIcon />
        </SearchIconButton>
        <Input placeholder="搜尋 YouBike 租借站" />
      </Wrap>
    </Container>
  );
};

const Input = styled.input`
  width: 300px;
  padding: 18px 16.5px;
  border-radius: 10px;
  border: none;
  color: ${color.__F25C54__()};

  &::placeholder {
    color: ${color.__BDBDBD__()};
    font-size: ${fontSize.__m__()};
    line-height: 17px;
  }

  &::placeholder {
    color: ${color.__BDBDBD__()};
    font-size: ${fontSize.__m__()};
    line-height: 17px;
  }

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(search)``;

const SearchIconButton = styled(IconButton)`
  position: absolute;
  right: 0;
  margin: 8px;
  width: 38px;
  height: 38px;
`;

const Wrap = styled.div`
  position: relative;
`;

const Container = styled.button``;

export default SearchBar;
