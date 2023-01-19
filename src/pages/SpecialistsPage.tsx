import React from "react";
import DefaultTemplate from "../templates/DefaultTemplate";
import HeroBlock from "../components/blocks/HeroBlock";
import SpecialistsByCategoryBlock from "../components/blocks/SpecialistsByCategoryBlock";

const StorePage = () => {
    return (
        <DefaultTemplate>
            <HeroBlock
                title="Записаться к специалисту"
            />

            <SpecialistsByCategoryBlock />
        </DefaultTemplate>
    );
};

export default StorePage;
