import React, { useState } from "react";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import { apiUrl, filterData } from "./data";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner"

const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);


  async function fetchData() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      //OUTPUT
      setCourses(output.data);
    } catch(error){
      toast.error("Network mai koi dikkat hai");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Navbar/>
      </div>

      <div>
      <Filter filterData={filterData}
        category={category}
        setCategory={setCategory}
      />
      </div>

      <div>
        {
          loading ? (<Spinner></Spinner>) : (<Cards courses={courses} category={category}></Cards>)
        }
      </div>
      
    </div>
  );
};

export default App;





