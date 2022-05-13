import React, { useEffect, useState } from "react";
import BaseCard from "components/common/BaseCard/BaseCard";
import MenuItem from "./MenuItem";
import { useRecoilState } from "recoil";
import { languageState, studyModeState } from "store/store";
import language from "constants/language";
import MenuType from "./MenuType";

const Menu = () => {
  const [, setSelectedLanguage] = useRecoilState(languageState);
  const [, setSelectedStudyMode] = useRecoilState(studyModeState)

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language)
    setSelectedStudyMode(null)
  }

  return (
    <BaseCard className="h-full justify-start">
      <h2 className="text-2xl font-bold">언어 선택</h2>
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
    </BaseCard>
  );
};

export default Menu;
