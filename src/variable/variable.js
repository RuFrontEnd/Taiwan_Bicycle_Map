import { getColor } from "utils/color";
import { getFontSize } from "utils/font";

// api baseUrl
export const baseURL = "https://ptx.transportdata.tw/MOTC";

// font
export const notoSans = "'Noto Sans TC', sans-serif";
export const roboto = "'Roboto', sans-serif";

// font-size
export const __s__ = getFontSize(14);
export const __m__ = getFontSize(16);
export const __l__ = getFontSize(24);

// color
export const __FFF__ = getColor("#FFFFFF");
export const __000__ = getColor("#000000");
export const __F25C54__ = getColor("#F25C54"); // main
export const __141414__ = getColor("#141414"); // normal
export const __747578__ = getColor("#747578"); // disabled
export const __BDBDBD__ = getColor("#BDBDBD"); // placeHolder
export const __83C5BE__ = getColor("#83C5BE"); // secondary
export const __F8F8F8__ = getColor("#F8F8F8") // selected


// responsive
export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
