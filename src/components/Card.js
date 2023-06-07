import React, { useState } from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = (props) => {
    let course=props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;

    const[liked, setLike] = useState(false);

    function clickHandler() {
        //logic
        if(likedCourses.includes(course.id)){
            //pehle se like hua pada hai
            setLikedCourses((prev) => prev.filter((cid) => (cid != course.id)));
            toast.warning("like removed")

            setLike(false);
        } else{
            //pehle se like nhi hai
            //insert karna h ye course liked courses mai
            if(likedCourses.length===0){
                setLikedCourses([course.id]);
            } else{
                setLikedCourses((prev) => [...prev, course.id]);
            }

            toast.success("liked");
            setLike(true);
        }
    }

  return (
    <div>
        <div>
            <img src={course.image.url}></img>
        </div>
        <div>{liked ? 
            (<button onClick={clickHandler}>
                <FcLike fontSize="1.75rem"></FcLike>
            </button>) 
        : (<button onClick={clickHandler}>
            <FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>
            </button>)}

        </div>
        <div>
            <p>{course.title}</p>
            <p>
                {
                    course.description.length > 100 ? 
                    (course.description.substr(0,100) + "...") : (course.description)
                }
            </p>
        </div>
    </div>
  )
}

export default Card