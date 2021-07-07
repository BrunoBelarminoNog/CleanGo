import { ReactNode } from "react";
import { ButtonItem } from "./styles";

interface ButtonProps {
  onClickFunc?: () => void;
  whiteSchema?: boolean;
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({
  onClickFunc,
  type,
  whiteSchema = false,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonItem
      type={type}
      whiteSchema={whiteSchema}
      onClick={onClickFunc}
      {...rest}
    >
      {children}
    </ButtonItem>
  );
};

export default Button;
