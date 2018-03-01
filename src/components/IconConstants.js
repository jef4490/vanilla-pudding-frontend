import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const DeleteIconSvg = "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";
const InfoIconSvg = "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z";
const EditIconSvg = "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z";

export const DeleteIcon = props => (
  <SvgIcon {...props}>
    <path d={DeleteIconSvg} />
  </SvgIcon>
);

export const InfoIcon = props => (
  <SvgIcon {...props}>
    <path d={InfoIconSvg} />
  </SvgIcon>
);

export const EditIcon = props => (
  <SvgIcon {...props}>
    <path d={EditIconSvg} />
  </SvgIcon>
);
