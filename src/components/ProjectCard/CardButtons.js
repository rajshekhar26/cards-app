import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const CardButtons = ({ onEdit, onDelete, onCopy }) => {
  return (
    <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
      <Button
        sx={{ color: "inherit", textTransform: "inherit" }}
        onClick={onEdit}
      >
        Edit Card
      </Button>

      <Button
        sx={{ color: "inherit", textTransform: "inherit" }}
        onClick={onDelete}
      >
        Delete Card
      </Button>

      <Button
        sx={{ color: "inherit", textTransform: "inherit" }}
        onClick={onCopy}
      >
        Copy Card
      </Button>
    </CardActions>
  );
};

export default CardButtons;
