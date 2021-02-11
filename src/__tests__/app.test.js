import App from "../components/App";
import axios from "../__mocks__/axios";
import React from "react";
import { render, waitFor, cleanup } from '@testing-library/react';

afterEach(cleanup);

test('True is true', () => {
    expect(true).toBeTruthy();
});

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
});

test('mocking axios request', async () => {
  const data = {
    data: [
      {
        id: 1,
        title: 'title 1'
      },
      {
        id: 2,
        title: 'title 2'
      },
      {
        id: 3,
        title: 'mocked title'
      }]
  };

axios.get.mockResolvedValueOnce(data);
const { getByText } = render(<App />);
await waitFor(() => {
  expect(getByText('Enter Search Term'));
});
});