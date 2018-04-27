import React from 'react'

function childreWithProps(children, props){
    return  React.Children.map(props.children, function(child){
        return React.cloneElement(child, {...props} )
    }) 
}

export { childreWithProps }