import React from 'react';
import '../css/qrpage.css';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { createSchemaValidationQr } from '../utils/validate';
import ButtonGetQrCode from './ButtonGetQrCode';
import { selectQrCode, setQrCodeUrl } from '../store/slice/appSlice';

const QrForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const validationSchema = createSchemaValidationQr(t);
  const qrCode = useSelector(selectQrCode);

  const handleGetQrCode = (values) => {
    const { text } = values;
    dispatch(setQrCodeUrl(text));
  };

  return (
    <Formik
      initialValues={{
        text: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleGetQrCode}
    >
      {({ errors, isValid }) => (
        <Form
          className="qrForm"
        >
          <img
            src={qrCode}
            className="qrImage"
            alt="QR_Code"
          />
          <Field
            className={cn('inputQr', { 'is-invalid': !isValid })}
            name="text"
            placeholder={t('qrPage.placeholder')}
          />
          {!isValid && <div className="er">{errors.text}</div>}
          <ButtonGetQrCode
            name={t('qrPage.createQrCode')}
            disabled={!isValid}
          />
        </Form>
      )}
    </Formik>
  );
};

export default QrForm;
