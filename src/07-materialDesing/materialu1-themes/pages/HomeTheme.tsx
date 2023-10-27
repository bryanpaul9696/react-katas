import {Grid} from "@mui/material";

export const HomeTheme = () => {
    return (

        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{minHeight:"100%", backgroundColor:"primary.main",padding:4}}
            >

                <h1>Home page </h1>
            </Grid>
        </>


    );
};