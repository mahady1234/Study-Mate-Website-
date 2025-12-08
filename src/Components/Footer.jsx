import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-10 mt-8">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 px-4 text-center">
                <Link to="/">
                    <img
                        src="https://i.ibb.co.com/TMm65kNT/icons8-study-94.png"
                        alt="Study Planner Logo"
                        className="w-16 bg-white p-1 rounded-full object-cover transition-transform duration-500 hover:scale-110 mx-auto"
                    />
                </Link>
                <h2 className="text-xl font-bold">StudyMate</h2>
                <p className="text-gray-200 max-w-md">
                    Study together. Grow together. Study smarter, stay motivated, and achieve more together.
                </p>
                <p className="text-gray-300 font-semibold">Contact: 8801633029529</p>

                <div className="flex gap-4 mt-4 justify-center">
                    <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.337-2.633 1.312-3.608.975-.975 2.242-1.25 3.608-1.312C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.782.13 4.602.404 3.678 1.328 2.754 2.252 2.48 3.432 2.422 4.702.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.27.332 2.45 1.256 3.374.924.924 2.104 1.198 3.374 1.256C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.27-.058 2.45-.332 3.374-1.256.924-.924 1.198-2.104 1.256-3.374.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.058-1.27-.332-2.45-1.256-3.374C19.398.404 18.218.13 16.948.072 15.668.013 15.259 0 12 0z" />
                            <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zM18.406 4.594a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-blue-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.785v2.223h.067c.666-1.26 2.292-2.588 4.717-2.588C21.923 7.635 24 10.29 24 15.049V24h-5v-7.547c0-1.799-.032-4.114-2.507-4.114-2.507 0-2.892 1.957-2.892 3.988V24h-5V8z" />
                        </svg>
                    </a>
                </div>

                <p className="text-sm text-gray-300 mt-6">© {new Date().getFullYear()} - All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;

