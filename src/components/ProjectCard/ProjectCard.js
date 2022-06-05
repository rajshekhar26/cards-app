import { useState } from "react";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import CardButtons from "./CardButtons";
import CardTextFields from "./CardTextFields";
import {
  addCardAction,
  deleteCardAction,
  editCardAction,
} from "../../store/cards/actions";

const ProjectCard = ({ card }) => {
  const [editCard, setEditCard] = useState(false);
  const dispatch = useDispatch();

  const handleKeyDownCard = (evt) => {
    if (evt.key === "Enter") {
      setEditCard(false);
    }
  };

  const handleChangeCard = (evt, type) => {
    const value =
      type === "projectBudget" ? Number(evt.target.value) : evt.target.value;

    const changedCard = {
      ...card,
      [type]: value,
    };

    dispatch(editCardAction(changedCard));
  };

  const handleEditCard = () => {
    setEditCard(!editCard);
  };

  const handleDeleteCard = () => {
    dispatch(deleteCardAction(card.id));
  };

  const handleCopyCard = () => {
    const copiedCard = {
      ...card,
      id: Math.random(),
      cardName: `${card.cardName} Copy`,
    };

    dispatch(addCardAction(copiedCard));
  };

  return (
    <Card
      sx={{
        width: 370,
        backgroundColor: "#8cc1f7",
        borderRadius: "1em",
      }}
    >
      <CardTextFields
        card={card}
        editCard={editCard}
        onChange={handleChangeCard}
        onKeyDown={handleKeyDownCard}
      />

      <Divider
        sx={{
          opacity: 1,
          backgroundColor: "#92278f",
          borderBottomWidth: "0.2em",
        }}
      />

      <CardButtons
        onEdit={handleEditCard}
        onDelete={handleDeleteCard}
        onCopy={handleCopyCard}
      />
    </Card>
  );
};

export default ProjectCard;
