import React from 'react'

const UpdateUser = () => {
  return (
    <div>
        <form action="/updateuser" method="post">
            <input type="text" name="Name" id="" placeholder='Enter Name'/>
            <input type="email" name="Email" id="" placeholder='Enter Email'/>
            <input type="number" name="Age" id="" placeholder='Enter Age'/>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default UpdateUser;