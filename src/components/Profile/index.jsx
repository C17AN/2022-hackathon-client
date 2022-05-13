import React, { useEffect } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { useRecoilState } from 'recoil'
import { emailAtom, usernameAtom, solvecountAtom } from 'store/store'
import { getUser } from 'apis/User/getUser';

const Profile = () => {
  const [username, setUsername] = useRecoilState(usernameAtom)
  const [email, setEmail] = useRecoilState(emailAtom)
  const [counts, setCounts] = useRecoilState(solvecountAtom);

  const initData = async () => {
    const data = await getUser(username)
    console.log(data)
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <div>
      <div className="flex items-center gap-2 border rounded-md border-gray-100 shadow-sm shadow-gray-100 p-4">
        <PersonIcon fontSize="large" color='disabled' />
        <section className="text-gray-600 text-xs flex flex-col">
          <p className="my-1">이름 : {username}</p>
          <p className="my-1">이메일 : {email}</p>
          <p className="my-1">최대 문제 해결 수 : {counts}</p>
        </section>
      </div>
    </div>
  )
}

export default Profile