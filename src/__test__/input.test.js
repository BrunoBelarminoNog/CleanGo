import { fireEvent, render, screen } from "@testing-library/react";

import Input from "../components/Input";

test("Should update value", () => {
  render(
    <Input
      inputType="email"
      label="Email"
      placeholder="Digite seu email"
      error={false}
      errorMessage={"Email incorreto!"}
    />
  );
  const input = screen.getByPlaceholderText("Digite seu email");
  fireEvent.change(input, { target: { value: "23" } });
  const errorMessage = screen.queryByText("Email incorreto!");

  expect(input.value).toBe("23");
  expect(errorMessage).not.toBeInTheDocument();
});

test("Should not show error message", () => {
  render(
    <Input
      inputType="email"
      label="Email"
      placeholder="Digite seu email"
      error={false}
      errorMessage={"Email incorreto!"}
    />
  );
  const errorMessage = screen.queryByText("Email incorreto!");
  expect(errorMessage).not.toBeInTheDocument();
});

test("Should show error message", () => {
  render(
    <Input
      inputType="email"
      label="Email"
      placeholder="Digite seu email"
      error={true}
      errorMessage={"Email incorreto!"}
    />
  );
  const errorMessage = screen.getByText("Email incorreto!");
  expect(errorMessage).toBeInTheDocument();
});
