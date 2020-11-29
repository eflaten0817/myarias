import React, { useState, useEffect } from "react";
import Head from "next/head";
import AriaItem from "../components/AriaItem";
import AriaTable from "../components/AriaTable";
import fetch from "isomorphic-unfetch";
import qs from "qs";
import Grid from '@material-ui/core/Grid'
import Navbar from '../components/navbar'
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));



const AriaItems = ({ ariaCollection }) =>
    ariaCollection.map((ariaInfo, index) => <AriaItem key={index} ariaInfo={ariaInfo} />);

const Home = ({ data }) => {
    const baseUrl = process.env.VERCEL_URL;

    const [ariaCollection, setAriaCollection] = useState(data || []);
    const [voiceFilter, setVoiceFilter] = useState("");
    const [fachFilter, setFachFilter] = useState("");
    const [styleFilter, setStyleFilter] = useState("");
    const [composerFilter, setComposerFilter] = useState("");
    const [languageFilter, setLanguageFilter] = useState("");

    // * simple debug logger; logs every time ariaCollection changes
    useEffect(() => {
        console.log({ ariaCollection });
    }, [ariaCollection]);

    // should happen with onClick
    const updateArias = React.useCallback(
        
        function (event) {
            event.preventDefault();

            // * define async function for getting data and saving it to the state
            async function _getArias() {
                // * get query string for the current filter state
                // * qs.stringify returns a properly formatted query string for the request
                const query = qs.stringify({
                    voiceFilter,
                    fachFilter,
                    styleFilter,
                    composerFilter,
                    languageFilter,
                });
                const baseUrl = process.env.VERCEL_URL;
                const response = await fetch(`https://myarias.vercel.app/api/daily?${query}`);
                const data = await response.json();

                // * save data in state
                setAriaCollection(data);
            }

            // * call async function
            _getArias();
        },
        // * dependencies of the function above
        [voiceFilter, fachFilter, styleFilter, composerFilter, languageFilter]
    );

    const handleChangeVoice = React.useCallback(
        (event) => {
            setVoiceFilter(event.target.value);
        },
        [setVoiceFilter]
    );

    const handleChangeFach = React.useCallback(
        (event) => {
            setFachFilter(event.target.value);
        },
        [setFachFilter]
    );

    const handleChangeStyle = React.useCallback(
        (event) => {
            setStyleFilter(event.target.value);
        },
        [setStyleFilter]
    );

    const handleChangeComposer = React.useCallback(
        (event) => {
            setComposerFilter(event.target.value);
        },
        [setComposerFilter]
    );

    const handleChangeLanguage = React.useCallback(
        (event) => {
            setLanguageFilter(event.target.value);
        },
        [setLanguageFilter]
    );
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            My Arias 
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <Card>
            <div className="flex text-center">
                <div className="w-full m-4">
                    <div className="w-full m-4">
                        <div className="p-4">
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-native-simple">Voice</InputLabel>
                                    <Select
                                        native
                                        onChange={handleChangeVoice}
                                        inputProps={{
                                        name: 'voice',
                                        id: 'voice-native-simple',
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value="Soprano">Soprano</option>
                                        <option value="Tenor">Tenor</option>
                                        <option value="Mezzo">Mezzo</option>
                                        <option value="Baritone">Baritone</option>
                                        <option value="Bass">Bass</option>
                                    </Select>
                                    <FormHelperText>Optional</FormHelperText>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="language-native-simple">Language</InputLabel>
                                    <Select
                                        native
                                        onChange={handleChangeLanguage}
                                        inputProps={{
                                        name: 'language',
                                        id: 'language-native-simple',
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value="Italian">Italian</option>
                                        <option value="German">German</option>
                                        <option value="French">French</option>
                                        <option value="English">English</option>
                                        <option value="Russian">Russian</option>
                                    </Select>
                                    <FormHelperText>Optional</FormHelperText>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="fach-native-simple">Fach</InputLabel>
                                    <Select
                                        native
                                        onChange={handleChangeFach}
                                        inputProps={{
                                        name: 'fach',
                                        id: 'fach-native-simple',
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value="Lyric">Lyric</option>
                                        <option value="Full Lyric">Full Lyric</option>
                                        <option value="Lyric Coloratura">Lyric Coloratura</option>
                                        <option value="Dramatic">Dramatic</option>
                                        <option value="Dramatic Coloratura">Dramatic Coloratura</option>
                                        <option value="Contralto">Contralto</option>
                                        <option value="Spinto">Spinto</option>
                                        <option value="Soubrette">Soubrette</option>
                                        <option value="Leggiero">Leggiero</option>
                                        <option value="Bass-Baritone">Bass-Baritone</option>
                                        <option value="Buffo">Buffo</option>
                                    </Select>
                                    <FormHelperText>Optional</FormHelperText>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="style-native-simple">Style</InputLabel>
                                    <Select
                                        native
                                        onChange={handleChangeStyle}
                                        inputProps={{
                                        name: 'style',
                                        id: 'style-native-simple',
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value="Verismo">Verismo</option>
                                        <option value="Bel Canto">Bel Canto</option>
                                        <option value="Classical">Classical</option>
                                        <option value="Singspiel">Singspiel</option>
                                        <option value="20th-Century American">20th Century American</option>
                                        <option value="20th-Century English">20th Century English</option>
                                        <option value="20th-Century Italian">20th Century Italian</option>
                                        <option value="20th-Century German">20th Century German</option>
                                        <option value="French Romantic">French Romantic</option>
                                        <option value="Italian Romantic">Italian Romantic</option>
                                        <option value="German Romantic">German Romantic</option>
                                        <option value="Russian Romantic">German Romantic</option>
                                        <option value="Italian Baroque">Italian Baroque</option>
                                        <option value="Viennese Operetta">Viennese Operetta</option>
                                        <option value="French Operetta">French Operetta</option>
                                        <option value="Czech Nationalistic">Czech Nationalistic</option>
                                        <option value="Russian Nationalistic">Russian Nationalistic</option>
                                    </Select>
                                    <FormHelperText>Optional</FormHelperText>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="composer-native-simple">Composer</InputLabel>
                                    <Select
                                        native
                                        onChange={handleChangeComposer}
                                        inputProps={{
                                        name: 'composer',
                                        id: 'composer-native-simple',
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value="Mozart">Mozart</option>
                                        <option value="Puccini">Puccini</option>
                                        <option value="Verdi">Verdi</option>
                                        <option value="Wagner">Wagner</option>
                                        <option value="Adamo">Adamo</option>
                                        <option value="Barber">Barber</option>
                                        <option value="Bernstein">Bernstein</option>
                                        <option value="Bolcom">Bolcom</option>
                                        <option value="Saint-Saës">Saint-Saës</option>
                                        <option value="Beethoven">Beethoven</option>
                                        <option value="Beeson">Beeson</option>
                                        <option value="Bellini">Bellini</option>
                                        <option value="Berlioz">Berlioz</option>
                                        <option value="Bizet">Bizet</option>
                                        <option value="Blitzstein">Blitzstein</option>
                                        <option value="Cavalli">Cavalli</option>
                                        <option value="Cilea">Cilea</option>
                                        <option value="Catalani">Catalani</option>
                                        <option value="Corigliano">Corigliano</option>
                                        <option value="Delibes">Delibes</option>
                                        <option value="Donizetti">Donizetti</option>
                                        <option value="Flotow">Flotow</option>
                                        <option value="Giordano">Giordano</option>
                                        <option value="Gluck">Gluck</option>
                                        <option value="Halévy">Halévy</option>
                                        <option value="Handel">Handel</option>
                                        <option value="Hoiby">Hoiby</option>
                                        <option value="Humperdinck">Humperdinck</option>
                                        <option value="Korngold">Korngold</option>
                                        <option value="J Strauss">Strauss, Johann</option>
                                        <option value="R Strauss">Strauss, Richard</option>
                                        <option value="Lehár">Lehár</option>
                                        <option value="Leoncavallo">Leoncavallo</option>
                                        <option value="Mascagni">Mascagni</option>
                                        <option value="Massenet">Massenet</option>
                                        <option value="Mechem">Mechem</option>
                                        <option value="Meyerbeer">Meyerbeer</option>
                                        <option value="Menotti">Menotti</option>
                                        <option value="Moore">Moore</option>
                                        <option value="Monteverdi">Monteverdi</option>
                                        <option value="Musorgsky">Musorgsky</option>
                                        <option value="Nicolai">Nicolai</option>
                                        <option value="Offenbach">Offenbach</option>
                                        <option value="Lalo">Lalo</option>
                                        <option value="Previn">Previn</option>
                                        <option value="Penhorwood">Penhorwood</option>
                                        <option value="Purcell">Purcell</option>
                                        <option value="Rossini">Rossini</option>
                                        <option value="Sheng">Sheng</option>
                                        <option value="Smetana">Smetana</option>
                                        <option value="Sondheim">Sondheim</option>
                                        <option value="Schuman">Schuman, William</option>
                                        <option value="Stravinsky">Stravinsky</option>
                                        <option value="Tippett">Tippett</option>
                                        <option value="Thomas">Thomas</option>
                                        <option value="Thomson">Thomson</option>
                                        <option value="Tchaikovsky">Tchaikovsky</option>
                                        <option value="Weber">Weber</option>
                                        <option value="Weill">Weill</option>
                                        <option value="Ward">Ward</option>
                                    </Select>
                                    <FormHelperText>Optional</FormHelperText>
                            </FormControl>
                        </div>
                                <br></br>
                                <Button variant="contained" color="primary"
                                    
                                    onClick={updateArias}
                                >
                                    Find My Arias
                                </Button>
                    </div>
                </div>
            </div>
            </Card>
            <div className="flex text-center">
                <div className="w-full m-4">
                    <Grid container align="center" justify="center" spacing={2}>
                        <AriaItems ariaCollection={ariaCollection} />
                    </Grid>
                </div>
            </div>
        </div>
    );
};

// * loads unfiltered arias on initial page load

const baseUrl = process.env.VERCEL_URL;
Home.getInitialProps = async () => {
    

    //for local dev
    //const baseUrl = 'localhost:3000'
    //http://localhost:3000
    //const res = await fetch(`http://${baseUrl}/api/daily`);

    //for production
    const baseUrl = process.env.VERCEL_URL;
    const res = await fetch(`https://${baseUrl}/api/daily`);
    const json = await res.json();
    return { data: json };
};


export default Home;
