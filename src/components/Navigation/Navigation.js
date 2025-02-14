import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" ariaControls="mobile-menu" ariaExpanded="false">
              <span className="sr-only">Open main menu</span>
              {/*
                Icon when menu is closed.

                Heroicon name: outline/menu

                Menu open: "hidden", Menu closed: "block"
              */}
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" ariaHidden="true">
                <path strokeLinecap="round" strokeLineJoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/*
                Icon when menu is open.

                Heroicon name: outline/x

                Menu open: "block", Menu closed: "hidden"
              */}
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center xl:justify-end sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <NavLink activeStyle={{
    								backgroundColor: '#222222'
    							}} to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>

                <NavLink activeStyle={{
    								backgroundColor: '#222222'
    							}} to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</NavLink>

                <NavLink activeStyle={{
    								backgroundColor: '#222222'
    							}} to="/projects" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</NavLink>

                <NavLink to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</NavLink>

    						<NavLink to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</NavLink>

    						<NavLink to="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Enroll Now</NavLink>
    					</div>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
    				<NavLink activeStyle={{
    						backgroundColor: '#222222'
    					}} to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>

    				<NavLink activeStyle={{
    						backgroundColor: '#222222'
    					}} to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</NavLink>

    				<NavLink activeStyle={{
    						backgroundColor: '#222222'
    					}} to="/projects" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</NavLink>

    				<NavLink to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</NavLink>

    				<NavLink to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</NavLink>

    				<NavLink to="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Enroll Now</NavLink>
        </div>
      </div>
    </nav>

	);
}
export default Navigation;
