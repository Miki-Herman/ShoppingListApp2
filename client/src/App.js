import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ListGrid from './bricks/mainBricks/listGrid';
import BarChartComponent from "./bricks/mainBricks/barChart";
import mockList from "./mockDb/mockList";
import { Stack, Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiThemeLightDark } from '@mdi/js';
const cz = require('./translation/cz');
const eng = require('./translation/eng');

function App() {

    const [user, setUser] = useState('TondaVondra');
    const switchUser = () => {
      setUser((userRole) => (userRole === "TondaVondra" ? "JandaPecinka" : "TondaVondra"));
    };

    const [theme, setTheme] = useState('light');
    const [buttonVariant, setVariant] = useState('dark')
    const [appTheme, setAppTheme] = useState('App-light')
    const [textTheme, setTextTheme] = useState('text-dark')
    const [headerTheme, setHeaderTheme] = useState('header-light')
    const [listTheme, setListTheme] = useState('list-light')

    const switchTheme = () => {
        setTheme((theme) => (theme === 'light' ? 'dark': 'light'))
        setVariant((buttonVariant) => (buttonVariant === 'dark' ? 'light': 'dark'))
        setAppTheme((appTheme) => (appTheme === 'App-light' ? 'App-dark': 'App-light'))
        setTextTheme((textTheme) => (textTheme === 'text-dark' ? 'text-light': 'text-dark'))
        setListTheme((listTheme) => (listTheme === 'list-light' ? 'list-dark': 'list-light'))
        setHeaderTheme((headerTheme) => (headerTheme === 'header-light' ? 'header-dark': 'header-light'))
    };

    const [textLang, setTextLang]= useState(eng)

    const switchLangToCz = () => {
        setTextLang((textLang ) => (textLang === eng ? cz : cz))
        console.log(textLang)
    }

    const switchLangToEng = () => {
        setTextLang((textLang ) => (textLang === cz ? eng : eng))
        console.log(textLang)
    }

    return (
        <div className={appTheme}>
            <div className='change-user'>
                <Stack direction="horizontal" gap={3}>
                    <Button variant="warning" onClick={switchUser}>{textLang.currentUserButton}</Button>
                    <h4 className={textTheme}>{textLang.currentUserText}: {user}</h4>
                    <Button className='p-2 ms-auto' variant={buttonVariant} onClick={switchTheme}><Icon path={mdiThemeLightDark} size={1}/></Button>
                </Stack>
            </div>

            {/* My shopping lists part */}
            <div className={headerTheme}><h1>{textLang.myListHeader}</h1></div>
            <div className={listTheme}><ListGrid list={mockList} theme={theme} userName={user} textLang={textLang} /></div>

            {/* Invited to shopping lists part */}
            <div className={headerTheme}><h1>{textLang.invitedListHeader}</h1></div>
            <div className={listTheme}><ListGrid list={mockList} theme={theme} userName={user} invited={true} textLang={textLang}/></div>

            {/*Chart*/}
             <div className="barchart"><BarChartComponent data={mockList}/></div>

            {/*Language buttons*/}
            <div className='languages'>
                <Stack direction="horizontal" gap={1}>
                    <Button variant={buttonVariant} onClick={switchLangToCz}>🇨🇿</Button>
                    <Button variant={buttonVariant} onClick={switchLangToEng}>eng</Button>
                </Stack>
            </div>

        </div>
    );
}

export default App;
