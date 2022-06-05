import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const CardTextFields = ({ card, editCard, onChange, onKeyDown }) => {
  return (
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
            onChange={(evt) => onChange(evt, "cardName")}
            onKeyDown={onKeyDown}
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
            onChange={(evt) => onChange(evt, "projectBudget")}
            onKeyDown={onKeyDown}
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
            sx={{
              width: "11em",
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "#000",
              },
            }}
            disabled={!editCard}
            InputLabelProps={{
              shrink: true,
              style: { fontSize: 12 },
            }}
            InputProps={{ style: { fontSize: 12, height: "2.5em" } }}
            value={card?.projectEndDate}
            onChange={(evt) => onChange(evt, "projectEndDate")}
            onKeyDown={onKeyDown}
          />
        </Box>
      </Box>
    </CardContent>
  );
};

export default CardTextFields;
