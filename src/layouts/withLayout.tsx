import React, {FC, useState} from "react";
import {RouteComponentProps} from "react-router-dom"
import SideMobileModal from "../components/SideMobileModal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

interface IProps {
    layout2?: boolean
}
const Layout: FC<IProps> = ({children, layout2}) => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <SideMobileModal setShowMenu={setShowMenu} showMenu={showMenu}/>
            <Navbar showMenu={showMenu} setShowMenu={setShowMenu} layout2={layout2}/>
            {children}
            <Footer/>
            <Copyright/>
        </>
    )
}


const withLayout = (Component: React.ComponentType<any>, layout2?: boolean) => {
    return (props: RouteComponentProps<any>) => {
        return (
            <Layout layout2={layout2} {...props}>
                <Component {...props} />
            </Layout>
        )
    }
}

export default withLayout
