import React from 'react'

function Label(props) {
    const { label, required, id } = props;
    if (!label) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
    }
    return (
        <label className="control-label" htmlFor={id}>
          {label}
          {required && <span className="required">*</span>}
        </label>
    );
}

export default Label