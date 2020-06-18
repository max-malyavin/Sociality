import React from 'react'
import './Block.scss'
import classNames from 'classnames'



type Props = {
    children: any
    className:any
}
  

const Block: React.FC<Props> = ({children, className}) => {
    return (
        <div className={classNames('block', className)}>
            {children}
        </div>
    )
}

export default Block
