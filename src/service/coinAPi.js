const BASE_URL = "https://api.coingecko.com/api/v3/";
const API_KEY = "CG-6RAubenEiFsz29R5G3Khy4pP";
const coinListApi = (page, currency) => {
  return `${BASE_URL}coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=40&page=${page}&x_cg_demo_api_key=${API_KEY}`;
};
const SearchCoinApi = (text) => {
  return `${BASE_URL}search?query=${text}`;
};
const getChartCoin = (id, currency) => {
  return `${BASE_URL}coins/${id}/market_chart?vs_currency=${currency}&days=1`;
};
export { coinListApi, SearchCoinApi, getChartCoin };
