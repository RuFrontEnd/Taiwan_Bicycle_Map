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
import {
  Container as ContainerRef,
  Row as RowRef,
  Col as ColRef,
} from "react-bootstrap";

const WeatherIconTextProps = [
  {
    info: {
      svg: <Cloud />,
      content: "多雲",
    },
  },
  {
    info: {
      svg: <Temperature />,
      content: "18℃",
    },
  },
];

const Navbar = (props) => {
  const { className, style, history } = props;
  const dispatch = useDispatch();
  // const $NavbarContainer = useRef();

  useEffect(() => {
    // dispatch(setNavBarHeight($NavbarContainer.current.clientHeight));
  }, []);

  return (
    <Container className={className} style={style} fluid>
      <Row noGutters>
        <Col sm={10}>
          <NavButtons>
            <BikeLogo
              onClick={() => {
                history.push("/scenicspots");
              }}
            />
            <NavButton>123</NavButton>
            <NavButton>123</NavButton>
            <NavButton>123</NavButton>
          </NavButtons>
        </Col>
        <Col sm={2}>
          {WeatherIconTextProps.map((WeatherIconTextProp) => (
            <WeatherIconText {...WeatherIconTextProp} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

const NavButton = styled.div``;

const NavButtons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const BikeLogoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const WeatherIconText = styled(IconText)``;

const BikeLogo = styled(Logo)`
  cursor: pointer;
  padding: 15px;
`;

const Col = styled(ColRef)``;

const Row = styled(RowRef)`
  background-color: ${__FFF__()};
  width: 100%;
  margin: 0px;
  padding: 0px 40px;
`;

const Container = styled(ContainerRef)`
  padding: 0px 0px;
`;

export default withRouter(Navbar);
