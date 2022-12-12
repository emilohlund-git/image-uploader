import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex fixed text-gray-400 bottom-0 left-1/2 -translate-x-1/2 py-6">
      created by{" "}
      <span className="font-semibold underline mx-2">emilohlund-git</span> -{" "}
      <a className="ml-2 link link-hover">devChallenges.io</a>
    </div>
  );
};

export default Footer;
