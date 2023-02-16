import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

type SingleWeaponProps = {
  weapon: number;
};

const NonInteractableWeapon = (props: SingleWeaponProps) => {
  const IMAGES = [
    "",
    "/rock.png",
    "/paper.png",
    "/scissors.png",
    "/spock.png",
    "/lizard.png",
  ];

  return (
    <Box my={4}>
      <Image
        src={IMAGES[props.weapon]}
        width={50}
        height={50}
        alt="weapon image"
      />
    </Box>
  );
};

export default NonInteractableWeapon;
