import React from 'react' ;
import PropTypes from 'prop-types';
import styles from './Statistic.module.css';

function randColor() {
    var r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

const Statistic = ({ title, stats }) => {
    return (
    <section className={styles.statistic}>
    {title && <h2 className={styles.title}>{title}</h2>}
  
    <ul className={styles.statList}>
        {stats.map((stats) => (
           
                <li key={stats.id} className={styles.item}
                style={{backgroundColor: randColor()}}>
            <span className={styles.label}>{stats.label}</span>
            <span className={styles.percentage}>{stats.percentage}</span>
          </li>
        ))}
    </ul>
  </section>
  )
}
Statistic.defaultTypes = {
    title: ''
}

Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
                percentage: PropTypes.number.isRequired,
            })
    ).isRequired,
}

export default Statistic;