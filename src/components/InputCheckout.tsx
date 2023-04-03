import { Input } from "dracula-ui";
import React from "react";
import styled from "styled-components";

type Props = {
  label: string;
  color:
    | "cyan"
    | "green"
    | "orange"
    | "pink"
    | "purple"
    | "red"
    | "yellow"
    | "white"
    | undefined;
  type: any;
  id: string;
  value: any;
  onChange: any;
  placeholder: string;
  error: boolean;
};
const IputCheckoutWrapper = styled.div`
  padding-top: 1rem;
`;
const InputCheckout = ({
  label,
  value,
  color,
  id,
  type,
  placeholder,
  onChange,
  error,
}: Props) => {
  return (
    <IputCheckoutWrapper>
      <label className="drac-text drac-text-bold">{label}</label>
      <Input
        color={color}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && (
        <p className="drac-text drac-text-red">
          O campo "{label}" é obrigatório.
        </p>
      )}
    </IputCheckoutWrapper>
  );
};

export default InputCheckout;
