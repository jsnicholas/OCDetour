import LoginCard from "../components/login/loginCard";

function LoginPage() {
  return (
    <>
      <section className="bg-primary container mx-auto">
        <div className="grid grid-cols-1">
          <LoginCard />
        </div>
      </section>
    </>
  );
}

export default LoginPage;
