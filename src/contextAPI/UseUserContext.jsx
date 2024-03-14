import { useEffect, useState } from "react"
import createUserContext from "./createUserContext"
import { createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        GoogleAuthProvider, 
        signInWithPopup,
        signOut,
        onAuthStateChanged } from "firebase/auth"
import auth from "../Firebase/config"
import { useNavigate } from "react-router-dom"


export default function UseUserContext(props){
    const [loader, setLoader] = useState(0); 
    const [player, setPlayer] = useState({ //player == admin
        userId: '',
        name:'',
        email:'',
        status:false
    })
    const [currentUser,setCurrentUser] =useState({}); 
    const [games, setGames] = useState([]); 
    const [players, setPlayers] = useState([]); 
    const navigate = useNavigate();


    const host = "https://playtopia2k24-server.vercel.app" // hosting purpose

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (googleUser)=>{
            setCurrentUser(googleUser); 
        })
        return ()=>{
            unSubscribe();
        }
    })


    // ALL API
    const apiCall =async (url, method, credintial)=>{
        setLoader(1); 
        try{
            const response = await fetch(url, {
                method: method,
                headers: {
                  "Content-Type": "application/json",
                  "auth-token":localStorage.getItem("auth-token")
                },
                body: JSON.stringify(credintial), 
              });
              const json = await response.json();
              setLoader(0);
              return json;
        }catch(e){
            return {success:"false", error: e};  
        }
    }
    // CALLS API
    const signUp = async (credintials)=>{
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, credintials.email, credintials.password);
            const users = userCredential.user;
            const url = `${host}/api/auth/signup`
            const response = await apiCall(url, "POST", credintials);
            if(response.success === "true"){
                localStorage.setItem("user",JSON.stringify(users))
                localStorage.setItem("auth-token",response.authtoken)
                // fetchUserProfile();
            }
            return response;
        } catch(e){
            return {success:"false", data:"Email already in use"}
        }
    }
    // CALLS API
    const login = async (credintials)=>{
        try{
            const userCredential = await signInWithEmailAndPassword(auth, credintials.email, credintials.password);
            const users = userCredential.user;
            console.log(users)
            const url = `${host}/api/auth/signin`
            const response = await apiCall(url, "POST", credintials);
            if(response.success === "true"){
                localStorage.setItem("user",JSON.stringify(users))
                localStorage.setItem("auth-token",response.authtoken)
                // fetchUserProfile(); 
            }
            return response; 
        }catch(e){
            return {success:"false", data:"Invalid credientials"}
        }
    }
    // CALLS API
    const fetchUserProfile = async ()=>{
        const url = `${host}/api/auth/getuser`
        const response = await apiCall(url, "POST");
            if(response.success === "true"){
                const cred = {
                    userId: response.data._id,
                    name:response.data.name,
                    email:response.data.email,
                    status:true
                } 
                setPlayer(cred); 
        }
        return response; 
    }

    const fetchUserGames = async ()=>{
        const url = `${host}/api/event/getgames`
        const response = await apiCall(url, "GET");
            if(response.success === "true"){
                let gamesFromResp = []; 
                response.data.forEach(element => {
                    gamesFromResp.push(element?.event)
                });
                setGames(gamesFromResp); 
            }
        
        return response; 
    }

    // registration
    const register = async (credintials)=>{
        const url = `${host}/api/event/register`
        const response = await apiCall(url, "POST", credintials);
        return response; 
    }

    const unRegister = async (credintials)=>{
        const url = `${host}/api/event/unregister`
        const response = await apiCall(url, "DELETE", credintials);
        return response; 
    }

    // TODO
    const signUpWithGoogle = async ()=>{
        try{
            const provider =  new GoogleAuthProvider();
            provider.setCustomParameters({ prompt: 'select_account' });
            const USER = await signInWithPopup(auth, provider);
            if(!USER){
                return;
            }
            const credintials = {
                name:USER.user.displayName,
                email: USER.user.email,
                password: USER.user.uid,
                source: "google"
            }
            const url = `${host}/api/auth/signup`
            const response = await apiCall(url, "POST", credintials);
            if(response.success === "true"){
                localStorage.setItem("user",JSON.stringify(currentUser))
                localStorage.setItem("auth-token",response.authtoken)
                // fetchUserProfile();
            }
            return {success:"true"};
        } catch(e){
            return {success:"false", data:"Error occured"}
        }
    }

    const logOut =async ()=>{
        localStorage.removeItem("user"); 
        localStorage.removeItem("auth-token"); 
        setPlayer({
            userId: '',
            name:'',
            email:'',
            status:false
        })        
        await signOut(auth); 
        navigate("/")
    }

    const fetchAllPlayers = async ()=>{
        const url = `${host}/api/admin/getplayers`
        const response = await apiCall(url, "GET");
            if(response.success === "true"){
                setPlayers(response.data); 
            }
        return response; 
    }

    const deletePlayer = async (cred)=>{
        console.log(cred)
        const url = `${host}/api/admin/deleteplayers`
        const response = await apiCall(url, "DELETE", cred);
        return response; 
    }


  return (
    <>
        <createUserContext.Provider value={{signUp, login, logOut, fetchUserProfile, player, setPlayer, register, unRegister, signUpWithGoogle, fetchUserGames, currentUser, games, fetchAllPlayers, players, setPlayers, deletePlayer, loader, setLoader}}>
              {props.children}
        </createUserContext.Provider>
    </>
  )
}




