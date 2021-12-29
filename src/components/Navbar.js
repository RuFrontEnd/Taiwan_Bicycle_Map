import React, { useRef, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components/macro";
import { useDispatch } from "react-redux";
import {
  Container as ContainerRef,
  Row as RowRef,
  Col as ColRef,
} from "react-bootstrap";
import { setNavBarHeight } from "redux/navBar/navBarActions";
import {
  __m__,
  __FFF__,
  __000__,
  __F8F8F8__,
  __141414__,
} from "variable/variable";

import { ReactComponent as Logo } from "assets/svg/logo.svg";
import { ReactComponent as Cloud } from "assets/svg/cloud.svg";
import { ReactComponent as Temperature } from "assets/svg/temperature.svg";
import IconText from "components/IconText";
import Button from "components/Button";

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

const getSelectedType = (path) => window.location.pathname === path;

const Navbar = (props) => {
  const { className, style, history, buttonInfos = [] } = props;
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
            <Link to="/">
              <BikeLogo />
            </Link>
            {buttonInfos.map((buttonInfo) => (
              <Link to={`${buttonInfo.path}`}>
                <NavButton selected={getSelectedType(buttonInfo.path)}>
                  {buttonInfo.text}
                </NavButton>
              </Link>
            ))}
          </NavButtons>
        </Col>
        <Col sm={2}>
          <WeatherIconTexts>
            {WeatherIconTextProps.map((WeatherIconTextProp) => (
              <WeatherIconText {...WeatherIconTextProp} />
            ))}
          </WeatherIconTexts>
        </Col>
      </Row>
    </Container>
  );
};

const NavButton = styled(Button)`
  margin: 18px 5px;
`;

const NavButtons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const WeatherIconText = styled(IconText)`
  margin-left: 24px;
`;

const WeatherIconTexts = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const BikeLogo = styled(Logo)`
  margin: 10px;
  margin-right: 20px;
  cursor: pointer;
`;

const Col = styled(ColRef)`
  font-size: ${__m__()};
`;

const Row = styled(RowRef)`
  background-color: ${__FFF__()};
  width: 100%;
  margin: 0px;
  padding: 0px 28px;
`;

const Container = styled(ContainerRef)`
  padding: 0px 0px;
`;

export default withRouter(Navbar);
