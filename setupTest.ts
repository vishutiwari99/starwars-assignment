import '@testing-library/jest-dom';
import { beforeEach, vi, beforeAll, afterEach, afterAll } from 'vitest';
import {server} from './src/mocks/server';
// import  fetch  from 'node-fetch';


// window.fetch = fetch;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// (global as any).fetch = fetch;

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
  vi.stubGlobal('matchMedia', matchMediaMock);
  vi.stubGlobal('getComputedStyle', computedStyleMock);
});

// beforeAll(() => server.listen());
beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
