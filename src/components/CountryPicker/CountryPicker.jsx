import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountyPicker = ({ handleCountryChange }) => {

    const [ fetchedCountries, setFetchedCountries] = useState([]);

    useEffect( () => {
        const fetchApi = async () => {
            setFetchedCountries( await fetchCountries());
        }
        fetchApi() ;
    }, [setFetchedCountries]);

    return (
        <FormControl className={ styles.formcontrol }>
            <NativeSelect default="" onChange={ (e) => handleCountryChange(e.target.value)}>
                <option value = "" >Global</option>
                { fetchedCountries.map( (country, key) => <option key={key} value={country}>{country}</option>) }
            </NativeSelect>
        </FormControl>
    )
}

export default CountyPicker ;