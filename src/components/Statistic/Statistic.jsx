import PropTypes from "prop-types";
import StatisticsItem from "./StatisticItem";
import css from "./Statistic.module.css";

export default function Statistics(props) {
  const { title, stats } = props;

  return (
    <section className={css.statistics}>
      {title && <h2>{title}</h2>}
      <ul className={css.statList}>
        {stats.map((statEl) => (
          <StatisticsItem key={statEl.id} statistic={statEl} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
};
