import { useEffect } from 'react';
import { useState } from 'react';
import {
  ConverterSection,
  ConverterInputSection,
  ConverterSelect,
} from './Converter.styled';

export const Converter = props => {
  const [usdInput, setUsdInput] = useState(0);
  const [eurInput, setEurInput] = useState(0);
  const [usdSelect, setUsdSelect] = useState('USD');
  const [eurSelect, setEurSelect] = useState('EUR');
  const [usd, setUsd] = useState('__,__');
  const [eur, setEur] = useState('__,__');
  const valueUSD = props.usd;
  const valueEUR = props.eur;

  useEffect(() => {
    if (usdSelect === 'USD') {
      setUsd(usdInput);
    }
    if (usdSelect === 'UAH') {
      setUsd((usdInput * valueUSD).toFixed(2));
    }
    if (usdSelect === 'EUR') {
      setUsd(((usdInput * valueEUR) / valueUSD).toFixed(2));
    }
    if (eurSelect === 'EUR') {
      setEur(eurInput);
    }
    if (eurSelect === 'UAH') {
      setEur((eurInput * valueEUR).toFixed(2));
    }
    if (eurSelect === 'USD') {
      setEur(((eurInput * valueUSD) / valueEUR).toFixed(2));
    }
  }, [usdInput, eurInput, usdSelect, eurSelect, valueEUR, valueUSD]);

  const changeInput = e => {
    if (e.target.name === 'USD') {
      setUsdInput(e.target.value);
    }
    if (e.target.name === 'EUR') {
      setEurInput(e.target.value);
    }
  };

  const changeSelect = e => {
    if (e.target.name === 'USD') {
      setUsdSelect(e.target.value);
    }
    if (e.target.name === 'EUR') {
      setEurSelect(e.target.value);
    }
  };

  return (
    <ConverterSection>
      <form>
        <ConverterInputSection>
          <input
            onChange={changeInput}
            type="number"
            name="USD"
            id="USD"
            value={usdInput}
            min="0"
          />
          <ConverterSelect
            name="USD"
            id="USD"
            onChange={changeSelect}
            value={usdSelect}
          >
            <option value="USD">USD</option>
            <option value="UAH">UAH</option>
            <option value="EUR">EUR</option>
          </ConverterSelect>
          <label htmlFor="USD">&#160; = {usd} USD</label>
        </ConverterInputSection>
        <ConverterInputSection>
          <input
            onChange={changeInput}
            type="number"
            name="EUR"
            id="EUR"
            value={eurInput}
            min="0"
          />
          <ConverterSelect
            name="EUR"
            id="EUR"
            onChange={changeSelect}
            value={eurSelect}
          >
            <option value="USD">USD</option>
            <option value="UAH">UAH</option>
            <option value="EUR">EUR</option>
          </ConverterSelect>
          <label htmlFor="EUR">&#160; = {eur} EUR</label>
        </ConverterInputSection>
      </form>
    </ConverterSection>
  );
};
