// Dependencies
// ------------

// Libraries
import React from 'react';
// Styles
import './Card.css';

// Internal
// --------

// TODO: add propTypes

const Card = ({ imageUrl, name, set, text, type }) => {
  return (
    <li className="card">
      {/*
        1. Using `aria-hidden="true"` since the content of this image is duplicated in text

        2. Image sizes are either 409x663 or 350x580. Using the smaller size in the `width`
           and `height` attributes to improve performance with use of `loading` attribute
      */}
      <img
        alt=""
        aria-hidden="true"
        height="580"
        loading="lazy"
        src={ imageUrl }
        width="350"
      />

      <dl>
        <dt>Name</dt>
        <dd>{ name }</dd>

        { text &&
          <>
            <dt>Text</dt>
            <dd>{ text }</dd>
          </>
        }

        <dt>Set Name</dt>
        <dd>{ set.name }</dd>

        <dt>Type</dt>
        <dd>{ type }</dd>
      </dl>
    </li>
  );
};

// Exports
// -------

export default Card;
