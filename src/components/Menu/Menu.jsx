import React, { useEffect, useState } from "react";
import BaseCard from "components/common/BaseCard/BaseCard";
import MenuItem from "./MenuItem";
import { useRecoilState } from "recoil";
import { languageState, studyModeState } from "store/store";
import language from "constants/language";
import MenuType from "./MenuType";
import LanguageIcon from '@mui/icons-material/Language';
import "./style.scss"

const Menu = () => {
  const [, setSelectedLanguage] = useRecoilState(languageState);

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language)
  }

  return (
    <div className="h-full justify-start">
      <div className="flex items-center">
        <LanguageIcon color="primary" />
        <h2 className="menu-title font-bold text-left ml-2">언어 선택</h2>
      </div>
      <hr className="my-2" />
      <ul className="w-full flex-col flex items-center p-2">
        <MenuItem
          title="한국어 발음평가"
          onClick={() => handleSelectLanguage(language.KOREAN)}
          language={language.KOREAN}
        />
        <MenuItem
          title="영어 발음평가"
          onClick={() => handleSelectLanguage(language.ENGLISH)}
          language={language.ENGLISH}
        />
        <MenuItem
          title="일본어 발음평가"
          // onClick={() => handleSelectLanguage(null)}
          isDisabled={true}
        />
        <MenuItem
          title="중국어 발음평가"
          // onClick={() => handleSelectLanguage(null)}
          isDisabled={true}
        />
        <MenuItem
          title="독일어 발음평가"
          // onClick={() => handleSelectLanguage(null)}
          isDisabled={true}
        />
        <MenuItem
          title="인도어 발음평가"
          // onClick={() => handleSelectLanguage(null)}
          isDisabled={true}
        />
        <MenuItem
          title="러시아어 발음평가"
          // onClick={() => handleSelectLanguage(null)}
          isDisabled={true}
        />
        <MenuItem
          title="베트남어 발음평가"
          // onClick={() => handleSelectLanguage(null)}
          isDisabled={true}
        />
      </ul>
    </div>
  );
};

export default Menu;
