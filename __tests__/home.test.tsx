import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("home page", () => {
  it("render title", () => {
    render(<Home />);
    expect(screen.getByText("home page")).toBeInTheDocument();
  });
});
