import React from "react";
import {
  IonPage,
  IonTitle,
  IonCardContent,
  IonCard,
  IonContent,
  IonCardTitle,
  IonGrid,
  IonText,
  IonRow,
  IonCol,
  IonButton,
  IonButtons,
  IonCheckbox,
} from "@ionic/react";
import AnimationWrapper from "../common/animationWrapper";
import "./style/startercss.css";
import { testData } from "../data/messages";

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
        ملاحظاتي
      </IonTitle>
      <div className="sticky-container">
        <IonGrid>
          <IonRow className="">
            <IonCol size="12">
              <IonButtons className="Buttons-container">
                <IonButton className="sort-btn">الكل</IonButton>
                <IonButton className="sort-btn">قائمة المهام</IonButton>
                <IonButton className="sort-btn">عمل</IonButton>
                <IonButton className="sort-btn">اليومية</IonButton>
              </IonButtons>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
      <div className="flex">
     {
      testData.map((note, index) => {
            return(
              <AnimationWrapper key={index} transition={{ duration: 1, delay: index * 0.1 }}>
                  <NoteCard title={note.title} tasks={note.description} />
              </AnimationWrapper>
            )
        })
     }
      </div>
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
        {
          tasks.map((task, index) => {

            return (
              <AnimationWrapper
              key={index}
              transition={{ duration: 1, delay: index * 0.1 }}
              >
              <div className="task-section" key={index}>
                <IonCheckbox mode="ios" labelPlacement="end">
                  {task}
                </IonCheckbox>
              </div>
              </AnimationWrapper>
            )
  
          })
        }
      </div>

      <IonText className="creaed-At">ث,17 يونيو 2024</IonText>
    </IonCardContent>
  </IonCard>
);