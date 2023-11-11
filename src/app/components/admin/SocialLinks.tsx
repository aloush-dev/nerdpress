"use client";

import { useState } from "react";
import { Input } from "../reuseable/Input";

export function SocialLinks({
  websiteData,
}: {
  websiteData: {
    id: number;
    websiteName: string;
    websiteSubTitle: string;
    theme: string;
    instagramLink: string;
    facebookLink: string;
    footerLinks: boolean;
  };
}) {
  const [facebookLink, setFacebookLink] = useState(websiteData.facebookLink);
  const [instagramLink, setInstagramLink] = useState(websiteData.instagramLink);

  return (
    <>
      <label>
        Facebook
        <Input
          value={facebookLink}
          onChange={(e) => {
            setFacebookLink(e.target.value);
          }}
        />
      </label>

      <label>
        Instagram
        <Input
          value={instagramLink}
          onChange={(e) => {
            setInstagramLink(e.target.value);
          }}
        />
      </label>
    </>
  );
}
