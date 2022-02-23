import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "utils/test-utils";
import PlayButton from "./PlayButton";

test("should disable play button after click", () => {
  render(<PlayButton />);
  const btn = screen.getByRole("button", { name: /Play/i });
  expect(btn).not.toBeDisabled();
  userEvent.click(btn);
  expect(btn).toBeDisabled();
});
