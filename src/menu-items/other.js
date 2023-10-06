// assets
import { IconBrandChrome, IconHelp } from "@tabler/icons";

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: "sample-docs-roadmap",
  type: "group",
  children: [
    {
      id: "sample-page",
      title: "Sample Page",
      type: "item",
      url: "/sample-page",
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: "aboutus",
      title: "About us",
      type: "item",
      url: "/aboutus",
      icon: icons.IconHelp,
      external: false,
      target: false
    }
  ]
};

export default other;
