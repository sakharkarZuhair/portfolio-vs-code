export interface Navigation {
  name: string;
  title: string;
  path: string;
}

export const navigationList: Navigation[] = [
  {
    name: "_hello",
    title: "_hello",
    path: "/",
  },
  {
    name: "_about-me",
    title: "_about-me",
    path: "/about-me",
  },
  {
    name: "_projects",
    title: "_projects",
    path: "/projects",
  },
];
