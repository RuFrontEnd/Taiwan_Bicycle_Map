import React, { useRef, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components/macro";
import { useDispatch } from "react-redux";
import { setNavBarHeight } from "redux/navBar/navBarActions";
import { __FFF__, __000__ } from "variable/variable";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import { ReactComponent as Cloud } from "assets/svg/cloud.svg";
import { ReactComponent as Temperature } from "assets/svg/temperature.svg";
import IconText from "components/IconText";

const WeatherIconTextProps = {
  icon: {
    svg: <Cloud />,
  },
  text: {
    content: "123",
  },
};

const Navbar = (props) => {
  const { className, style, history } = props;
  const dispatch = useDispatch();
  const $NavbarContainer = useRef();

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
            <WeatherIconText {...WeatherIconTextProps} />
            {/* <FoodtLink
              onClick={() => {
                history.push("/foods");
              }}
            >
              <TemperatureIcon />
              <Text>18</Text>
            </FoodtLink> */}
          </Options>
        </Box>
      </Wrap>
    </Container>
  );
};

const BikeLogo = styled(Logo)`
  cursor: pointer;
`;

const TemperatureIcon = styled(Temperature)`
  margin-right: 8px;
  @media (max-width: 425px) {
    margin-right: 0px;
  }
`;

const CloudIcon = styled(Cloud)`
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

const Weather = styled(Link)`
  color: ${__000__()};
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

const WeatherIconText = styled(IconText)``;

const Wrap = styled.div`
  width: 100%;
  background-color: ${__FFF__()};
`;

const Container = styled.section`
  width: 100%;
`;

export default withRouter(Navbar);
