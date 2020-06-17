import React from 'react'
import orderBy from 'lodash/orderBy';
import DialogItem from './DialogItem';
import { Input , Empty} from 'antd';
const { Search } = Input;

const DialogsBar = ({items, userId,onSelectDialog, onSearch,currentDialog,inputValue}) => {
   
    return (<>
     <div className="chat__sidebar-search">
              <Search value={inputValue} placeholder="Поиск среди контактов"
                            onChange={e=>onSearch(e.target.value)}
                            style={{ width: '100%' }}/>
    </div>
         <div className="chat-d">
                 {items.length 
                 ? orderBy( items, ['created_at'], ['desc'] ).map(item => (<DialogItem onSelect={onSelectDialog} key={item._id}
                    //  user={item.user}
                    message={item}
                    currentDialog={currentDialog}
                    unreaded={item.unreaded}
                    isMe={item.user._id === userId}
                    {...item}/>)) 
                : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='Ничего не найдено'/>}
                 </div>
        </>
    )

}

export default DialogsBar
