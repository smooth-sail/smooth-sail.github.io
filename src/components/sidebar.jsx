import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Introduction", href: "#", icon: HomeIcon, current: true },
  { name: "Deployment & Release", href: "#", icon: UsersIcon, current: false },
  { name: "Feature Flags", href: "#", icon: FolderIcon, current: false },
  { name: "SmoothSail", href: "#", icon: CalendarIcon, current: false },
  {
    name: "Architecture",
    href: "#",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  {
    name: "Engineering Decisions",
    href: "#",
    icon: ChartPieIcon,
    current: false,
  },
  { name: "Load Testing", href: "#", icon: ChartPieIcon, current: false },
  { name: "Using SmoothSail", href: "#", icon: ChartPieIcon, current: false },
  { name: "Future Plans", href: "#", icon: ChartPieIcon, current: false },
  { name: "References", href: "#", icon: ChartPieIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  return (
    <nav className="" aria-label="Sidebar">
      <ul role="list" className="-mx-2 space-y-1">
        {navigation.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-50 text-indigo-600"
                  : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
              )}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-indigo-600"
                    : "text-gray-400 group-hover:text-indigo-600",
                  "h-6 w-6 shrink-0"
                )}
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
