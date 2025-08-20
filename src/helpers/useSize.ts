import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

class useSize {
  public hp(multiper: number) {
    if (multiper > 1) throw new Error("enter max of screen values 0-1");
    return height * multiper;
  }
  public wp(multiper: number) {
    if (multiper > 1) throw new Error("enter max of screen values 0-1");
    return width * multiper;
  }
}

export default useSize;