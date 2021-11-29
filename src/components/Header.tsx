import React from "react";
import { Box, Button, Flex, Spinner, useColorMode } from "theme-ui";
import { Logo } from "src/components/Logo";
import { ConnectWallet } from "src/components/ConnectWallet";
import { useLocation } from "react-router-dom";
import { Moon, Sun } from "phosphor-react";
import { useUserNoms } from "src/hooks/useUserNoms";

export const Header: React.FC = () => {
  const location = useLocation();
  const [colorMode, setColorMode] = useColorMode();
  const [userNoms] = useUserNoms();
  return (
    <Flex sx={{ justifyContent: "space-between", alignItems: "center" }} mb={4}>
      {location.pathname === "/search" ? <Box /> : <Logo />}
      <Flex>
        {userNoms ? (
          <Button
            onClick={() => {
              alert(userNoms);
            }}
            sx={{
              border: "1px solid var(--theme-ui-colors-text)",
              background: "transparent",
              mr: 4,
            }}
          >
            My Noms
          </Button>
        ) : (
          <Spinner mr={4} />
        )}
        <Flex
          sx={{
            alignItems: "center",
            backgroundColor: "secondaryBackground",
            mr: 4,
            px: 2,
            cursor: "pointer",
            borderRadius: "6px",
          }}
          onClick={() => {
            if (colorMode === "light") {
              setColorMode("dark");
            } else {
              setColorMode("light");
            }
          }}
        >
          {colorMode === "light" ? <Sun size={28} /> : <Moon size={28} />}
        </Flex>
        <ConnectWallet />
      </Flex>
    </Flex>
  );
};
