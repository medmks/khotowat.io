import { IonButton, IonGrid, IonRow, IonCol, IonButtons } from "@ionic/react";
import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
type Troutes = {
  routes: string[];
  defaultIndex?: number;
  defaulthidden: string[];
  children: React.ReactNode;
};

export let ActiveTab: React.RefObject<HTMLIonButtonElement>;
export let Activelineref: React.RefObject<HTMLHRElement>;
const InPageNavigation = ({
  routes,
  defaultIndex = 0,
  defaulthidden,
  children,
}: Troutes) => {
  const [indexroute, setindexroute] = useState(defaultIndex);

  Activelineref = useRef<HTMLHRElement>(null);
  ActiveTab = useRef<HTMLIonButtonElement>(null);

  const Changepagestate = (btn: EventTarget, index: number) => {
    
    setindexroute(index);
  };
  useEffect(() => {
    if (ActiveTab.current && Activelineref.current) {
      Changepagestate(ActiveTab.current, defaultIndex);
    }
  }, [defaultIndex]);

  return (
    <>
      <div className="sticky-container">
        <IonGrid>
          <IonRow className="">
            <IonCol size="12">
              <IonButtons className="Buttons-container">
                {routes.map((route, i) => {
                  return (
                    <IonButton
                      key={i}
                      ref={defaultIndex === i ? ActiveTab : null}
                      onClick={(e) => Changepagestate(e.target, i)}
                      className={
                        indexroute === i ? "activeIonbtn " : "sort-btn"
                      }
                    >
                      {route}
                    </IonButton>
                  );
                })}
              </IonButtons>
            </IonCol>
          </IonRow>
        </IonGrid>
        <hr className=" absolute bottom-0  duration-300" ref={Activelineref} />
      </div>
      {Array.isArray(children) ? children[indexroute] : children}
    </>
  );
};
export default InPageNavigation;
