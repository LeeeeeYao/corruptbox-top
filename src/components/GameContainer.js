'use client'

import { useState, useRef } from 'react'

export default function GameContainer({ dict }) {
  const [isLoading, setIsLoading] = useState(true)
  const containerRef = useRef(null)
  const iframeRef = useRef(null)

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  }

  const reloadIframe = () => {
    if (iframeRef.current) {
      setIsLoading(true);
      iframeRef.current.src = iframeRef.current.src; // 重新加载 iframe
    }
  }

  return (
    <div ref={containerRef} className="relative bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '80vh' }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          <span className="ml-3">{dict.loading}</span>
        </div>
      )}
  
      <iframe
        ref={iframeRef}
        src="https://scratch.mit.edu/projects/964394608/embed"
        allowtransparency="true"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      ></iframe>

      <div className="absolute top-1 right-1 flex space-x-2">
        <button onClick={reloadIframe} className="bg-gray-800 text-white px-4 py-2 rounded">
          Reload
        </button>
        <button onClick={toggleFullScreen} className="bg-gray-800 text-white px-4 py-2 rounded">
          Toggle Fullscreen
        </button>
      </div>
    </div>
  )
}
