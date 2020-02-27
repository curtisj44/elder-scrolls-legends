// Dependencies
// ------------

// Libraries
import React, { useEffect, useState } from 'react';
// Styles
import './App.css';
// Components
import Card from './Card';
import LoadingIndicator from './LoadingIndicator';
import SiteHeader from './SiteHeader';

// Internal
// --------


const useCardsEndpoint = ({ cardCount, page }) => {
  const [cards, setCards] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('useEffect');

    const fetchCards = async () => {
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
          setCards(data.cards);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
          setIsError(true);
          setIsLoading(false);
        });
    };

    fetchCards();
  }, [cardCount, page]);

  return {
    cards,
    isError,
    isLoading
  };
};

//

const App = () => {
  const [page, /*setPage*/] = useState(1);

  const {
    cards,
    isError,
    isLoading
  } = useCardsEndpoint({ cardCount: 5, page });

  return (
    <>
      <SiteHeader />

      <main role="main" className="app">
        { isLoading && <LoadingIndicator /> }

        { isError || (cards.length < 1 && !isLoading) ?
          <p>Uh oh. No cards were found.</p>
        :
          <ul className="cards">
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
