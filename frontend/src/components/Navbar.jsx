import React from 'react'
import { Home, Folder } from 'lucide-react'


function Navbar() {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
        <div className="mx-auto max-w-6xl p-4">
            <div className="flex items-center justify-between"> 
                <h1 className="text-2xl font-bold text-primary font-mono tracking-tight">
                    Intant-Quote v0.1</h1>
                <div className="flex-row">
                    <Home size ={24}/>
                    <Folder size={24}/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar