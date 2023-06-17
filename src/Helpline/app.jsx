import React from "react";
import "./app.css";
import {IoChevronForward} from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import {MdEmail} from "react-icons/md";
import {Link} from "react-router-dom";

export default function Helpline() {
    return (
        <div className="Helpline">
            <div className="Header">
                <Link to="/resources">
                    <div className="backarrow">
                        <IoIosArrowBack/>
                    </div>
                </Link>
                <p>Helpline</p>
                <Link to="/calender">
                    <div className="forwardarrow">
                        <IoChevronForward/>
                    </div>
                </Link>
            </div>
            <div className="HelplineBody">
                <div className="HelplineBodyNumber">
                    <div className="countryFlagHelp">
                        🇮🇳
                    </div>
                    <h3>9930095856</h3>
                </div>
                {/* https://www.youtube.com/watch?v=bMq2riFCF90  check it out later */}
                <div className="HelplineBodyEmail">
                    <div className="emailIconHelp">
                        <MdEmail/>
                    </div>
                    <h3>helpline@lgbt.foundation</h3>
                </div>
            </div>
        </div>
    );
}