import { parseISO, format } from 'date-fns'
import { splitClassesFromProps } from "@/logic/splitClassesFromProps";

const DateFormatter = ({ 
  dateString,
  ...props
}: { 
  dateString: string 
} & React.TimeHTMLAttributes<HTMLTimeElement>) => {
  let { classes, ...rest } = splitClassesFromProps(props);
  classes
  const date = parseISO(dateString)
  return <time 
            className={classes.join(" ")} 
            dateTime={dateString}
            {...rest}>
              {format(date, 'LLLL d, yyyy')}
          </time>
}

export default DateFormatter