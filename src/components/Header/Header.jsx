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
  const [courses, setCourses] = useState([]);
  const date = new Date()


  useEffect(() => {
    fetch(`${URL}`)
      .then(response => response.json())
      .then(data => {
        setCourses([
          data.find(d => d.cc === 'USD'),
          data.find(d => d.cc === 'EUR'),
        ]);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    courses.length !== 0 && (
      <>
        <HeaderSection>
          <HeaderTittle>Exchange rate for {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}</HeaderTittle>
          <HeaderTable>
            <thead>
              <tr>
                {courses.map(course => (
                  <HeaderTableHead key={course.r030}>
                    1 {course.cc}
                  </HeaderTableHead>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {courses.map(course => (
                  <HeaderTableBody key={course.r030}>
                    {course.rate} UAH
                  </HeaderTableBody>
                ))}
              </tr>
            </tbody>
          </HeaderTable>
        </HeaderSection>
        <Converter courses={courses} />
      </>
    )
  );
};
