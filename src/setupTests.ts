import { server } from "./mocks/server.js";
import "@testing-library/jest-dom/extend-expect";
const { getComputedStyle } = window;

beforeAll(() => {
  window.getComputedStyle = (e) => getComputedStyle(e);
  server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
