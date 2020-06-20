import React from "react";
import { Button } from "react-native-paper";
import theme from "../constants/theme";

interface Props {
  loading: boolean;
  generatePassword: () => void;
}

const GeneratePasswordButton: React.FC<Props> = ({
  loading,
  generatePassword,
}) => {
  return (
    <Button
      style={{
        height: 50,
        margin: 20,
        justifyContent: "center",
        borderRadius: 20,
      }}
      labelStyle={{ fontSize: 16 }}
      mode="contained"
      disabled={loading}
      loading={loading}
      color={theme.color.purple}
      onPress={generatePassword}
    >
      Generate password
    </Button>
  );
};

export default GeneratePasswordButton;
