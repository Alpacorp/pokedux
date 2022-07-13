import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const PokemonCard = ({ name, img }) => {
  return (
    <Card
      title={name}
      cover={
        <img
          alt={name}
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description="The Ditto Pokémon can transform into anything it sees, including itself." />
    </Card>
  );
};

export default PokemonCard;
