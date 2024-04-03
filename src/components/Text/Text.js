import './text.css';

export default function TextDisplay({title, body, color, titleFontSize, bodyFontSize}) {
    return(
       <div>
        <div className='title' style={{color: color || 'azure', 'font-size': titleFontSize || '4rem'}}>{title || ''}</div>
        <div className='body' style={{color: color || 'azure', 'font-size': bodyFontSize || '1.5rem'}}>{body || ''}</div>
       </div>
    )}