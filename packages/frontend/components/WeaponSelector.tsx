import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleWeapon from "./SingleWeapon";

type CircleProps = {
  initialWeapon: number;
  setWeapon: React.Dispatch<React.SetStateAction<number>>;
};
const WeaponSelector = (props: CircleProps) => {
  const IMAGES = [
    "",
    "/rock.png",
    "/paper.png",
    "/scissors.png",
    "/spock.png",
    "/lizard.png",
  ];

  const [selectedWeapon, setSelectedWeapon] = useState<number>(
    props.initialWeapon
  );

  useEffect(() => {
    console.log("Changing weapon to", selectedWeapon, IMAGES[selectedWeapon]);
    props.setWeapon(selectedWeapon);
    // eslint-disable-next-line
  }, [selectedWeapon]);

  return (
    <div>
      <Box p={4} textAlign="center">
        {!!selectedWeapon ? (
          <SingleWeapon
            currentWeapon={selectedWeapon}
            image={IMAGES[selectedWeapon]}
          />
        ) : (
          <Box width={50} height={50} my={1} />
        )}
      </Box>
      <Box display="flex" justifyContent="space-between" my={2}>
        {IMAGES.map((image, index) => {
          if (index === 0) return;
          return (
            <SingleWeapon
              key={index}
              currentWeapon={selectedWeapon}
              setSelectedWeapon={setSelectedWeapon}
              num={index}
              image={image}
            />
          );
        })}
      </Box>
    </div>
  );
};

export default WeaponSelector;
