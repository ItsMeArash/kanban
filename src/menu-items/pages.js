// assets
import { IconKey, IconCirclePlus, IconFiles, IconFile } from "@tabler/icons";

// constant
const icons = {
  IconKey,
  IconCirclePlus,
  IconFiles,
  IconFile
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: "projects",
  title: "Projects",
  type: "group",
  children: [
    {
      id: "new-project",
      title: "New Project",
      type: "item",
      url: "/addproject",
      icon: icons.IconCirclePlus
    },
    {
      id: "projects-list",
      title: "Projects List",
      type: "collapse",
      icon: icons.IconFiles,
      children: [
        {
          id: "project#1",
          title: "First Project",
          type: "item",
          url: "/#",
          icon: icons.IconFile,
          target: true
        },
        {
          id: "project#2",
          title: "Second Project",
          type: "item",
          url: "/#",
          icon: icons.IconFile,
          target: true
        }
      ]
    }
  ]
};

export default pages;
