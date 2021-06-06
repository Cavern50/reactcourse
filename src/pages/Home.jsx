import React from "react";
import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoadingBlock,
} from "../components/";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавит", type: "name" },
];
const Home = () => {
  const dispatch = useDispatch();

  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
  const cartItems = useSelector(({ cart }) => cart.items);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: "ADD_PIZZA_CART",
      payload: obj,
    });
  };

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy}
          items={sortItems}
          onClickSortPopup={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((el, i) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={el.id}
                addedCount={cartItems[el.id] && cartItems[el.id].length}
                {...el}
              />
            ))
          : Array(12)
              .fill(null)
              .map((_, i) => <PizzaLoadingBlock key={i} />)}
      </div>
    </div>
  );
};

export default Home;
