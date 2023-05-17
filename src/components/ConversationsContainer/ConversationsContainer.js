import React, { useState } from 'react'
import styles from './ConversationsContainer.module.scss'
import { ChatIcon, EveryOneIcon, MarketPlaceIcon, StoreMessageIcon, WaitingMessageIcon } from '../Icons'
import classNames from 'classnames/bind';
import Avatar from '../Avatar/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsLeftRightToLine, faMaximize } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function ConversationsContainer() {
  const [isActive, setIsActive] = useState(true);
  function Toolbar() {
    return (
      <div className={styles.toolbar}>
        <div className={styles.wrapperActions}>
          <button className={cx('btnAction', isActive && 'active')} onClick={() => { console.log('chua co gi') }} >
            <ChatIcon />
          </button>
          <button className={styles.btnAction} onClick={() => { console.log('chua co gi') }}>
            <EveryOneIcon />
          </button>
          <button className={styles.btnAction} onClick={() => { console.log('chua co gi') }}>
            <MarketPlaceIcon />
          </button>
          <button className={styles.btnAction} onClick={() => { console.log('chua co gi') }}>
            <WaitingMessageIcon />
          </button>
          <button className={styles.btnAction} onClick={() => { console.log('chua co gi') }}>
            <StoreMessageIcon />
          </button>
        </div>
        <span className={styles.divider}></span>
        <div className={cx('end-item')}>
          <button className={cx('btnAction', 'btn-avartar')}>
            <Avatar src={null} alt="chua co avatar" className={cx('avatar')} />
          </button>
          <button className={cx('btnAction', 'btn-expand')}>
            <FontAwesomeIcon icon={faArrowsLeftRightToLine} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <aside className={styles.wrapper}>
      <Toolbar />
      <div className={styles.conversations}>
        {/* Code UI Conversations at here */}
      </div>
    </aside>
  )
}

export default ConversationsContainer