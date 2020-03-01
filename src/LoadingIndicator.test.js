// Dependencies
// ------------

// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import LoadingIndicator from './LoadingIndicator';

// Setup
// -----

const component = renderer.create(<LoadingIndicator />);

// Tests
// -----

describe('LoadingIndicator', () => {
  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
