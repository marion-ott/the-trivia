import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './home.scss'


const Home = ({ categories, images }) => (
  <section className={css.component}>
    <h1>Categories</h1>
    {categories.length > 0 && (
      <section>
        {categories.map((category, key) => (
          <div className="category" key={key}>
            <div className="category__background"></div>
            <div className="category__name">
              <Link to={`/categories/${category.id}`} key={category.id}>
                {category.title}
              </Link>
            </div>
          </div>
        ))}
      </section>
    )}
  </section>
);

Home.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      clues_count: PropTypes.number
    }),
  ),
}

export default Home;