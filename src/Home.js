import React from 'react'

function home({ title="default",children}) {
    // const { children } = props;
    // const title = props.title;
    return (
        <div>
            home component {children}
            <br />
            title is : { title}
        </div>
    )
}

export default home
