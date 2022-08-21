import { IStackItemStyles } from "@fluentui/react";

export const form: IStackItemStyles = {
  root: {
    backgroundColor: "whitesmoke",
    width: 350,
    alignItems: "spaces-between",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
};
export const button: IStackItemStyles = {
  root: {
    padding: 5,
    width: "100%",
  },
};
export const fileButton = (image: string): IStackItemStyles => {
  return {
    root: {
      width: "100%",
      backgroundColor: !image ? "#FF6347" : "#00FF7F",
      color: !image ? "#fff" : "#000",
    },
  };
};
