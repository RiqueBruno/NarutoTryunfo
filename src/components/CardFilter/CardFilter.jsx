import React from 'react'
import PropTypes from 'prop-types';
import Card from '../Card/Card';

function CardFilter({cardForm}) {
    const { CardsColection } = cardForm;

  return (
    <div>
      <div>
        {
          CardsColection.map((card) => {
            <Card cardForm={card} />
          })
        }
      </div>
    </div>
  )
}

export default CardFilter

CardFilter.propTypes = {
    cardForm: PropTypes.shape({
        CardsColection: PropTypes.array.isRequired
    }).isRequired
}