import MyModule from "./MyModule";
import Environment from "./Environment";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithRemoteObjects from "./WorkingWithRemoteObjects";
import WorkingWithRemoteArrays from "./WorkingWithRemoteArrays";
import HttpClient from "./HttpClient";
import WorkingWithRemoteObjectsAsync from "./WorkingWithRemoteObjectsAsync";
import WorkingWithRemoteArrayAsync from "./WorkingWithRemoteArrayAsync";
import HelloRoute from "./HelloRoute";
import CalculatorNextWebApiClient from "./Calculator";

export default function Lab5() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

  return (
    <div id="wd-lab5">
      <h1 className="text-xl font-bold">Lab 5</h1>
      <a
        id="wd-welcome-link"
        href={`${HTTP_SERVER}/lab5/welcome`}
      >
        Welcome
      </a>
      <Environment />
      <hr className="m-3" />
      <PathParameters />
      <hr className="m-3" />
      <QueryParameters />
      <hr className="m-3" />
      <WorkingWithRemoteObjects />
      <hr className="m-3" />
      <MyModule />
      <hr className="m-3" />
      <WorkingWithRemoteArrays />
      <hr className="m-3" />
      <HttpClient />
      <hr className="m-3" />
      <WorkingWithRemoteObjectsAsync />
      <hr className="m-3" />
      <WorkingWithRemoteArrayAsync />
      <hr className="m-3" />
      <HelloRoute />
      <hr className="m-3" />
      <CalculatorNextWebApiClient />
    </div>
  );
}
