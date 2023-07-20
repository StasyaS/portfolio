import { Link } from "react-router-dom"
import '../../styles/header.scss';
import { useState } from "react";

export const Header = () => {
    const [isSwitch, setIsSwitch] = useState(false);
    const switchBurger  = () => {
        setIsSwitch(!isSwitch)
    }
    const r = "burger " ? (isSwitch) : 4;
    const r1 = 2 ? 'good' : 0
    console.log(r);
    return (
        <header>
            <div className="">
                <div className={"burger " + (isSwitch ? 'open' : "")} onClick={switchBurger}>
                    <div className="first"></div>
                    <div className="first"></div>
                    <div className="first"></div>
                    <div className="first"></div>
                </div>
                <Link to='/'>Page about me</Link>
                <Link to='/hobby'>My life </Link>
            </div>
        </header> 
    )
   
}

