import { Card } from "react-bootstrap";
import { ItemProduct } from "../../Types/productType";

const ProductCard: React.FC<ItemProduct> = ({ nombre, imagen, precio }) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>${precio}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;