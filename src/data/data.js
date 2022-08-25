import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineBarChart } from "react-icons/ai";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";


export const menu = [
    {
        id: 1,
        text: 'Home',
        icon: <AiOutlineHome/>,
        link: '/',
        submenu: []
    },
    {
        id: 2,
        text: 'Task Manager',
        icon: <AiOutlineBars/>,
        link: '/view',
        submenu: [
            {
                id: 1,
                text: 'View',
                icon: <AiOutlineBars/>,
                link: '/view',

            },
            {
                id: 2,
                text: 'Add',
                icon: <AiOutlineBars/>,
                link: '/Add',

            },
            {
                id: 3,
                text: 'Edit',
                icon: <AiOutlineBars/>,
                link: '/edit',

            },
            {
                id: 4,
                text: 'Configure',
                icon: <AiOutlineBars/>,
                link: '/config',

            },
        ]
    },
    {
        id: 3,
        text: 'Investment',
        icon: <AiOutlineBarChart />,
        link: '/investment',
        submenu: [
            {
                id: 1,
                text: 'News',
                icon: <AiOutlineBarChart />,
                link: '/news',

            },
            {
                id: 2,
                text: 'Trading Jurnal',
                icon: <AiOutlineBarChart />,
                link: '/trading-jurnal',

            }
        ]
    },
    {
        id: 4,
        text: 'App',
        icon: <AiOutlineAppstoreAdd/>,
        link: '/app',
        submenu: [
            {
                id: 1,
                text: 'Music',
                icon: <AiOutlineAppstoreAdd/>,
                link: '/music',

            },
            {
                id: 2,
                text: 'Video',
                icon: <AiOutlineAppstoreAdd/>,
                link: '/video',

            }
        ]
    },
]