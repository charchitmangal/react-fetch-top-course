import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => {
  let courses=props.courses;
  let category=props.category;

  const [likedCourses, setLikedCourses] = useState([]);
  

  //returns a list of all courses received from API response
  function getCourses() {
    if(category==="All"){
        let allCourses = [];
        Object.values(courses).forEach((array) => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
    } else{
        //main sirf specific category ka array paas karunga
        return courses[category];
    }
    
  }

  return (
    <div>
        {
            getCourses().map( (course) => (
                <Card key={course.id} course={course} likedCourses={likedCourses} 
                setLikedCourses={setLikedCourses}></Card>
            ))
        }
    </div>
  )
}

export default Cards



