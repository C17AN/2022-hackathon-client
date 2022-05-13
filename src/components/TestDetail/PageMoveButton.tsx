import BaseButton from "components/common/BaseButton/BaseButton";
import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends HTMLButtonElement {
  text: string;
  onClick: () => {};
  problemId: string | number;
  studyMode: string;
  language: string;
  className: string;
}

const PageMoveButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  problemId,
  studyMode,
  language,
  className,
}) => {
  return (
    <Link to={`/${language}/${problemId}`}>
      <BaseButton text={text} onClick={onClick} className={className} />
    </Link>
  );
};

export default PageMoveButton;
