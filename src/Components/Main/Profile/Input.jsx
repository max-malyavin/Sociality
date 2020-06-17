import React from 'react'

export const InputMy = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <input style={{width: '100%', border: '1px solid #d9d9d9',padding: '6.5px 11px',
    fontSize: '16px', borderRadius: '10px',
    height: '50px', outline: 'none'
}} {...input} {...restProps}/>
}
