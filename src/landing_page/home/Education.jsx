import React from 'react'

function Education() {
    return (
        <>
            <div className="container mt-5 py-5">
                <div className="row align-items-center">

                    {/* Image Column */}
                    <div className="col-md-6 text-center mb-4 mb-md-0">
                        <img
                            src="/media/images-20250722T113637Z-1-001/images/education.svg"
                            alt="Varsity"
                            style={{ width: "70%", maxWidth: "100%" }}
                            className="img-fluid"
                        />
                    </div>

                    {/* Text Content Column */}
                    <div className="col-md-6">
                        <h2 className="mb-4 fw-semibold">Free and open market education</h2>
                        <p className="text-muted mb-3">
                            <strong>Varsity</strong>, the largest online stock market education book in the world, covering everything from the basics to advanced trading.
                        </p>
                        <a href="#" className="d-inline-block mb-4" style={{ textDecoration: "none" }}>
                            Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>

                        <p className="text-muted mb-3">
                            <strong>TradingQ&A</strong>, the most active trading and investment community in India for all your market-related queries.
                        </p>
                        <a href="#" style={{ textDecoration: "none",  }}>
                            Trading Q&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Education;