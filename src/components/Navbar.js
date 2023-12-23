import React from "react";

export default function Navbar({ currentPage, handlePageChange }) {
    return (
        <div className="navbar">
            <div className="content-card-container">
                <div style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
                    <div style={{marginRight:'15px'}}>
                        <img 
                            src={require('./assets/profile.jpg')} 
                            style={{width:"85px",height:"85px",borderRadius:'50%'}} 
                            alt="Profile" />
                    </div>
                    <div>
                        <h1>@alexfcook</h1>
                    </div>
                </div>
                <ul>
                    <li>
                        <a
                            href="#home"
                            onClick={() => handlePageChange('Home')}
                            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#coding"
                            onClick={() => handlePageChange('Coding')}
                            className={currentPage === 'Coding' ? 'nav-link active' : 'nav-link'}
                        >
                            Coding
                        </a>
                    </li>
                    <li>
                        <a
                            href="#music"
                            onClick={() => handlePageChange('Music')}
                            className={currentPage === 'Music' ? 'nav-link active' : 'nav-link'}
                        >
                            Music
                        </a>
                    </li>
                    <li>
                        <a
                            href="#marketing"
                            onClick={() => handlePageChange('Marketing')}
                            className={currentPage === 'Marketing' ? 'nav-link active' : 'nav-link'}
                        >
                            Marketing
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}