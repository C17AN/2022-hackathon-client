import React, { useState } from "react";
import MuiBottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import StarsIcon from '@mui/icons-material/Stars';
import { useNavigate } from "react-router";

const BottomNavigation = () => {
  const navigation = useNavigate();

  return (
    <MuiBottomNavigation showLabels>
      <BottomNavigationAction label="홈" icon={<HomeIcon />} onClick={() => navigation('/', { replace: true })} />
      <BottomNavigationAction label="랭킹" icon={<StarsIcon />} onClick={() => navigation('/ranking', { replace: true })} />
      <BottomNavigationAction label="마이페이지" icon={<SettingsIcon />} onClick={() => navigation('setting', { replace: true })} />
    </MuiBottomNavigation>
  )
}

export default BottomNavigation;