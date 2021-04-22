import React from 'react';

const CurrentDonation = ({name, amount, caption}) =>{
    return (
        <li>{name} donated ${amount}{caption}</li>
    )
}

export default CurrentDonation