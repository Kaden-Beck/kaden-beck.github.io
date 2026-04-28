import { createTheme } from "@mui/material/styles";
import { inputsCustomizations } from "@/components/shared-theme/customizations/inputs";
import { dataDisplayCustomizations } from "@/components/shared-theme/customizations/dataDisplay";
import { feedbackCustomizations } from "@/components/shared-theme/customizations/feedback";
import { navigationCustomizations } from "@/components/shared-theme/customizations/navigation";
import { surfacesCustomizations } from "@/components/shared-theme/customizations/surfaces";
import {
    colorSchemes,
    typography,
    shadows,
    shape,
} from "@/components/shared-theme/themePrimitives";

import NextLink from "next/link";

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: "data-mui-color-scheme",
        cssVarPrefix: "template",
    },
    colorSchemes,
    typography,
    shadows,
    shape,
    components: {
        ...inputsCustomizations,
        ...dataDisplayCustomizations,
        ...feedbackCustomizations,
        ...navigationCustomizations,
        ...surfacesCustomizations,
        MuiLink: {
            defaultProps: {
                component: NextLink,
            },
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: NextLink,
            },
        },
    },
});

export default theme;
