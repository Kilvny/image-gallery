import './assets/main.css';
import React,{useState, useEffect} from 'react';
import ImageCard from './components/imagecard'
import ColorRing from './components/spinners'
import {SearchBar} from './components/SearchBar'

let api = 'https://pixabay.com/api/?key=31321293-e1b9772ba8ac9585929cffde2&q=yellow+flowers&image_type=photo&pretty=true'
const apiKey = process.env.REACT_APP_PIXABAY_API

function App() {

    const useFetch = () =>{
        const [images, setImages] = useState([]) // use state takes initial state here it's empty array
        const [isLoading, setIsLoading] = useState(true)
        const [term, setTerm] = useState('world')
        useEffect(()=> {
            (
                async () => {
                    try{
                        const res = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true`)
                        const data = await res.json()
                        console.log(data.hits)
                        setImages(data.hits)
                    
            
                        }
                    catch(err){
                        console.log(err)
                        // console.error(err)
                    }
                    finally { // after the loading ends 
                        setIsLoading(false)
                    }
                }
            )();
        },[term]) // we need to add term as a depnedency so whenever term changes this will run again
        return {images,isLoading,term, setTerm}

    }
    const {images,isLoading,term, setTerm} = useFetch()
    // useFetch(apiKey,term)

  return (
     <div className='container mx-auto'>
        <SearchBar searchText={(text) => setTerm(text) }/>
     { isLoading ? <ColorRing /> :
        <div className='grid grid-cols-3 gap-4'>
            {images.map(image=> (<ImageCard key={image.id} image={image.webformatURL} views={image.views} likes={image.likes} tags={image.tags.split(',')} downloads={image.downloads} filterTag={(tag) => setTerm(tag)}/>))}
        </div>}
    </div>
    );
}


export default App;
