import React from "react";
import styles from "./Header.module.scss";
import { ReactComponent as MonaLisaSvg } from "../../assets/icons/mona-liza.svg";
import { ReactComponent as Avatar } from "../../assets/icons/avatar.svg";
import userState from "../../store/userState";
import { observer } from "mobx-react-lite";

export const Header = observer(() => {
  const user = userState.data;
  return (
    <header className={styles.header}>
      <div className={styles.naming}>
        <div className={styles.logo}>
          <MonaLisaSvg />
        </div>
        <span>PaintOnline</span>
      </div>
      <div className={styles.userSide}>
        <span>{user?.name || "Unidentified Artist"}</span>
        <div className={styles.avatar}>
          <Avatar />
        </div>
      </div>
    </header>
  );
});
