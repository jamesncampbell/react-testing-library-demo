import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App, { oneMonthTakeHome, twoMonthTakeHome, threeMonthTakeHome } from './App';

const setup = () => {
}

test('it renders with an enabled button', () => {
})

test('it renders with the correct amount', () => {
})

test('clicking the oneMonthTakeHome button shows the correct amount in the input field', () => {
})

test('clicking the twoMonthTakeHome button shows the correct amount in the input field', () => {
})

test('clicking the threeMonthTakeHome button shows the correct amount in the input field', () => {
})

test('it allows the user to enter $0', () => {
})

test('it disables the submit button if the user enters a non-positive integer', () => {
})

test('it shows helper text if the user enters an error state', () => {
})

