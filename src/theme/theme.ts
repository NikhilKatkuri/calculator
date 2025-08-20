import { darkColor, lightColor } from "../constants/colors";
import colorType from "../types/colors";

class Theme {
  public dark: boolean = false;
  public colors: colorType = lightColor;

  constructor(isDark: boolean = false) {
    this.dark = isDark;
    this.colors = isDark ? darkColor : lightColor;
  }
}

export default Theme;