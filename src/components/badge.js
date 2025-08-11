import react from "react";
import './badge.css';
export default function Badge() {
    return (
        <>
            <div className="container-fluid">
                <div className="row" style={{ gap: '1rem' }}>
                    <div className="col col-6 col-md-2 badge-container" style={{ backgroundColor: "white" }} id="badges">

                        <img src="./../assets/svnitlogo.png" id="badgeimage" alt="image1"></img>
                    </div>
                    <div className="col col-6 col-md-2 badge-container" style={{ backgroundColor: "white" }} id="badges">

                        <img src="https://cprakash86.wordpress.com/wp-content/uploads/2025/02/cismr.png" id="badgeimage" alt="image1"></img>

                    </div>
                    <div className="col col-6 col-md-2 badge-container" style={{ backgroundColor: "white" }} id="badges">

                        <img src="https://conf.bioinfoau.org/sbcadd'2018/images/SERB.png" id="badgeimage" alt="image1"></img>
                    </div>
                    <div className="col col-6 col-md-2 badge-container" style={{ backgroundColor: "white" }} id="badges">

                        <img src="https://statnano.com/resource/amar_university_world/files/images/21/1/thumbnail_174102491ba9570554f98b52f9c4ebb4.png" id="badgeimage" alt="image1"></img>

                    </div>
                    <div className="col col-6 col-md-2 badge-container" style={{ backgroundColor: "white" }} id="badges">

                        <img src="https://upload.wikimedia.org/wikipedia/en/b/bb/NIT-Delhi_Logo.svg" id="badgeimage" alt="image1"></img>

                    </div>
                </div>
            </div>
        </>
    );
}