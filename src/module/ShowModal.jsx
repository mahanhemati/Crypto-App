import { useEffect, useState } from "react";
import style from "./ShowModal.module.css";
import { getChartCoin } from "../service/coinAPi";
import { RotatingLines } from "react-loader-spinner";
import { convertData } from "../helpers/convertData";
import Chart from "./Chart";
function ShowModal({ setShowModal, modalData, currency }) {
  const coinData = modalData.data;
  const [chart, setChart] = useState(null);
  const [type, setType] = useState("prices");
  useEffect(() => {
    fetch(getChartCoin(coinData.id, currency))
      .then((res) => res.json())
      .then((json) => {
        setChart(convertData(json, type));
      });
  }, [type]);
  const typeHandler = (event) => {
    if (event.target.tagName === "BUTTON") {
      setType(event.target.innerText.toLowerCase().replace(" ", "_"));
      
    }
  };
  return (
    <div className={style.backgroundBg}>
      <span
        onClick={() => {
          setShowModal(false);
        }}
        className={style.croos}
      >
        X
      </span>
      <div className={style.modal}>
        <div className={style.titleCoin}>
          <img src={coinData.image || coinData.large} alt="coin" />
          <h3>{coinData.name}</h3>
        </div>
        {!!chart ? (
          <div className={style.graph}>
            <Chart type={type} chart={chart} />
          </div>
        ) : (
          <RotatingLines strokeColor="#3874ff" strokeWidth="2" />
        )}
        <div className={style.btnGroup} onClick={typeHandler}>
          <button className={type == "prices" ? style.active : style.btn}>Prices</button>
          <button className={type == "market_caps" ? style.active : style.btn}>Market Caps</button>
          <button className={type == "total_volumes" ? style.active : style.btn}>Total Volumes</button>
        </div>
        <div className={style.bannerTitle}>
          <h4>Prices : {coinData.current_price}</h4>
          <h4>Total Volume : {coinData.total_volume}</h4>
          <h4>change : {coinData.price_change_24h}</h4>
        </div>
      </div>
    </div>
  );
}

export default ShowModal;
