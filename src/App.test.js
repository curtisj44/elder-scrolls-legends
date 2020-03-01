// Dependencies
// ------------

// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import App from './App';

// Mocks
// -----

jest.mock('./Card', () => 'Card');
jest.mock('./LoadingIndicator', () => 'LoadingIndicator');
jest.mock('./SiteHeader', () => 'SiteHeader');

// Setup
// -----

const component = renderer.create(<App />);

// Tests
// -----

describe('App', () => {
  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  // fetching cards
    // when API call is not resolved
      // it shows loading message

    // when the API call resolves successfully
      // it renders list of cards

    // when an error occurs
      // it renders with an error message

  // when nameQuery is defined
    // it renders matching content

});
