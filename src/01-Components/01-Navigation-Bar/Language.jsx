import React from "react";
import "./NavigationBar";
import { BsFillCaretDownFill } from "react-icons/Bs";
import { MdLanguage } from "react-icons/Md";

const languageData = [
  { title: "english" },
  { title: "espanol - espana (spanish - spain)" },
  { title: "francais (french)" },
  { title: "italiano (italian" },
  { title: "deutsch (german)" },
  { title: "Greek (Ελληνικά)" },
  { title: "Korean (한국어)" },
  { title: "portugues (portuguese)" },
  { title: "polski (polish)" },
  { title: "dansk (danish)" },
  { title: "nederlands (dutch)" },
  { title: "svenka (swedish)" },
  { title: "cestina (czech)" },
  { title: "romana (romanian)" },
  { title: "magyar (hungarian)" },
  { title: "turkce (turkish)" },
  { title: "georgia (georgian)" },
  { title: "megruli (margaluri)" },
  { title: "aztecian (aztecky)" },
];

function Language() {
  const [langs, setLangs] = React.useState(false);
  return (
    <div className="icon">
      <MdLanguage />
      <h4
        onMouseEnter={() => {
          setLangs(true);
        }}
        onMouseLeave={() => {
          setLangs(false);
        }}
      >
        select language
        {langs && <Langs />}
      </h4>
      <BsFillCaretDownFill />
    </div>
  );
}

function Langs() {
  return (
    <div className="lang">
      {languageData.map((lang, index) => {
        return (
          <div key={index}>
            <p>{lang.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Language;
