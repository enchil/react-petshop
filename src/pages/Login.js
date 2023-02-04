import React, {useState} from 'react'
import axios from 'axios'


const Login = () => {
    const [member, setMember]= useState({
        email: "",
        password: ""
    })

async function member_login() {
    const member_login = "http://localhost:3005/member/login/api"
    const {data} = await axios.post(member_login, member)
    console.log(data);
}
  return (
    <div>
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Account</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        onChange={(e)=>{
        const mail = e.target.value
        setMember({...member, email:mail})
    }}
    />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=>{
        const password = e.target.value
        setMember({...member, password:password})
    }} />
  </div>
  <button type="submit" class="btn btn-primary" onClick={(e)=>{
    e.preventDefault()
    member_login()
  }}>確定</button>
  <button type="submit" class="btn btn-primary">註冊會員</button>
</form>
    </div>
  )
}

export default Login