import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import app from "../firebase";
import { initializeApp } from "firebase/app";
import { getFirestore}  from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

export default function Plactice() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/name">Name</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                    <Route exect path="/about" element={<About/>}  />
                    <Route exect path="/aaaa" element={<Aaaa/>}  />
                    <Route exect path="/name" element={<Name/>}  />
                </Routes>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Aaaa() {
    return <h2>aaaa</h2>;
}
function Name() {
    const db = getFirestore(app);
     function getArtist() {
        const docRef = doc(db, "artists", "1");
        getDoc(docRef).then((docSnap) => {
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
               } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
           }
        });

    
    }
    return <button onClick={getArtist}>name</button>
    
}