import React from 'react';

function DrinksList(props) {
  return (
    <section className="drinks-list">
      <table className="center">
        <tbody>
          {props.drinkStore.map((drink, index) =>
            <tr key={index}>
              <td className="drink-bullet"></td>
              <td className="drink-cell">Drink {index+1}:</td>
              <td className="drink-cell">{drink.units} Units</td>
              <td className="drink-cell">{new Date(drink.timeStamp).toLocaleTimeString()}</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  )
}

export default DrinksList;
