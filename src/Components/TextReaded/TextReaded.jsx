import React from 'react'

const TextReaded = ({isMe, isReaded}) => isMe && (isReaded ?(
    <span className="readed">Прочитано</span>
): ( <span className="readed">Не прочитано</span>))

export default TextReaded
