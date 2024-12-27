'use client'

import { useState, useRef } from 'react'

export default function GameContainer({ dict }) {
  const [isLoading, setIsLoading] = useState(true)
  const [currentGame, setCurrentGame] = useState(3)
  const containerRef = useRef(null)
  const iframeRef = useRef(null)

  const gameUrls = {
    1: "https://scratch.mit.edu/projects/1067662791/embed",
    2: "https://scratch.mit.edu/projects/1016463134/embed",
    3: "https://scratch.mit.edu/projects/964394608/embed"
  }

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
      iframeRef.current.src = iframeRef.current.src;
    }
  }

  const switchGame = (gameNumber) => {
    setIsLoading(true);
    setCurrentGame(gameNumber);
  }

  return (
    <div className="w-full flex flex-col items-center px-4">
      <div className="flex space-x-4 mb-4">
        <button 
          onClick={() => switchGame(1)}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            currentGame === 1 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Corruptbox 1
        </button>
        <button 
          onClick={() => switchGame(2)}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            currentGame === 2 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Corruptbox 2
        </button>
        <button 
          onClick={() => switchGame(3)}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            currentGame === 3 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Corruptbox 3
        </button>
      </div>

      <div 
        ref={containerRef} 
        className="relative bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-[1200px]" 
        style={{ height: '90vh' }}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            <span className="ml-3">{dict.loading}</span>
          </div>
        )}
    
        <iframe
          ref={iframeRef}
          src={gameUrls[currentGame]}
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
    </div>
  )
}
