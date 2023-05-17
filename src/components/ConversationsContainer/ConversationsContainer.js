import React from 'react'
import styles from './ConversationsContainer.module.scss'
import { ChatIcon } from '../../assets/Icons'

function ConversationsContainer() {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.wrapperActions}>
        <ChatIcon/>
      </div>
      <div></div>
    </aside>
  )
}

export default ConversationsContainer