"use client";

import { getFirestore, doc, getDoc } from "firebase/firestore";
import React, { useActionState, useEffect, useState } from "react";
import app from "../Shared/firebaseConfig";
import UserInfo from '../components/UserInfo';

function Profile({ params }) {
  const [userId, setUserId] = useState(null); // State to store the unwrapped `userId`
    const db = getFirestore(app);
    const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    async function unwrapParams() {
      const resolvedParams = await params; // Resolve `params` promise
      const email = resolvedParams.userId.replace("%40", "@"); // Format userId
      setUserId(email);
      getUserInfo(email); // Call your function to get user info
    }

    unwrapParams();
  }, [params]);

  const getUserInfo = async (email) => {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUserInfo(docSnap.data())
    } else {
      console.log("No such document!");
    }
  };

    return (
      <div>
            {userInfo ? (
                <UserInfo userInfo={userInfo} />
            ) : (
                <p>Loading user information...</p>
            )}
        </div>
    );
   
}

export default Profile;
