import React from 'react'

function Hero() {
    return (
        <>
          <div className="container p-5">
            <div className="row text-center">
                <img src="\public\media\images-20250722T113637Z-1-001\images\homeHero.png" alt="HOME IMAGE"  className='mb-5'/>
                <h1 className='mt-5'>
                Invest in everything
                </h1>
                <p>
                Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>
                <button className='p-2 btn btn-primary fs-5' style={{width:"20%" , margin: "0 auto"}}>
                    Sign up for free
                </button>
            </div>
          </div>
        </>
    );
}

export default Hero;