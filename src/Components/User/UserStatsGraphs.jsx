import React, { useState, useEffect } from "react";
import styles from "./UserStatsGraphs.module.css";

const UserStatsGraphs = ({ data }) => {
 const [graph, setGraph] = useState([]);
 const [total, setTotal] = useState(0);

 useEffect(() => {
  setTotal(
   data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
  );
 }, [data]);

 return (
  <section className={`${styles.graph} animeLeft`}>
   <div className={styles.total}>
    <p>Acessos: {total}</p>
   </div>
  </section>
 );
};

export default UserStatsGraphs;
