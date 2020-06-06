import React from "react";
import styled from "@emotion/styled";
import * as theme from "@/commons/styles/theme";

const Input = styled.input(
  props => ` 
  padding: ${theme.space(4)} ${theme.space(3)};
  border-radius: 4px;
  color: ${theme.color("neutral", 7)};
  font-size: ${theme.font(3)};
  box-sizing: border-box;
  width: 100%;
  background: ${theme.color("neutral", 0)};
  border: none;
  ::placeholder {
    font-size: ${theme.font(3)};
  }
`
);

const Label = styled.label({
  fontSize: theme.font(3),
  marginBottom: theme.space(1),
  display: "block"
});

const FormField = styled.div(props => ({
  width: "100%",
  padding: `${theme.space(2)} 0`
}));

const Field = ({ label, type, name, placeholder, onChange }) => {
  return (
    <FormField>
      <Label>{label}</Label>
      <Input
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </FormField>
  );
};

export default Field;
