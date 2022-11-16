import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoInstagram from '../../assets/logo-instagram.svg';

export function HeaderSearch() {

    const [search, setSearch] = useState('');

    return (
        <div className='px-4 sm:px-6 md:px-8'>
            <div className="relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 ">

                <Link to={"/"}>
                    <h1>H O M E</h1>
                </Link>

                <div className="flex items-center">

                    <div className="hidden md:flex items-center">

                        <nav>
                            <ul className="flex items-center space-x-8">
                                <li>
                                    <Link to={'/carros'} className="hover:text-purple-800 dark:hover:text-purple-800">
                                        Comprar
                                    </Link>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-purple-800 dark:hover:text-purple-800">
                                        Serviços
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-purple-800 dark:hover:text-purple-800">
                                        Ajuda
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center ml-6 pl-6 dark:border-slate-800">
                            <a href="https://www.instagram.com/victorroliveiira/" className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300" target="_blank">
                                <img src={logoInstagram} alt="Logo do Instagram" />
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

}