import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';




export function LandingPage() {


    return (
        <div className="ContainerLand">
            <div className="BlockLand">
                <h1 className="H1Land"> Ready for the pokeapp?</h1>

                <button className="MyButtonLand">
                    <Link to="/Home">Start</Link>
                </button>

            </div>

        </div>
        
    )
}

export default LandingPage;