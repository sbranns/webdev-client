"use client";

import * as client from "../../client";
import { useParams } from "next/navigation";
import Module from "./Module";
import Lesson from "./Lesson";
import ModulesControls from "./ModulesControls";
import { useModulesStore, type CourseModule } from "../../../store/modulesStore";
import { useShallow } from "zustand/shallow";
import { useEffect } from "react";

export default function Modules() {
  const { cid } = useParams();
  const courseId = String(cid);
  const modules = useModulesStore(
    useShallow((state) =>
      state.modules.filter((module) => module.course === String(cid)),
    ),
  );
  const setModules = useModulesStore((state) => state.setModules);
  const addModule = useModulesStore((state) => state.addModule);
  const deleteModule = useModulesStore((state) => state.deleteModule);
  const updateModule = useModulesStore((state) => state.updateModule);

  const onAddModule = async (moduleName: string) => {
    const created = await client.createModuleForCourse(courseId, {
      name: moduleName,
    });
    addModule(created);
  };

  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    deleteModule(moduleId);
  };

  const onUpdateModule = async (module: CourseModule) => {
    const saved = await client.updateModule(module);
    updateModule(saved);
  };

  useEffect(() => {
    const load = async () => {
      setModules(await client.findModulesForCourse(courseId));
    };
    load();
  }, [courseId]);

  return (
    <div>
      <ModulesControls onAddModule={onAddModule}/>
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module key={module._id} module={module} onDelete={onRemoveModule} onUpdate={onUpdateModule}>
            {module.lessons?.map((lesson) => (
              <Lesson key={lesson._id} title={lesson.name} />
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}
