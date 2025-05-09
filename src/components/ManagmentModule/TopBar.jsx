import React from 'react'

function TopBar() {
  return (
    <div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-gray-100 border-b border-gray-200">
          <div className="flex items-center px-4 w-full">
        
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

        
           <span className='text-4xl'><ion-icon name="people"></ion-icon></span>
            <input className="mx-4  border rounded-md px-4 py-2" type="text" placeholder="Search" />
          </div>
          <div>
          <button
              className="me-5 md:mt-1 md:px-4 py-2 font-bold block hover:bg-rose-500 text-white md:ms-44 bg-rose-400 rounded" 
                >Logout</button >
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default TopBar
