import React from 'react' ;
import PropTypes from 'prop-types';
import './TransactionHistory.module.css'

const TransactionList = ({ type, amount, currency }) => {
    return (
        <tr >
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr> 
    )
}

TransactionList.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransactionList;