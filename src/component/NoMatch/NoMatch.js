import React from 'react';

const NoMatch = () => {
    const marginAuto = {
        width: '100%',
        margin: 'auto',
        textAlian:'center'
    }
    return (
        <div className={marginAuto}>
            <h1 style={{margin:' 0 auto'}}>Page Not Found: 404</h1>
        </div>
    );
};

export default NoMatch;