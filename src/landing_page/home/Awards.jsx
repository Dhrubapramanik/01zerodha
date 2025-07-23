import React from 'react'

function Awards() {
    return (
        <>
            <div className="container  mt-5">
                <div className="row">
                    <div className="col-6 p-5"><img src="\public\media\images-20250722T113637Z-1-001\images\largestBroker.svg" alt="AWARDS" /></div>
                    <div className="col-6 p-5 mt-5">
                        <h1>
                            Largest stock broker in India
                        </h1>
                        <p className='mb-5'>
                            2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in :
                        </p>
                        <div className="row">
                            <div className="col-6">
                                <ul>
                                    <li><p>Futures and Options</p></li>
                                    <li><p>Commodity derivatives</p></li>
                                    <li><p>Currency derivatives</p></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li>Stocks and IPOs</li>
                                    <li>Direct mutual funds</li>
                                    <li>Bonds and Govt. Securities</li>
                                </ul>
                            </div>
                        </div>
                        <img src="\public\media\images-20250722T113637Z-1-001\images\pressLogos.png" alt="Press Image" style={{width:"95%"}} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Awards;