import React from 'react'

const TabHeaders = ({id, title, selectedTab, setSelectedTab }) => {
  return (
    <React.Fragment>
        <button className={`font-bold  h-full hover:border-b-2 hover:border-secondaryBlue border-b-2 ${selectedTab === id ? 'border-secondaryBlue' : 'border-transparent'}`} onClick={()=>setSelectedTab(id)}>
            <p className='px-10 mb-2'> {title}</p>
        </button>
    </React.Fragment>
  )
}

export default TabHeaders