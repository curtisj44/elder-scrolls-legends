// Dependencies
// ------------

// Libraries
import PropTypes from 'prop-types';
import React from 'react';
// Styles
import './Card.css';

// Internal
// --------

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
        className="card__image"
        height="580"
        loading="lazy"
        src={ imageUrl }
        width="350"
      />

      <dl>
        <dt className="card__term">Name</dt>
        <dd className="card__description">{ name }</dd>

        { text &&
          <>
            <dt className="card__term">Text</dt>
            <dd className="card__description">{ text }</dd>
          </>
        }

        <dt className="card__term">Set Name</dt>
        <dd className="card__description">{ set.name }</dd>

        <dt className="card__term">Type</dt>
        <dd className="card__description">{ type }</dd>
      </dl>
    </li>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  set: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
};

// Exports
// -------

export default Card;
