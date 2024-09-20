// SpotifyEmbed.js
import { useState, useEffect } from 'react'

const SpotifyEmbed = ({ show, onClose }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (show) {
      setLoading(true)
      const timer = setTimeout(() => {
        setLoading(false)
      }, 1000) // Simulate loading time

      return () => clearTimeout(timer) // Cleanup timer on unmount
    }
  }, [show])

  if (!show) return null

  return (
    <div
      className="spotify-embed"
      style={{
        position: 'fixed',
        width: '80%', // Full width on smaller screens
        maxWidth: '600px', // Max width for larger screens
        height: '400px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', // Added shadow for depth
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent background
        overflow: 'hidden' // Prevent overflow
      }}
    >
      {loading ? (
        <div className="flex items-center justify-center w-full h-full">
          <div className="loader">Loading...</div> {/* Replace with your loading spinner */}
        </div>
      ) : (
        <>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'transparent',
              border: 'none',
              fontSize: '24px', // Slightly larger for better visibility
              color: 'white',
              cursor: 'pointer'
            }}
          >
            &times; {/* Close symbol */}
          </button>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/3j5KvpN6h8CtDpkvZ0kvD6?utm_source=generator"
            width="100%" // Full width for iframe
            height="100%" // Full height for iframe
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </>
      )}
    </div>
  )
}

export default SpotifyEmbed
