import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { useGutterBorderedGridStyles } from "@mui-treasury/styles/grid/gutterBordered";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";


const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    minWidth: 400,
    textAlign: "center",
    maxWidth: 500,
    margin: 30,
    zIndex: 10,
    
  },
  avatar: {
    width: 60,
    height: 60,
    margin: "auto",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: "0.875em",
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: "1px",
  },

  buttonErase: {
    display:'flex',
    
    
  },

  
}));

export const MyCard = React.memo(function MyCard({
  name,
  max,
  min,
  img,
  onClose,
}) {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: "rgba(0, 0, 0, 0.08)",
    height: "50%",
  });
  return (
    <Card src= {'../img/fondo-cards.jpg'} className={cx(styles.card, shadowStyles.root)}>
      <CardContent>
        
          <HighlightOffIcon onClick={onClose} className={styles.buttonErase} />
        

        <Avatar
          className={styles.avatar}
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="img not found"
        />
        <h3 className={styles.heading}>{name}</h3>
        <span className={styles.subheader}>Poland</span>
      </CardContent>
      <Divider light />
      <Box display={"flex"}>
        <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>Min:</p>
          <p className={styles.statValue}>{min}</p>
        </Box>
        <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>Max:</p>
          <p className={styles.statValue}>{max}</p>
        </Box>
      </Box>
    </Card>
  );
});

export default MyCard;
