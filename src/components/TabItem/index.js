import './index.css'

const TabItem = props => {
  const {tabDetails, activeTab, changeActiveTab} = props
  const {tabId, displayText} = tabDetails

  const tabButtonClass = activeTab === tabId ? 'active_tab' : ''

  const onClickingTab = () => {
    changeActiveTab(tabId)
  }

  return (
    <li className="tab">
      <button
        type="button"
        className={`${tabButtonClass} tab_button `}
        onClick={onClickingTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
