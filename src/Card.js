// Dependencies
// ------------

// Libraries
import React from 'react';
// Styles
import './Card.css';

// Internal
// --------

// TODO: add propTypes

const Card = ({imageUrl, name, set, text, type}) => {
  return (
    <li className="card">
      {/* Using `aria-hidden="true"` since the content of this image is duplicated in text */}
      <img src={imageUrl} alt="" aria-hidden="true" loading="lazy" />
      <dl>
        <dt>Name</dt>
        <dd>{name}</dd>

        {text && (
          <>
            <dt>Text</dt>
            <dd>{text}</dd>
          </>
        )}

        <dt>Set Name</dt>
        <dd>{set.name}</dd>

        <dt>Type</dt>
        <dd>{type}</dd>
      </dl>
    </li>
  );
};

// Exports
// -------

export default Card;
