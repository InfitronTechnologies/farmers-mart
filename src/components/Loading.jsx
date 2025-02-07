import React, { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners'; // Import a specific spinner

function Loading({isLoading}) {
  if (!isLoading) {
    return null; // Don't render anything if not loading
  }

  return (
    <div>
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50">
          <BeatLoader color="#36D7B7" loading={isLoading} /> {/* Customize color */}
        </div>
    </div>
  );
}

export default Loading