import OneSignal from "react-onesignal";

export function slugify(title: string): string {
  title = title.trim();

  title = title.toLowerCase();

  title = title.replace(/\s+/g, "-");

  title = title.replace(/[^a-z0-9-]/g, "");

  return title;
}

export async function runOneSignal() {
  if (process.env.NODE_ENV === "production") {
    await OneSignal.init({ appId: "0ec5bffa-8448-4b56-9b3f-ad282592973b" });
  } else {
    await OneSignal.init({
      appId: "2326c6cd-eae0-4ba8-8549-91e6ef12d13c",
      allowLocalhostAsSecureOrigin: true,
    });
  }
  return OneSignal.Slidedown.promptPush();
}
