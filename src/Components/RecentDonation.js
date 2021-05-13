import { DEFAULT_FILE_SYSTEM_ADAPTER } from 'fast-glob/out/settings';
import React from 'react';

const RecentDonation = (props) => {
    const {name, amount, caption} = props;

    return (
        <li>
            <h2>{name} donated ${amount} {caption}</h2>
        </li>
    )
}
export default RecentDonation;