// src/BookingForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders booking form', () => {
  render(<BookingForm />);
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
});

test('validates form fields', () => {
  render(<BookingForm />);
  fireEvent.click(screen.getByText(/book a table/i));
  expect(screen.getByText(/name is required/i)).toBeInTheDocument();
  expect(screen.getByText(/date is required/i)).toBeInTheDocument();
  expect(screen.getByText(/time is required/i)).toBeInTheDocument();
});
