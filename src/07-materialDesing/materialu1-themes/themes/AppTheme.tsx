import {CssBaseline, ThemeProvider} from "@mui/material";
import {PurpleTheme} from "./PurpleTheme.ts";

export const AppTheme = ({children}: any) => {
    return (
        <>
            <ThemeProvider theme={PurpleTheme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </>
    );
};