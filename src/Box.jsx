import Pattern from "./assets/img/pattern-divider-desktop.svg";
import PatternMobile from "./assets/img/pattern-divider-mobile.svg";
import Icon from "./assets/img/icon-dice.svg";

const Box = ({ qoutes, onclick }) => {
  return (
    <div className="p-6 relative justify-center mt-60 w-4/5 bg-darkGrayishBlue mx-auto flex flex-col items-center rounded-xl  md:w-2/6">
      <div>
        <h3 className="text-neonGreen text-center tracking-wide mb-3">
          A D V I C E #{qoutes?.id}
        </h3>
        <p className="text-center text-2xl text-bold text-lightCyan ">
          "{qoutes?.advice}"
        </p>
      </div>
      <img src={Pattern} alt="pattern" className="mt-2 hidden md:flex " />
      <img src={PatternMobile} alt="pattern " className="mt-2 flex md:hidden" />
      <div className="rounded-full p-5 mt-5 -mb-14 bg-neonGreen diceIcon">
        <img onClick={onclick} src={Icon} alt="icon" />
      </div>
    </div>
  );
};

export default Box;
