import style from "./SearchCoin.module.css";

function SearchCoin({ coin , setModalData , setShowModal}) {
  return (
    <li
      className={style.item}
      onClick={() => {
        setModalData({ data: coin });
        setShowModal(true);
      }}
    >
      <img src={coin.thumb} alt="searchedCoin" />
      <p>{coin.name}</p>
    </li>
  );
}

export default SearchCoin;
