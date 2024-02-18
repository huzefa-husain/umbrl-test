"use client";
import Image from "next/image";
import { MainMenu } from "@/mock/mock";
import Button from "@/components/ui/Button";

const Header = () => {
  return (
    <header>
      <div className="flex">
        <div className="w-2/5 flex items-center">
          <Image src="/logo.svg" alt="Logo" width={154} height={28} priority />
        </div>
        <div className="w-2/5 justify-end flex">
          <ul className="flex items-center">
            {MainMenu?.map((item) => {
              return (
                <li className="px-4 inline-block" key={item?.label}>
                  <a href={item.action.url}>{item.label}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-1/5 text-right">
          <a href="#">Sign In</a>
          <Button color="purple" className="ml-6">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
