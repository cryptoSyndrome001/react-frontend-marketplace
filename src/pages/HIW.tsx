import React, {FC} from "react";
import HowItWorks from "components/HowItWorks";
import CallToAction from "components/CallToAction";

const HIW: FC = () => {
    return (
        <>
            <HowItWorks classes={['how-it-work']}/>
            <CallToAction/>
        </>
    )
}

export default HIW
