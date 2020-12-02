import React from "react";

import Image from "../../assets/unnamed.png";

import { Container } from "./styles";

interface LawyerCardProps {
  isReverse: boolean;
  isFirstChild?: boolean;
}

const LawyerCard: React.FC<LawyerCardProps> = ({ isReverse, isFirstChild }) => {
  return (
    <Container isFirstChild={isFirstChild} isReverse={isReverse}>
      <img src={Image} alt="eee" />
      <div>
        <strong>Dr. Julio Cesar Ferreira</strong>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales,
          erat et aliquet hendrerit, leo purus volutpat leo, a dapibus arcu
          metus in nisl. Duis ultrices nisi id est ornare dignissim. Morbi
          feugiat, sapien sit amet scelerisque ullamcorper, mi neque feugiat
          massa, quis luctus neque nunc eu eros. Morbi sollicitudin lorem
          vestibulum justo rhoncus, nec tincidunt enim elementum. Fusce faucibus
          urna non nulla aliquet, quis blandit ante lacinia. Sed nec justo nisi.
          Duis in nisi risus. In leo risus, rutrum sed odio sed, ornare iaculis
          nisi. Duis nisl ex, luctus ut imperdiet venenatis, imperdiet..
        </p>
      </div>
    </Container>
  );
};

export default LawyerCard;
