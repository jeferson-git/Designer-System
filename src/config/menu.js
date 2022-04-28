import {
  mdiAccountTie,
  mdiCheckboxMarked,
  mdiCalendarMonth,
  mdiCogOutline,
} from "@mdi/js";

const menuItems = [
  {
    id: '0',
    text: 'Employers',
    icon: mdiAccountTie,
    to: '/employers'
  },
  {
    id: '1',
    text: 'Tasks',
    icon: mdiCheckboxMarked,
    to: '/tasks'
  },
  {
    id: '2',
    text: 'Schedule',
    icon: mdiCalendarMonth,
    to: '/shedule'
  },
  {
    id: '3',
    text: 'Settings',
    icon: mdiCogOutline,
    to: '/settings'
  }
]

export default menuItems