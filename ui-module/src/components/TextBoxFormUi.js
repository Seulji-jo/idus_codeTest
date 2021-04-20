import { useEffect, useState } from 'react';

function TextBoxFormUi() {
  const [text, setText] = useState('');
  const [active, setActive] = useState(false);

  const handleTextbox = (e) => {
    setText(e.target.value);
    setActive(true);
  };
  useEffect(() => {
    if (text.length > 499) {
      setText(text.substring(0, 500));
    }
  }, [text]);
  const countChar = () => 500 - text.length;
  const handleSubmit = (e) => {
    e.preventDefault();
    setActive(false);
  };
  return (
    <main className="txt-field__form">
      <section className="txt-field">
        <form className="txt-field__change">
          <div
            className={active ? 'txt-field__form active' : 'txt-field__form'}
          >
            <textarea
              className="txtarea"
              cols={30}
              rows={10}
              placeholder="주문 요청사항을 입력해주세요."
              onChange={handleTextbox}
              value={text ? text : ''}
            />
            <em className="txt-field__char">{countChar()}</em>
          </div>
          {active ? (
            <button className="btn" onClick={handleSubmit}>
              Save
            </button>
          ) : null}
        </form>
      </section>
      <section className="txt-field">
        <form className="txt-field__disable">
          <div className={'txt-field__form'}>
            <textarea
              className="txtarea"
              cols={30}
              rows={10}
              placeholder="[비활성상태] 주문 요청사항을 입력해주세요."
              disabled
            />
            <em className="txt-field__char">500</em>
          </div>
        </form>
      </section>
      <section className="txt-field">
        <form className="txt-field__readOnly">
          <div className={'txt-field__form'}>
            <textarea
              className="txtarea"
              cols={30}
              rows={10}
              placeholder="[읽기전용] 주문 요청사항을 입력해주세요."
              readOnly
            />
            <em className="txt-field__char">500</em>
          </div>
        </form>
      </section>
    </main>
  );
}

export default TextBoxFormUi;
