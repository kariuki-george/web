import React from "react";
import useClassNames from "../../../hooks/useClassNames";
import GridCheckbox from "../../atoms/GridSelectCard";

import type { GridSelectCardProps } from "../../atoms/GridSelectCard";
import type { Answer } from "../../../types/shared/quiz";

export interface GridSelectInputConfigProps {
  /**
   * Options for the grid checkboxes
   */
  options?: Array<GridSelectCardProps>;
  /**
   * Number of columns for desktop view (2-4)
   */
  columns?:number;
}

export interface GridSelectGroupProps extends GridSelectInputConfigProps {
  /**
   * Additional classes to be added to the container
   */
  containerClassName?: string;
  /**
   * Input value
   */
  value: Answer;
  /**
   * Is the select group a multiple choice one?
   */
  isMultipleChoice?: boolean;
  /**
   * Function that handles change of input
   */
  onChange: (newAnswer: string) => void;
}

const GridSelectGroup: React.FC<GridSelectGroupProps> = ({
  options,
  columns,
  containerClassName,
  value,
  isMultipleChoice,
  onChange,
}) => {
  const classes = useClassNames(
    "flex flex-col items-center gap-y-4",
    "lg:grid lg:gap-6",
    containerClassName,
    {
      "lg:grid-cols-[repeat(2,220px)]": columns === 2,
      "lg:grid-cols-[repeat(3,220px)]": columns === 3,
      "lg:grid-cols-[repeat(4,220px)]": columns === 4,
    }
  );

  return (
    <div className={classes}>
      {options?.map((option) => (
        <GridCheckbox
          key={`${option.id}-component`}
          onChange={() => onChange(option.id)}
          {...option}
          checked={true}
          type={isMultipleChoice ? "checkbox" : "radio"}
        />
      ))}
    </div>
  );
};

export default GridSelectGroup;
