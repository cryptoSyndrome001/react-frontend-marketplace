import React, {FC} from "react";

interface IProp {
    hasPrice?: boolean
}
const StatisticCard: FC<IProp> = ({hasPrice}) => {
    return (
        <div className="col-lg-6 col-bidth-otr box-1">
            <div className="col-bidth-inr">
                <h2 className="heading heading-h2">6,340 ETH {hasPrice && (<span className="price body-mb">$97,356</span>)}</h2>
                <p className="desc body-m">Artists have earned since the launch of BLAH.</p>
            </div>
        </div>
    )
}

export default StatisticCard
