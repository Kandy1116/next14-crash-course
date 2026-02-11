import CreatePost from "../components/CreatePost"
import Navbar from "../components/Navbar";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import React from "react";

async function Page() {


const posts = await getDocs(collection(db, "posts"))



  return (
    <div>
        <div>
            <CreatePost />
        </div>

        <ul>
            {posts.docs.map(p => <li>{p.data().post}</li>)}
        </ul>
    </div>
  );
}

export default Page 

