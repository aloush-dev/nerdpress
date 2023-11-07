"use client";

import { api } from "~/trpc/react";
import { ToggleSwitch } from "../reuseable/ToggleSwitch";
import { Input } from "../reuseable/Input";
import { useEffect, useState } from "react";
import { Button } from "../reuseable/Button";

export default function ConfigPage() {
  const navBarLinks = api.config.getAllNavBarLinks.useQuery();
  const websiteData = api.config.getConfig.useQuery();
  const updateWebsiteData = api.config.update.useMutation({
    onSuccess: () => {
      setButtonText("submitted!");
    },
    onError: () => {
      setButtonText("error!");
    },
  });

  const [websiteName, setWebsiteName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [buttonText, setButtonText] = useState("submit");

  const changeWebsiteName = () => {
    updateWebsiteData.mutate({
      websiteName: websiteName,
    });
  };

  useEffect(() => {
    if (websiteData.data) {
      setWebsiteName(websiteData.data?.websiteName);
      setIsLoading(false);
    }
  }, [websiteData.data]);

  if (isLoading) return <p>Loading...</p>;
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

      <h3>Pages to Display</h3>
      {navBarLinks.data?.map((link) => {
        return (
          <div key={link.name} className="flex">
            {link.name}
            <ToggleSwitch defaultState={link.value} />
          </div>
        );
      })}
    </div>
  );
}
