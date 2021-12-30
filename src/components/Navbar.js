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
import { fontSize, color, windowWidth } from "variable/variable";

import { ReactComponent as Logo } from "assets/svg/logo.svg";
import { ReactComponent as Cloud } from "assets/svg/cloud.svg";
import { ReactComponent as Temperature } from "assets/svg/temperature.svg";
import IconText from "components/IconText";
import Button from "components/Button";

const getSelectedType = (path) => window.location.pathname === path;

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

const NavButtonProps = (path) => {
  return {
    infos: { selected: getSelectedType(path) },
  };
};

const MobileNavButtonProps = (path) => {
  return {
    selected: getSelectedType(path),
  };
};

const Navbar = (props) => {
  const { className, style, history, buttonInfos = [] } = props;
  const dispatch = useDispatch();
  // const $NavbarContainer = useRef();

  useEffect(() => {
    // dispatch(setNavBarHeight($NavbarContainer.current.clientHeight));
  }, []);

  return (
    <Container className={className} style={style} fluid>
      <Row>
        <Col md={8} xs={4} className="d-flex align-items-center">
          <Link to="/">
            <BikeLogo />
          </Link>
          <NavButtons>
            {buttonInfos.map((buttonInfo) => (
              <Link to={`${buttonInfo.path}`}>
                <NavButton {...NavButtonProps(buttonInfo.path)}>
                  {buttonInfo.text}
                </NavButton>
              </Link>
            ))}
          </NavButtons>
        </Col>
        <Col
          md={4}
          xs={8}
          className="d-flex justify-content-end align-items-center"
        >
          {WeatherIconTextProps.map((WeatherIconTextProp) => (
            <WeatherIconText {...WeatherIconTextProp} />
          ))}
        </Col>
      </Row>
      <Row style={{ backgroundColor: color.__F25C54__() }}>
        <Col>
          <MobileNavButtons>
            {buttonInfos.map((buttonInfo) => (
              <Link as="li" to={`${buttonInfo.path}`}>
                <MobileNavButton {...MobileNavButtonProps(buttonInfo.path)}>
                  {buttonInfo.text}
                </MobileNavButton>
              </Link>
            ))}
          </MobileNavButtons>
        </Col>
      </Row>
    </Container>
  );
};
const MobileNavButtons = styled.ul`
  display: none;
  background-color: ${color.__F25C54__()};
  padding: 0px;

  @media (max-width: ${windowWidth.tabletCol}) {
    display: flex;
  }

  @media (max-width: ${windowWidth.mobileL}) {
    justify-content: space-between;
    font-size: ${fontSize.__s__()};
  }
`;

const MobileNavButton = styled.button`
  color: ${(props) =>
    props.selected ? color.__F8F8F8__() : color.__F8F8F8__(0.9)};
  padding: 10px 8px;
  margin: 10px 8px;

  @media (max-width: ${windowWidth.mobileL}) {
    padding: 10px 4px;
    margin: 10px 4px;
  }

  @media (max-width: ${windowWidth.mobileM}) {
    padding: 10px 2px;
    margin: 10px 0px;
  }
`;

const NavButton = styled(Button)`
  margin: 18px 5px;
`;

const NavButtons = styled.div`
  @media (max-width: ${windowWidth.tabletCol}) {
    display: none;
  }
`;

const WeatherIconText = styled(IconText)`
  margin: 10px;
`;

const BikeLogo = styled(Logo)`
  margin: 10px;
  margin-right: 20px;
  cursor: pointer;
`;

const Col = styled(ColRef)`
  font-size: ${fontSize.__m__()};
  padding: 0px 10px;
`;

const Row = styled(RowRef)`
  background-color: ${color.__FFF__()};
  width: 100%;
  margin: 0px;
  padding: 0px 20px;

  @media (max-width: ${windowWidth.tabletCol}) {
    padding: 0px 10px;
  }
`;

const Container = styled(ContainerRef)`
  padding: 0px 0px;
`;

export default withRouter(Navbar);
