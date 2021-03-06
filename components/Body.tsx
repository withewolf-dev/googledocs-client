import Image from "next/image";
import React from "react";
import { DotsVerticalIcon, FolderIcon } from "@heroicons/react/solid";
import DocumentRow from "./DocumentRow";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

interface Props {}

const Body = () => {
  const router = useRouter();

  const newDoc = (e) => {
    e.preventDefault();
    router.push(`/${uuidv4()}`);
  };
  return (
    <div>
      <section className="bg-[#F8F9FA] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className=" flex items-center justify-between py-6">
            <h2 className="text-gray-700 text-lg">Start new document</h2>
            <button>
              <DotsVerticalIcon className="h-4" />
            </button>
          </div>
          <div
            onClick={newDoc}
            className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700"
          >
            <Image
              layout="fill"
              src={
                "https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png"
              }
            />
          </div>
          <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">blank</p>
        </div>
      </section>
      <section className="bg-white px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-gray-700 text-sm">
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow">My Documents</h2>
            <p className="mr-12">Date Created </p>
            <FolderIcon className="h-4" />
          </div>
          <DocumentRow />
        </div>
      </section>
    </div>
  );
};

export default Body;
