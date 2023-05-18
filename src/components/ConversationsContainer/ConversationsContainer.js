import React from 'react'
import styles from './ConversationsContainer.module.scss'
import { ChatIcon, EveryOneIcon, MarketPlaceIcon, StoreMessageIcon, WaitingMessageIcon } from '../../assets/Icons'

function ConversationsContainer() {

  function Toolbar() {
    return (
      <div className={styles.toolbar}>
        <div className={styles.wrapperActions}>
          <button className={styles.btnAction} onClick={() => { console.log('chua co gi') }} >
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