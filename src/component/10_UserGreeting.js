import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }



    1. // conditional rendering using if else
    /*  render() {
      if (this.state.isLoggedIn) {
            return (
               <div>Hello Himank</div>
            )
       }else {
            return (
                 <div>Hello Guest</div>
            )
        }
    }  */

    2. // using element variable in if else
    // render() {
    //     let message
    //     if (this.state.isLoggedIn) {
    //         message = <div>Hello Himank</div>
    //     } else {
    //         message = <div>Hello Guest</div>
    //     }
    //     return <div>{message}</div>
    // }

    3. // using ternary operator
    // render() {
    //     return this.state.isLoggedIn ? (
    //         <div>
    //             <div>Hello Himank</div>
    //             <div>Have a nice day</div>
    //         </div>
    //     ) : <div>Hello Guest</div>
    // }

    4. // short circuit operator used when u want to render something or either nothing
    render() {
        return this.state.isLoggedIn && <div>Hello Himank</div>
    }

    //   render() {
    //     return (
    //       <div>
    //         <div> Hello Himank</div>
    //         <div> Hello Guest</div>
    //       </div>
    //     )
    //   }
}

export default UserGreeting