import Icon from '@mdi/react';
import { mdiNewspaper } from '@mdi/js';
import React from "react";

const icon = <Icon path={mdiNewspaper} size={1}/>


const mockList = [
    {
        id: 1,
        name: 'Svatomartinská husa',
        username: 'TondaVondra',
        icon: icon,
        archived: true,
        totalItems: 21,
        items:[
            { id: 1, name: 'Husa', quantity: 2, type: 'ks', state: true },
            { id: 2, name: 'Bílé zelí', quantity: 1, type: 'kg', state: false  },
            { id: 3, name: 'Červené zelí', quantity: 3, type: 'g', state: false  },
            { id: 4, name: 'Mouka', quantity: 5, type: 'ks', state: false  },
            { id: 5, name: 'Rohlíky', quantity: 10, type: 'ks', state: false  },
        ],
        invitedUsers:['JandaPecinka']
    },
    {
        id: 2,
        name: 'Měsíční nákup',
        username: 'TondaVondra',
        icon: icon,
        archived: false,
        totalItems: 4,
        items:[{ id: 1, name: 'Rohlíky', quantity: 4, type: 'ks', state: false  }],
        invitedUsers:['JandaPecinka']
    },
    {
        id: 3,
        name: 'Horbach',
        username: 'TondaVondra',
        icon: icon,
        archived: false,
        totalItems: 20,
        items:[{ id: 1, name: 'OSB deska', quantity:20, type: 'ks', state: false  }],
        invitedUsers:[]
    },
    {
        id: 4,
        name: 'Nákup Ikea',
        username: 'TondaVondra',
        icon: icon,
        archived: true,
        totalItems: 12,
        items:[{ id: 1, name: 'Rámečky', quantity:12, type: 'ks', state: false  }],
        invitedUsers:['JandaPecinka']
    },
    {
        id: 5,
        name: 'Nedělní oběd',
        username: 'JandaPecinka',
        icon: icon,
        archived: false,
        totalItems: 1,
        items:[{ id: 1, name: 'kuskus', quantity:1, type: 'kg', state: false  }],
        invitedUsers:['TondaVondra']
    },
    {
        id: 6,
        name: 'Oslava narozenin',
        username: 'JandaPecinka',
        icon: icon,
        archived: true,
        totalItems: 2,
        items:[{ id: 1, name: 'víno', quantity:2, type: 'kg', state: false }],
        invitedUsers:[]
    },
];

export default mockList