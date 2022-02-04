import React from 'react';

const Footer = () => {
  return (
    <footer className="shadow bg-dark text-light text-center fst-italic d-print-none mt-5 py-4">
        <div className="container py-4">
            <h6 className="text-center">made by Conrado D'Antiochia</h6>
            <p className='text-info text-center'>
                <b className='text-primary'> 
                    &copy; 
                    {new Date().getFullYear()}
                </b> 
                &nbsp;
                All Rights Reserved.
            </p>
        </div>
    </footer>
  );
};

export default Footer;
