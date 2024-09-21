import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SpotifyEmbed = () => {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000) // Simulate loading time

    return () => clearTimeout(timer) // Cleanup on unmount
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="loader text-white">Loading...</div>{' '}
        {/* Replace with your loading spinner or component */}
      </div>
    )
  }

  return (
    <div
      className="spotify-embed"
      style={{
        position: 'fixed',
        width: '80%',
        maxWidth: '600px',
        height: '400px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        overflow: 'hidden'
      }}
    >
      <button
        onClick={() => navigate(-1)} // Go back to previous page
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'transparent',
          border: 'none',
          fontSize: '24px',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        &times;
      </button>
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/3j5KvpN6h8CtDpkvZ0kvD6?utm_source=generator"
        width="100%"
        height="100%"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default SpotifyEmbed
