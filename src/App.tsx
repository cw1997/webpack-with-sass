import React from "react";

import * as styles from './App.module.sass'

export const App: React.FC<{}> = (props) => {
  console.log({styles})
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <a className={styles.container_link} href="https://www.changwei.me">www.changwei.me</a>
        </li>
        <li>
          <a className={styles.container_link} href="https://github.com/cw1997">cw1997's github</a>
        </li>
        <li className={styles.container_text}>
          hello
        </li>
        <li className={styles.container_text}>
          world
        </li>
      </ul>
    </div>
  );
};
