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
  const [newRequest, setNewRequest] = useState(true);
  const [page, setPage] = useState(1);

  const cardsRef = useRef(null);

  //
  // Data fetching
  useEffect(() => {
    const cardCount = 20;

    const fetchCards = async () => {
      if (!newRequest) return;

      setIsLoading(true);

      // API documentation:
      // https://docs.elderscrollslegends.io/#api_v1cards_list
      const response = await fetch(
        `https://api.elderscrollslegends.io/v1/cards?page=${page}&pageSize=${cardCount}`
      );

      setIsError(!response.ok);

      response
        .json()
        .then(data => {
          setCards(initialCards => [...initialCards, ...data.cards]);
          setIsLoading(false);
          setNewRequest(false);
        })
        .catch(err => {
          console.log(err);
          setIsError(true);
          setIsLoading(false);
          setNewRequest(false);
        });
    };

    fetchCards();
  }, [newRequest, page]);

  //
  // Scroll event handling
  useEffect(() => {
    const handleScroll = throttle(() => {
      if (newRequest) return;

      const {current: cards} = cardsRef;
      const {innerHeight, scrollY} = window;

      const cardsBottom = cards.clientHeight + cards.offsetTop;
      const buffer = innerHeight * .3;

      if (innerHeight + scrollY > cardsBottom - buffer) {
        console.log('should load more!', `initial page: ${page}`);
        setPage(page + 1);
        setNewRequest(true);
      }
    }, 250);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [newRequest, page]);

  return (
    <>
      <SiteHeader />

      <main role="main" className="app">
        { isLoading && <LoadingIndicator /> }

        { isError || (cards.length < 1 && !isLoading) ?
          <p>Uh oh. No cards were found.</p>
        :
          <ul className="cards" ref={ cardsRef }>
            { cards.map(card => <Card { ...card } key={ card.id } />) }
          </ul>
        }
      </main>
    </>
  );
}

// Exports
// -------

export default App;
