import React from 'react'
import {UserContext, Channel} from '../App'

 function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {
          user => {
            return(
              <Channel.Consumer>
                {
                  channel => {
                    return <div>User context value {user}, channel context {channel}</div>
                  }
                }
              </Channel.Consumer>
            )
             
          }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
