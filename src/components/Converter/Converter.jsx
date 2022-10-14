import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ConverterSection,
  ConverterInputSection,
  ConverterSelect,
} from './Converter.styled';

export const Converter = props => {
  const courses = props.courses;

  const [firstInput, setFirstInput] = useState(0);
  const [secondInput, setSecondInput] = useState(0);
  const [firstInputSelect, setFirstInputSelect] = useState('UAH');
  const [secondInputSelect, setSecondInputSelect] = useState('UAH');

  useEffect(() => {
    if (firstInputSelect === 'UAH') {
      setSecondInput(
        Number(
          (
            firstInput *
            courses.find(course => course.cc === secondInputSelect)?.rate
          ).toFixed(2)
        ) || firstInput
      );
      return;
    }
    if (secondInputSelect === 'UAH') {
      setFirstInput(
        Number(
          (
            secondInput *
            courses.find(course => course.cc === firstInputSelect)?.rate
          ).toFixed(2)
        ) || secondInput
      );
      return;
    }
    if (firstInputSelect !== 'UAH') {
      setSecondInput(
        (
          (firstInput *
            courses.find(course => course.cc === firstInputSelect)?.rate) /
          courses.find(course => course.cc === secondInputSelect)?.rate
        ).toFixed(2)
      );
      return;
    }
    if (secondInputSelect !== 'UAH') {
      setFirstInput(
        (
          (secondInput *
            courses.find(course => course.cc === secondInputSelect)?.rate) /
          courses.find(course => course.cc === firstInputSelect)?.rate
        ).toFixed(2)
      );
      return;
    }
  }, [firstInput, secondInput, firstInputSelect, secondInputSelect]);
  const changeInput = e => {
    if (e.target.name === 'firstInput') {
      setFirstInput(e.target.value);
      return;
    }
    setSecondInput(e.target.value);
  };

  const changeSelect = e => {
    if (e.target.name === 'firstInput') {
      setFirstInputSelect(e.target.value);
      return;
    }
    setSecondInputSelect(e.target.value);
  };

  return (
    <ConverterSection>
      <form>
        <ConverterInputSection>
          <input
            onChange={changeInput}
            value={firstInput}
            type="number"
            name="firstInput"
            min="0"
          />
          <ConverterSelect
            defaultValue={firstInputSelect}
            name="firstInput"
            onChange={changeSelect}
          >
            {courses.map(course => (
              <option value={course.cc} key={course.r030}>
                {course.cc}
              </option>
            ))}
            <option value="UAH">UAH</option>
          </ConverterSelect>
        </ConverterInputSection>
        <ConverterInputSection>
          <input
            onChange={changeInput}
            value={secondInput}
            type="number"
            name="secondInput"
            min="0"
          />
          <ConverterSelect
            name="secondInput"
            onChange={changeSelect}
            defaultValue={secondInputSelect}
          >
            {courses.map(course => (
              <option value={course.cc} key={course.r030}>
                {course.cc}
              </option>
            ))}
            <option value="UAH">UAH</option>
          </ConverterSelect>
        </ConverterInputSection>
      </form>
    </ConverterSection>
  );
};

Converter.propTypes = {
  courses: PropTypes.array,
}