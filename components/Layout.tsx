import { Container, Box } from "@chakra-ui/react";
import Nav from "../components/Nav";

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <Container maxW='xl' centerContent padding='20'>
                <Box maxW='3xl'>
                    {children}
                </Box>
            </Container>
        </>
    );
}