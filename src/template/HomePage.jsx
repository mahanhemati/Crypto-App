import React, { useEffect, useState } from "react";
import { SearchCoinApi, coinListApi } from "../service/coinAPi.js";

import TableCoin from "../module/TableCoin.jsx";
import { RotatingLines } from "react-loader-spinner";
import Psginstion from "../module/Psginstion.jsx";
import SearchBar from "../module/SearchBar.jsx";
import SearchCoin from "../module/SearchCoin.jsx";
import ShowModal from "../module/ShowModal.jsx";
function HomePage() {
  const [coin, setCoin] = useState(null);
  const [page, SetPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [text, setText] = useState("");
  const [searchedCoin, setSearchedCoin] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalData , setModalData] = useState([]);
  useEffect(() => {
    fetch(coinListApi(page, currency))
      .then((res) => res.json())
      .then((json) => setCoin(json)).catch(
        console.log("have a problem")
      )
  }, [page, currency]);
  useEffect(() => {
    const cancelReq = new AbortController();
    const signal = cancelReq.signal;
    fetch(SearchCoinApi(text), { signal })
      .then((res) => res.json())
      .then((json) => setSearchedCoin(json.coins));
    return () => {
      cancelReq.abort();
    };
  }, [text]);
  return (
    <>
      {coin && (
        <SearchBar
          currency={currency}
          setCurrency={setCurrency}
          text={text}
          setText={setText}
          setCoin={setCoin}
        />
      )}
      {!!searchedCoin && (
        <ul className="container-serched">
          {searchedCoin.map((coin) => (
            <SearchCoin coin={coin} key={coin.id} setModalData={setModalData} setShowModal={setShowModal}/>
          ))}
        </ul>
      )}

      <div className="container">
        {coin ? (
            <TableCoin
              coin={coin}
              currency={currency}
              setShowModal={setShowModal}
              setModalData={setModalData}
            />
        ) : (
          <RotatingLines strokeColor="#3874ff" strokeWidth="5" />
        )}
      </div>
      {coin && <Psginstion page={page} SetPage={SetPage} setCoin={setCoin}/>}
      {!!showModal && <ShowModal setShowModal={setShowModal} modalData={modalData} currency={currency}/>}
    </>
  );
}

export default HomePage;
