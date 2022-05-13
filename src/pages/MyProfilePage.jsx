import PageTitle from 'components/common/PageTitle'
import React from 'react'
import BaseSubtitle from 'components/common/BaseSubtitle/BaseSubtitle'
import Profile from 'components/Profile'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';

const MyProfilePage = () => {
  return (
    <>
      <div className="flex items-center">
        <HomeSharpIcon style={{ marginRight: 8, marginBottom: 8 }} color="primary" />
        <BaseSubtitle text="마이페이지" />
      </div>
      <hr className="mb-2" />
      <Profile />
    </>
  )
}

export default MyProfilePage