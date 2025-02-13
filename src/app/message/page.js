import "./message.css";
import Link from "next/link";
const page = () => {
  return (
    <section className="animation-box">
      <div className="first-text">
        When I'm with you, everything feels right.
      </div>
      <div className="second-text">
        My favorite part of every day is the time I get to spend with you.
      </div>
      <div className="third-text">I love seeing you blush.</div>
      <div className="fourth-text">
        Now that I've found you, I'm never going to let you go
      </div>
      <div className="fifth-text">
        Whenever I count my blessings, you are at the top of my list.
      </div>
      <div className="sixth-text">
        You are my 11:11 wish 🩷, i can't express so i made this for you
      </div>
      <Link className="seventh-text" href="/photo">
        Click here 🫶
      </Link>
    </section>
  );
};

export default page;
