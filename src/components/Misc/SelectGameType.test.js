import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "utils/test-utils";
import SelectGameType from "./SelectGameType";

test("should display all game types", () => {
  render(<SelectGameType />);
  userEvent.click(screen.getByRole("button"));
  const [people, starships] = screen.getAllByRole("option");
  expect(people).toHaveTextContent(/people/i);
  expect(starships).toHaveTextContent(/starships/i);
});
