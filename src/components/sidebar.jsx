import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Introduction", href: "#introduction", icon: HomeIcon },
  {
    name: "Deployment & Release",
    href: "#deployment-release",
    icon: UsersIcon,
  },
  { name: "Feature Flags", href: "#feature-flags", icon: FolderIcon },
  { name: "SmoothSail", href: "#smoothsail", icon: CalendarIcon },
  {
    name: "Architecture",
    href: "#architecture",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Engineering Decisions",
    href: "#engineering-decisions",
    icon: ChartPieIcon,
  },
  { name: "Load Testing", href: "#load-testing", icon: ChartPieIcon },
  { name: "Using SmoothSail", href: "#using-smoothsail", icon: ChartPieIcon },
  { name: "Future Plans", href: "#future-plans", icon: ChartPieIcon },
  { name: "References", href: "#references", icon: ChartPieIcon },
];

export default function Sidebar() {
  return (
    <nav className="" aria-label="Sidebar">
      <ul role="list" className="-mx-2 space-y-1">
        {navigation.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={
                "text-ss-blgr hover:text-ss-blgr-hover hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
              }
            >
              <item.icon
                className={
                  "text-ss-coral group-hover:text-ss-blgr h-6 w-6 shrink-0"
                }
                aria-hidden="true"
              />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
