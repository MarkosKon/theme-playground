/** @jsx jsx */
import { jsx, useColorMode, Box } from "theme-ui";
import Button from "./Button";

export default () => {
  const [colorMode, setColorMode] = useColorMode();
  const newColorMode = colorMode === "light" ? "dark" : "light";
  return (
    <Box sx={{ py: 3, px: [2, 3], textAlign: "right" }}>
      <Button
        sx={{ borderRadius: "2px" }}
        onClick={() => {
          document.body.classList.remove(colorMode);
          document.body.classList.add(newColorMode);
          setColorMode(newColorMode);
        }}
      >
        {`Toggle ${newColorMode}`}
      </Button>
    </Box>
  );
};
