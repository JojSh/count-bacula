/* eslint-env jest */
import React from 'react'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import App from './App'
import '@testing-library/jest-dom/extend-expect'
import 'regenerator-runtime/runtime'

it('renders title message', () => {
  const app = render(<App />)
  const appHeader = app.getByLabelText('app-title')
  expect(appHeader).toBeInTheDocument()
})

it('adds and displays a drink\'s units to total when "Add drink" button is clicked ', async () => {
  const app = render(<App />)
  const abvInput = app.getByLabelText('abv-input')
  const quantityInput = app.getByLabelText('quantity-input')

  fireEvent.change(quantityInput, { target: { value: '440' } })
  fireEvent.change(abvInput, { target: { value: '5' } })
  fireEvent.click(screen.getByText('Add drink'))

  await waitFor(() => screen.getByLabelText('total-units'))
  expect(screen.getByLabelText('total-units')).toHaveTextContent('2.2')
})

it('adds total units for multiple saved drinks', async () => {
  const app = render(<App />)
  const abvInput = app.getByLabelText('abv-input')
  const quantityInput = app.getByLabelText('quantity-input')

  fireEvent.change(quantityInput, { target: { value: '440' } })
  fireEvent.change(abvInput, { target: { value: '5' } })
  fireEvent.click(screen.getByText('Add drink'))

  fireEvent.change(quantityInput, { target: { value: '330' } })
  fireEvent.change(abvInput, { target: { value: '8' } })
  fireEvent.click(screen.getByText('Add drink'))

  await waitFor(() => screen.getByLabelText('total-units'))
  expect(screen.getByLabelText('total-units')).toHaveTextContent('Total Units: 4.84')
})

it('adds a drink at given time', async () => {
  const app = render(<App />)
  const abvInput = app.getByLabelText('abv-input')
  const quantityInput = app.getByLabelText('quantity-input')

  const hourInput = app.getByLabelText('hour-input')
  const minuteInput = app.getByLabelText('minute-input')

  fireEvent.change(quantityInput, { target: { value: '500' } })
  fireEvent.change(abvInput, { target: { value: '4' } })
  fireEvent.change(hourInput, { target: { value: '21' } })
  fireEvent.change(minuteInput, { target: { value: '00' } })
  fireEvent.click(screen.getByText('Add drink'))

  await waitFor(() => screen.getByLabelText('total-units'))
  expect(screen.getByLabelText('total-bed-time-units')).toHaveTextContent('Units remaining: 1')
})
