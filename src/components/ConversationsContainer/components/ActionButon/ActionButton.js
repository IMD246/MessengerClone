import React, { useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./ActionButton.module.scss";

const cx = classNames.bind(styles);

function ActionButton({
  className,
  onClick,
  active = false,
  badge = false,
  ariaLabel,
  children
}) {
  const [isActive, setIsActive] = useState(active); // state for active state when click button
  const [showTooltip, setShowTooltip] = useState("");
  const classes = cx(showTooltip, isActive && "active", {
    [className]: className
  });

  const handleMouseEnter = () => {
    if (ariaLabel === undefined) return;
    setTimeout(() => {
      setShowTooltip("tooltip-btn");
    }, 500);
  };

  const handleMouseLeave = () => {
    if (ariaLabel === undefined) return;
    setShowTooltip("");
  };

  return (
    <button
      className={classes}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {
        badge && <div className={cx('badge')}>
          <div></div>
        </div>
      }
      {children}
    </button>
  );
}

export default ActionButton;
