import { SiGithub } from "react-icons/si";
import { GithubButton, RegisterForm } from "@/components/index";
import styles from "./line.module.css"
import Link from "next/link";
import Image from "next/image";

export default function SignInPage() {
  return (
    <main>
      <section className="mt-16 mb-16 px-8 flex flex-row justify-between max-w-7xl mx-auto">
        <div className="w-full mx-auto md:max-w-[22rem]">
          <h1 className="text-4xl tracking-tight mb-2 font-bold">Create an account</h1>
          <p className="mb-8 text-base-heading/70 text-sm">Describe yourself as clearly so there are no mistakes</p>

          <GithubButton text="Sign up with GitHub" />
          <p className={`${styles.line} text-xs font-medium overflow-hidden w-full text-center mx-auto`}>OR</p>
          <div className="mt-6 w-full">
            <RegisterForm />
            <p className="mx-auto text-center mt-6 text-sm text-base-heading/70">Already have an account? <Link className="underline text-base-heading" href="/login">Login</Link> </p>
          </div>
        </div>

        <div className="aspect-square max-w-4xl pl-28 -mt-12 hidden lg:block">
          <Image
            src="/registerPhoto.webp"
            alt="Shinning Balloons"
            width={1400}
            height={600}
            priority
            className="mx-auto rounded-xl aspect-square object-center object-cover"
          />
        </div>
      </section>


    </main>
  );
}