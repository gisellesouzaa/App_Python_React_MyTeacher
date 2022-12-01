import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Link from "next/link";

export default function Footer() {
    return (
        <Paper sx={{ marginTop: 'calc(10% + 60px)', bottom: 0 }} component="footer" square variant="outlined">
            <Container maxWidth="lg">

                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        p: 2,
                        pb: 0,
                    }}
                >
                    <Typography variant="caption" color="initial" maxWidth={400} textAlign='center'>
                        Projeto construído pela Giselle Souza para fins didáticos. Saiba mais:
                    </Typography>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems:"center",
                        pb: 2
                    }}
                >

                    <Link href="https://www.linkedin.com/in/giselle-de-souza-gabriel/">
                        Linkedin
                    </Link>
                </Box>

            </Container>
        </Paper>
    );
}
