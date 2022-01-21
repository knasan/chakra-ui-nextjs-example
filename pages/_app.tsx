import { ChakraProvider } from "@chakra-ui/provider";
import { ColorModeProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <ColorModeProvider options={{ useSystemColorMode: true }}></ColorModeProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    );
}
