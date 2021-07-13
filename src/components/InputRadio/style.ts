import styled from "styled-components";

interface CustomTextProp {
  selected: boolean;
}

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 58px;
  position: relative;
  justify-content: center;
`;

export const CardCategory = styled.label`
  background: var(--white);
  border: 3px solid var(--green);
  justify-content: center;

  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 0;

  margin: 4px;
  border-radius: 4px;
  padding: 8px;
  transition: all 300ms;
`;

export const CustomText = styled.p`
  color: ${(props: CustomTextProp) =>
    props.selected ? "var(--white)" : "var(--green)"};
  z-index: 20;
  font-family: var(--font-standard);
  position: absolute;
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
  transition: all 500ms;
  padding: 8px;
`;

export const RadioButton = styled.input`
  position: relative;
  opacity: 0;
  z-index: 205;
  cursor: pointer;
  transition: all 300ms;

  width: 100%;
  height: 100%;

  &:hover ~ ${CardCategory} {
    filter: brightness(0.92);
  }

  &:checked + ${CardCategory} {
    background: var(--green);

    p {
      color: var(--white);
    }
  }
`;
