import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/direct-hit_1f3af.png";
import thumbsDown from "../assets/thumbs-down_1f44e.png";
import thumbsUp from "../assets/thumbs-up_1f44d.png";
import meh from "../assets/unamused-face_1f612.png";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3)
    return <Image src={thumbsDown} alt="not recommended" boxSize="25px" />;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
