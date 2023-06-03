import { Montserrat } from "next/font/google";
import SignInForm from "@/components/SignInForm";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${montserrat.className}`}>
      <section className="HOME__CONTAINER w-full min-h-screen flex justify-around items-stretch">
        <div className="bg-black flex-7  flex justify-around items-center">
          <p className="text-7xl font-bold"> Board.</p>
        </div>
        <div className="bg-neutral-100 text-black flex-10 flex justify-around items-center">
          <SignInForm />
        </div>
      </section>
    </main>
  );
}

