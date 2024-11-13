import React from "react";

export const Card = ({digit}) => {

    return (
        <>
            
                <div className="card bg-dark text-white rounded fs-1" style={{width: '10rem', height: '10rem'}}>
                    {digit}
                </div>
            
        </>
    );
};