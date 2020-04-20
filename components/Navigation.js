import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Navigation = () => {
    const [information, setInformation] = useState("");
    const [navigationToggler, setNavigationToggler] = useState(false);

    const handleNavigationToggler = () =>{
        setNavigationToggler(!navigationToggler);
    }

    useEffect(() =>{
        axios.get('/api/information')
            .then(response =>{
                setInformation(response.data);
            })
    }, []);

    return (
        <nav className={navigationToggler ? "mi-header is-visible" : "mi-header"}>
            <button onClick={handleNavigationToggler} className="mi-header-toggler">
                {!navigationToggler ? <MenuIcon /> : <CloseIcon />}
            </button>
            <div className="mi-header-inner">
                <div className="mi-header-image">
                    <Link href="/">
                        <img src={information.brandImage} alt="brandimage" style={{borderRadius: '50%', border: '5px solid #2e344e'}} />
                    </Link>
                </div>
                
                <ul className="mi-header-menu">
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/resume"><a>Resume</a></Link></li>
                    <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
                    <li><Link href="/contact"><a>Contact</a></Link></li>
                </ul>
                <p className="mi-header-copyright">&copy; {new Date().getFullYear()} <b><a rel="noopener noreferrer" target="_blank" href="http://sponhumanprod.com">SponHumanProd</a></b></p>
            </div>
        </nav>
    );
};

export default Navigation;
