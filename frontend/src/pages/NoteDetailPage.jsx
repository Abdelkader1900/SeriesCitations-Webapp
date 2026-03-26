import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import api from '../lib/axios'
import { LoaderIcon, ArrowLeftIcon } from 'lucide-react'
import { Link } from 'react-router'
import Navbar from '../components/Navbar'


function NoteDetailPage() {

  const [note,setNote] = useState(null)
  const [loading,setLoading] = useState(true)
  const [saving,setSaving] = useState(false)

  // const navigate = useNavigate()
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
        <div className="container mx-auto px-4 py-8"></div>
      </div>
    </div>
  
  )
}

export default NoteDetailPage