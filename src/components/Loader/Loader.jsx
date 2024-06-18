import { PropagateLoader } from "react-spinners";
import css from "../Loader/Loader.module.css";

export default function Loader({ loading }) {
  return (
    <>
      <div className={css.loader}>
        <PropagateLoader
          color="13a264"
          cssOverride={null}
          loading={loading}
          size={25}
          speedMultiplier={0.7}
        />
      </div>
    </>
  );
}
