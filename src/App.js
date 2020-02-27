// Dependencies
// ------------

// Libraries
import React, { useEffect, useRef, useState } from 'react';
// Styles
import './App.css';
// Components
import Card from './Card';
import LoadingIndicator from './LoadingIndicator';
import SiteHeader from './SiteHeader';
// Utilities
import throttle from 'lodash.throttle';

// Internal
// --------

const App = () => {
  const [cards, setCards] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nameQuery, setNameQuery] = useState(false);
  const [isInfiniteScroll, setIsInfiniteScroll] = useState(false);
  const [isNewRequest, setIsNewRequest] = useState(true);
  const [page, setPage] = useState(1);

  const cardsRef = useRef();
  const searchInputRef = useRef();

  //
  // Data fetching
  useEffect(() => {
    const cardsPerPage = 20;

    // API documentation:
    // https://docs.elderscrollslegends.io/#api_v1cards_list
    const fetchCards = async () => {
      if (!isNewRequest) return;
      setIsLoading(true);

      const nameParameter = nameQuery ? `&name=${ nameQuery }` : '';

      const response = await fetch(
        `https://api.elderscrollslegends.io/v1/cards?page=${ page }&pageSize=${ cardsPerPage }${ nameParameter }`
      );

      setIsError(!response.ok);

      response
        .json()
        .then(data => {
          setCards(previousCards => [...previousCards, ...data.cards]);
          setIsInfiniteScroll(data._totalCount > cardsPerPage * page);
          setIsError(data.cards.length < 1);
          setIsLoading(false);
          setIsNewRequest(false);
        })
        .catch(err => {
          setIsError(true);
          setIsLoading(false);
          setIsNewRequest(false);
        });
    };

    fetchCards();
  }, [nameQuery, isNewRequest, page]);

  //
  // Scroll event handling
  useEffect(() => {
    const handleScroll = throttle(() => {
      if (isNewRequest || !isInfiniteScroll) return;

      const {current: cards} = cardsRef;
      const {innerHeight, scrollY} = window;

      const cardsBottom = cards.clientHeight + cards.offsetTop;
      const buffer = innerHeight * .3;

      if (innerHeight + scrollY > cardsBottom - buffer) {
        setPage(previousPage => previousPage + 1);
        setIsNewRequest(true);
      }
    }, 250);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInfiniteScroll, isNewRequest]);

  return (
    <>
      <SiteHeader />

      <main role="main" className="app">
        {/* TODO: move to its own file */}
        <form onSubmit={ (event) => {
          event.preventDefault();
          const { current: { value } } = searchInputRef;
          setCards([]);
          setPage(1);
          setNameQuery(value);
          setIsNewRequest(true);
        } }>
          <label htmlFor="search-input">
            Search by name
          </label>

          <input
            autoCapitalize="none"
            autoCorrect="off"
            id="search-input"
            ref={ searchInputRef }
            type="search"
          />

          <button>Search</button>
        </form>

        { nameQuery && !isLoading &&
          <h2>Cards matching the name: { nameQuery }</h2>
        }

        {/* TODO: handle ARIA */}
        { isError && !isLoading ?
          <p className="error-message">Uh oh. No cards were found.</p>
        :
          <ul className="cards" ref={ cardsRef }>
            { cards.map(card => <Card { ...card } key={ card.id } />) }
          </ul>
        }

        { isLoading && <LoadingIndicator /> }
      </main>
    </>
  );
}

// Exports
// -------

export default App;
