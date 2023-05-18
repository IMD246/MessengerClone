import styles from './ConversationsContainer.module.scss'
import * as Icons from '../Icons'
import classNames from 'classnames/bind';
import Avatar from '../Avatar/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsLeftRightToLine } from '@fortawesome/free-solid-svg-icons';
import ActionButton from './components/ActionButon/ActionButton';
import SearchBar from '../SearchBar/SearchBar';

const cx = classNames.bind(styles)

const iconList = [
  {
    icon: <Icons.ChatIcon />,
    label: "Tin nhắn"
  },
  {
    icon: <Icons.EveryOneIcon />,
    label: "Mọi người"
  },
  {
    icon: <Icons.MarketPlaceIcon />,
    label: "Marketplace"
  },
  {
    icon: <Icons.WaitingMessageIcon />,
    label: "Tin nhắn đang chờ"
  },
  {
    icon: <Icons.StoreMessageIcon />,
    label: "Kho lưu trữ"
  },
]
function ConversationsContainer() {
  function Toolbar() {
    return (
      <div className={cx('toolbar')}>
        <div className={cx('toolbar-actions')}>
          {iconList.map((i, index) => (
            <ActionButton className={cx('action-button')}
              active={index === 0}
              badge={index === 0}
              onClick={() => { console.log('chua co gi') }}
              ariaLabel={i.label}
              children={i.icon} />
          ))}
        </div>
        <span className={cx('toolbar-divider')} />
        <div className={cx('toolbar-end_item')}>
          <ActionButton className={cx('action-button', 'avatar-button')}>
            <Avatar src={null} alt="lỗi hiển thị" className={cx('avatar')} />
          </ActionButton>
          <ActionButton className={cx('action-button', 'button-circle')}>
            <FontAwesomeIcon icon={faArrowsLeftRightToLine} width={16} height={16} />
          </ActionButton>
        </div>
      </div>
    );
  }

  return (
    <aside className={cx('wrapper')}>
      <Toolbar />
      {/* ConversationsContainer */}
      <div className={cx('conversations_container')}>
        <div className={cx('conversations_container-head')}>
          <div className={cx('conversations_container-head--top')}>
            <span>Chat</span>
            <div>
              <ActionButton className={cx('action-button', 'button-circle', 'button-circle--margin')}>
                <Icons.StartVideoCallIcon />
              </ActionButton>
              <ActionButton className={cx('action-button', 'button-circle', 'button-circle--margin')}>
                <Icons.StartNewConversationIcon />
              </ActionButton>
            </div>
          </div>
          <div className={cx('conversations_container-head--bottom')}>
            <SearchBar />
          </div>
        </div>
        <div className={cx('conversations')}></div>
        <div className={cx('conversations_container-foot', 'action-button')}></div>
      </div>
    </aside>
  )
}

export default ConversationsContainer