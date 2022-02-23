import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "utils/test-utils";
import App from "./App";

describe("Game tests", () => {
  describe("Inital game tests", () => {
    test("should have empty people cards", () => {
      render(<App />);
      const [lName, rName] = screen.getAllByTitle(/PeopleCardName/i);
      expect(lName).toHaveTextContent("-");
      expect(rName).toHaveTextContent("-");
      const [lMass, rMass] = screen.getAllByTitle(/PeopleCardMass/i);
      expect(lMass).toHaveTextContent("-");
      expect(rMass).toHaveTextContent("-");
    });
  });

  describe("People game tests", () => {
    test("should fetch people cards and add score", async () => {
      render(<App />);
      const [lScore, rScore] = screen
        .getAllByTitle(/Score/i)
        .map(({ innerHTML }) => Number(innerHTML));
      const playBtn = screen.getByRole("button", { name: /Play/i });
      userEvent.click(playBtn);
      await waitFor(() => expect(playBtn).not.toBeDisabled());
      const [lName, rName] = await screen.findAllByTitle(/PeopleCardName/i);
      expect(lName).toHaveTextContent(/Luke Skywalker/i);
      expect(rName).toHaveTextContent(/Luke Skywalker/i);

      const [lMassText, rMassText] = await screen.findAllByTitle(
        /PeopleCardMass/i
      );
      expect(lMassText).not.toHaveTextContent("-");
      expect(rMassText).not.toHaveTextContent("-");
      const lMass = parseFloat(lMassText.innerHTML);
      const rMass = parseFloat(rMassText.innerHTML);
      const [lScoreNode, rScoreNode] = await screen.findAllByTitle(/Score/i);

      if (lMass > rMass) {
        expect(lScoreNode).toHaveTextContent(`${lScore + 1}`);
      } else if (lMass < rMass) {
        expect(rScoreNode).toHaveTextContent(`${rScore + 1}`);
      } else {
        expect(lScoreNode).toHaveTextContent(`${lScore}`);
        expect(rScoreNode).toHaveTextContent(`${rScore}`);
      }
    });
  });

  describe("Starships game tests", () => {
    test("should switch to starship cards", () => {
      render(<App />);
      expect(
        screen.queryByTitle(/StarshipCardsWrapper/i)
      ).not.toBeInTheDocument();
      expect(screen.getByTitle(/PeopleCardsWrapper/i)).toBeInTheDocument();
      userEvent.click(screen.getByRole("button", { name: /People/i }));
      userEvent.click(screen.getByRole("option", { name: /Starships/i }));
      expect(
        screen.queryByTitle(/PeopleCardsWrapper/i)
      ).not.toBeInTheDocument();
      expect(screen.getByTitle(/StarshipCardsWrapper/i)).toBeInTheDocument();
    });

    test("should fetch starship cards and add score", async () => {
      render(<App />);

      const [lScore, rScore] = screen
        .getAllByTitle(/Score/i)
        .map(({ innerHTML }) => Number(innerHTML));

      const playBtn = screen.getByRole("button", { name: /Play/i });
      userEvent.click(playBtn);
      await waitFor(() => expect(playBtn).not.toBeDisabled());

      const [lName, rName] = await screen.findAllByTitle(/StarshipCardName/i);
      expect(lName).toHaveTextContent(/Death Star/i);
      expect(rName).toHaveTextContent(/Death Star/i);

      const [lCrewText, rCrewText] = await screen.findAllByTitle(
        /StarshipCardCrew/i
      );
      expect(lCrewText).not.toHaveTextContent("-");
      expect(rCrewText).not.toHaveTextContent("-");

      const [lScoreNode, rScoreNode] = await screen.findAllByTitle(/Score/i);
      const lCrew = parseFloat(lCrewText.innerHTML);
      const rCrew = parseFloat(rCrewText.innerHTML);

      if (lCrew > rCrew) {
        expect(lScoreNode).toHaveTextContent(`${lScore + 1}`);
      } else if (lCrew < rCrew) {
        expect(rScoreNode).toHaveTextContent(`${rScore + 1}`);
      } else {
        expect(lScoreNode).toHaveTextContent(`${lScore}`);
        expect(rScoreNode).toHaveTextContent(`${rScore}`);
      }
    });
  });
});
