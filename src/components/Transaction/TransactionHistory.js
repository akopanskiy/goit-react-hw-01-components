import React from 'react';
import PropTypes from 'prop-types';
import TransactionList from './TransactionList';
import './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {items.map(items => (
        <tbody key={items.id}>
          <TransactionList
            type={items.type}
            amount={items.amount}
            currency={items.currency}
            id={items.id}
          />
        </tbody>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
