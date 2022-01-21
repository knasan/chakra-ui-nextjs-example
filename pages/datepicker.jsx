import React from 'react';
// import DayPicker, { DateUtils } from 'react-day-picker';
// import 'react-day-picker/lib/style.css';
import { Box, Center, Container, Flex } from '@chakra-ui/react';

import DateTime from "react-datetime";
// import "../components/datepicker.css"


export default function Example() {
    return (
        <>
            {/* <Center color="blue.500" display='flex' >
               

            </Center> */}

            <Container minW={900}>
                <Flex alignItems="center" justifyContent="center">
                    <DateTime />
                </Flex>

                <Flex>
                    Hier kommt mal ein langer text um zu sehen wie die Box geht. Was passiert wenn man den Datepicker da rein packt?
                </Flex>
            </Container>
        </>

    )
}