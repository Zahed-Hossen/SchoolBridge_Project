import studentIcon from '../../../assets/icons/studentIcon.jpg';
import teacherIcon from '../../../assets/icons/teacherIcon.png';
import administratorIcon from '../../../assets/icons/administratorIcon.png';
import parentIcon from '../../../assets/icons/parentIcon.png';

const userRoles = [
  {
    icon: studentIcon,
    role: "Students",
    description: "Access assignments, track progress, and communicate with teachers.",
    link: "/students"
  },
  {
    icon: teacherIcon,
    role: "Teachers",
    description: "Manage classes, share resources, and evaluate student performance.",
    link: "/teachers"
  },
  {
    icon: administratorIcon,
    role: "Administrators",
    description: "Oversee school operations and manage resources efficiently.",
    link: "/admin"
  },
  {
    icon: parentIcon,
    role: "Parents",
    description: "Stay informed about your childs activities and progress.",
    link: "/parents"
  }
];

export default userRoles;