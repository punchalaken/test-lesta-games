import style from "./Loader.module.scss";

export const Loader = () => {
  return (
    <img
      src="/images/gif/loader.gif"
      alt="Загрузочный экран"
      className={`${style.Loader}`}
    />
  );
};
