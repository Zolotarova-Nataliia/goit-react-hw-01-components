import PropTypes from "prop-types";
import TransactionItem from "./TransactionItem";
import {
  TransactionTable,
  TransactionHead,
  TransactionRow,
  TransactionType,
} from "./Transactions.styled";

export default function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <TransactionHead>
        <TransactionRow>
          <TransactionType>Type</TransactionType>
          <TransactionType>Amount</TransactionType>
          <TransactionType>Currency</TransactionType>
        </TransactionRow>
      </TransactionHead>

      <tbody>
        {items.map((item) => {
          return <TransactionItem key={item.id} item={item} />;
        })}
      </tbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
