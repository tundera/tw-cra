/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { ReactComponent as LogoSVG } from "@images/logo.svg";

const Heading = tw.h2`text-black text-center font-bold text-4xl p-4`;

function Home() {
  return (
    <>
      <Heading>Home</Heading>
      <LogoSVG />
    </>
  );
}

export default Home;
