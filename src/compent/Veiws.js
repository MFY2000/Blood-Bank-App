import React from 'react';

class list extends React.Component{ 

 
render () {
const {Group,
    Age,
    Phone_Number,
    gender,
Addears,} = this.props.props.MoreAboutUser
return (
<div className='inline' >
<div>  

    <p>Groups :{Group}</p>
    <p>Age :{Age}</p>
</div>

<div className='left' >  
    <p>phone Number :{Phone_Number}</p>
    <p>Gender :{gender}</p>
    <p>Addears :{Addears}</p>
</div>
</div>

    )
}

}

export default list;