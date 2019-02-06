import React from 'react';

class list extends React.Component{ 

 
render () {

const{ details,seen,requestType} = this.props.props
return (
<div>

    <p> details : {details}</p>
    <p> requestType : {requestType}</p>
    <p> seen : {seen}</p>
</div>

    )
}

}

export default list;