import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './home.scss'


const Home = ({ categories }) => (
  <section className={css.component}>
    <svg className="svgCat" width="1440" height="1146" viewBox="0 0 1440 1146" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 782.21C52.195 714.255 206.493 578.344 406.127 578.344C655.668 578.344 649.206 578.344 748.625 525.756C848.044 473.169 982.757 356.468 1227.33 226.08C1376.47 146.569 1429.23 75.0518 1440.53 31.7145L1440.67 0C1443.54 7.42167 1444.05 18.1973 1440.53 31.7145L1435.61 1146H0V782.21Z" fill="url(#paint0_linear)"/>
      <defs>
      <linearGradient id="paint0_linear" x1="1382.66" y1="168.189" x2="-149.989" y2="752.74" gradientUnits="userSpaceOnUse">
      <stop stopColor="#8248FF"/>
      <stop offset="1" stopColor="#4CB3FF"/>
      </linearGradient>
      </defs>
    </svg>

    <h1>Categories</h1>
    {categories.length > 0 && (
      <section>
        {categories.map((category, key) => (
          <Link to={`/categories/${category.id}`} key={category.id}>
            <div className="category" key={key}>
              <div className="category__name">
                  {category.title}
              </div>
            </div>
          </Link>
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