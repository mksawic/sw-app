import { server } from "./mocks/server.js";
import "@testing-library/jest-dom";
const { getComputedStyle } = window;

beforeAll(() => {
  window.getComputedStyle = (e) => getComputedStyle(e);
  server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
