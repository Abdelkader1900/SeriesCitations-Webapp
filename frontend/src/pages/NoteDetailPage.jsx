import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import api from '../lib/axios'
import { LoaderIcon, ArrowLeftIcon, Trash2Icon } from 'lucide-react'
import { Link, useNavigate } from 'react-router'
import Navbar from '../components/Navbar'


function NoteDetailPage() {

  const [note,setNote] = useState(null)
  const [loading,setLoading] = useState(true)
  const [saving,setSaving] = useState(false)

  const navigate = useNavigate()
  const {id} = useParams()

  console.log({id})

  useEffect(() =>  {
    const fetchNotes = async()=>{
      try {
        const res = await api.get("/notes/"+id)
        setNote(res.data)
      } catch(error){
        console.log(error)
        toast.error("Probleme de chargement")
      } finally {
        setLoading(false)
      }
    }
    fetchNotes()
  }, [id])

  const handleDelete = async () => {
    if (!window.confirm("Voulez vous supprimer la citation ?")) return;

    try{
      await api.delete("/notes/"+ note._id)
      navigate("/")
      toast.success("La citation a été supprimée")
    }catch(error){
      console.log(error)
      toast.error("Impossible de supprimer la citation")
    }

  }
  const  handleSave = async () => {
    if (!window.confirm("Voulez vous modifier la citation ?")) return;

    try{
      await api.put("/notes/" + note._id, { title: note.title, content: note.content })
      navigate("/")
      toast.success("La citation a été modifiée")
    }catch(error){
      console.log(error)
      toast.error("Impossible de modifier la citation")
    }
  }

  if(loading){
    return<div className="min-h-screen bg-base-200 flex items-center justify-center">
          <LoaderIcon className='animate-spin size-10'/>
          <span className=''>Chargement de la note {id}</span>
          <span className='font-bold '> - PAGE DETAILNOTE - </span>
        </div>
    }

  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen bg-base-200">
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-6">
              <Link to="/" className='btn btn-info btn-outline'>
              <ArrowLeftIcon className='h-5 w-5'/>
                Back to notes
              </Link>
              <button onClick={handleDelete} className='btn btn-error btn-outline'>
                <Trash2Icon className='w-5 h-5'/>
                Delete Quote
              </button>
            
            
            </div>
            <div className="card bg-base-100">
              <div className="card-body">
                <div className="form-control mb-4">
                  <label className="label">
                    <span className='label-text'>Title</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Quote Title'
                    className='input input-bordered'
                    value={note.title}
                    onChange={(e)=>setNote({...note, title:e.target.value})}
                    />
                </div>
              </div>
            </div>
            <div className="card bg-base-100">
              <div className="card-body">
                <div className="form-control mb-4">
                  <label className="label">
                    <span className='label-text'>Quote</span>
                  </label>
                  <textarea
                    placeholder='Ecrivez votre citation'
                    className='textarea textarea-bordered h-36 resize-none w-full'
                    value={note.content}
                    onChange={(e)=>setNote({...note, content:e.target.value})}
                    />
                </div>
              </div>
            </div>

            <div className="card-actions justify-end">
              <button className='btn btn-primary' disabled={saving} onClick={handleSave}>
                Sauvegarder
              </button>
            </div>
        </div>
      </div>
    </div>
  
  )
}

export default NoteDetailPage