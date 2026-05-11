import { s } from "react-native-size-matters";
import { AppColors } from "./color";

export const sharedPaddingHorizontal = s(12)

export const commonStyles = {
    shadow:{
        shadowColor: AppColors.primary,
        shadowOffset: {
          width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
}