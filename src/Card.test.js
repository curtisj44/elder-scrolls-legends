// Dependencies
// ------------

// Libraries
import React from 'react';
import renderer from 'react-test-renderer';
// Components
import Card from './Card';

// Setup
// -----

const defaultProps = {
  imageUrl: 'imageUrl-mock',
  name: 'name-mock',
  set: {
    name: 'set-mock'
  },
  type: 'type-mock'
};

let component;

const getComponent = (props) => (
  renderer.create(
    <Card { ...{ ...defaultProps, ...props } } />
  )
);

// Tests
// -----

describe('Card', () => {
  describe('when `text` prop is not defined', () => {
    it('renders without Text content', () => {
      component = getComponent();
      expect(component).toMatchSnapshot();
    });
  });

  describe('when `text` prop is defined', () => {
    it('renders with Text content', () => {
      component = getComponent({ text: 'text-mock' });
      expect(component).toMatchSnapshot();
    });
  });
});
