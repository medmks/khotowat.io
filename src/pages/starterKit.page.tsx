import React from "react";
import {
  IonPage,
  IonTitle,
  IonCardContent,
  IonCard,
  IonContent,
  IonCardTitle,
  IonText,
  IonCheckbox,
} from "@ionic/react";
import "./style/startercss.css";
import { testData } from "../data/messages";
import InPageNavigation from "../components/InpageNav.component";

export const StarterKitPage: React.FC = () => (
  <IonPage>
    <IonContent fullscreen>
      <IonTitle
        style={{
          fontSize: "30px",
          padding: "15px",
          fontWeight: "bold",
          marginLeft: "10px",
        }}
      >
        ملاحظات
      </IonTitle>
      <InPageNavigation
        routes={["الكل", "العمل", "التعليم"]}
        defaultIndex={0}
        defaulthidden={["kkk"]}
      >
        <div className="flex">
          {testData.map((note, index) => {
            return (
              <div key={index}>
                <NoteCard title={note.title} tasks={note.description} />
              </div>
              // <AnimationWrapper key={index} transition={{ duration: 1, delay: index * 0.1 }}>
              // </AnimationWrapper>
            );
          })}
        </div>

        <div>test</div>
      </InPageNavigation>
    </IonContent>
  </IonPage>
);

const NoteCard: React.FC<{ title: string; tasks: string[] }> = ({
  title,
  tasks,
}) => (
  <IonCard className="item">
    <IonCardContent className="CardContent">
      <IonCardTitle className="CardTitle">{title}</IonCardTitle>
      <div className="tasks-container">
        {tasks.map((task, index) => {
          return (
            <div className="task-section" key={index}>
              <IonCheckbox mode="ios" labelPlacement="end">
                {task}
              </IonCheckbox>
            </div>
          );
        })}
      </div>

      <IonText className="creaed-At">17 يونيو 2024</IonText>
    </IonCardContent>
  </IonCard>
);
