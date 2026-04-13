import SignInForm from "@/app/component/SignInForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("signIn form", () => {
  it("render form", () => {
    render(<SignInForm />);
    expect(screen.getByText("email")).toBeInTheDocument();
  });
  it("user can enter form values and submit", async () => {
    render(<SignInForm />);
    const emailInput = screen.getByPlaceholderText("email");
    const passwordInput = screen.getByPlaceholderText("password");
    const button = screen.getByRole("button", { name: "submit" });

    await userEvent.type(emailInput, "asd@gmail.com");
    await userEvent.type(passwordInput, "123");

    await userEvent.click(button);
  });
});
