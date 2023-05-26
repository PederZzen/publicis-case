import { ClipLoader } from "react-spinners";
import { Wrapper } from "./style";
import { Colors } from "../../utils/constants";

const Loader = () => {
  return (
    <Wrapper>
      <ClipLoader size={100} color={Colors.main} />
    </Wrapper>
  );
};

export default Loader;
