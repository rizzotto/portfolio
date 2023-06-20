"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";
import { CiLight, CiDark } from "react-icons/ci";

const Button = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="max-[305px]:invisible">
        {currentTheme == "light" ? <CiLight size={28} /> : <CiDark size={28} />}
      </div>
      <Switch
        checked={currentTheme === "light"}
        onChange={() =>
          currentTheme == "light" ? setTheme("dark") : setTheme("light")
        }
        className={`${
          currentTheme === "light" ? "bg-neutral-700" : "bg-neutral-200"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${
            currentTheme === "light" ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </div>
  );
};

export default Button;
