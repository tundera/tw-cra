/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { useParams } from "react-router-dom";

const textStyles = tw`text-purple-500`;
const hoverStyles = tw`hover:text-twin`;

const Topic = () => {
  const { topicId } = useParams<any>();

  return (
    <h3 tw="text-center underline text-4xl p-8" css={[textStyles, hoverStyles]}>
      Requested topic ID: {topicId}
    </h3>
  );
};

export default Topic;
