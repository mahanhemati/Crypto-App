import styles from "./SearchBar.module.css";
function SearchBar({ currency, setCurrency, text, setText , setCoin}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Type a Crypto Name"
        className={styles.coinName}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <select value={currency} onChange={(e) => {
        setCoin(null)
        setCurrency(e.target.value)
      }}>
        <option defaultValue="usd">usd</option>
        <option defaultValue="jpy">jpy</option>
        <option defaultValue="eur">eur</option>
      </select>
    </div>
  );
}

export default SearchBar;
