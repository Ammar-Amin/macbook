import React from "react";
import useMacbookStore from "../store";
import clsx from "clsx";

const ProductVeiwer = () => {
  const { color, scale, setColor, setScale } = useMacbookStore();

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>

      <div className="controls">
        <p className="info"> MacbookPro 16" in Silver / Space Gray</p>

        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => setColor("#abd5bd")}
              className={clsx(
                "bg-neutral-300",
                color === "#abd5bd" && " active"
              )}
            ></div>
            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && " active"
              )}
            ></div>
          </div>

          <div className="size-control">
            <div>
              <p
                onClick={() => setScale(0.06)}
                className={clsx(
                  scale === 0.6
                    ? "bg-white text-black"
                    : "bg-transparent text-white"
                )}
              >
                14"
              </p>
            </div>

            <div>
              <p
                onClick={() => setScale(0.08)}
                className={clsx(
                  scale === 0.8
                    ? "bg-white text-black"
                    : "bg-transparent text-white"
                )}
              >
                16"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductVeiwer;
