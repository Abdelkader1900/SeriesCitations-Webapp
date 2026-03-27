import { ArrowLeftIcon, Trash2Icon } from 'lucide-react';
import React from 'react'
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { toast } from "react-hot-toast";
import api from '../lib/axios';

function CreatePage() {
    const [title,setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(title);
      console.log(content);
      
      if( !title.trim() || !content.trim()){
        toast.error("Tous les champs sont requis !")
        return
      }

      setLoading(true)
      try{
        await api.post("/notes",{
          title,
          content
        })
        toast.success("La citation a été ajoutée a votre bibliothèque")
        navigate("/")
      }catch(error){
        toast.error("Impossible d'ajouter la citation.")
        console.log(error)
      } finally {
        setLoading(false)
      }

    }

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
          <Link to ={"/"} className='btn btn-info mb-6' >
            <ArrowLeftIcon className='size-5'/>
            Back to Quotes
          </Link>
          <div className='card bg-base-100'>
            <div className='card-body'>
              <h2 className='card-title text-2xl mb-4'>Add a New Quote</h2>
              <form onSubmit={handleSubmit}>
                <div className='flex flex-col mb-4'>
                  <label className='label-text mb-1'>Title</label>
                  <input type="text" placeholder='Quote Title' className='input input-bordered' value={title} onChange={(e) => setTitle(e.target.value)}  />
                </div>

                <div className='flex flex-col mb-4'>
                  <label className='label-text mb-1'>Content</label>
                  <textarea placeholder='Quote' className='textarea textarea-bordered h-36 w-100 resize-none' value={content} onChange={(e) => setContent(e.target.value)}  />
                </div>

                <div className="card-actions justify-end">
                  <button type='submit' className='btn btn-primary' disabled={loading}>
                    {loading ? "Creating ..." : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default CreatePage