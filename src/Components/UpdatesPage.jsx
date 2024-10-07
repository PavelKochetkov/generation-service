import React from 'react';
import '../css/UpdatesPage.css';

const UpdatesPage = (props) => {
  const {
    handle, handletwo, update, activetwo, active,
  } = props;

  return (
    <>
      <div className="updatesTitle">
        <button
          className="bt"
          type="button"
          onClick={handletwo}
        >
          {update.updatetwo.title}
        </button>
        <button
          className="bt"
          type="button"
          onClick={handle}
        >
          {update.updateone.title}
        </button>
      </div>
      <div className={activetwo ? 'updatesForm onactive' : 'updatesForm'}>
        <div className="change">
          <hr className="hrupdate" />
          <div className="titleUpdate">{update.updatetwo.change.numbers}</div>
          <div className="titleUpdate">{update.updatetwo.change.qr}</div>
          <hr className="hrupdate" />
        </div>
      </div>
      <div className={active ? 'updatesForm onactive' : 'updatesForm'}>
        <div className="change">
          <hr className="hrupdate" />
          <div className="titleUpdate">{update.updateone.change.changeOne.title}</div>
          <div className="changeOne">
            <div className="old">
              <img
                className="img"
                src={update.updateone.change.changeOne.old}
                alt={update.updateone.change.changeOne.alt}
              />
            </div>
            <img
              className="arrow"
              src={update.updateone.change.changeOne.arrow}
              alt={update.updateone.change.changeOne.alt}
            />
            <div className="new">
              <img
                className="img"
                src={update.updateone.change.changeOne.new}
                alt={update.updateone.change.changeOne.alt}
              />
            </div>
          </div>
          <div className="titleUpdate">{update.updateone.change.changeTwo.title}</div>
          <div className="changeTwo">
            <div className="desctop">
              <img
                src={update.updateone.change.changeTwo.desctop}
                alt={update.updateone.change.changeOne.alt}
              />
            </div>
            <div className="tablet">
              <img
                src={update.updateone.change.changeTwo.tablet}
                alt={update.updateone.change.changeOne.alt}
              />
            </div>
            <div className="mobile">
              <img
                src={update.updateone.change.changeTwo.mobile}
                alt={update.updateone.change.changeOne.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatesPage;
