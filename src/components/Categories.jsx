import React, { useState } from "react";
import PropTypes from 'prop-types'

const Categories = ({ items, onClickCategory, activeCategory }) => {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {items &&
          items.map((name, i) => (
            <li
              className={activeCategory === i ? "active" : ""}
              onClick={() => onClickCategory(i)}
              key={`${name}_${i}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};


Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.array.isRequired,
  onClickCategory: PropTypes.func.isRequired
};

Categories.defaultProps = {
  items: [],
  activeCategory: null,
};

export default React.memo(Categories);
