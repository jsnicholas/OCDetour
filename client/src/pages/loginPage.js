import LoginCard from '../components/loginCard';
import BgDecorations from '../components/backgroundDecorations';


function LoginPage() {
    return (
        <>
            <BgDecorations />
            <div className="z-40 flex content-center justify-center h-screen items-center">
                <LoginCard />
            </div>
        </>
    )
}

export default LoginPage;