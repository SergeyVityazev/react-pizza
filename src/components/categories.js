import React, { useState } from 'react';

//function Categories({onClick, items, activeItem }) {

  function Categories({onSelectItem, items}) {

    let index = onSelectItem
    const [activeItem, setActiveItem] = useState(index);

  return (
    <div>
      <div className="categories">
        <ul>
          <li className={activeItem === null ? 'active' : ''} onClick={()=>setActiveItem(null)}>Все</li>
          {items.map((item, index) => (    
                    
            <li
              onClick={() => setActiveItem(index)}
              key={`${item}_${index}`}
              className={activeItem == index ? 'active' : ''}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
