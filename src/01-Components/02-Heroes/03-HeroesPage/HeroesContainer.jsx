import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import { useGlobalContext } from "./filterContext";
import { motion, AnimatePresence } from "framer-motion";

function HeroesContainer() {
  const { heroSearch, heroesList } = useGlobalContext();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <AnimatePresence>
      <section
        data-aos="fade-up"
        data-aos-duration="1800"
        className="heroes-display-container"
      >
        {heroesList
          .filter((hero) => {
            return hero.heroName.toLowerCase().includes(heroSearch);
          })
          .map((list) => {
            const { id, image, iconImage, heroName, path } = list;
            return (
              <motion.div
                key={id}
                className="heroes-display"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link to={path}>
                  <div className="hero-image-cont">
                    <img src={image} alt={heroName} />
                  </div>
                  <div className="hero-display-title">
                    <img src={iconImage} alt={heroName} />
                    <h1>{heroName}</h1>
                  </div>
                </Link>
              </motion.div>
            );
          })}
      </section>
    </AnimatePresence>
  );
}

export default HeroesContainer;
