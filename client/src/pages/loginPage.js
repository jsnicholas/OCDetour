import LoginCard from '../components/loginCard';
import wave1 from '../assets/login/wave1.svg';

function LoginPage() {
    return (
        <>
            <div className="bg">
                <div className="z-40 flex content-center justify-center h-screen items-center">
                    <LoginCard />
                </div>
            </div>
        </>
    )
}

export default LoginPage;