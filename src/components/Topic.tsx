/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { useParams } from "react-router-dom";

const titleStyles = tw`text-green-500 text-2xl p-2`;

const Topic = () => {
  const { topicId } = useParams<any>();

  return <h3 css={titleStyles}>Requested topic ID: {topicId}</h3>;
};

export default Topic;
