import React from "react";
import styled from "styled-components/macro";
import SearchBar from "components/SearchBar";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const position: number[] = [51.505, -0.09];
const accessToken =
  "pk.eyJ1Ijoiazg4NjY1NTQ0IiwiYSI6ImNreWhidTJtdjE4MWozM3FobXNndXl3M3AifQ.IECy46dIgeuVKdFYTgiiaQ";

const Station = (props: { className: any; style: any }) => {
  const { className, style } = props;
  return (
    <Container style={style} className={className}>
      <Wrap>
        <UBikeSearchBar />
        <div style={{ width: "100%" }}></div>
        <Map center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
            url={
              "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
            }
            id={"mapbox/streets-v11"}
            accessToken={accessToken}
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </Wrap>
    </Container>
  );
};

const Map = styled(MapContainer)`
  width: 100%;
  height: 100%;
`;

const UBikeSearchBar = styled(SearchBar)`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 500;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.section`
  width: 100%;
  height: 100%;
`;

export default Station;
