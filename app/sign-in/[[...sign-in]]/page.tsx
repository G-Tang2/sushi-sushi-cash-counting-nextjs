import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="h-screen flex items-center justify-center">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: {
              backgroundColor: "#ed9a83",
              "&:hover": {
                backgroundColor: "#afb378",
              },
              color: "white",
            },
          },
        }}
      />
    </section>
  );
}
