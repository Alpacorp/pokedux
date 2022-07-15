import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const PokemonCard = ({ name, img, abilities }) => {
  return (
    <Card
      title={name}
      cover={<img alt={name} src={img} />}
      extra={<StarOutlined />}
    >
      {abilities.map((ability) => {
        return <Meta description={ability.ability.name} />;
      })}
    </Card>
  );
};

export default PokemonCard;
