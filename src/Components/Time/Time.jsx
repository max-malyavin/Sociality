// import React from 'react'
import formatDistanceToNow from 'date-fns/esm/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru/index.js';


const Time = ({date}) => formatDistanceToNow(date,{
     addSuffix: true,
     locale: ruLocale
        });

export default Time
