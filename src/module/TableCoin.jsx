import chart_down from "../assets/chart-down.svg";
import ChartUp from "../assets/chart-up.svg";
import style from "./TableCoin.module.css";
function TableCoin({ coin, currency, setShowModal, setModalData }) {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>Coin</th>
          <th>Name</th>
          <th>Price</th>
          <th>24h</th>
          <th>Total volume</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {coin.map((coin) => (
          <tr key={coin.id}>
            <td>
              <div
                className={style.symbol}
                onClick={() => {
                  setModalData({ data: coin });
                  setShowModal(true);
                }}
              >
                <img src={coin.image} alt="coin" />
                <span>{coin.symbol.toUpperCase()}</span>
              </div>
            </td>
            <td>{coin.name}</td>
            <td>
              {coin.current_price.toLocaleString()}

              {(currency === "usd" && <span>$</span>) ||
                (currency === "jpy" && <span>￥</span>) ||
                (currency === "eur" && <span>€</span>)}
            </td>
            <td
              className={
                coin.price_change_24h > 0 ? style.success : style.error
              }
            >
              {coin.price_change_24h.toFixed(2)}%
            </td>
            <td>{coin.total_volume.toLocaleString()}</td>
            <td>
              <img
                src={coin.price_change_24h < 0 ? chart_down : ChartUp}
                alt="chart"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableCoin;
