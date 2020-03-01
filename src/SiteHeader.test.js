// Dependencies
// ------------

// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import SiteHeader from './SiteHeader';

// Setup
// -----

const component = renderer.create(<SiteHeader />);

// Tests
// -----

describe('SiteHeader', () => {
  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
