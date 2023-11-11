"use client";

import { api } from "~/trpc/react";
import { Input } from "../reuseable/Input";
import { useState } from "react";
import { Button } from "../reuseable/Button";

export default function ConfigPage({
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
  const updateWebsiteData = api.config.update.useMutation({
    onSuccess: () => {
      setButtonText("submitted!");
    },
    onError: () => {
      setButtonText("error!");
    },
  });

  const [websiteName, setWebsiteName] = useState(websiteData.websiteName);
  const [buttonText, setButtonText] = useState("submit");

  const changeWebsiteName = () => {
    updateWebsiteData.mutate({
      websiteName: websiteName,
    });
  };

  return (
    <div className="p-2">
      <div className="flex flex-col justify-center">
        <span className="text-lg font-bold">Website Name</span>
        <div className="flex">
          <Input
            value={websiteName}
            onChange={(e) => {
              setWebsiteName(e.target.value);
            }}
          />
          <Button text={buttonText} onClick={changeWebsiteName} />
        </div>
      </div>
    </div>
  );
}
