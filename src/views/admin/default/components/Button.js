import { Button } from "@chakra-ui/react";

const TestnetFaucetButton = () => {
  const handleButtonClick = () => {
    // Przekierowanie do strony Testnet Faucet
    window.location.href = "https://docs.taraxa.io/develop/testnet-faucet";
  };

  return (
    <Button colorScheme="teal" onClick={handleButtonClick}>
     Get test TARA
    </Button>
  );
};

export default TestnetFaucetButton;
