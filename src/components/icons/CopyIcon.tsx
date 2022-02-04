import React, {FC} from "react";

const CopyIcon: FC = () => {
    return (
        <svg className="copy-icon" width="18" height="18" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.636 12.636H15a2 2 0 002-2V3a2 2 0 00-2-2H7.364a2 2 0 00-2 2v2.364"
                stroke="#CFCFCF" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"/>
            <path
                d="M10.636 5.364H3a2 2 0 00-2 2V15a2 2 0 002 2h7.636a2 2 0 002-2V7.364a2 2 0 00-2-2z"
                stroke="#CFCFCF" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"/>
        </svg>
    )
}

export default CopyIcon
