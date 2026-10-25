import { ChildProcess } from "node:child_process";
import EnvDemo from "./EnvDemo";
import OsDemo from "./OsDemo";
import RequestHeadersDemo from "./RequestHeadersDemo";
import ServerTimeDemo from "./ServerTimeDemo";
import VisitCounterDemo from "./VisitCounterDemo";
import WeatherDemo from "./WeatherDemo";
import ChildProcessDemo from "./ChildProcessDemo";

export default function ServerApis() {
  return (
    <div id="wd-server-apis">
      <h2>Server-Only APIs</h2>
      <ServerTimeDemo />
      <OsDemo />
      <EnvDemo />
      <RequestHeadersDemo />
      <WeatherDemo />
      <VisitCounterDemo />
      <ChildProcessDemo />
    </div>
  );
}