import { useState } from 'react';
import PhotoSphere from './PhotoSphere';
import SearchInput from './SearchInput';
import TimeLine from './TimeLine';
import Spacing from './Spacing';


function App() {

  const [data, setData] = useState<{imageData:string[]}>({imageData:[]})

  const setImageData = (data:string[]) => {
    setData({imageData:data})
  }

  return (
    <div className="w-screen p-2 flex flex-col items-center">
      <h1 className='text-center font-bold text-2xl m-2'>React Photo Sphere</h1>
      
      
      <PhotoSphere ></PhotoSphere>
      
      

      

    </div>
  )
}


export default App
