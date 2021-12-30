import PropTypes from "prop-types";
import { TransactionType } from "./Transactions.styled";

export default function TransactionItem({ item }) {
  const { type, amount, currency } = item;
  return (
    <tr>
      <TransactionType>{type}</TransactionType>
      <TransactionType>{amount}</TransactionType>
      <TransactionType>{currency}</TransactionType>
    </tr>
  );
}

TransactionItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
