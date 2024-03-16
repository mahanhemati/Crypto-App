import { useState } from "react";

import style from "./Psginstion.module.css";
function Psginstion({ page, SetPage , setCoin}) {
  return (
    <div className={style.pagination}>
      <button
        onClick={() => {
          if (page > 5) return;
          setCoin(null)
          SetPage((value) => value + 1);
        }}
      >
        next
      </button>
      . .<p>{page}</p>. .
      <button
        onClick={() => {
          if (page <= 1) return;
          setCoin(null)
          SetPage((value) => value - 1);
        }}
      >
        previous
      </button>
    </div>
  );
}

export default Psginstion;
