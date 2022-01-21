import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Button, Link, Flex } from '@chakra-ui/react';

export default function tabs() {
    return (
        <>
            <Box bgSize={500}>
                <Tabs>
                    <TabList>
                        <Tab>One</Tab>
                        <Tab>Two</Tab>
                        <Tab>Three</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>three!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                <Flex py={6}>
                    <Button rounded={6} size='lg' colorScheme="teal">
                        <Link href="https://chakra-ui.com/docs/disclosure/tabs" isExternal>Visit chakra-ui.com tabs documentation</Link>
                    </Button>
                </Flex>
            </Box>
        </>
    );
}
