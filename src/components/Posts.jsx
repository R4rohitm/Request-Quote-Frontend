import React,{useState}from "react";
import Accordion from "./Accordion";

const Posts = ({ posts }) => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <>
     {posts && posts.map((e)=>{
        return(
          <>
           <Accordion e={e}/>
          </>
          )
      })}
    </>
  );
};

export default Posts;
