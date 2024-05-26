import React from "react";
import { motion } from "framer-motion";
import { MainContext } from "../context/Context";

const Menu = () => {
  const { isOpen } = React.useContext(MainContext);
  return (
    <div className="w-full fixed z-[999]">
      <div className="menu w-full p-3">
        <div>
          {isOpen ? (
            <>
              <motion.div
                initial={{ x: +200 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-secondary-1 text-center rounded-[12px] px-3 py-1 mb-3 cursor-pointer"
              >
                Create New Team
              </motion.div>
              <motion.div
                initial={{ x: +200 }}
                animate={{ x: 0 }}
                className="bg-secondary-1 text-center rounded-[12px] px-3 py-1 cursor-pointer"
              >
                Add New Employee to a Team
              </motion.div>
            </>
          ) : null}
        </div>
      </div>{" "}
    </div>
  );
};

export default Menu;
