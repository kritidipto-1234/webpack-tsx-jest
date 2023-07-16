import { render, screen } from "@testing-library/react";
import Greeting from "../src/Greeting";
import userEvent from '@testing-library/user-event'

describe("Greeting.tsx", () => {
  test("renders hello world", () => {
    render(<Greeting />);
    const helloworldel = screen.getByText("Hello World", { exact: false });
    expect(helloworldel).toBeInTheDocument();
  });

  test("renders Text original initially", () => {
    render(<Greeting />);
    const helloworldel = screen.getByText("Text original", { exact: false });
    expect(helloworldel).toBeInTheDocument();
  });

  test("Changes text on button click", async () => {
    render(<Greeting />);
    const buttonEl = screen.getByRole('button');
    await userEvent.click(buttonEl)
    const helloworldel = screen.getByText("Text is changed", { exact: false });
    const deletedel = screen.queryByText("Text original", { exact: false });
    expect(helloworldel).toBeInTheDocument();
    expect(deletedel).toBeNull();
  });


});

declare const window: any;


describe("Greeting.tsx-fetch list", () => {
  test("Fetch dogs", async () => {
    window.fetchDogs=jest.fn();
    window.fetchDogs.mockResolvedValueOnce(["doberman", "bulldog"]);
    render(<Greeting />);
    const dogitems = await screen.findAllByRole('listitem',{},{timeout:1100});
    expect(dogitems).not.toHaveLength(0);
  });
});

