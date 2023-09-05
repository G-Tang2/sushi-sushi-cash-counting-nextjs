import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="h-screen flex items-center justify-center">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: {
              backgroundColor: "#dd9f87",
              color: "#221f20",
            },
          },
        }}
      />
    </section>
  );
}
