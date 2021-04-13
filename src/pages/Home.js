import React from 'react';
import Categories from '../components/categories';
import SortPopub from '../components/SortPopub';
import PizzaBlock from '../components/PizzaBlock';

function Home({ items }) {

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}
          activeItem={null}
          test={(param) => this.testFunction(param)}
        />
        <SortPopub
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
