import { ClipLoader } from "react-spinners";
import { Wrapper } from "./style";
import { colors } from "../../utils/constants";

const Loader = () => {
  return (
    <Wrapper>
      <ClipLoader size={100} color={colors.main} />
    </Wrapper>
  );
};

export default Loader;
