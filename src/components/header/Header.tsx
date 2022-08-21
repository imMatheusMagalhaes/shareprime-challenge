import { Stack } from "@fluentui/react";
import { FunctionComponent } from "react";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <Stack
      verticalAlign="start"
      styles={{
        root: {
          overflow: "hidden",
          backgrounColor: "#f1f1f1",
          padding: "20px 10px",
          backgroundColor: "whitesmoke",
        },
      }}
    >
      <Stack.Item
        styles={{
          root: {
            fontSize: 25,
            fontWeight: "bold",
          },
        }}
      >
        SharePrime Challeger
      </Stack.Item>
    </Stack>
  );
};

export default Header;
