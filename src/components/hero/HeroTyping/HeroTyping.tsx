import * as React from "react";
import { useStyles } from "./HeroTyping.styles";

interface HeroTypingProps {
  prefix: string;
  texts: string[];
  wait: number;
}

export const HeroTyping: React.FC<HeroTypingProps> = (props) => {
  const classes = useStyles();
  const [wordIndex, setWordindex] = React.useState(0);
  const [text, setText] = React.useState("");
  const [deleting, setDeleting] = React.useState(false);
  const [typeSpeed, setTypeSpeed] = React.useState(props.wait);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const length = props.texts.length;
      const full = props.texts[wordIndex % length];
      setText(full.substring(0, text.length + (deleting ? -1 : +1)));
      if (!deleting && text === full) {
        setTypeSpeed(props.wait / 2);
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordindex(wordIndex + 1);
        setTypeSpeed(props.wait);
      }
    }, typeSpeed);
    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, props, typeSpeed]);

  return (
    <div className={classes.container}>
      <p className={classes.static}>{props.prefix}</p>
      <p className={classes.dinamic}>{text}</p>
    </div>
  );
};
