import React from "react";
import MuiBottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import StarsIcon from '@mui/icons-material/Stars';
import { useNavigate } from "react-router";
import styled from "@emotion/styled";

const BottomNavigation = () => {
  const navigation = useNavigate();

  return (
    <Container>
      <MuiBottomNavigation showLabels className="w-full">
        <BottomNavigationAction label="홈" icon={<HomeIcon />} onClick={() => navigation('/', { replace: true })} />
        <BottomNavigationAction label="랭킹" icon={<StarsIcon />} onClick={() => navigation('/ranking', { replace: true })} />
        <BottomNavigationAction label="프로필" icon={<PersonIcon />} onClick={() => navigation('setting', { replace: true })} />
      </MuiBottomNavigation>
    </Container>
  )
}

const Container = styled.div`
  position: sticky;
  width: 100vw;
  bottom: 0;
`

export default BottomNavigation;