import { useState, useEffect } from 'react'
import Layout from '../../../components/Layout'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import '../../../components/fire'

const auth = getAuth()
const provider = new GoogleAuthProvider()

export default function AdminHome() {
  const title = "Firebase auth page"
  const [message, setMessage] = useState('wait...')

  useEffect(() => {
    signInWithPopup(auth, provider)
    .then((result) => {
      setMessage('logined: ' + result.user.displayName)
    })
  }, [])

  return (
    <>
      <Layout header="Next.js" title={title}>
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">{message}</h5>
          <p className="h6 text-left">
            uid: {auth.currentUser != null ? auth.currentUser.uid : ''}<br/>
            displayName: {auth.currentUser != null ? auth.currentUser.displayName : ''}<br/>
            email: {auth.currentUser != null ? auth.currentUser.email : ''}<br/>
            phoneNumber: {auth.currentUser != null ? auth.currentUser.phoneNumber : ''}<br/>
          </p>
        </div>
      </Layout>
    </>
  )
}