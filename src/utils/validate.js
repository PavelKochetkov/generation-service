import * as Yup from 'yup';

const createSchemaValidationNumbers = (t) => {
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

export default createSchemaValidationNumbers;
