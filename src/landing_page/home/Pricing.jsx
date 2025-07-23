import React from 'react'

function Pricing() {
    return (
        <>
            <div className="container my-5">
                <div className="row justify-content-center align-items-center text-center">
                    <div className="col-md-4 text-md-start text-center mb-4 mb-md-0">
                        <h1 className='fs-2 mb-4'>Unbeatable Pricing</h1>
                        <p className='text-muted'>
                            We pioneered the concept of discount broking and price transparency in India.
                            Flat fees and no hidden charges.
                        </p>
                        <a href="#" style={{ textDecoration: "none", }}>
                            See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="col-1">
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <div className="p-4 border rounded shadow-sm">
                                    <h1 className="mb-2">₹0</h1>
                                    <p className="mb-0">
                                        Free equity delivery <br /> and direct mutual funds
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-5 pd-5">
                                <div className="p-4 border rounded shadow-sm">
                                    <h1 className="mb-2">₹20</h1>
                                    <p className="mb-4">Intraday and F&amp;O</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing;