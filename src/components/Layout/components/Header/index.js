import {
  faCircleXmark,
  faEllipsisVertical,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import React from "react";
import images from "~/assets/images";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img className={cx("logo")} src={images.logo} alt="tiktok" />

        <div className={cx("search")}>
          <input placeholder="Search accounts and videos" />
          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          {/* <FontAwesomeIcon className={cx("loading")} icon={faSpinner} /> */}
          <button className={cx("search__btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          {/* loading */}
        </div>

        <div>
          <a className={cx("upload__link")} href=".">
            Unload
          </a>
          <button className={cx("login__link")} href="#">
            Log in
          </button>
          <button className={cx("option")}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
