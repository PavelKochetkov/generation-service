import React from 'react';
import '../css/numbersform.css';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { createSchemaValidationNumbers } from '../utils/validate';
import ButtonGetRandomNumber from './ButtonGetRandomNumber';
import {
  selectCurrentMaxNumber,
  selectCurrentMinNumber,
  selectResultNumber,
  generateNumber,
} from '../store/slice/appSlice';

const NumberForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const validationSchema = createSchemaValidationNumbers(t);
  const resultNumber = useSelector(selectResultNumber);
  const minNumber = useSelector(selectCurrentMinNumber);
  const maxNumber = useSelector(selectCurrentMaxNumber);

  const handleRandomNumber = (values) => {
    const { min, max } = values;
    dispatch(generateNumber({ minNumber: Number(min), maxNumber: Number(max) }));
  };

  return (
    <Formik
      initialValues={{
        min: minNumber,
        max: maxNumber,
      }}
      validationSchema={validationSchema}
      validateOnBlur={false}
      onSubmit={handleRandomNumber}
    >
      {({ errors, isValid }) => (
        <Form
          className="numbersform"
        >
          <div className="result">{resultNumber}</div>
          <ButtonGetRandomNumber
            name={t('numberPage.getRandomNumber')}
            disabled={!isValid}
          />
          <hr className="hr" />
          <div className="lenght">{t('numberPage.range')}</div>
          <div className="range">
            {t('numberPage.from')}
            <Field
              className={cn('min', { 'is-invalid': !isValid })}
              name="min"
            />
            {!isValid && <div className="er">{errors.min}</div>}
            {t('numberPage.to')}
            <Field
              className={cn('max', { 'is-invalid': !isValid })}
              name="max"
            />
            {!isValid && <div className="er">{errors.max}</div>}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NumberForm;
