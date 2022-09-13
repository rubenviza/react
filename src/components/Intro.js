import React from 'react'

class Intro extends React.Component{

    user = {
         firstName: 'Raul',
         lastName: 'Palacios',
         avatar: 'https://koms.korloy.com/resource/lib/ace-admin/assets/avatars/profile-pic.jpg'
    }

    getName (user){
         return `${user.firstName} ${user.lastName}`
    }

    getGreeting (user){
        if(user){
            return <h1>Hola {this.getName(user)}</h1>
        }
        return <h1>Hola extraño</h1>
    }

    name = 'Roberto'

    render (){
       return (<>
               <h1>Hola {this.name}</h1>
               <h1>Hola {this.getName(this.user)}</h1>
               <div>{this.getGreeting(this.user)}</div>
               <img src={this.user.avatar} />
               </>
            )
        }
}
export default Intro