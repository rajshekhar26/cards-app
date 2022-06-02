import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const ProjectCard = ({ card }) => {
  const date = new Date(card.projectEndDate).toLocaleDateString();
  const time = new Date(card.projectEndDate)
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
    .toLowerCase();

  return (
    <Card sx={{ width: 370, backgroundColor: "#8cc1f7", borderRadius: "1em" }}>
      <CardContent>
        <Typography sx={{ fontWeight: 500, mb: 2 }} noWrap>
          Card Name: {card?.cardName}
        </Typography>
        <Typography sx={{ fontWeight: 500, mb: 2 }} noWrap>
          Project Budget: {card?.projectBudget}
        </Typography>
        <Typography sx={{ fontWeight: 500, mb: 1 }} gutterBottom noWrap>
          Project End Date: {date}, {time}
        </Typography>
      </CardContent>

      <Divider
        sx={{
          opacity: 1,
          backgroundColor: "#92278f",
          borderBottomWidth: "0.2em",
        }}
      />

      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button sx={{ color: "inherit", textTransform: "inherit" }}>
          Edit Card
        </Button>
        <Button sx={{ color: "inherit", textTransform: "inherit" }}>
          Delete Card
        </Button>
        <Button sx={{ color: "inherit", textTransform: "inherit" }}>
          Copy Card
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
