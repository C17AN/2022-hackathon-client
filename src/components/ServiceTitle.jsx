import BaseCard from "components/common/BaseCard/BaseCard";
import React from "react";

const ServiceTitle = () => {
  return (
    <BaseCard className="mb-4">
      <header className="inline-block p-4 w-full">
        <h1 className="font-montserrat font-bold text-center text-xl">
          <a href='/'>TALKY<span className="text-blue-600">TALKY</span></a>
        </h1>
      </header>
    </BaseCard>
  );
};

export default ServiceTitle;
