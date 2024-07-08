import { expect, afterEach, beforeAll, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";
import { server } from './src/mocks/server';
expect.extend(matchers);

afterEach(() => {
  cleanup();
});

// Start worker before all tests
beforeAll(() => { server.listen() })

//  Close server after all tests
afterAll(() => {server.close()})

// Reset handlers after each test `important for test isolation`
afterEach(() => {server.resetHandlers()})