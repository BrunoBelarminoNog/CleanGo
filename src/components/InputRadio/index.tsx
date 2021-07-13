import React from "react";
import { ReactNode } from "react";

import { Item, RadioButton, CardCategory, CustomText } from "./style";

interface InputRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  selected: boolean;
  children: ReactNode;
}

const InputRadio = ({
  name,
  value,
  selected,
  children,
  ...rest
}: InputRadioProps) => {
  return (
    <Item>
      <RadioButton
        type="radio"
        name={name}
        value={value}
        checked={selected}
        {...rest}
        required
      />
      <CardCategory>
        <CustomText selected={selected}>{children}</CustomText>
      </CardCategory>
    </Item>
  );
};

export default InputRadio;
