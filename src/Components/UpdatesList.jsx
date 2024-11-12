import React from 'react';
import '../css/updateslist.css';
import { useTranslation } from 'react-i18next';
import getId from '../utils/generateId';
import Loading from './Loading';

const UpdatesList = (props) => {
  const { updateData, isLoading } = props;
  const { updates = [] } = updateData;
  const { t } = useTranslation();

  console.log(updates);
  return (
    <div className="updates-container">
      {isLoading && <Loading />}
      {updates.map((update) => (
        <div className="update" key={getId()}>
          <h2 className="updates-title">
            {t('updatePage.update')}
            {' '}
            {update.version}
            {' '}
            {t('updatePage.from')}
            {' '}
            {update.date}
          </h2>
          <div className="changes">
            {update.changes.map((change) => (
              <div className="change" key={getId()}>
                {change.title && <h4 className="">{change.title}</h4>}
                {change.images && (
                  <div className="images">
                    <img src={change.images.old} alt={change.images.alt} />
                    <img src={change.images.new} alt={change.images.alt} />
                  </div>
                )}
                {change.screenshots && (
                  <div className="screenshots">
                    <img src={change.screenshots.desktop} alt="Desktop view" />
                    <img src={change.screenshots.tablet} alt="Tablet view" />
                    <img src={change.screenshots.mobile} alt="Mobile view" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpdatesList;
