import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IconButton } from "@mui/material";

type SingleWeaponProps = {
  num?: number;
  image: string;
  currentWeapon: number;
  setSelectedWeapon?: React.Dispatch<React.SetStateAction<number>>;
};
const SingleWeapon = ({
  image,
  currentWeapon,
  num,
  setSelectedWeapon,
}: SingleWeaponProps) => {
  useEffect(() => {
    if (currentWeapon === num) {
      setSelectedWeapon?.(num);
    }
    // eslint-disable-next-line
  }, [currentWeapon]);

  return (
    <IconButton
      onClick={() => {
        if (num) setSelectedWeapon?.(num);
      }}
      className={"singleWeapon"}
    >
      <Image src={image} alt="weapon image" width={50} height={50} />
    </IconButton>
  );
};

export default SingleWeapon;
