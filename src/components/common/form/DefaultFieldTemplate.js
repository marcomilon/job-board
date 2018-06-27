import React from 'react'
import Label from './Label'

function DefaultFieldTemplate(props) {
    const {
        id,
        classNames,
        label,
        children,
        errors,
        help,
        description,
        hidden,
        required,
        displayLabel,
        rawErrors=[]
    } = props;
    
    if (hidden) {
        return children;
    }
    
    return (            
        <div className={classNames}>
          {displayLabel && <Label label={label} required={required} id={id} />} 
          {displayLabel && description ? description : null}
          {children}
          {rawErrors.map(error => <div className="error">{error}</div>)}
          {help}
        </div>
    );
}

export default DefaultFieldTemplate