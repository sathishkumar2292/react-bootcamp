import React from 'react';
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="fixed-bottom mt-5 page-footer font-small unique-color-dark pt-5">
            <div className="bg-secondary footer-copyright text-center py-3 text-white">© 2020 Copyright :
                <a href="https://shopping-reactapp.firebaseapp.com/home" className="text-white"> shopping-reactapp.firebaseapp.com</a>
            </div>
        </footer>
    );
}
