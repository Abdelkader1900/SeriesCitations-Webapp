import React from 'react'
import { AlertTriangle } from 'lucide-react'

const RateLimitedUI = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-200 shadow-md w-full max-w-md">
        <div className="card-body items-center text-center gap-4">
          <AlertTriangle size={60} className="text-warning" />
          <h2 className="card-title text-xl font-mono text-white">Trop de requêtes</h2>
          <p className="text-base-content/70 text-sm">
            Limite de requêtes. Merci de reéssayer dans un petit instant.
          </p>
          <div className="badge badge-warning badge-outline">Limite atteinte</div>
        </div>
      </div>
    </div>
  )
}

export default RateLimitedUI