import "@testing-library/jest-dom";
import { beforeEach, vi , beforeAll,afterEach,afterAll} from "vitest";
import {server} from './src/mocks/server';

beforeEach(() => {
  
  const matchMediaMock = vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));

  const computedStyleMock = vi.fn().mockImplementation(() => ({}));
  vi.stubGlobal("matchMedia", matchMediaMock);
  vi.stubGlobal("computedStyle", computedStyleMock);
});

beforeAll(()=>server.listen());
afterAll(()=>server.resetHandlers());
afterEach(()=>server.close());