import { Dimensions } from "react-native";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

export default {
  COLORS: {
    WHITE: "#FFFFFF",
    BLACK: "#000000",
  },
  FONT_FAMILY: {
    REGULAR: "Roboto_400Regular",
    MEDIUM: "Roboto_500Medium",
    BOLD: "Roboto_700Bold",
  },
  FONT_SIZE: {
    XS: 10,
    SSM: 12,
    SM: 14,
    MD: 16,
    LG: 18,
    XL: 24,
    XXL: 32,
  },
  SCREEN: {
    HEIGHT: screenHeight,
    WIDTH: screenWidth,
  },
};
