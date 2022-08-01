import React from 'react'

const AccountInput = ({
    name,                   //input name
    type,                   //input type
    placeholder,            //input placeholder
    value,                  //input value
    onChange,               //callback to handle input value change
    title,                  //input title, usually displayed as tooltip or displayed upon error
    required,                //boolean, if required or not
    pattern
}) => {
    
  return (
    <div className="mt-2 block pr-1 mb-4">
        <input 
            type={type}
            name={name}
            className="w-full rounded border bg-grayBackground p-2 border-secondaryBlue focus:outline-none focus:ring-2 focus:ring-purple-600" 
            placeholder={placeholder || ''}
            required={required}
            title={title}
            onChange={(e)=>onChange(e.target.value)}
            value={value}
            pattern={pattern}
        />
    </div>
  )
}

export default AccountInput