/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from '@mui/icons-material/YouTube';
import GameJamIcon from '@mui/icons-material/Gamepad';
import WebIcon from '@mui/icons-material/Link';

export default {
    name: 'Květuše Husáková',
    title: 'Runebound coder, breathing life into phantom AI with arcane algorithms – C++, Unreal Engine, AI Systems',
    email: 'HusKveNimrah@gmail.com',

    socials:
    {
        LinkedIn:
        {
            link: 'https://www.linkedin.com/in/kvetuse-husakova',
            text: 'Linked In',
            icon: <LinkedInIcon />,
        },
        Instagram:
        {
            link: 'https://www.instagram.com/kvetuse_husakova/',
            text: 'Instagram',
            icon: <InstagramIcon />,
        },
        Github:
        {
            link: 'https://www.github.com/yushikuni',
            text: 'Github',
            icon: <GithubIcon />,
        },
        YouTube:
        {
            link: 'https://www.youtube.com/channel/UCbqzHkpcDsezHgbEn9jRmbg',
            text: 'Youtube',
            icon: <YouTubeIcon />,
        },
    },

    about: "My name is Kvetuse Husakova\nI have graduated SPŠT Třebíč (Information Technology) and I have also studied Telecommunication and Information Systems at BUT Brno.\n\nI am gamer, passionate reader and programmer.\n\n🔭 I am working on Toon Tanks! \n\n👨‍💻 I’m looking to collaborate with other content creators\n\n⚡ Fun fact: I love to draw and play on the bass guitar\n\n🍕 and I love pizza",

    expiriences: [
        {
            title: 'Game Developer • Neronian Studios',
            date: '01/2025 — 03/2025',
            description: 'Making gameplay mechanic, programming UI in Unreal Engine 5.3 (Blueprints and C++ 17)',
        },
        {
            title: 'QA Tester • UNICODE SYSTEMS',
            date: '01/2023 — 03/2025',
            description: 'Testing information systems for the petrol stations.',
        },
        {
            title: 'QA Tester • GoldKnights',
            date: '06/2021 — 07/2022',
            description: 'Manual testing The Last Oricru. Working in team.',
        },
        {
            title: 'Moodle programmer • PC Help',
            date: '05/2021 — 06/2022',
            description: 'Working with Apache servers. Making a SCORM presentation for customers. Office Administrator',
        },
        {
            title: 'Couch • Czechitas',
            date: '03/2020 — 05/2021',
            description: 'Teaching women programming in C# (beginner to intermediate)',
        },
    ],
    educations: [
        {
            title: 'BUT Brno • Telecommunications and Information Systems • Sophomore (unfinished)',
            date: '2019 - 2021',
            description: 'Electrical engineering with a closer focus on the issues of traditional and mobile communications, intelligent networks and the Internet of Things',
        },
        {
            title: 'Střední průmyslová škola Třebíč, Třebíč',
            date: '2014 - 2019',
            description: 'Programming in C/C++, C#, basic web development and networking basics',
        },
        {
            title: 'SŠ stavební, Třebíč',
            date: '2011 - 2014',
            description: 'Basics and practical connection of electrical wiring in apartments',
        },
    ],
    certificates: [
        {
            title: 'robot_dreams Czech: Clean code and design patterns',
            date: '06/2024',
            description: 'info@robotdreams.cz',
        },
        {
            title: 'Anomalia: Advanced game development in Unreal Engine 5',
            date: '06/2024',
            description: 'https://www.facebook.com/anomalia.eu',
        },
        {
            title: 'GameDevHub: Unreal Engine 4',
            date: '03/2022',
            description: 'Credential number: L85QJS6',
        },
        {
            title: 'Google: IT Security: Defense against the digital dark arts',
            date: '08/2021',
            description: 'Credential number: 3GEL4NPUU3BW',
        },
        {
            title: 'Udemy: Introduction to Game Development with Unity',
            date: '08/2021',
            description: 'Credential number: ude.my/UC-f7bd96-f661-4830-95b6-4507fa1a1720',
        },
    ],
    skills: [
        {
            title: 'Front-end',
            description: ['ReactJS', 'JavaScript', 'Bootstrap', 'Material UI', 'Mustache'],
        },
        {
            title: 'Databases',
            description: ['MySQL', 'MariaDB'],
        },
        {
            title: 'Back-end',
            description: ['PHP'],
        },
        {
            title: 'Source control',
            description: ['Git'],
        },
        {
            title: 'Unreal Engine 4',
            description: ['pre-intermediate'],
        },
        {
            title: 'C/C++',
            description: ['basic'],
        },
        {
            title: 'C#',
            description: ['intermediate'],
        },
        {
            title: 'PHP',
            description: ['pre-intermediate'],
        },
    ],
    projects: [
        {
            tagmvp: 'MVP',
            tag: 'Games',
            tag2: 'Unreal Engine',
            tag3: 'Blueprints',
            tag4: 'Singleplayer',
            images: [
                'https://user-images.githubusercontent.com/42646031/151656394-9755f47b-04e7-4923-ac37-58f2bd688dea.png',
                'https://user-images.githubusercontent.com/42646031/111865521-ddc14600-8967-11eb-8a8a-674a774f8889.png',
                'https://user-images.githubusercontent.com/42646031/111865500-aeaad480-8967-11eb-9409-84fc774d4ed8.png',
                'https://user-images.githubusercontent.com/42646031/111865666-9b4c3900-8968-11eb-9a36-b1826f3e49cb.png',
                'https://user-images.githubusercontent.com/42646031/111865288-7bb41100-8966-11eb-8a03-f1a88369459f.png',
                'https://user-images.githubusercontent.com/42646031/111865294-84a4e280-8966-11eb-85f0-2eef90fa9e2a.png',
            ],
            title: 'Rebelia Ronin',
            caption: 'Destroy evil AI named SIBYL',
            description: 'Gander is an FPS, also this project have chasing AI (Samurai and SIBYL), quest system inspired by WoW, shooting mechanism. The game occurs at night, so you have a flashlight available. Made in Unreal Engine 4.',
            links: [
                { link: 'https://github.com/Yushikuni/RebeliaRonin', icon: <GithubIcon /> },
                { link: 'https://www.youtube.com/watch?v=mduLkzsIFsk&t', icon: <YouTubeIcon /> },
            ],
        },
        {
            tagmvp: 'MVP',
            tag: 'Games',
            tag2: 'Windows application',
            tag3: 'C#',
            tag4: 'Text adventures',
            images: [
                'https://user-images.githubusercontent.com/42646031/180016933-51a7e7f9-61dd-4e03-8c08-2fc317b70d8d.png',
                'https://user-images.githubusercontent.com/42646031/182035855-9e91e206-092f-41a5-85c9-ab75d69c7323.png',
                'https://user-images.githubusercontent.com/42646031/182035858-aa3ea922-6b42-4dee-b61f-514e2447ac5a.png',
                'https://user-images.githubusercontent.com/42646031/182035860-2b774eaf-f181-4753-a04b-7529190c407f.png',
            ],
            title: 'Dragon fight',
            caption: 'You as an adventurer must save a prince from terrifying dragon',
            description: 'The game is follows by OOP standarts. Game included also invetory system. Main inspiration was D&D for equipment and basic rules. Made in C#',
            links: [
                { link: 'https://github.com/Yushikuni/dragonFight', icon: <GithubIcon /> },
            ],
        },
        {
            tagmvp: 'MVP',
            tag: 'Games',
            tag2: 'Unreal Engine',
            tag3: 'Blueprints',
            tag4: 'Singleplayer',
            images: [
                'https://img.itch.zone/aW1nLzg1MTI0MzIuanBn/347x500/O50Q3D.jpg',
            ],
            title: 'Pillow Hard',
            caption: 'What Pillow is Hard? You or Him?',
            description: 'Take revenge on puny humans who treated you bad by fighting your soft opponent(s) in octagon! Made in Unreal Engine 4.',
            links: [
                { link: 'https://kveta.itch.io/pillowhard', icon: <GameJamIcon /> },
                { link: 'https://youtu.be/9tnJ67DlR7Q', icon: <YouTubeIcon /> },
            ],
        },
        {
            tag: 'Games',
            tag2: 'Windows application',
            tag3: 'C#',
            tag4: 'Text adventures',
            images: [
                'https://user-images.githubusercontent.com/42646031/159047268-c8b99958-6165-4c27-bb87-4090602c0260.png',
                'https://user-images.githubusercontent.com/42646031/159047455-075caf7f-f4cc-472e-afd6-f07d17c15ec9.png',
                'https://user-images.githubusercontent.com/42646031/159047455-075caf7f-f4cc-472e-afd6-f07d17c15ec9.png',
                'https://user-images.githubusercontent.com/42646031/159047357-13ba15a5-c18c-4e47-8050-0f7ebd3c45db.png',
            ],
            title: 'Black Jack',
            caption: 'Try to obtain 21 and win the game!',
            description: 'Black Jack have a basic random number generator that uses a counter for previous card. Made in C#',
            links: [
                { link: 'https://github.com/Yushikuni/BlackJack', icon: <GithubIcon /> },
            ],
        },
        {
            tag: 'Games',
            tag2: 'Windows application',
            tag3: 'C++',
            tag4: 'Singleplayer / Multiplayer',
            images: [
                'https://user-images.githubusercontent.com/42646031/151655709-97713928-1704-423c-aa33-ddec3c48e806.png',
                'https://user-images.githubusercontent.com/42646031/151655708-747c056b-2f4b-4ec0-a3f5-a50bf7b1a803.png',
                'https://user-images.githubusercontent.com/42646031/151655710-3f161a5e-c610-442d-9112-669466290285.png',
            ],
            title: 'The NIM game',
            caption: 'NIM with Singleplayer and multiplayer option. After exiting the game score will saved into file',
            description: 'Game is in C/C++ also you can choose between singleplayer and multiplayer. Who takes last token wins a game.',
            links: [
                { link: 'https://github.com/Yushikuni/NIM', icon: <GithubIcon /> },
            ],
        },
        {
            tag: 'Applications',
            tag2: 'Windows application',
            tag3: 'C++',
            tag4: 'Text adventures',
            images: [
                'https://user-images.githubusercontent.com/42646031/151656474-d2b754c1-990f-4bef-9a73-ec306c4aeb07.png',
            ],
            title: 'Quest System',
            caption: 'Simple quest system in C++',
            description: 'Simple game in C++ that follows the OOP standards. Header files contains declarations of methods and the implementation is in the respective .cpp files',
            links: [
                { link: 'https://github.com/Yushikuni/QuestSystem_Cpp', icon: <GithubIcon /> },
            ],
        },
        {
            tag: 'Games',
            tag2: 'Windows application',
            tag3: 'C#',
            tag4: 'Word adventures',
            images: [
                'https://user-images.githubusercontent.com/42646031/151656515-1052981f-ed45-47bb-9f43-a26472e66e61.png',
                'https://user-images.githubusercontent.com/42646031/151656516-66930ee0-8a21-4a03-b47d-6bcf033c9e40.png',
                'https://user-images.githubusercontent.com/42646031/151656514-ad90bf9b-3540-4be2-bffb-76c03499040b.png',
                'https://user-images.githubusercontent.com/42646031/151656512-a208d85e-23ea-4bc3-b28e-6748552d697e.png',
            ],
            title: 'Shibenice',
            caption: 'Simple game in Windows Forms',
            description: 'Game was programmed in C# using Windows Forms. The words can be customized in shi.txt file.',
            links: [
                { link: 'https://github.com/Yushikuni/Shibenice', icon: <GithubIcon /> },
            ],
        },
        {
            tag: 'Applications',
            tag2: 'Web',
            tag3: 'PHP',
            tag4: 'Chatbot',
            images: [
                'https://user-images.githubusercontent.com/42646031/198354183-dee12856-123a-4d7b-9fcd-4db9b7c9f5d4.png',
            ],
            title: 'DUH chatbot',
            caption: 'How to deal with something? DUH…',
            description: 'Does not feel right to bother your friend(s) with stupid question? And you know it is a stupid question? Then tell my chat bot. DUH…',
            links: [
                { link: 'https://github.com/Yushikuni/DuhChatbot', icon: <GithubIcon /> },
                { link: 'http://mujbot.4fan.cz/', icon: <WebIcon /> },
            ],
        },
        {
            tag: 'Applications',
            tag2: 'Windows',
            tag3: 'C++',
            tag4: 'Management System',
            images: [
                'https://user-images.githubusercontent.com/42646031/201528119-3a9823a1-4da1-4c6a-97ce-aea3fb5868a9.png',
                'https://user-images.githubusercontent.com/42646031/201528122-0add8b7f-e0ef-4a9e-94b2-6ea371be807c.png',
                'https://user-images.githubusercontent.com/42646031/201528123-5f7996d5-6c0f-4c2e-996f-26cab761e1a1.png',
            ],
            title: 'Library Management System',
            caption: 'Writing and reading text file in C++',
            description: 'I was making a my version of Library Management System for training basic C++. This project include reading and writing in one text file. Update and delete record in specific index. Login information is required',
            links: [
                { link: 'https://github.com/Yushikuni/Library', icon: <GithubIcon /> },
            ],
        },
    ],

    articles: [
        {
            tag: 'All',
            images: [
                'https://randomwordgenerator.com/img/picture-generator/53e1d047494faa0df7c5d57bc32f3e7b1d3ac3e45658714d702872d390_640.jpg',
            ],
            title: 'Test Article',
            caption: 'Test article caption',
            description: 'test article description what is going on?',
            detailed: 'Here should be detailed post about something…',
        },

    ],
};
