/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { useParams } from "react-router-dom";

const textStyles = tw`text-twin`;
const hoverStyles = tw`hover:text-red-400`;

const Topic = () => {
  const { topicId } = useParams<any>();

  return (
    <h3 tw="text-left text-2xl p-8" css={[textStyles, hoverStyles]}>
      Topic ID: {topicId}
    </h3>
  );
};

export default Topic;
