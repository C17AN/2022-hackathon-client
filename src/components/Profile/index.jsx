import React, { useEffect } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { useRecoilState } from 'recoil'
import { emailAtom, usernameAtom, solvecountAtom } from 'store/store'
import { getUser } from 'apis/User/getUser';
import Donut from './Chart';

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
      <div className="flex items-center gap-2 mb-10 border rounded-md border-gray-100 shadow-sm shadow-gray-100 p-4">
        <PersonIcon fontSize="large" color='disabled' />
        <section className="text-gray-600 text-xs flex flex-col">
          <p className="my-1">이름 : {username}</p>
          <p className="my-1">이메일 : {email}</p>
          <p className="my-1">최대 문제 해결 수 : {counts}</p>
        </section>
      </div>
      <h2 className="mt-4 mb-2 font-semibold text-gray-700">주간 활동 그래프</h2>
      <hr className="mb-4" />
      <Donut />
      <hr className="my-2" />
      <div className="text-gray-600 text-sm text-center">
        <p>지난 주에 비해 발음 정확도가 약 7.32% 증가했습니다.</p>
        <p>조금 더 분발해보세요! 🎉</p>
      </div>
    </div>
  )
}

export default Profile