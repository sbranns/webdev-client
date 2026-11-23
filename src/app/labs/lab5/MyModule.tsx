"use client";
import { useState } from "react";

export default function WorkingWithRemoteObjects() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const [myModule, setMyModule] = useState({
    id: 1,
    name: "Webdev",
    description: "Create a NodeJS server with ExpressJS",
    course: "101",
  });
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;
  return (
    <div>
      <h4 className="text-xl font-bold">Retrieving Module</h4>
      <a
        id="wd-retrieve-module"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${MODULE_API_URL}`}
      >
        Get Module
      </a>
      <h4>Retrieving Module Properties</h4>
      <a
        id="wd-retrieve-module-name"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${MODULE_API_URL}/name`}
      >
        Get Name
      </a>
      <br />
      <a
        id="wd-update-module-name"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${MODULE_API_URL}/name/${myModule.name}`}
      >
        Update Name
      </a>
      <input
        className="border rounded"
        id="wd-assignment-title"
        value={myModule.name}
        onChange={(e) =>
          setMyModule({ ...myModule, name: e.target.value })
        }
      />
      <br />
      <a
        id="wd-update-assignment-title"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${MODULE_API_URL}/description/${myModule.description}`}
      >
        Update Description
      </a>
      <input
        className="border rounded"
        id="wd-module-description"
        value={myModule.description}
        onChange={(e) =>
          setMyModule({ ...myModule, description: e.target.value })
        }
      />
    </div>
  );
}
