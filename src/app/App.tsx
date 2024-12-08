import React from "react";
import clx from "classnames";
import styles from "./App.module.scss";

interface AppProps {
  className?: string;
}

export const App: React.FC<AppProps> = (props): JSX.Element => {
  return (
    <div className={clx(styles.App, props.className)}>
      <button className="button" type="button">a</button>
      <button>aaa</button>
    </div>
  );
};
