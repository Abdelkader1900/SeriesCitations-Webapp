import React from 'react'
import { Home, Folder, Plus } from 'lucide-react'
import {Link} from "react-router"


function Navbar() {
  return (
    <header className="bg-base-300 border-b border-base-content/20">
        <div className="mx-auto max-w-6xl p-4">
            <div className="flex items-center justify-between"> 
                <h1 className="text-2xl font-bold text-primary font-mono tracking-tight">
                    Intant-Quote v0.1</h1>
                <div>
                    <Link to={"/create"} className="btn btn-success">
                        <Plus size ={14}/> New Quote
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar