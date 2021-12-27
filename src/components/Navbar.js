import React, { useRef, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNavBarHeight } from "redux/navBar/navBarActions";
import styled from "styled-components/macro";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
// import { ReactComponent as Attraction } from "assets/attraction.svg";
// import { ReactComponent as Food } from "assets/food.svg";
import { __FFF__, __000__ } from "variable/variable";
import Space from "layouts/Space";

const Navbar = (props) => {
  const { className, style, history } = props;
  const dispatch = useDispatch();
  const $NavbarContainer = useRef();

  const transferAddress = (address) => {
    history.push(address);
  };

  useEffect(() => {
    dispatch(setNavBarHeight($NavbarContainer.current.clientHeight));
  }, []);

  return (
    <Container className={className} style={style}>
      <Wrap>
        <Box ref={$NavbarContainer}>
          <BikeLogo
            onClick={() => {
              history.push("/scenicspots");
            }}
          />
          <Options>
            <AttractLink
              onClick={() => {
                history.push("/scenicspots");
              }}
            >
              <AttractionIcon />
              <Text>活動景點</Text>
            </AttractLink>
            <FoodtLink
              onClick={() => {
                transferAddress("/foods");
              }}
            >
              <FoodIcon />
              <Text>美食住宿</Text>
            </FoodtLink>
            {/* <TrafficLink
            onClick={() => {
              transferAddress("/foodAndAccommodation");
            }}
          >
            <TrafficIcon />
            景點交通
          </TrafficLink> */}
          </Options>
        </Box>
      </Wrap>
    </Container>
  );
};

const BikeLogo = styled(Logo)`
  cursor: pointer;
`;

const FoodIcon = styled.div`
  margin-right: 8px;
  @media (max-width: 425px) {
    margin-right: 0px;
  }
`;

const AttractionIcon = styled.div`
  margin-right: 8px;
  @media (max-width: 425px) {
    margin-right: 0px;
  }
`;

const TrafficLink = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 27px;
  text-decoration: underline;
`;

const Text = styled.p`
  @media (max-width: 425px) {
    display: none;
  }
`;

const Link = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: underline;
`;

const FoodtLink = styled(Link)`
  color: ${__000__()};
`;

const AttractLink = styled(Link)`
  color: ${__000__()};
  margin-right: 27px;
  @media (max-width: 576px) {
    margin-right: 20px;
  }
`;

const Options = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
`;

const Box = styled.div`
  background-color: ${__FFF__()};
  display: flex;
  justify-content: space-between;
  padding-top: 18px;
  padding-bottom: 18px;
`;

const Wrap = styled(Space)``;

const Container = styled.div`
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${__FFF__()};
`;

export default withRouter(Navbar);
