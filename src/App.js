import { createContext, useState } from "react";
import Images from "./Components/Images";
import Jumbultron from "./Components/Jumbutron"
import SearchField from "./Components/SearchField";
import useAxios from "./hooks/useAxios";
import "./index.css"

//create context
export const ImageContext = createContext();

function App() {


    const [searchImage, setSearchImage] = useState('')
    const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=mauntains&client_id=${process.env.REACT_APP_API_KEY}`);
   

    const value = {
      response,
      isLoading,
      error,
      fetchData,
      searchImage,
      setSearchImage
    }

  return (
    <ImageContext.Provider value={value}>
       <Jumbultron>
        <SearchField/>
       </Jumbultron>
       <Images/>
    </ImageContext.Provider>
  );
}

export default App;
