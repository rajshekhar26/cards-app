import { useState } from "react";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {
  addCardAction,
  deleteCardAction,
  editCardAction,
} from "../../store/cards/actions";

const ProjectCard = ({ card }) => {
  console.log(card.projectEndDate)
  const date = new Date(card.projectEndDate).toLocaleDateString();
  const time = new Date(card.projectEndDate)
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
    .toLowerCase();

  const [editCard, setEditCard] = useState(false);
  const dispatch = useDispatch();

  const handleKeyDown = (evt) => {
    if (evt.key === "Enter") {
      setEditCard(false);
    }
  };

  const handleChange = (evt, type) => {
    const value =
      type === "projectBudget" ? Number(evt.target.value) : evt.target.value;

    console.log(evt.target.value, 'value')

    const changedCard = {
      ...card,
      [type]: value,
    };

    dispatch(editCardAction(changedCard));
  };

  const handleDeleteCard = () => {
    dispatch(deleteCardAction(card.id));
  };

  const handleCopyCard = () => {
    const newCard = {
      ...card,
      id: Math.random(),
      cardName: `${card.cardName} Copy`,
    };

    dispatch(addCardAction(newCard));
  };

  return (
    <Card
      sx={{
        width: 370,
        backgroundColor: "#8cc1f7",
        borderRadius: "1em",
      }}
    >
      <CardContent>
        <Box
          sx={{
            fontWeight: 500,
            mb: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "stretch",
            gap: "0.5em",
          }}
        >
          <Typography noWrap>Card Name: </Typography>
          {editCard ? (
            <TextField
              autoFocus
              sx={{
                flex: 1,
              }}
              id="cardName-input"
              value={card.cardName}
              onChange={(evt) => handleChange(evt, "cardName")}
              onKeyDown={handleKeyDown}
              variant="standard"
            />
          ) : (
            <Typography noWrap>{card?.cardName}</Typography>
          )}
        </Box>

        <Box
          sx={{
            fontWeight: 500,
            mb: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "stretch",
            gap: "0.5em",
          }}
        >
          <Typography noWrap>Project Budget: </Typography>
          {editCard ? (
            <TextField
              id="ProjectBudget-input"
              type="number"
              sx={{
                flex: 1,
              }}
              value={card.projectBudget}
              onChange={(evt) => handleChange(evt, "projectBudget")}
              onKeyDown={handleKeyDown}
              variant="standard"
            />
          ) : (
            <Typography noWrap>{card?.projectBudget}</Typography>
          )}
        </Box>

        <Box
          sx={{
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "stretch",
            gap: "0.5em",
          }}
        >
          <Typography noWrap>Project End Date: </Typography>
          <Box sx={{ backgroundColor: "#fff", padding: "0.4em" }}>
            <TextField
              id="projectEndDate-input"
              type="datetime-local"
              label="Closing"
              sx={{ width: "11em" }}
              disabled={!editCard}
              InputLabelProps={{
                shrink: true,
                style: { fontSize: 12 },
              }}
              InputProps={{ style: { fontSize: 12, height: "2.5em" } }}
              value={card?.projectEndDate}
              onChange={(evt) => handleChange(evt, "projectEndDate")}
              onKeyDown={handleKeyDown}
            />
          </Box>
        </Box>
      </CardContent>

      <Divider
        sx={{
          opacity: 1,
          backgroundColor: "#92278f",
          borderBottomWidth: "0.2em",
        }}
      />

      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          sx={{ color: "inherit", textTransform: "inherit" }}
          onClick={() => setEditCard(true)}
        >
          Edit Card
        </Button>
        <Button
          sx={{ color: "inherit", textTransform: "inherit" }}
          onClick={handleDeleteCard}
        >
          Delete Card
        </Button>
        <Button
          sx={{ color: "inherit", textTransform: "inherit" }}
          onClick={handleCopyCard}
        >
          Copy Card
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
