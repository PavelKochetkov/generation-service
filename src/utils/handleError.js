const handleError = (status, t) => {
  switch (status) {
    case 'PARSING_ERROR':
      return t('error.parserError');
    default:
      return t('error.unknownError');
  }
};

export default handleError;
