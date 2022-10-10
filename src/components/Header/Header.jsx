import { useEffect } from 'react';
import { useState } from 'react';
import { Converter } from '../Converter/Converter';
import {
  HeaderSection,
  HeaderTable,
  HeaderTableHead,
  HeaderTableBody,
  HeaderTittle,
} from './Header.styled';

const URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

export const Header = () => {
  const [courseUSD, setCourseUSD] = useState([]);
  const [courseEUR, setCourseEUR] = useState([]);

  useEffect(() => {
    fetch(`${URL}`)
      .then(response => response.json())
      .then(data => {
        setCourseUSD(data.find(d => d.cc === 'USD'));
        setCourseEUR(data.find(d => d.cc === 'EUR'));
      })
      .catch(error => console.log(error));
  }, []);

  return (
    courseUSD.length !== 0 &&
    courseEUR.length !== 0 && (
      <>
        <HeaderSection>
          <HeaderTittle>
            Exchange rate for {courseUSD.exchangedate}
          </HeaderTittle>
          <HeaderTable>
            <thead>
              <tr>
                <HeaderTableHead>1 {courseUSD.cc}</HeaderTableHead>
                <HeaderTableHead>1 {courseEUR.cc}</HeaderTableHead>
              </tr>
            </thead>
            <tbody>
              <tr>
                <HeaderTableBody>{courseUSD.rate} UAH</HeaderTableBody>
                <HeaderTableBody>{courseEUR.rate} UAH</HeaderTableBody>
              </tr>
            </tbody>
          </HeaderTable>
        </HeaderSection>
        <Converter usd={courseUSD.rate} eur={courseEUR.rate} />
      </>
    )
  );
};
