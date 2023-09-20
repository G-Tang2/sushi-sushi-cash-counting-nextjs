import LoginForm from "@/components/(form)/LoginForm";

export default function SignIn() {
  return (
    <div className="flex flex-col h-screen items-center">
      <div className="pt-24 pb-12">
        <h1 className="text-4xl font-bold">Cash Counting</h1>
        <h3 className="my-5 font-light">For Sushi Sushi</h3>
      </div>
      <LoginForm />
    </div>
  );
}
