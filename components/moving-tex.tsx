import styles from "../app/styles.module.css";

import { GiColombia } from "react-icons/gi";
const MovingText = () => {
  return (
    <div
      className={`${styles.container}text-bold text-md  bg-slate-500 text-gray-50 p-2`}
    >
      <div className={`${styles.horizontal_scrolling_items} space-x-4`}>
        <div className={`${styles.horizontal_scrolling_items_item}`}>
          20% DESCUENTO|comprar ahora
        </div>

        <div className={`${styles.horizontal_scrolling_items_item}`}>
          Envios gratis por compras mayores a $100.000
          <GiColombia className="inline-block ml-2" size={20} />
        </div>
      </div>
    </div>
  );
};

export default MovingText;
