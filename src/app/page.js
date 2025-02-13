"use client";
import { useRouter } from "next/compat/router";
import Link from "next/link";
export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="envelope">
        <div className="back"></div>
        <div className="letter">
          <div className="heart"></div>
          <div className="text">
            <Link href="/message">
              I want to say <br />
              many thinks but, <br />
              i can't express so i made <br />
              this for you
            </Link>
            <p>Click the above text</p>
          </div>
        </div>
        <div className="front"></div>
        <div className="top"></div>
        <div className="shadow"></div>
        <div className="text1">
          <h2>Hey! Listen I Have Something For You</h2>
        </div>
      </div>
    </>
  );
}
