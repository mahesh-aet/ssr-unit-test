import { render, screen } from "@testing-library/react";
import * as UserApi from "../app/api/UserApi";
import User from "@/app/component/User";
jest.mock("../app/api/UserApi");
describe("user page", () => {
  const mockUsers = [
    { id: 1, name: "Mahesh", email: "mahesh@example.com" },
    { id: 2, name: "John Doe", email: "john@example.com" },
  ];
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    UserApi.getUsers.mockResolvedValue({ data: mockUsers });
  });
  it("renders user list heading", async () => {
    const { findByText } = render(<User />);
    expect(await findByText("user List")).toBeInTheDocument();
  });
});
