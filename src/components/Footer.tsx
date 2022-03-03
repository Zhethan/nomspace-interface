import React from "react";
import { Box, Flex, Link } from "theme-ui";
import { GithubLogo, TwitterLogo, DiscordLogo } from "phosphor-react";
import { useLocation } from "react-router-dom";

export const Footer: React.FC = () => {
  const location = useLocation();

  if (location.pathname !== "search") {
    return null;
  }

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        bottom: 0,
        pb: 4,
      }}
    >
      <Flex sx={{ justifyContent: "center" }}>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Nomspace"
          style={{ textDecoration: "none" }}
          mr={2}
        >
          <GithubLogo size={32} />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/Nomspace_nom"
          style={{ textDecoration: "none" }}
          mr={2}
        >
          <TwitterLogo size={32} />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://discord.gg/3g9zRPRAPH"
          style={{ textDecoration: "none" }}
        >
          <DiscordLogo size={32} />
        </Link>
      </Flex>
    </Box>
  );
};
