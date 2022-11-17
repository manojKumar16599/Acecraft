import React from 'react';

const Iframe = ({ source, style }) => {
    console.log("source", source)

    if (!source) {
        return <div>Loading...</div>;
    }


    const src = source;
    return (
        <div>
            <div>
                <iframe title={"iframe_content"} style={style} srcDoc={src}></iframe>
            </div>
        </div>
    );
};

export default Iframe;