import { getColor } from "utils/color";
import { getFontSize } from "utils/font";

// api baseUrl
export const baseURL = "https://ptx.transportdata.tw/MOTC";

// font-size
export const fontSize = {
  __s__: getFontSize(14),
  __m__: getFontSize(16),
  __l__: getFontSize(24),
};

// font-weight
export const fontWeight = {
  __r__: 400,
  __h__: 500,
  __b__: 700,
};

// color
export const color = {
  __FFF__: getColor("#FFFFFF"),
  __000__: getColor("#000000"),
  __F25C54__: getColor("#F25C54"), // main
  __141414__: getColor("#141414"), // normal
  __747578__: getColor("#747578"), // disabled
  __BDBDBD__: getColor("#BDBDBD"), // placeHolder
  __83C5BE__: getColor("#83C5BE"), // secondary
  __F8F8F8__: getColor("#F8F8F8"), // selected
};

// responsive
export const windowWidth = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  mobileXL: "576px",
  tabletCol: "768px",
  tabletRow: "992px",
  laptop: "1200px",
  desktop: "1400px",
};
