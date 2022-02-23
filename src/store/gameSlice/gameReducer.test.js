import reducer, { GameType, setGameType, addLeftScore, addRightScore } from ".";

const initialState = {
  type: GameType.People,
  leftScore: 0,
  rightScore: 0,
};

test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

test("should change game type", () => {
  expect(reducer(initialState, setGameType(GameType.Starships))).toEqual({
    ...initialState,
    type: GameType.Starships,
  });
});

test("should add score", () => {
  expect(reducer(initialState, addLeftScore())).toEqual({
    ...initialState,
    leftScore: initialState.leftScore + 1,
  });

  expect(reducer(initialState, addRightScore())).toEqual({
    ...initialState,
    rightScore: initialState.rightScore + 1,
  });
});
