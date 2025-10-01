import React from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

type Props = {
  animationData: object; // pass JSON directly
};

const GreetingLottie = ({ animationData }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData, // ✅ not "path"
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
