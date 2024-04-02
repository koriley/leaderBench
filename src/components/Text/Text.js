import './text.css';

export default function TextDisplay({title, body}) {
    return(
       <div>
        <div className='title'>{title || ''}</div>
        <div className='body'>{body || ''}</div>
       </div>
    )}