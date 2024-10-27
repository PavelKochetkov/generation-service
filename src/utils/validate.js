import * as Yup from 'yup';

export const createSchemaValidationNumbers = (t) => {
  const schema = Yup.object().shape({
    min: Yup.number()
      .required(t('error.required'))
      .positive(t('error.positive'))
      .integer(t('error.integer'))
      .test('is-greater', t('error.isGreater'), function chek(value) {
        const { max } = this.parent;

        return value < max;
      }),
    max: Yup.number()
      .required(t('error.required'))
      .positive(t('error.positive'))
      .integer(t('error.integer')),
  });

  return schema;
};

export const createSchemaValidationQr = (t) => {
  const schema = Yup.object().shape({
    text: Yup.string()
      .required(t('error.required'))
      .min(1, t('error.min'))
      .test('non-single-zero', t('error.notSingleZero'), (value) => value !== '0'),
  });

  return schema;
};
