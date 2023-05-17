import React, { forwardRef, useState } from 'react'
import classNames from 'classnames';
import styles from './Avatar.module.scss'
import images from '../../assets/images';

const Avatar = forwardRef(({ src, alt, className, fallback: customFallback = images.userAvatar, ...props }, ref) => {
  const [fallback, setFallback] = useState(customFallback);

  const handleError = () => {
    setFallback(customFallback);
  };

  return (
    <img
      className={classNames(styles.avatar, styles.wrapper, className)}
      ref={ref}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

export default Avatar