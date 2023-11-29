import React from "react";

import clarifion from "../images/clarifion.png";

const Header = () => {
    return (
        <div className="flex justify-items-stretch bg-white">
            <div className="lg:p-6 lg:ml-28">
                <img src={clarifion} alt="clarifion" />
            </div>
            <div>

            </div>
        </div>
    );
}

export default Header;