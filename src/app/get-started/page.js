import Header from "../../components/Header";
import FramerBadge from "../../components/FramerBadge";
import GetStartedComponent from "../../components/GetStarted";
import "./get-started.css";

export default function GetStartedPage() {
    return (
        <div style={{ background: '#fcf8f6', color: '#2b0c0c', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <main style={{flex: 1}}>
                <GetStartedComponent />
            </main>

            {/* Stats Strip */}
            <div className="strip">
                <div className="strip-stat">
                    <strong>100K+</strong>
                    <span>ACTIVE USERS</span>
                </div>
                <div className="strip-divider"></div>
                <div className="strip-stat">
                    <strong>4.9 ★</strong>
                    <span>APP STORE RATING</span>
                </div>
                <div className="strip-divider"></div>
                <div className="strip-stat">
                    <strong>500+</strong>
                    <span>GUIDED SESSIONS</span>
                </div>
                <div className="strip-divider"></div>
                <div className="strip-stat">
                    <strong>Free</strong>
                    <span>3-MONTH TRIAL</span>
                </div>
            </div>

            <FramerBadge />
        </div>
    );
}
