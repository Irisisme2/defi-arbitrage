// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import LineChart from "components/charts/LineChart";
import React, { useState } from "react";
// Icons
import { MdBarChart, MdOutlineCalendarToday } from "react-icons/md";
// Assets
import { RiArrowUpSFill } from "react-icons/ri";
// Data
import {
  lineChartDataTokenPrices,
  lineChartOptionsTokenPrices,
} from "variables/charts";

export default function TokenPrices(props) {
  const { ...rest } = props;
  const [selectedToken, setSelectedToken] = useState("BTC");

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );

  // Funkcja obsługująca zmianę wybranej kryptowaluty
  const handleTokenChange = (event) => {
    setSelectedToken(event.target.value);
  };

  return (
    <Card
      justifyContent="center"
      align="center"
      direction="column"
      w="100%"
      mb="0px"
      {...rest}
    >
      <Flex justify="space-between" ps="0px" pe="20px" pt="5px">
        <Flex align="center" w="100%">
          <Button
            bg={boxBg}
            fontSize="sm"
            fontWeight="500"
            color={textColorSecondary}
            borderRadius="7px"
          >
            <Icon
              as={MdOutlineCalendarToday}
              color={textColorSecondary}
              me="4px"
            />
            This month
          </Button>
          <Select
            value={selectedToken}
            onChange={handleTokenChange}
            ml="auto" // Przesunięcie w prawo
            w="150px" // Szerokość selecta
            variant="outline"
            borderColor="gray.300"
            color={textColor}
            _hover={{ borderColor: "gray.400" }}
            _focus={{ borderColor: "gray.500" }}
          >
            {/* Możliwe opcje */}
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
            <option value="DOGE">DOGE</option>
            {/* Dodaj więcej opcji według potrzeb */}
          </Select>
        </Flex>
      </Flex>
      <Flex w="100%" flexDirection={{ base: "column", lg: "row" }}>
        <Flex flexDirection="column" me="20px" mt="28px">
          <Text
            color={textColor}
            fontSize="34px"
            textAlign="start"
            fontWeight="700"
            lineHeight="100%"
          >
            Token Prices
          </Text>
          <Text
            color="secondaryGray.600"
            fontSize="sm"
            fontWeight="500"
            mt="4px"
            me="12px"
            mb="20px"
          >
            Current token prices on different DeFi exchanges
          </Text>
        </Flex>
        <Box minH="260px" minW="75%" mt="auto">
          <LineChart
            chartData={lineChartDataTokenPrices[selectedToken]}
            chartOptions={lineChartOptionsTokenPrices}
          />
        </Box>
      </Flex>
    </Card>
  );
}
