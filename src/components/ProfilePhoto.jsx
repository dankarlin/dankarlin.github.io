import React from 'react'

function ProfilePhoto({ src, alt = "Dan Karlin", className = "" }) {
  // If no src is provided, show a professional placeholder
  if (!src) {
    return (
      <div className={`profile-photo d-flex align-items-center justify-content-center text-white ${className}`} 
           style={{
             backgroundColor: 'rgba(255, 255, 255, 0.1)',
             border: '4px solid rgba(255, 255, 255, 0.3)',
             width: '200px',
             height: '200px',
             borderRadius: '50%',
             margin: '0 auto'
           }}>
        <div className="text-center">
          <i className="bi bi-person-circle" style={{fontSize: '4rem', opacity: 0.8}}></i>
          <div className="mt-2" style={{fontSize: '0.75rem', opacity: 0.9}}>
            Professional Photo
          </div>
        </div>
      </div>
    )
  }

  // If src is provided, show the actual image
  return (
    <img 
      src={src} 
      alt={alt}
      className={`profile-photo ${className}`}
      loading="lazy"
      decoding="async"
      style={{
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '4px solid rgba(255, 255, 255, 0.3)',
        margin: '0 auto',
        display: 'block'
      }}
    />
  )
}

export default ProfilePhoto