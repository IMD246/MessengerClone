import React from 'react'
import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss'
const cx = classNames.bind(styles)

function SearchBar() {
  return (
    <div className={cx('wrapper')}>SearchBar</div>
  )
}

export default SearchBar