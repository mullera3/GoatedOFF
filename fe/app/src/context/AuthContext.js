import React ,{Component} from "react";
import axios from "axios";

export const AuthContext = React.createContext({
    currentUser:{},
    setCurrentUser: () => {},
    signIn: () => {},
    signOut: () => {}
});


export class AuthProvider extends  Component{

    state = {
        currentUser: {},
        setCurrentUser:(user) => {
            this.setState({currentUser: user})
        },
        signIn: async (username,password) => {
            const data = {
                username: username,
                password: password
            }

            await axios.post("http://localhost:8080/users", data).then((res) => {
                const data = JSON.stringify(res.data)
                this.state.setCurrentUser(data);
                localStorage.setItem("user", data)
            }).catch(err => console.log(err));
        },
        signOut: async () => {
            await axios.get("http://localhost:8080/login").then(res=>{
                this.state.setCurrentUser({});
                localStorage.removeItem("user");
            })
        }
    }


    render() {


        const {children} = this.props
        const {currentUser, setCurrentUser, signIn, signOut} = this.state
        return(
            <AuthContext.Provider value={{currentUser,setCurrentUser,signIn,signOut}}>
                {children}
            </AuthContext.Provider>
        ) ;
    }
}

export const  AuthConsumer = AuthContext.Consumer;