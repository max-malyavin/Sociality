import React, { useState, useRef, useEffect } from 'react'
import './Dialogs.scss'
import waveSvg from '../../../Assets/Images/wave.svg'
import playSvg from '../../../Assets/Images/play.svg'
import pauseSvg from '../../../Assets/Images/pause.svg'
import classNames from 'classnames';
import Time from '../../Time/Time';
import TextReaded from '../../TextReaded/TextReaded';
import converterCurrentTime from '../../../Utils/helpers/converterCurrentTime';
const Message2 = ({text,audio, id,date, user,isMe, isReaded, attachments,isTyping}) => {

    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0)
    const audioElem = useRef(null)
   
    useEffect(()=>{
       
        if(audio){
            audioElem.current.addEventListener('playing', ()=> {
                setIsPlaying(true)
            }, false)
            audioElem.current.addEventListener('ended', ()=> {
                setIsPlaying(false)
                setProgress(0)
                setCurrentTime(0)
            }, false)
            audioElem.current.addEventListener('pause', ()=> {
                setIsPlaying(false)
            }, false)
            audioElem.current.addEventListener('timeupdate', ()=> {
                const duration = (audioElem.current && audioElem.current.duration) || 0 
                setCurrentTime(audioElem.current.currentTime)
                setProgress(( audioElem.current.currentTime / duration) * 100)
            })
        }
       
    },[])

    const togglePlay = () => {
        if(!isPlaying){
            audioElem.current.play()
        } else {
            audioElem.current.pause()
        }
    }
   

    return (
        <>
        <div className={classNames('message', {'message--isme': isMe,
        'message--is-typing': isTyping,
        "message--is-audio": audio,
        'message--image': attachments && attachments.length === 1,})}>
            <div className="message__avatar">
                <img  src={user.avatar} alt={`Avatar ${user}`}/>
            </div>
            <div className="message__content">
                {/* {isReaded && <TextReaded isMe={isMe} isReaded={isReaded}/>} */}

                { ( audio || text || isTyping ) && (<div className="message__bubble">
               {text && <p className="message__text"> {text}  </p>} 
                {isTyping && (
                      <div className="message__typing">
                      <span ></span>
                      <span ></span>
                      <span ></span>
                      </div>
                )} 
                    {
                     audio && <div className="message__audio">
                         <audio src={audio} ref={audioElem} preload='auto'/>
                         <div className="message__audio-progress" style={{ width: progress +'%'}}></div>
                         <div className="message__audio-info">

                             <div className="message__audio-btn">
                                 <button onClick={togglePlay}>
                                     {isPlaying ?  <img src={pauseSvg} alt="Wave svg"/>
                                     : <img src={playSvg} alt="Wave svg"/>
                                    }
                                     
                                     </button>
                             </div>

                             <div className="message__audio-wave">
                                    <img src={waveSvg} alt="Wave svg"/>
                             </div>
                             <span className='message__audio-duration'>
                                   {converterCurrentTime(currentTime)}
                             </span>

                         </div>
                     </div>
                    }
                </div>)
                }
                    {attachments && (  <div className="message__attachments">
                       { attachments.map(item => (
                            <div>
                                <img className="attachments__item" src={item.url}/>
                            </div>
                            
                        ))}
                    </div>
               )}
                       
              {date &&  <span className="message__date">
                  <Time date={date}/>
                </span>}
            </div>
        </div>
        </>
    )
}


export default Message2

           {/* {isMe && isReaded &&(
                    <span className="readed">Прочитано</span>
            )}
            {isMe && !isReaded &&(
                    <span className="readed">Не прочитано</span>
            )} */}
            // const Message2 = ({avatar,text, date, user,isMe, isReaded, attachments,isTyping}) => {
            //     return (
            //         <div className={classNames('message', {'message--isme': isMe,
            //         'message--is-typing': isTyping,
            //         'message--image': attachments && attachments.length === 1,})}>
            //             <div className="message__avatar">
            //                 <img  src={avatar} alt={`Avatar ${user}`}/>
            //             </div>
            //             <div className="message__content">
            //                 <TextReaded isMe={isMe} isReaded={isReaded}/>
            
            //                 {(text || isTyping ) && (<div className="message__bubble">
            //                {text && <p className="message__text"> {text}  </p>} 
            //                 {isTyping && (
            //                       <div className="message__typing">
            //                       <span ></span>
            //                       <span ></span>
            //                       <span ></span>
            //                       </div>
            //                 )} </div>)}
            
            //                 <div className="message__attachments">
            //                     {attachments &&
            //                         attachments.map(item => (
            //                             <div>
            //                                 <img className="attachments__item" src={item.url}/>
            //                             </div>
                                        
            //                         ))
            //                     }
            //                     </div>
            //               {date &&  <span className="message__date">
            //                   <Time date={date}/>
            //                 </span>}
            //             </div>
            //         </div>
            //     )
            // }
            
            