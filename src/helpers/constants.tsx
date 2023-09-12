import { IFirstLevelMenu } from "../interfaces/menu.interface";
import { PageCategory } from "../interfaces/page.interface";
import CourseIcon from "./icons/course.svg";
import BookIcon from "./icons/book.svg";

export const firstLevelMenu: IFirstLevelMenu[] = [
  {
    route: "courses",
    name: "Courses",
    icon: <CourseIcon />,
    id: PageCategory.Corses,
  },
  { route: "books", name: "Books", icon: <BookIcon />, id: PageCategory.Books },
];
